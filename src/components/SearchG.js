const Search = ({list, onChange})=> {

    return(
      <div>
        <label htmlFor='search'></label>
        <input type='text' onChange={onChange}></input>
      </div>
    )
  }

  export default Search