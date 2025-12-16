// src/data/memoriesData.js
import heroImg from "../assets/hero/junoon_hero.png";
// use different images if you have them
import volleyballImg from "../assets/hero/junoon_hero.png";

//<<-------junoon3.0----------->>/////
//cricket image
import cricketImg from "../assets/hero/junoon_hero.png";
import Mantu from "../assets/junoon_3.0/cricket/mantun.jpg";
import Piyush from "../assets/junoon_3.0/cricket/piyushnew.jpg";
import Rustom from "../assets/junoon_3.0/cricket/rustom.jpeg";
import Gaytri from "../assets/junoon_3.0/cricket/gayatri.jpg";
//football image
import footballImg from "../assets/hero/junoon_hero.png";
import Shashi from "../assets/junoon_3.0/football/sashi.png";
import Pool from "../assets/junoon_3.0/football/pool.jpg";
import Bittu from "../assets/junoon_3.0/football/bittu.jpg";
//Volleyball image
import Rahul from "../assets/junoon_3.0/volleyball/rahul.jpg";
import Harish from "../assets/junoon_3.0/volleyball/harishnew.jpg";
import Veena from "../assets/junoon_3.0/volleyball/veenav.jpg";
//kabaddi image
import Sandy from "../assets/junoon_3.0/kabaddi/sandy.jpg";
import Sashi from "../assets/junoon_3.0/kabaddi/sashi.jpg";
import Muskan from "../assets/junoon_3.0/kabaddi/krimuskan.jpg";
import Hema from "../assets/junoon_3.0/kabaddi/hema.jpg";
//athletics image
import Abhay from "../assets/junoon_3.0/athletics/abhaynew.jpg";
import Karan from "../assets/junoon_3.0/athletics/karan.jpeg";
import Vishal from "../assets/junoon_3.0/athletics/vishal.jpg";
import Sachinn from "../assets/junoon_3.0/athletics/sachinnew.jpg";
import AbhishekAryan from "../assets/junoon_3.0/athletics/abhishekaryan.jpg";
import Neha from "../assets/junoon_3.0/athletics/neha.jpg";

//tug of war
import Sachin from "../assets/junoon_3.0/tugofwar/sachinsw.jpg";
import Neeraj from "../assets/junoon_3.0/tugofwar/neeraj.jpg";
import Amit from "../assets/junoon_3.0/tugofwar/amit.jpg";
import Aditi from "../assets/junoon_3.0/tugofwar/aditi.jpg";
//badminton
import Vineet from "../assets/junoon_3.0/badminton/vineetbadmin.jpg";
import AbhsihekKashyap from "../assets/junoon_3.0/badminton/abhishek.jpeg";
import AnshuKri from "../assets/junoon_3.0/badminton/anshu.jpg";

//tt
import ShubhamAa from "../assets/junoon_3.0/tt/shubham a.jpeg";
import Anup from "../assets/junoon_3.0/tt/anup.jpeg";
import Adityara from "../assets/junoon_3.0/tt/aaditytt.jpg";
import Anjali from "../assets/junoon_3.0/tt/anjali2.jpeg";
//carrom
import Shubhams from "../assets/junoon_3.0/carrom/shubham s.jpg";
import Sempi from "../assets/junoon_3.0/carrom/sempi.jpg";
import Vishnu from "../assets/junoon_3.0/carrom/vishnu.jpg";
//arm
import Rishav from "../assets/junoon_3.0/arm/rishavnew.jpg";
import AnshuBhatt from "../assets/junoon_3.0/arm/anshubhatt.jpg";
import Ranjan from "../assets/junoon_3.0/arm/ranjan.jpg";
import AdityaK from "../assets/junoon_3.0/arm/adityaarm.jpg";
import Pushpanjali from "../assets/junoon_3.0/arm/pushpanjali.jpg";
//esports
import Rk from "../assets/junoon_3.0/esports/rkraushan.jpg";
import Sonu from "../assets/junoon_3.0/esports/sonunew.jpg";


//<<-------junoon2.0>>///////
import A from "../assets/junoon_2.0/memories/1.jpg";
import B from "../assets/junoon_2.0/memories/2.jpeg";
import C from "../assets/junoon_2.0/memories/3.jpeg";
import D from "../assets/junoon_2.0/memories/4.jpeg";
import E from "../assets/junoon_2.0/memories/5.jpeg";
import F from "../assets/junoon_2.0/memories/6.jpeg";





//junoon2.0 end ..



//<<<<<<-------junoon1.0------.>>>>>>>>

import Sixth from "../assets/junoon_1.0/memories/6.jpeg";
import First from "../assets/junoon_1.0/memories/1st.jpeg";
import Second from "../assets/junoon_1.0/memories/2.jpeg";
import Third from "../assets/junoon_1.0/memories/3.jpeg";
import Forth from "../assets/junoon_1.0/memories/4.webp";
import Fifth from "../assets/junoon_1.0/memories/5.jpeg";
import Guddu from "../assets/junoon_1.0/guddu.jpeg";
import Anshu from "../assets/junoon_1.0/anshu.jpeg";
import Sandy23 from "../assets/junoon_1.0/sandy23.png";




//<<<<------junoon3.0----- section>>>>>>>//////
export const memories = [
  {
    id: "junoon-3-2024",
    year: "Junoon 3.0 • 2024",
    desc: "Night cricket finals, packed football stands, and the first ever e-sports tournament.",
    galleryImages: [cricketImg, footballImg, volleyballImg, heroImg], // top gallery

    sports: [
      {
        name: "Technical",
        image: cricketImg,
        coordinators: [
          { name: "Shubham Aarav", role: "Coordinator", image: ShubhamAa },
          { name: "Shubham Singh", role: " Coordinator", image: Shubhams },
          { name: "Sonu Kumar", role: "Coordinator", image: Sonu },
          { name: "Harish Kumar Gaurav", role: " Coordinator", image: Harish },
          { name: "Rahul Kumar Raushan", role: " Coordinator", image: Rk },
        ],
      },
      {
        name: "Cricket",
        image: cricketImg,
        coordinators: [
          { name: "Mantu Kumar", role: "Coordinator", image: Mantu },
          { name: "Piyush Kumar", role: " Coordinator", image: Piyush },
          { name: "Rustom Kumar", role: "Coordinator", image: Rustom },
          { name: "Gayatri Kumari", role: " Coordinator", image: Gaytri },
        ],
      },
      {
        name: "Football",
        image: footballImg,
        coordinators: [
          { name: "Shashikant Prasad", role: "Coordinator", image: Shashi },
          { name: "Pool Singh", role: "Coordinator", image: Pool },
          { name: "Bittu Kumar", role: "Coordinator", image: Bittu },
        ],
      },
      {
        name: "Volleyball",
        image: volleyballImg,
        coordinators: [
          { name: "Rahul Kumar", role: "Coordinator", image: Rahul },
          { name: "Harish Kumar Gaurav", role: "Coordinator", image: Harish },
          { name: "Veena Surbhi", role: "Coordinator", image: Veena },
        ],
      },

      {
        name: "Kabaddi",
        image: volleyballImg,
        coordinators: [
          { name: "Sandeep Kumar", role: "Coordinator", image: Sandy },
          { name: "Shashi Kumar Singh", role: "Coordinator", image: Sashi },
          { name: "Kumari Muskan", role: "Coordinator", image: Muskan },
          { name: "Hema Kumari", role: "Coordinator", image: Hema },
        ],
      },
      {
        name: "Athletics",
        image: volleyballImg,
        coordinators: [
          { name: "Abhay Kumar", role: "Volleyball Head", image: Abhay },
          { name: "Karan Kumar", role: "Coordinator", image: Karan },
          { name: "Vishal Kumar", role: "Score Table", image: Vishal },
          { name: "Sachin Kumar", role: "Line Judge", image: Sachinn },
          {
            name: "Abhishek Aryan",
            role: "Arrangements",
            image: AbhishekAryan,
          },
          { name: "Neha Sahani", role: "Arrangements", image: Neha },
        ],
      },
      {
        name: "Tug of War",
        image: volleyballImg,
        coordinators: [
          { name: "Sachin Kumar", role: "Coordinator", image: Sachin },
          { name: "Neeraj Kumar", role: "Coordinator", image: Neeraj },
          { name: "Amit Anand", role: "Coordinator", image: Amit },
          { name: "Aditi Kumari", role: "Coordinator", image: Aditi },
        ],
      },
      {
        name: "Badminton",
        image: volleyballImg,
        coordinators: [
          { name: "Vinit Kumar", role: "Coordinator", image: Vineet },
          {
            name: "Abhishek Kashyap",
            role: "Coordinator",
            image: AbhsihekKashyap,
          },
          { name: "Anshu Kumari ", role: "Coordinator", image: AnshuKri },
        ],
      },
      {
        name: "Table Tennis",
        image: volleyballImg,
        coordinators: [
          { name: "Shubham Aarav", role: "Coordinator", image: ShubhamAa },
          { name: "Anup Kumar", role: "Coordinator", image: Anup },
          { name: "Aditya Ranjan", role: "Coordinator", image: Adityara },
          { name: "Anjali Kumari", role: "Coordinator", image: Anjali },
        ],
      },
      {
        name: "Carrom",
        image: volleyballImg,
        coordinators: [
          { name: "Shubham Singh", role: "Coordinator", image: Shubhams },
          { name: "Sempi Kumari", role: "Coordinator", image: Sempi },
          { name: "Vishnukant Singh", role: "Coordinator", image: Vishnu },
        ],
      },
      {
        name: "Arm Wrestling ",
        image: volleyballImg,
        coordinators: [
          { name: "Rishav Kumar", role: "Coordinator", image: Rishav },
          { name: "Anshu Bhatt", role: "Coordinator", image: AnshuBhatt },
          { name: "Aditya Ranjan", role: "Coordinator", image: Adityara },
          { name: "Ranjan Kumar", role: "Coordinator", image: Ranjan },
          { name: "Aditya Kumar", role: "Coordinator", image: AdityaK },
          { name: "Pushpanjali Kumari", role: "Coordinator", image: Pushpanjali },
        ],
      },
      {
        name: "E-Sports ",
        image: volleyballImg,
        coordinators: [
          { name: "Rahul Kumar Raushan", role: "Coordinator", image: Rk },
          { name: "Sonu Kumar", role: "Coordinator", image: Sonu },
        ],
      },
    ],
  },

  //<<<<<<-----------junoon2.0 section-------->>>>>
  {
    id: "junoon-2-2023",
    year: "Junoon 2.0 • 2023",
    desc: "Volleyball rallies, badminton nail-biters and record participation from all branches.",
    galleryImages: [A,B,C,D,E,F],
    sports: [
     
      {
      
        coordinators: [
          { name: "Ankit Kumar", role: "Football Head", image: heroImg },
          { name: "Kumar Satyam", role: "Football Head", image: heroImg },
          { name: "Amar Jyoti", role: "Match Coordinator", image: heroImg },
          { name: "Damodar Kumar", role: "Referee Desk", image: heroImg },
          { name: "Rahul Kumar", role: "Football Head", image: heroImg },
          

        ],
      },
      
    ],
  },

//<<<<<-------junoon1.0 section ------->>>>>>

  {
    id: "junoon-1-2022",
    year: "Junoon  • 2022",
    desc: "The beginning of the legacy — first official sports fest of GEC Aurangabad.",
    galleryImages: [Sixth,First, Second, Third,Forth,Fifth],
    sports: [
      {
        coordinators: [
          { name: "Guddu Kumar", role: "Coordinator", image: Guddu },
          { name: "Anshu Kumar", role: "Coordinator", image: Anshu },
          { name: "Sandy", role: "Coordinator", image: Sandy23 },
          // { name: "Priya Gupta", role: "Umpire Desk", image: heroImg },
          // { name: "Aman Verma", role: "Logistics", image: heroImg },
        ],
      },
    ],
  },
];
