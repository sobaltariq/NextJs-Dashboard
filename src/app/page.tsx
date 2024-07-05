import MiddleContent from "@/components/MiddleContent";
import UserInfo from "@/components/UserInfo";
import Image from "next/image";

import searchImg from "@/assets/search.svg";
import moreImg from "@/assets/more_horiz.svg";

import imgU1 from "@/assets/u1.png";
import imgU2 from "@/assets/u2.png";
import imgU3 from "@/assets/u3.png";
import imgU4 from "@/assets/u4.png";
import imgU5 from "@/assets/u5.png";
import imgU6 from "@/assets/u6.png";
import imgU7 from "@/assets/u7.png";
import imgU8 from "@/assets/u8.png";
import imgU9 from "@/assets/u9.png";
import imgU10 from "@/assets/u10.png";
import imgU11 from "@/assets/u11.png";
import imgU12 from "@/assets/u12.png";
import imgU13 from "@/assets/u13.png";

import dobIcon from "@/assets/BirthIcon.svg";
import fIcon from "@/assets/FemaleIcon.svg";
import mIcon from "@/assets/MaleIcon.svg";
import pIcon from "@/assets/PhoneIcon.svg";
import InIcon from "@/assets/InsuranceIcon.svg";
import downloadIcon from "@/assets/download.svg";

const patientsList = [
  {
    name: "Ryan Johnson",
    gender: "Male",
    age: 38,
    img: imgU1,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Emily Williams",
    gender: "Female",
    age: 29,
    img: imgU2,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Michael Miller",
    gender: "Male",
    age: 34,
    img: imgU3,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Peter Johnson",
    gender: "Male",
    age: 45,
    img: imgU4,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "David Wilson",
    gender: "Male",
    age: 22,
    img: imgU5,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Jane Smith",
    gender: "Female",
    age: 55,
    img: imgU6,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Paul Lewis",
    gender: "Male",
    age: 60,
    img: imgU7,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Lucy Brown",
    gender: "Female",
    age: 28,
    img: imgU8,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "James Anderson",
    gender: "Male",
    age: 27,
    img: imgU9,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Emma Thomas",
    gender: "Female",
    age: 19,
    img: imgU10,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Sophia Martinez",
    gender: "Female",
    age: 49,
    img: imgU11,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Patricia Moore",
    gender: "Male",
    age: 43,
    img: imgU12,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
  {
    name: "Christopher Taylor",
    gender: "Male",
    age: 30,
    img: imgU13,
    dob: "August 23, 1996",
    con: "(415) 555-1234",
    econ: "(415) 555-1234",
    ins: "Sunrise Health Assurance",
  },
];

const labResults = [
  "Blood Tets",
  "CT Scans",
  "Radiology Reports",
  "X-Rays",
  "Urine Test",
];

export default function Home() {
  return (
    <div className="flex justify-between content-start gap-8">
      {/* left side */}
      <div className="patient-list left-box">
        <div>
          <div className="top flex justify-between pb-10">
            <h2>Patient</h2>
            <Image src={searchImg} alt="search" />
          </div>

          <div className="scroll-container">
            {patientsList.map((patient, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 px-5 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={patient.img}
                    alt={patient.name}
                    height={48}
                    width={48}
                  />
                  <div>
                    <p>{patient.name}</p>
                    <span>
                      {patient.gender}, {patient.age}
                    </span>
                  </div>
                </div>
                <Image src={moreImg} alt="more options" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* middle */}
      <MiddleContent />

      {/* right side */}
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
    </div>
  );
}
