import React, { useState } from 'react'
import Calender from "./Calender";
import { MOCKEVENTS } from "./Calender/conts.jsx";

const Schedule = () => {
  const [events, setEvents] = useState(MOCKEVENTS);
  const addEvent = (date, color) => {
    const text = window.prompt("text");
    setEvents((prev) => [...prev, { date, title: text, color }]);
  };
  return (
    <div>
      <Calender
        startingDate={new Date()}
        eventsArr={events}
        addEvent={addEvent} />
    </div>
  )
}

export default Schedule
