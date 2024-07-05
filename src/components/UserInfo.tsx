import Image from "next/image";
import React from "react";

import imgU1 from "@/assets/u1.png";
import dobIcon from "@/assets/BirthIcon.svg";
import fIcon from "@/assets/FemaleIcon.svg";
import mIcon from "@/assets/MaleIcon.svg";
import pIcon from "@/assets/PhoneIcon.svg";
import InIcon from "@/assets/InsuranceIcon.svg";
import downloadIcon from "@/assets/download.svg";

const labResults = [
  "Blood Tets",
  "CT Scans",
  "Radiology Reports",
  "X-Rays",
  "Urine Test",
];

const UserInfo = () => {
  return (
    <div className="right-box">
      <div className="user-info mb-8">
        <div className="img">
          <Image src={imgU1} alt="Ryan Johnson" height={200} width={200} />
          <p>Ryan Johnson</p>
        </div>
        <div className="user-profile py-8">
          <div>
            <Image src={dobIcon} alt="Date Of Birth" />
            <div>
              <p>Date Of Birth</p>
              <p>
                <strong>Aug 23, 1996</strong>
              </p>
            </div>
          </div>
          <div>
            <Image src={fIcon} alt="Gender" />
            <div>
              <p>Gender</p>
              <p>
                <strong>Female</strong>
              </p>
            </div>
          </div>
          <div>
            <Image src={pIcon} alt="Contact Info" />
            <div>
              <p>Contact Info.</p>
              <p>
                <strong>(415) 555-1234</strong>
              </p>
            </div>
          </div>
          <div>
            <Image src={InIcon} alt="Insurance Provider" />
            <div>
              <p>Insurance Provider</p>
              <p>
                <strong>Sunrise Health Assurance</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="show-btn">
          <button>Show All Information</button>
        </div>
      </div>

      <div className="lab-results">
        <div className="scroll-container">
          {labResults.map((result, index) => (
            <div key={index} className="flex justify-between content-center">
              <p>{result}</p>
              <Image src={downloadIcon} alt={result} height={20} width={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
