import React from "react";

const Filter = ({list, filterName})=> {

    const newList = list.filter((item)=> item.fname.toLowerCase().includes(filterName.toLowerCase()))
    
    return(
      newList.map((item)=>{
        return(
          <div className={item.id}>
            <h4>First Name: {item.fname}</h4>
            <h4>Last Name: {item.lname}</h4>
            <p>Age: {item.age}</p>
            <p>Gender: {item.gender}</p>
            <p>Role: {item.role}</p>
          </div>
        )
      })
    )
  }

  export default Filter