import React from "react";

function Orders() {

  return (
    <div className="inner-page">

      <div className="breadcrumb">
        Home / My Orders
      </div>

      <div className="page-header">

        <h1>
          My Orders
        </h1>

        <p>
          View and track your medicine orders.
        </p>

      </div>

      <div className="empty-state">
        No orders found.
      </div>

    </div>
  );
}

export default Orders;