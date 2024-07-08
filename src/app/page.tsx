import MiddleContent from "@/components/MiddleContent";
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

import RespiratoryImg from "@/assets/respiratory rate.svg";
import TemperatureImg from "@/assets/temperature.svg";
import HeartBPM from "@/assets/HeartBPM.svg";
import MyChart from "@/components/MyChart";

import BPMoreImg from "@/assets/expand_more.svg";
import ArrowUp from "@/assets/ArrowUp.svg";
import ArrowDown from "@/assets/ArrowDown.svg";

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
  "Blood Tets",
  "CT Scans",
  "Radiology Reports",
  "X-Rays",
  "Urine Test",
];

const labels = [
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
  "Jan 2024",
  "Feb 2024",
  "Mar 2024",
];
const systolicData = [140, 125, 168, 129, 142, 175];
const diastolicData = [122, 72, 95, 72, 105, 78];

export default function Home() {
  return (
    <div className="main-content-box">
      {/* left side */}
      <div className="left-box">
        <div>
          <div className="top">
            <h2>Patient</h2>
            <Image src={searchImg} alt="search" />
          </div>

          <div className="users-list">
            {patientsList.map((patient, index) => (
              <div key={index} className="inner-wrapper">
                <div className="user">
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
      <div className="mid-box">
        <div className="inner-wrapper">
          <div className="diagnosis-history">
            <h2>Diagnosis History</h2>
            <div className="blood-pressure">
              <div className="data-set">
                <div>
                  <p>
                    <span className="dot-1"></span>Systolic
                  </p>
                  <p>160</p>
                  <p>
                    <Image src={ArrowUp} alt="Higher than Average" />
                    <span>Higher than Average</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="dot-2"></span>Diastolic
                  </p>
                  <p>78</p>
                  <p>
                    <Image src={ArrowDown} alt="Lower than Average" />
                    <span>Lower than Average</span>
                  </p>
                </div>
              </div>
              <div className="wrapper">
                <div className="headings">
                  <h3>Blood Pressure</h3>
                  <p>
                    <span>Last 6 months</span>
                    <Image src={BPMoreImg} alt="Blood Pressure" />
                  </p>
                </div>
                <MyChart
                  labels={labels}
                  systolicData={systolicData}
                  diastolicData={diastolicData}
                />
              </div>
            </div>
            <div className="health-data">
              <div>
                <Image src={RespiratoryImg} alt="Respiratory Rate" />
                <p>Respiratory Rate</p>
                <p>20 bmp</p>
                <p>Normal</p>
              </div>
              <div>
                <Image src={TemperatureImg} alt="Temperature" />
                <p>Temperature</p>
                <p>98.6°F</p>
                <p>Normal</p>
              </div>
              <div>
                <Image src={HeartBPM} alt="Heart Rate" />
                <p>Heart Rate</p>
                <p>98 bmp</p>
                <p>Lower than Average</p>
              </div>
            </div>
          </div>
          <div className="diagnosis-list">
            <h2>Diagnosis List</h2>
            <ul>
              <div>
                <li className="diagnosis-header">
                  <span>Problem/Diagnosis</span>
                  <span>Description</span>
                  <span>Status</span>
                </li>
              </div>
              <div className="scroll">
                <li className="diagnosis-item">
                  <span>Hypertension</span>
                  <span>Chronic high blood pressure</span>
                  <span>Under Observation</span>
                </li>
                <li className="diagnosis-item">
                  <span>Type 2 Diabetes</span>
                  <span>Insulin resistance and elevated blood sugar</span>
                  <span>Cured</span>
                </li>
                <li className="diagnosis-item">
                  <span>Asthma</span>
                  <span>Recurrent episodes of bronchial constriction</span>
                  <span>Inactive</span>
                </li>
                <li className="diagnosis-item">
                  <span>Hypertension</span>
                  <span>Chronic high blood pressure</span>
                  <span>Under Observation</span>
                </li>
                <li className="diagnosis-item">
                  <span>Type 2 Diabetes</span>
                  <span>Insulin resistance and elevated blood sugar</span>
                  <span>Cured</span>
                </li>
                <li className="diagnosis-item">
                  <span>Asthma</span>
                  <span>Recurrent episodes of bronchial constriction</span>
                  <span>Inactive</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* right side */}

      {/* <div className="right-box">
        <div className="user-info">
          <div className="img">
            <Image src={imgU1} alt="Ryan Johnson" height={200} width={200} />
            <h2>Ryan Johnson</h2>
          </div>
          <div className="user-profile">
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
          <div className="tests">
            {labResults.map((result, index) => (
              <div key={index} className="">
                <p>{result}</p>
                <Image src={downloadIcon} alt={result} height={20} width={20} />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <MiddleContent />
    </div>
  );
}
