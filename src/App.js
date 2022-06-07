//import logo from './logo.svg';
// import Filter from '../Searching/Filter'
// import Search from '../Searching/Search'
// import friends from './components/friends'
import './App.css';
import React from 'react';
import useSemiPersistantState from './components/useSemiPersistantState'
import friends from './components/friends'

const App = () => {

  const [state, setState] = useSemiPersistantState('search', '')

  const onChange = (event)=> {

    setState(event.target.value)
  }

  return (
    <>
    <h1>Seach Functionality Using React Hooks and Components</h1>
    <h3>By Usman Wadood</h3>
    <Search list = {friends} onChange = {onChange}/>
    <Filter list = {friends} filterName = {state} />
    </>
  )
}

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


const Search = ({list, onChange})=> {

  return(
    <div>
      <label htmlFor='search'></label>
      <input type='text' onChange={onChange}></input>
    </div>
  )
}

// const inputWithLabel = ({id, children, type, onChange }) => {


//   return(
//     <>
//     <label htmlFor={id} className={id}>{children}</label>
//     <input type={type} onChange = {onChange}></input>
//     </>
//   )

// }

export default App;