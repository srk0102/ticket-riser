import React, {useState} from 'react'
import "./searchBar.css"

//Importing Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function SearchBar() {

  const [searchValue, setSearchValue] = useState("")

  const searchInput = (event) => {
    const value = event.target.value
    // setSearchValue(value)
    console.log(searchValue.length)
  }

  const search = () => {

  }

  return (
    <>
      <div className="searchBar d-flex flex-row justify-content-center border">
        <input className="searchInput form-control" placeholder="Enter some thing to search" onChange={(event) => searchInput(event)}/>
        <div className="search d-flex flex-row justify-content-center align-items-center border ps-3 px-3" onClick={search}>
          <FontAwesomeIcon icon={faSearch}/>
        </div>
      </div>
    </>
  )
}
