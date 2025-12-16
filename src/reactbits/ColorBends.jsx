import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./../index.css";
import heroImg from "../assets/hero/junoon_hero.png";

const MAX_COLORS = 8;

const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

export default function ColorBends({
  className,
  style,
  rotation = -180,
  speed = 0.2,
  colors = [],
  transparent = true,
  autoRotate = -2,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 1,
  noise = 0.1,
  imageSrc = "heroImg",
  imageAlt = "Junoon",
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const rafRef = useRef(null);
  const materialRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const rotationRef = useRef(rotation);
  const autoRotateRef = useRef(autoRotate);
  const pointerTargetRef = useRef(new THREE.Vector2(0, 0));
  const pointerCurrentRef = useRef(new THREE.Vector2(0, 0));
  const pointerSmoothRef = useRef(8);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uColorsArray = Array.from(
      { length: MAX_COLORS },
      () => new THREE.Vector3(0, 0, 0)
    );
    const material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uRot: { value: new THREE.Vector2(1, 0) },
        uColorCount: { value: 0 },
        uColors: { value: uColorsArray },
        uTransparent: { value: transparent ? 1 : 0 },
        uScale: { value: scale },
        uFrequency: { value: frequency },
        uWarpStrength: { value: warpStrength },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: mouseInfluence },
        uParallax: { value: parallax },
        uNoise: { value: noise },
      },
      premultipliedAlpha: true,
      transparent: true,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: "high-performance",
      alpha: true,
    });
    rendererRef.current = renderer;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, transparent ? 0 : 1);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const clock = new THREE.Clock();

    const handleResize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      material.uniforms.uCanvas.value.set(w, h);
    };

    handleResize();

    if ("ResizeObserver" in window) {
      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
      resizeObserverRef.current = ro;
    } else {
      window.addEventListener("resize", handleResize);
    }

    const loop = () => {
      const dt = clock.getDelta();
      const elapsed = clock.elapsedTime;
      material.uniforms.uTime.value = elapsed;

      const deg = (rotationRef.current % 360) + autoRotateRef.current * elapsed;
      const rad = (deg * Math.PI) / 180;
      const c = Math.cos(rad);
      const s = Math.sin(rad);
      material.uniforms.uRot.value.set(c, s);

      const cur = pointerCurrentRef.current;
      const tgt = pointerTargetRef.current;
      const amt = Math.min(1, dt * pointerSmoothRef.current);
      cur.lerp(tgt, amt);
      material.uniforms.uPointer.value.copy(cur);
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      else window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (
        renderer.domElement &&
        renderer.domElement.parentElement === container
      ) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    frequency,
    mouseInfluence,
    noise,
    parallax,
    scale,
    speed,
    transparent,
    warpStrength,
  ]);

  useEffect(() => {
    const material = materialRef.current;
    const renderer = rendererRef.current;
    if (!material) return;

    rotationRef.current = rotation;
    autoRotateRef.current = autoRotate;
    material.uniforms.uSpeed.value = speed;
    material.uniforms.uScale.value = scale;
    material.uniforms.uFrequency.value = frequency;
    material.uniforms.uWarpStrength.value = warpStrength;
    material.uniforms.uMouseInfluence.value = mouseInfluence;
    material.uniforms.uParallax.value = parallax;
    material.uniforms.uNoise.value = noise;

    const toVec3 = (hex) => {
      const h = hex.replace("#", "").trim();
      const v =
        h.length === 3
          ? [
              parseInt(h[0] + h[0], 16),
              parseInt(h[1] + h[1], 16),
              parseInt(h[2] + h[2], 16),
            ]
          : [
              parseInt(h.slice(0, 2), 16),
              parseInt(h.slice(2, 4), 16),
              parseInt(h.slice(4, 6), 16),
            ];
      return new THREE.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
    };

    const arr = (colors || []).filter(Boolean).slice(0, MAX_COLORS).map(toVec3);
    for (let i = 0; i < MAX_COLORS; i++) {
      const vec = material.uniforms.uColors.value[i];
      if (i < arr.length) vec.copy(arr[i]);
      else vec.set(0, 0, 0);
    }
    material.uniforms.uColorCount.value = arr.length;

    material.uniforms.uTransparent.value = transparent ? 1 : 0;
    if (renderer) renderer.setClearColor(0x000000, transparent ? 0 : 1);
  }, [
    rotation,
    autoRotate,
    speed,
    scale,
    frequency,
    warpStrength,
    mouseInfluence,
    parallax,
    noise,
    colors,
    transparent,
  ]);

  useEffect(() => {
    const material = materialRef.current;
    const container = containerRef.current;
    if (!material || !container) return;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
      const y = -(((e.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
      pointerTargetRef.current.set(x, y);
    };

    container.addEventListener("pointermove", handlePointerMove);
    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full color-bends-container ${
        className || ""
      }`}
      style={style}
    >
{/* LEFT: 3D UMANG + JUNOON TEXT + BUTTON */}
<div
  className="
    pointer-events-auto
    absolute
    left-5
    top-[9.5rem]           /* 🔹 a bit more down on mobile (~120px) */
    sm:left-8
    md:left-16
    lg:left-24
    md:top-1/2
    md:-translate-y-1/2
    z-30
    max-w-md /* whole block ignores pointer... */
  "
>
  <div className="pointer-events-auto max-w-md space-y-4">
    {/* small label */}
    <p className="font-bold
    text-[18px] sm:text-sm md:text-base
    tracking-[0.35em]
    uppercase
    bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
    bg-clip-text text-transparent">
      UMANG&apos; 25 • Sports Fest
    </p>

    {/* main 3D heading */}
    <h1 className="relative inline-block group text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
      {/* 3D shadow layer */}
      <span
        className="
          absolute inset-0
          translate-x-[4px] translate-y-[4px]
          text-sky-400/40
          blur-sm
          group-hover:translate-x-[7px]
          group-hover:translate-y-[7px]
          transition-all duration-300
        "
      >
        JUNOON&nbsp;4.0
      </span>

      {/* main neon gradient text */}
      <span
        className="
          relative
          bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_22px_rgba(0,0,0,0.9)]
          group-hover:drop-shadow-[0_0_32px_rgba(255,0,150,0.9)]
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        JUNOON&nbsp;4.0
      </span>
    </h1>

    {/* subline */}
    <p className=" font-extrabold text-[1rem] sm:text-md md:text-base text-rose-800/80">
      The annual sports fest of Government Engineering College, Aurangabad —
      where energy, competition and team spirit collide in a 3D arena.
    </p>

    {/* 3D Join button */}
    <a
  href="/events"
  className="
    relative inline-flex items-center gap-2
    rounded-full
    bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
    px-5 py-2.5 sm:px-6 sm:py-3
    text-xs sm:text-sm font-semibold text-black
    shadow-[0_10px_25px_rgba(0,0,0,0.6)]
    transition-transform duration-200
    hover:-translate-y-[2px]
    active:translate-y-[2px] active:shadow-[0_4px_12px_rgba(0,0,0,0.7)]
    before:absolute before:-inset-[2px]
    before:rounded-full
    before:bg-gradient-to-r before:from-sky-300/40 before:via-transparent before:to-rose-400/60
    before:blur-lg before:-z-10 mt-3
  "
>
  <span className="text-black">Join&nbsp;Us</span>

  <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-black/80">
   
  </span>
</a>

  </div>
</div>


      {imageSrc && (
        <div
          className="
      absolute
      /* 📱 Mobile: bottom-right */
      bottom-6
      right-10
      

      /* 💻 From md and up: center-right */
      md:bottom-auto
      md:top-1/2
      md:-translate-y-1/2
      md:right-10
      lg:right-20

      rounded-[36px]
      p-[3px]
      bg-gradient-to-r from-white/60 via-transparent to-red-500/80
      shadow-[0_0_50px_rgba(0,0,0,0.4)]
      backdrop-blur-[3px]
      transition-all duration-300
      hover:scale-105
      hover:shadow-[0_0_80px_rgba(255,0,0,0.6)]
      z-20
    "
        >
          <img
  src={imageSrc}
  alt={imageAlt}
  className="
    block
    rounded-[28px]
    object-cover

    /* 📱 MOBILE – bigger */
    w-60 h-55

    /* 📱 SMALL */
    sm:w-64 sm:h-40

    /* 💻 MEDIUM */
    md:w-80 md:h-48

    /* 🖥 LARGE */
    lg:w-96 lg:h-56

    /* 🖥 XL */
    xl:w-[30rem] xl:h-[18rem]

    /* 🖥 2XL */
    2xl:w-[36rem] 2xl:h-[20rem]

    max-w-[88vw]      /* safety on very small screens */
    transition-transform duration-300
    hover:scale-110
  "
/>

        </div>
      )}
    </div>
  );
}
