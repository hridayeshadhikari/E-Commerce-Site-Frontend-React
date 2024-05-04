import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-2  p-3">
        <p className="font-semibold">{`${address?.firstName} ${address?.lastName}`}</p>
        <p>
          {" "}
          {`${address?.street} ${address?.city} ${address?.state} ${address?.zipCode}`}
        </p>
        <div>
          {" "}
          <p className="font-semibold space-y-1">Phone Number</p>
          <p>+91 {address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
