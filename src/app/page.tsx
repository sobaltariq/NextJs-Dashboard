"use client";
import Image from "next/image";

import searchImg from "@/assets/search.svg";
import moreImg from "@/assets/more_horiz.svg";

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
import React, { useEffect, useState } from "react";

interface DiagnosisHistoryEntry {
  month: string;
  year: number;
  blood_pressure: {
    systolic: {
      value: number;
      levels: string;
    };
    diastolic: {
      value: number;
      levels: string;
    };
  };
  heart_rate: {
    value: number;
    levels: string;
  };
  respiratory_rate: {
    value: number;
    levels: string;
  };
  temperature: {
    value: number;
    levels: string;
  };
}

interface Diagnosis {
  name: string;
  description: string;
  status: string;
}

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryEntry[];
  diagnostic_list: Diagnosis[];
  lab_results: string[];
}

const Home: React.FC = () => {
  const [userData, setUserData] = useState<Patient[] | []>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [systolicData, setSystolicData] = useState<number[]>([]);
  const [diastolicData, setDiastolicData] = useState<number[]>([]);

  const [selectedEntry, setSelectedEntry] = useState<DiagnosisHistoryEntry>();

  const fetchData = async (): Promise<Patient[]> => {
    const response = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          Authorization: "Basic " + btoa("coalition:skills-test"),
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        setUserData(data);

        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (userData.length > 0) {
      const patient = userData[3];

      const newLabels = patient.diagnosis_history.map(
        (entry) => `${entry.month} ${entry.year}`
      );
      setLabels(newLabels);

      const newSystolicData = patient.diagnosis_history.map(
        (entry) => entry.blood_pressure.systolic.value
      );
      setSystolicData(newSystolicData);

      const newDiastolicData = patient.diagnosis_history.map(
        (entry) => entry.blood_pressure.diastolic.value
      );
      setDiastolicData(newDiastolicData);

      setSelectedEntry(patient.diagnosis_history[0]);
    }
  }, [userData]);

  useEffect(() => {
    console.log(selectedEntry);
  }, []);

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
            {userData.map((patient, index) => (
              <div
                key={index}
                className="inner-wrapper"
                data-is-active={
                  patient.name === "Jessica Taylor" ? true : false
                }
              >
                <div className="user">
                  <Image
                    src={patient?.profile_picture}
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
                  <p>{selectedEntry?.blood_pressure.systolic.value}</p>
                  <p>
                    <Image src={ArrowUp} alt="Higher than Average" />
                    <span>{selectedEntry?.blood_pressure.systolic.levels}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="dot-2"></span>Diastolic
                  </p>
                  <p>{selectedEntry?.blood_pressure.diastolic.value}</p>
                  <p>
                    <Image src={ArrowDown} alt="Lower than Average" />
                    <span>
                      {selectedEntry?.blood_pressure.diastolic.levels}
                    </span>
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
                  setSelectedEntry={setSelectedEntry}
                  userData={userData[3]}
                />
              </div>
            </div>

            <div className="health-data">
              <div>
                <Image src={RespiratoryImg} alt="Respiratory Rate" />
                <p>Respiratory Rate</p>
                <p>{selectedEntry?.respiratory_rate.value} bmp</p>
                <p>{selectedEntry?.respiratory_rate.levels}</p>
              </div>
              <div>
                <Image src={TemperatureImg} alt="Temperature" />
                <p>Temperature</p>
                <p>{selectedEntry?.temperature.value}° F</p>
                <p>{selectedEntry?.temperature.levels}</p>
              </div>
              <div>
                <Image src={HeartBPM} alt="Heart Rate" />
                <p>Heart Rate</p>
                <p>{selectedEntry?.heart_rate.value} bmp</p>
                <p>{selectedEntry?.heart_rate.levels}</p>
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
                {userData[3]?.diagnostic_list.map((diag, i) => {
                  return (
                    <li key={i} className="diagnosis-item">
                      <span>{diag.name}</span>
                      <span>{diag.description}</span>
                      <span>{diag.status}</span>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* right side */}

      <div className="right-box">
        <div className="user-info">
          <div className="img">
            {userData && userData[3]?.profile_picture && userData[3]?.name && (
              <Image
                src={userData[3]?.profile_picture}
                alt={userData[3]?.name}
                height={200}
                width={200}
                priority
              />
            )}
            <h2>{userData[3]?.name}</h2>
          </div>
          <div className="user-profile">
            <div>
              <Image src={dobIcon} alt="Date Of Birth" />
              <div>
                <p>Date Of Birth</p>
                <p>
                  <strong>{userData[3]?.date_of_birth}</strong>
                </p>
              </div>
            </div>
            <div>
              <Image src={fIcon} alt="Gender" />
              <div>
                <p>Gender</p>
                <p>
                  <strong>{userData[3]?.gender}</strong>
                </p>
              </div>
            </div>
            <div>
              <Image src={pIcon} alt="Contact Info" />
              <div>
                <p>Contact Info.</p>
                <p>
                  <strong>{userData[3]?.phone_number}</strong>
                </p>
              </div>
            </div>
            <div>
              <Image src={InIcon} alt="Insurance Provider" />
              <div>
                <p>Insurance Provider</p>
                <p>
                  <strong>{userData[3]?.insurance_type}</strong>
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
            {userData[3]?.lab_results.map((result, index) => (
              <div key={index} className="">
                <p>{result}</p>
                <Image src={downloadIcon} alt={result} height={20} width={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
