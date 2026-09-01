import React from "react";
import { FiUploadCloud } from "react-icons/fi";

function Prescription() {

  return (
    <div className="inner-page">

      <div className="breadcrumb">
        Home / My Prescriptions
      </div>

      <div className="page-header">

        <h1>
          My Prescriptions
        </h1>

        <p>
          Upload and manage your prescriptions.
        </p>

      </div>

      <div className="upload-box">

        <FiUploadCloud />

        <h2>
          Upload Prescription
        </h2>

        <p>
          Upload your doctor's prescription here.
        </p>

        <button>
          Choose File
        </button>

      </div>

    </div>
  );
}

export default Prescription;