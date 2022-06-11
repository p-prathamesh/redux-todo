import React from "react";
import AddComponent from "../../components/AddTask";
import ListView from "../../components/ListView";
import NavBar from "../../components/Navbar";
import Input from "../../components/Input";

function Home() {
  const array = [{
    id:1,
    name: "Replace color-adjust to print-color-adjust"
  }]

  const handleChange = (val) => {
    console.log(val)
  }
  const handleRemove = (val) => {
    console.log(val)
  }
  const handleComplete = (val) => {
    console.log(val)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-white">
            <NavBar userName="Mike" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-white">
            <Input fetchInput={handleChange} placeholder="Search task"/>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3 text-white" >
            {
              array.length ? 
              array.map(({id, name})=> {
                return (
                  <React.Fragment  key={id}>
                     <ListView pId={id}  taskName={name} updateToRemove={handleRemove} updateToComplete={handleComplete} />
                  </React.Fragment>
                )
              })
              : 
              <h6 className="no-content">No Task Added</h6>
            }
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-white mb-3">
            <AddComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
