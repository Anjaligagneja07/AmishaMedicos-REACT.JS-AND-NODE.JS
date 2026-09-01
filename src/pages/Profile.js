import React from "react";

function Profile() {

  return (
    <div className="inner-page">

      <div className="breadcrumb">
        Home / My Profile
      </div>

      <div className="page-header">
        <h1>My Profile</h1>
        <p>Manage your personal information.</p>
      </div>

      <div className="content-card">

        <h2>
          Profile Information
        </h2>

        <p>
          Name: User
        </p>

        <p>
          Email: user@example.com
        </p>

        <p>
          Mobile: +91 XXXXX XXXXX
        </p>

      </div>

    </div>
  );
}

export default Profile;