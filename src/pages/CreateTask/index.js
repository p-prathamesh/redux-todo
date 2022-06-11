import NavBar from "../../components/Navbar";
import Input from "../../components/Input";
import AddButton from "../../components/AddButton";
import TimeInput from '../../components/TimeInput';
import CalendarImg from "../../assets/calendar.png"
import { useState } from "react";
import CalendarComponent from "../../components/Calendar";

function CreateTask() {

  const [selectedTime, setSelectedTime] = useState("now");

  const handleChange = (val) => {
    console.log(val);
  };

  const handleUpdate = () => {
    console.log("val");
  };

  const handleGetTime = (e) => {
    setSelectedTime(e)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-white">
          <NavBar userName="Mike" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-white">
          <Input fetchInput={handleChange} placeholder="Enter task name" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-8 text-white">
          <TimeInput getTime={handleGetTime} time={selectedTime}/>
        </div>
        <div className="col-3 text-white">
          <img src={CalendarImg} alt="Calendar" width={30} height={30} className="calendar" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 text-white">
        <CalendarComponent />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-white text-center">
          <AddButton addToStore={handleUpdate} />
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
