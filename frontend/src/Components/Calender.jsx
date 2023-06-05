import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Calender = ({ onDateChange }) => {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    // date = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
    onDateChange(date);
    setSelectedDate(date);
  };

  // Lista de días a deshabilitar (festivos o específicos)
  const diasDeshabilitados = [
    new Date(2023, 4, 3), // 3 de mayo de 2023
    // Agrega más días según tus necesidades
  ];

  const isDisabled = (date) => {
    const today = new Date();
    const isPastDate =
      date < new Date(today.getFullYear(), today.getMonth(), today.getDate());

    return (
      isPastDate ||
      isSunday(date) || // Deshabilitar domingos
      diasDeshabilitados.some((disabledDate) => {
        return (
          date.getDate() === disabledDate.getDate() &&
          date.getMonth() === disabledDate.getMonth() &&
          date.getFullYear() === disabledDate.getFullYear()
        );
      })
    );
  };

  const isSunday = (date) => {
    return date.getDay() === 0;
  };

  return (
    <>
      <div id='calender' className={`${selectedDate ? 'active' : ''}`}>
        <div>
          <Calendar onChange={handleDateChange} tileDisabled={({ date }) => isDisabled(date)} />
        </div>
      </div>
    </>
  );

}

export default Calender;
