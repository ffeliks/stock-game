import React, { useState } from 'react'

function Stocks() {
  const [date, setSelectedDate] = useState<Date>(getTodaysDate());

  function getTodaysDate(): Date {
    const date = new Date()
    date.setUTCHours(0, 0, 0, 0);

    return date;
  }

  function getFormattedDate(): string {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleString('en-us', options);
  }

  function getDayNumber(): number {
    const timeDiff = Math.abs(date.getTime() - getTodaysDate().getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  }

  function handleNextDayClick(): void {
    var newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + 1)

    return setSelectedDate(newDate);
  }

  return (
    <>
      {`Day ${getDayNumber()}`}  | {getFormattedDate()}
      <button onClick={handleNextDayClick}>Next day</button>
    </>
  )
}

export default Stocks
