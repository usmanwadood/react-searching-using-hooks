//import logo from './logo.svg';
// import Filter from '../Searching/Filter'
// import Search from '../Searching/Search'
// import friends from './components/friends'
import './App.css';
import React from 'react';
import useSemiPersistantState from './components/useSemiPersistantState'
import friends from './components/friends'
import Filter from './components/FilterG'
import Search from './components/SearchG'

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

// const inputWithLabel = ({id, children, type, onChange }) => {


//   return(
//     <>
//     <label htmlFor={id} className={id}>{children}</label>
//     <input type={type} onChange = {onChange}></input>
//     </>
//   )

// }

export default App;
