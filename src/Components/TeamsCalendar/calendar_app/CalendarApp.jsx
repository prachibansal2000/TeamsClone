import React, { useState } from "react";
import moment from "moment";
import Calendar from "./calendar/Main";
import "./CalendarApp.css";

function Cal() {
  const [selectedDate, setSelectedDate] = useState(moment());
  return <Calendar value={selectedDate} onChange={setSelectedDate} />;
}
export default Cal;
