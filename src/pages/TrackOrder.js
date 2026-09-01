import React from "react";

function TrackOrder() {

  return (
    <div className="inner-page">

      <div className="breadcrumb">
        Home / Track Order
      </div>

      <div className="page-header">

        <h1>
          Track Your Order
        </h1>

        <p>
          Enter your order number to track your delivery.
        </p>

      </div>

      <div className="track-box">

        <input
          type="text"
          placeholder="Enter Order ID"
        />

        <button>
          Track Order
        </button>

      </div>

    </div>
  );
}

export default TrackOrder;