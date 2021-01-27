import React from "react";

function Search({searchTitle}) {

  function handleChange(event){
    searchTitle(event.target.value)
  }

  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" onChange={handleChange}/>
    </div>
  );
}

export default Search;
