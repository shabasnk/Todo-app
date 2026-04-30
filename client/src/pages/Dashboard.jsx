import React from "react";
import "../assets/styles/dashboard.css";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";



function Dashboard() {
  return (
    <div>
      <div id="main-container">
        <div id="first-section">
          <h1 style={{ color: "#ADCFB1", marginBottom: "5px" }}>
            The Mindful Canvas
          </h1>
          <p style={{ color: "#A4ADAA", margin: "0" }}>
            Stay present. One task at a time.
          </p>
        </div>

        <div id="second-section">
          <p
            style={{
              color: "#414A47",
              paddingTop: "30px",
              paddingLeft: "30px",
              width: "500px",
            }}
          >
            What do you need to do?
          </p>
          <button id="secondSection-button">+ Add Task</button>
        </div>

        <div id="third-section">
          <div
            style={{
              borderRadius: "20px",
              width: "250px",
              padding: "10px",
              display: "flex",
              gap: "10px",
              backgroundColor: "#0F1413",
            }}
          >
            <button
              style={{
                borderRadius: "20px",
                width: "60px",
                height: "30px",
                color: "#A4ADAA",
                backgroundColor: "#0F1413",
              }}
            >
              All
            </button>
            <button
              style={{
                borderRadius: "20px",
                width: "60px",
                height: "30px",
                color: "#A4ADAA",
                backgroundColor: "#0F1413",
              }}
            >
              active
            </button>
            <button
              style={{
                borderRadius: "20px",
                width: "70px",
                height: "30px",
                color: "#A4ADAA",
                backgroundColor: "#0F1413",
              }}
            >
              completed
            </button>
          </div>
        </div>

        <div
          id="fourth-section"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "80px",
              }}
            >
              {
                <div style={{ paddingLeft: "30px", paddingBottom: "8px" }}>
                  {" "}
                  {<FaRegCircle size={30} color="#ADCFB1" />}
                </div>
              }
            </div>
            <div
              style={{
                width: "300px",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "10px",
                gap: "5px",
              }}
            >
              <h2 style={{ color: "#DEE7E4", width: "600px" }}>
                Review project proposal
              </h2>
              <p style={{ color: "#A4ADAA", width: "600px" }}>
                Go through the Q4 budget requirements and align with the design
                team.
              </p>
            </div>
          </div>

          {/*dllkdslkdsdslds*/}
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "80px",
              }}
            >
              {
                <div style={{ paddingLeft: "30px", paddingBottom: "8px" }}>
                  {" "}
                  {<FaRegCircle size={30} color="#ADCFB1" />}
                </div>
              }
            </div>
            <div
              style={{
                width: "300px",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "10px",
                gap: "5px",
              }}
            >
              <h2 style={{ color: "#DEE7E4", width: "600px" }}>
                Review project proposal
              </h2>
              <p style={{ color: "#A4ADAA", width: "600px" }}>
                Go through the Q4 budget requirements and align with the design
                team.
              </p>
            </div>
          </div>
        </div>


      {/* Fifth section */}
        <div id="fifth-section">

          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "80px",
              }}
            >
              {
                <div style={{ paddingLeft: "30px", paddingBottom: "8px" }}>
                  {" "}
                  {<FaCheckDouble   size={30} color="#414A47" backgroundColor="#FFFFFF" />}
                </div>
              }
            </div>
            <div
              style={{
                width: "300px",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "10px",
                gap: "5px",
              }}
            >
              {/* <h2 style={{ color: "#DEE7E4", width: "600px" }}>
                Morning meditation
              </h2> */}
              <p style={{ color: "#414A47", width: "600px" }}>
              RECENTLY COMPLETED
              </p>
            </div>
          </div>




          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "80px",
              }}
            >
              {
                <div style={{ paddingLeft: "30px", paddingBottom: "8px" }}>
                  {" "}
                  {<FaCircleCheck  size={30} color="#ADCFB1" backgroundColor="#FFFFFF" />}
                </div>
              }
            </div>
            <div
              style={{
                width: "300px",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "10px",
                gap: "5px",
              }}
            >
              <h2 style={{ color: "#DEE7E4", width: "600px" }}>
                Morning meditation
              </h2>
              <p style={{ color: "#A4ADAA", width: "600px" }}>
                Completed at 8:00 AM
              </p>
            </div>
          </div>
          {/*dllkdslkdsdslds*/}

          <div style={{ display: "flex" }}>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "80px",
              }}
            >
              {
                <div style={{ paddingLeft: "30px", paddingBottom: "8px" }}>
                  {" "}
                  {<FaCircleCheck  size={30} color="#ADCFB1" backgroundColor="#FFFFFF" />}
                </div>
              }
            </div>
            <div
              style={{
                width: "300px",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "10px",
                gap: "5px",
              }}
            >
              <h2 style={{ color: "#DEE7E4", width: "600px" }}>
                Update component library
              </h2>
              <p style={{ color: "#A4ADAA", width: "600px" }}>
                Completed yesterday
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Dashboard;
