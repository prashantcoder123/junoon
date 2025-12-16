import React from "react";
import { Link } from "react-router-dom";

const ScheduleButton = () => {
  return (
    <div className="flex justify-center pt-10">
      <Link
        to="/schedule"
        className="
          relative inline-flex items-center justify-center
          px-8 py-3 rounded-full
          text-sm font-bold tracking-wide uppercase
          text-black
          bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
          shadow-[0_12px_30px_rgba(0,0,0,0.7)]
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(236,72,153,0.9)]
        "
      >
        View Schedule
      </Link>
    </div>
  );
};

export default ScheduleButton;
