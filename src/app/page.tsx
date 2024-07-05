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

          <div>
            {patientsList.map((patient, index) => (
              <div
                key={index}
                className="flex justify-between items-center pb-4"
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
      <UserInfo />
    </div>
  );
}
