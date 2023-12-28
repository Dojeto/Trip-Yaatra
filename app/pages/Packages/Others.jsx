import React from "react";

const Others = () => {
  return (
    <div>
      <h1 className=" font-bold mt-5 mb-5 text-3xl">Other Info</h1>
      {/* Generalised for all trips don't change*/}
      <div>
        <h2 className="font-bold mt-5 mb-5 text-2xl">Must Carry</h2>
        <ul className="pl-7">
          <li>Valid Government Identification</li>
          <li>
            Suitable and comfortable clothing and additionally, toiletries for
            personal use.
          </li>
          <li>
            Sunscreen, lip balm, and high-quality UV protective sunglasses.
          </li>
          <li>
            Personal medications and any specific medication if necessary.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold mt-5 mb-5 text-2xl">Cancellation Policy</h2>
        <h3 className="font-bold mt-5 mb-5 text-xl">
          No refunds will be granted for the initial booking amount in case of
          cancellations. However:
        </h3>
        <ul className="pl-7">
          <li>
            Cancellations made 30 days before the trip's start date will incur a
            50% cancellation fee.
          </li>
          <li>
            Cancellations made 15-30 days before the trip's start date will
            incur a 75% cancellation fee.
          </li>
          <li>
            Cancellations within 0-15 days before the trip's start date will
            incur a 100% cancellation fee.
          </li>
          <li>
            In unforeseen circumstances such as adverse weather or government
            regulations leading to activity cancellations, every effort will be
            made to offer an alternative activity. However, refunds will not be
            provided in such cases.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Others;
