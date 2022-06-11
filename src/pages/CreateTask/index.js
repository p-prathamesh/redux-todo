import { useState } from "react";
import { useDispatch } from "react-redux";

import NavBar from "../../components/Navbar";
import Input from "../../components/Input";
import AddButton from "../../components/AddButton";
import TimeInput from '../../components/TimeInput';
import CalendarImg from "../../assets/calendar.png"
import CalendarComponent from "../../components/Calendar";
import { addTask } from "../../redux/tasksSlice";

function CreateTask() {

  const [selectedTime, setSelectedTime] = useState("now");
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (val) => {
    setTaskName(val)
  };

  const handleGetTime = (e) => {
    setSelectedTime(e)
  };

	const onSubmit = (event) => {
		if(taskName.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setTaskName("");
			return;
		}

		dispatch(
			addTask({
        id: Math.random().toString(16).slice(2),
				task: taskName
			})
		);

		setTaskName("");
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
          <Input fetchInput={handleChange} value={taskName} placeholder="Enter task name" />
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
          <AddButton addToStore={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
