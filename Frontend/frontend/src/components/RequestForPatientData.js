import React, { useState, useEffect } from "react";

const RequestForPatientData = (props) => {
  const apiUrl = props.apiUrl;
  const identity = props.identity;
  const dummyRecords = [
    {
      medicalRecordId: "MA-1001",
      uploadedBy: "Doctor A",
       dateUploaded: "01/01/01",
      medicalRecordData:
        "Deserunt adipisicing labore ut incididunt.Exercitation eu nostrud ad cupidatat deserunt in excepteur sint proident laboris cupidatat.",
      consentTo: ["DoctorA"],
   },
     {
       medicalRecordId: "MA-1003",
       uploadedBy: "Doctor B",
       dateUploaded: "01/01/01",
       medicalRecordData:
         "Deserunt adipisicing labore ut incididunt.Exercitation eu nostrud ad cupidatat deserunt in excepteur sint proident laboris cupidatat.",
       consentTo: ["DoctorB", "DoctorA"],
     },
    {
       medicalRecordId: "MA-1004",
       uploadedBy: "Doctor B",
      dateUploaded: "01/01/01",
       medicalRecordData:
        "Exercitation eu nostrud ad cupidatat deserunt in excepteur sint proident laboris cupidatat.",
      consentTo: ["DoctorB", "DoctorA"],
   },
  ];

  const [loading, setLoading] = useState(false);
  const [patientID, setPatientId] = useState("");
  const [medicalRecordId, setMedicalRecordId] = useState("");

  useEffect(() => {}, [loading]);

  const requestPatientRecords = () => {
    console.log(apiUrl);
    fetch(
      `${apiUrl}get-medical-record/?name=${patientID}&recId=${medicalRecordId}&userId=${identity}`
    )
      .then((response) => response.json())
      .then((data) => {
        props.setPatientRecord(data.data);
        console.log(data.data);
        setLoading(false);
      });
     props.setPatientRecords(dummyRecords);
  };

  return (
    <div className="container">
      <form>
        <fieldset>
          <legend>Request Patient records by Id:</legend>
          <input
            type="string"
            placeholder="Patient Id"
            onChange={(event) => setPatientId(event.target.value)}
          ></input>
          <input
            type="string"
            placeholder="Medical Record Id"
            onChange={(event) => setMedicalRecordId(event.target.value)}
          ></input>
          <button type="button" onClick={requestPatientRecords}>
            Request
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default RequestForPatientData;
