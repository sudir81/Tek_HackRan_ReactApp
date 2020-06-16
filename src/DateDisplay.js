import React from "react";

const DateDisplay = ({ date }) => {
  const mydate = new Date(date);

  return (
    <>
      <div>
        <label>Day: {mydate ? mydate.getDate().toString() : ""} </label>
      </div>
      <div>
        <label>Month: {mydate.getMonth()}</label>
      </div>
      <div>
        <label>Year: {mydate.getFullYear()}</label>
      </div>
    </>
  );
};

export default DateDisplay;
