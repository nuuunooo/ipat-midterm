import React, { useEffect, useState, } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import FreeTuitionImage from "./assets/FREETUITION.png";
import EaristLogo from "./assets/EaristLogo.png";

const CertificateOfRegistration = () => {
  const getEmployeeNumFromToken = () => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      const decoded = jwtDecode(token);
      return decoded.employeeNumber; // Get the employeeNumber
    }
    return null;
  };

  // Store the employeeNumber in a new variable
  const [COR, setCOR] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [student, setStudent] = useState({});
  const [fees, setFees] = useState({});

  const [uploadedSignature, setUploadedSignature] = useState(null);
  const [currentDate, setCurrentDate] = useState("");

  // Now filter after initializing the states
  const employeeNum = getEmployeeNumFromToken();

  //const filteredData = data.filter((item) => String(item.employeeID) === String(employeeNum));


  useEffect(() => {
    const fetchItems = async () => {
      /*try {
        const [personalinfoResponse, childrenResponse, vocationalResponse, collegeResponse] = await Promise.all([
          axios.get("http://localhost:5000/personalinfo/person_table"),
          axios.get("http://localhost:5000/childrenAPI/children_table"),
          axios.get("http://localhost:5000/vocationalinfo/vocational_table"),
          axios.get("http://localhost:5000/college/college_table"),
        ]);

        // Set original data
        setdata(personalinfoResponse.data);
        setdata2(childrenResponse.data);
        setdata3(vocationalResponse.data);
        setdata4(collegeResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }*/

      const [registrationResponse, studentResponse, subjectResponse, feesResponse] = await Promise.all([
        axios.get("http://localhost:5000/api/cor"),
        axios.get("http://localhost:5000/api/student_info"),
        axios.get("http://localhost:5000/api/subjects"),
        axios.get("http://localhost:5000/api/fees")
      ]);

      setCOR(registrationResponse.data.COR)
      setStudent(studentResponse.data.student)
      setSubjects(subjectResponse.data.subjects)
      setFees(feesResponse.data.fees)
    };  

    fetchItems();
  }, []);

  const handleSignatureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";

      const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
      setCurrentDate(formattedDate);
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    backgroundColor: "#f8f9fa",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    color: "Black",
    overflowY: "scroll",
  };

  const contentStyle = {
    color: "black",
    width: "100%",
    maxWidth: "800px",
    paddingBottom: "90px",
  };

  return (

    <div style={containerStyle}>
      <div style={contentStyle}>
        <div
          style={{
            border: "1px solid black",
            padding: "0.25in",
            width: "8in",
            marginBottom: "7%",
            height: "fit-content",
            position: "relative",
          }}
        >
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              fontFamily: "Arial, Helvetica, sans-serif",
              width: "8in",
              position: "relative",
              tableLayout: "fixed",
            }}
          >
            <tbody>
              <tr>
                <td colSpan={2} style={{ height: "0.1in", fontSize: "72.5%" }}>
                  <b>

                  </b>
                </td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
              </tr>
              <tr>
                <td colSpan={2} style={{ height: "0.1in", fontSize: "62.5%" }}>
                  <b>

                  </b>
                </td>
              </tr>
              <tr>

                <td colSpan={47} style={{ height: "0.5in", textAlign: "center" }}>
                  <table width="100%" style={{ borderCollapse: "collapse" }}>
                    <tbody>
                      <tr>
                       

                        <td style={{ width: "20%", textAlign: "center" }}>
                          <img src={EaristLogo} alt="Earist Logo" style={{marginLeft: "25px", width: "120px", height: "110px" }} />
                        </td>

                        {/* Center Column - School Information */}
                        <td style={{ width: "60%", textAlign: "center", lineHeight: "1" }}>
                          <div>Republic of the Philippines</div>
                          <b>Eulogio "Amang" Rodriguez</b><br />
                          <b>Institute of Science and Technology</b><br />
                          Nagtahan St. Sampaloc, Manila<br />
                          <br />
                          <br />
                          <b style={{ fontSize: "16px", }}>CERTIFICATE OF REGISTRATION</b>
                        </td>

                        {/* Right Column - 2x2 Picture */}
                        <td
                          colSpan={4}
                          rowSpan={6}
                          style={{
                            textAlign: "center",
                            position: "relative",
                            width: "3.5cm",
                            height: "4.5cm", // Ensuring 2x2 size
                          }}
                        >
                          <div
                            style={{
                              width: "3.8cm",
                              height: "3.8cm",
                              marginRight: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              position: "relative",
                            }}
                          >
                              <img
                                src={student.student_profile}
                                alt="Uploaded"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>

              </tr>
              <tr>
                <td colSpan={15} style={{ height: "0.3in", fontSize: "62.5%" }}>
                </td>
              </tr>
              
              <tr>
                <td colSpan={14} style={{ height: "0.1in", fontSize: "55%" }}>
                  <i>
                    <b style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: "black" }}>
                      Registration No:&nbsp;
                      <span style={{ color: "red" }}>
                        {COR.registration_number}
                      </span>
                    </b>
                  </i>
                </td>


                <td
                  colSpan={29}
                  style={{
                    height: "0.1in",
                    fontSize: "50%",
                    textAlign: "right",

                  }}
                >
                  <b style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: "black" }}>
                    Academic Year/Term : <span style={{ color: "red" }}>{COR.academic_year_term}</span>
                  </b>

                </td>
              </tr>
              <tr>
                <td
                  colSpan={47}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <b>
                    <i style={{
                      color: "black", fontFamily: 'Arial, sans-serif',
                      fontSize: '12px', textAlign: "center", display: "block"
                    }}>
                      STUDENT GENERAL INFORMATION
                    </i>
                  </b>
                </td>
              </tr>

              <tr>
                <td colSpan={6}>
                  <input
                    type="text"
                    defaultValue={"Student No:"}
                    style={{
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td colSpan={15}>
                  <input
                    type="text"
                    defaultValue={student.student_no}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td colSpan={6}>
                  <input
                    type="text"
                    defaultValue={"College:"}
                    style={{
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td colSpan={16}>
                  <input
                    type="text"
                    defaultValue={student.college}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={6}
                >
                  <input
                    type="text"
                    defaultValue={"Name:"}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={15}                  
                >
                  <input
                    type="text"
                    defaultValue={student.student_name}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={6}               
                >
                  <input
                    type="text"
                    defaultValue={"Program:"}
                    style={{
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      fontWeight: "Bold",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={16}      
                >
                  <input
                    type="text"
                    defaultValue={student.program}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={6}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"Gender :"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={15}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={student.gender}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={12}
                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    defaultValue={"Major:"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                >
                  <input
                    type="text"
                    defaultValue={"Curriculum:"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontWeight: "Bold",
                      border: "none",
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
  
                <td
                  colSpan={7}        
                >
                  <input
                    type="text"
                    defaultValue={student.curriculum}
                    style={{
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      textAlign: "left",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
 
              <tr>
                <td
                  colSpan={6}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"Age :"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={15}
                  style={{

                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    defaultValue={student.age}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={4}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"Year Level:"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={8}
                  style={{
                    fontSize: "50%",

                  }}
                >
                  <input
                    type="text"
                    defaultValue={student.year_level}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={12}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    value={`Scholarship/Discount : ${student.scholarship_discount}`}
                    readOnly
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={6}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"Email Address:"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={20}
                  style={{
                    fontSize: "50%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={student.email_address}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
              </tr>

              <tr>
                <td
                  colSpan={6}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  CODE
                </td>

                <td
                  colSpan={14}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SUBJECT TITLE
                </td>

                <td
                  colSpan={8}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",

                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  UNIT
                </td>

                <td
                  colSpan={4}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",

                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SECTION
                </td>

                <td
                  colSpan={6}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontSize: "12px",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SCHEDULE/<br/>ROOM

                </td>

                <td
                  colSpan={9}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",

                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  FACULTY
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Lec
                </td>

                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Lab
                </td>
                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Credit
                </td>
                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Tuition
                </td>
              </tr>
              {subjects.map((subject, index) => {  // change length for rows
                //const item = filteredData[index] || {};
                return (
                  <tr key={index}>
                    <td
                      colSpan={6}
                      style={{
                        height: "0.25in",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={subject.subject_code || "Null"}
                        style={{
                          color: "black",
                          width: "98%",
                          border: "none",
                          outline: "none",
                          background: "none",
                          textAlign: "center"
                        }}
                        readOnly
                      />
                    </td>
                    <td
                      colSpan={14}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={subject.subject_title || "Null"}
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          border: "none",
                          outline: "none",
                          background: "none"
                        }}
                        readOnly
                      />
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={subject.lec_units}
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          border: "none",
                          outline: "none",
                          background: "none"
                        }}
                        readOnly
                      />
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "62.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={subject.lab_units}
                        style={{
                          color: "black",
                          width: "98%",
                          border: "none",
                          outline: "none",
                          background: "none",
                          textAlign: "center",  
                        }}
                        readOnly
                      />
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={subject.credit_units}
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          border: "none",
                          outline: "none",
                          background: "none"
                        }}
                        readOnly
                      />
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={subject.tuition_units}
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          border: "none",
                          outline: "none",
                          background: "none"
                        }}
                        readOnly
                      />
                    </td>
                    <td
                      colSpan={4}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={subject.subject_section || "Null"}
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          fontSize: "0.45rem",
                          border: "none",
                          outline: "none",
                          background: "none"
                        }}
                        readOnly
                      />
                    </td>
                    <td
                      colSpan={6}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={subject.subject_schedule_room || "Null"}
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          fontSize: "0.55rem",
                          border: "none",
                          outline: "none",
                          background: "none"
                        }}
                        readOnly
                      />
                    </td>
                    <td
                      colSpan={9}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue={subject.subject_faculty}
                        style={{
                          color: "black",
                          width: "98%",
                          textAlign: "center",
                          fontSize: "0.55rem",
                          border: "none",
                          outline: "none",
                          background: "none"
                        }}
                        readOnly
                      />
                    </td>
                  </tr>
                );
              })}



              <tr>
                <td
                  colSpan={13}
                  style={{
                    height: "0.5in",
                    fontSize: "55%",
                    color: "black",
                    textAlign: "justify",
                    paddingLeft: "10px",
                  }}
                >
                  <b>
                    <i>Note: Subject marked with
                      "*" is Special Subject.
                    </i>
                  </b>
                </td>
                <td
                  colSpan={7}
                  style={{
                    fontSize: "55%",
                    color: "black",
                    textAlign: "right",
                  }}
                >
                  <b>Total Unit(s)</b>
                </td>
                  
                <td
                  colSpan={2}
                  style={{
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b>{COR.total_lec_units}</b>
                </td>
                <td
                  colSpan={2}
                  style={{
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b>{COR.total_lab_units}</b>

                </td>
                <td
                  colSpan={2}
                  style={{
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b>{COR.total_credit_units}</b>
                </td>
                <td
                  colSpan={2}
                  style={{
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                    <b>{COR.total_tuition}</b>
                </td> 

              </tr>
              <tr
                colSpan={12}
                style={{
                  color: "white",
                  height: "0.1in",
                  fontSize: "62.5%",
                  backgroundColor: "gray",
                  textAlign: "center",
                }}
              >
              </tr>

              <tr>
                <td
                  colSpan={22}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                    backgroundColor: "gray",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"A S S E S S E D  F E E S"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={8}
                  style={{
                    color: "white",
                    fontSize: "62.5%",
                    color: "black",
                    border: "1px 0px 1px 1px solid black",
                    textAlign: "center",
                  }}
                >
                </td>
              </tr>

              <tr>
                <td
                  colSpan={15}
                >
                  <input
                    type="text"
                    defaultValue={"Tuition (20 unit(s)) "}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.tuition}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={20}
                >
                  <input
                    type="text"
                    defaultValue={"RULES OF REFUND"}
                    style={{
                      textAlign: "center",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>

              </tr>
              <tr>
                <td
                  colSpan={15}
                >
                  <input
                    type="text"
                    defaultValue={"Athletic Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.athletic_fee}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={17}
                >

                  <input
                    type="text"
                    defaultValue={"1. Full refund of tuition fee - Before the start of classes"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '10px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              
              <tr>
                <td
                  colSpan={15}
                >
                  <input
                    type="text"
                    defaultValue={"Cultural Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.cultural_fee}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={21}
                >
                  <input
                    type="text"
                    defaultValue={"2. 80% refund of tuition fee - within 1 week from the start of classes"}
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '10px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={15}
                  
                >
                  <input
                    type="text"
                    defaultValue={"Developmental Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.development_fee}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
 
                <td
                  colSpan={17}                 
                >
                  <input
                    type="text"
                    defaultValue={"3. 50% refund - within 2 weeks from the start of classes."}
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '10px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              
              <tr>
                <td
                  colSpan={15}      
                >
                  <input
                    type="text"
                    defaultValue={"Guidance Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.guidance_fee}
                    style={{
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                
                <td
                  colSpan={15}
                >
                  <input
                    type="text"
                    defaultValue={"4. No refund - after the 2nd week of classes."}
                    style={{
                      textAlign: "left",
                      color: "black",
                      marginLeft: "40px",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '10px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              
              <tr>
                <td
                  colSpan={15}
                >
                  <input
                    type="text"
                    defaultValue={"Library Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.library_fee}
                    style={{
                      textAlign: "left",
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={15}                 
                >
                  <input
                    type="text"
                    defaultValue={"Medical and Dental Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
             
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.medical_dental_fee}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                
                <td
                  colSpan={25}   
                >
                  <input
                    type="text"
                    defaultValue={"PLEDGE UPON ADMISSION"}
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
       
              <tr>
                <td
                  colSpan={15}
                >
                  <input
                    type="text"
                    defaultValue={"Registration Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
 
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.registration_fee}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={22}
                  style={{

                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '10px',
                  }}
                >
                  <p style={{
                    marginLeft: '45px',
                    marginBottom: '1px'
                  }}>
                    "As a student of EARIST, I do solemnly promise that I will
                  </p>
                </td>


              </tr>
              <tr>
                <td
                  colSpan={15}
                  
                >
                  <input
                    type="text"
                    defaultValue={"Computer Fee"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{

                    fontSize: "62.5%",

                    borderRight: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.computer_fee}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={20}
                  style={{

                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '10px',
                  }}
                >
                  <p style={{
                    marginLeft: "30px"
                  }}>
                    comply with the rules and regulations of the Institution."
                  </p>
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={""}
                    style={{

                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={13}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",


                  }}
                >
                  <input
                    type="text"
                    defaultValue={""}
                    style={{

                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={""}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                >
                </td>

                <td
                  colSpan={13}
                >
                  <input
                    type="text"
                    defaultValue={"Total Assessment : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.total_assessment}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                >
                </td>
                <td
                  colSpan={13}
                >
                  <input
                    type="text"
                    defaultValue={"Less Financial Aid : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.less_financial_aid}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={13}
                  rowSpan={1}              
                >
                  <div
                    style={{
                      width: "50%",
                      height: "3.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      marginBottom: "50px",
                    }}
                  >
                    <img
                      src={student.student_signature}
                      alt="Signature"
                      style={{
                        maxWidth: "200%",
                        maxHeight: "200%",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                >
                </td>

                <td
                  colSpan={13}  
                >
                  <input
                    type="text"
                    defaultValue={"Net Assessed : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.net_assessed}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={25}
                >
                  <input
                    type="text"
                    defaultValue={"__________________________________________"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      textDecoration: "underline",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                >
                </td>

                <td
                  colSpan={13}
                >
                  <input
                    type="text"
                    defaultValue={"Credit Memo : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.credit_memo}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={25}
                >
                  <input
                    type="text"
                    defaultValue={"Student's Signature"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                >
                </td>
                
                <td
                  colSpan={13}
                >
                  <input
                    type="text"
                    defaultValue={"Total Discount : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                
                <td
                  colSpan={7}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.total_discount}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              
              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                >

                </td>
                <td
                  colSpan={13}
                  
                >
                  <input
                    type="text"
                    defaultValue={"Total Payment : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.total_payment}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{


                    marginRight: "20px",

                  }}
                >

                </td>
                <td
                  colSpan={13}
                  
                >
                  <input
                    type="text"
                    defaultValue={"Outstanding Balance : "}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                  style={{

                    fontSize: "62.5%",
                    marginRight: "20px",

                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.outstanding_balance}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={22}
                  style={{

                    fontSize: "62.5%",
                    border: "1px solid black",
                    backgroundColor: "gray",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"A S S E S S E D  F E E S"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"APPROVED BY : "}
                    style={{
                      color: "black",
                      textAlign: "left",
                      marginLeft: "20px",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
               
                <td
                  colSpan={13}
                  style={{
                    fontSize: "55%",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "3.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <img
                      src={student.registrar_signature}
                      alt="Signature"
                      style={{
                        maxWidth: "250%",
                        maxHeight: "250%",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  colSpan={8}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"1st Payment/Due"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                
                <td
                  colSpan={7}
                  style={{
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"2nd Payment/Due"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"3rd Payment/Due"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={25}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"__________________________________________"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      textDecoration: "underline",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={8}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.first_payment_due}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{

                    fontSize: "62.5%",
                    border: "1px solid black",

                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.second_payment_due}
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    border: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.third_payment_due}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
 
                <td
                  colSpan={25}
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"Registrar"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      fontWeight: "bold",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={12}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"Payment/Validation Date : "}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    height: "0.3in",
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={fees.payment_validation_date}
                    style={{
                      textDecoration: "underline",
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={12}
                  style={{                
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    defaultValue={"Official Receipt :"}
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                  }}
                >
                  <input
                    type="text"
                    value={`${fees.official_receipt}  _____`}
                    readOnly
                    style={{
                      color: "black",
                      textAlign: "center",
                      width: "98%",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td style={{ width: "20%", textAlign: "center" }}>
                  <img src={FreeTuitionImage} alt="EARIST MIS FEE" style={{ marginTop: "10px", width: "200px", height: "150px", marginLeft: "150px" }} />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={47}
                  style={{
                    height: "0.25in",
                    fontSize: "62.5%",
                    textAlign: "right",
                    textAlign: "right",
                    verticalAlign: "middle", // Centers vertically
                  }}
                >
                  <input
                    type="text"
                    defaultValue={currentDate}
                    readOnly
                    style={{
                      color: "black",
                      textAlign: "right", // Centers text inside the input
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
  
              <tr>
                <td
                  colSpan={47}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <b>
                    <i style={{ color: "black", textAlign: "center", display: "block" }}>
                      KEEP THIS CERTIFICATE. YOU WILL BE REQUIRED TO PRESENT THIS IN ALL YOUR DEALINGS WITH THE COLLEGE.
                    </i>
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default CertificateOfRegistration;