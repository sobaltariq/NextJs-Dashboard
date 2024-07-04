import React from "react";

import imgLogo from "@/assets/TestLogo.png";
import img1 from "@/assets/n1.svg";
import img2 from "@/assets/n2.svg";
import img3 from "@/assets/n3.svg";
import img4 from "@/assets/n4.svg";
import img5 from "@/assets/n5.svg";
import img6 from "@/assets/drjose.png";
import img7 from "@/assets/sett.svg";
import img8 from "@/assets/more.svg";

import Image from "next/image";
interface NavItemsInterface {
  title: string;
  img: any;
}
const Header: React.FC = () => {
  const navItems: NavItemsInterface[] = [
    { title: "Overview", img: img1 },
    { title: "Patients", img: img2 },
    { title: "Schedule", img: img3 },
    { title: "Message", img: img4 },
    { title: "Transactions", img: img5 },
  ];

  return (
    <div className="max-page-width">
      <header className="">
        <div className="logo">
          <Image src={imgLogo} alt="Logo" />
        </div>
        <nav className="">
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className={`${item.title === "Patients" ? "active" : ""}`}
            >
              <Image src={item.img} alt={item.title} />
              <span>{item.title}</span>
            </a>
          ))}
        </nav>
        <div className="user">
          <Image src={img6} alt="Dr. Jose Simmons" height={44} width={44} />

          <div className="user-name">
            <p>Dr. Jose Simmons</p>
            <p>General Practitioner</p>
          </div>

          <Image src={img7} alt="" className="ml-4 mr-3 img" />
          <Image src={img8} alt="" className="img" />
        </div>
      </header>
    </div>
  );
};

export default Header;
