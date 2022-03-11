import React from 'react';
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import { GoogleInput} from "./GoogleInput"
import {GoogleButton} from "./GoogleButton";
import "./Search.css";
import { useState  } from 'react';
import {setTextstring } from '../features/textSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';






const Search = ({hideButtons=false}) => {
  
  const dispatch = useDispatch()
  const [input, setInput] =useState("")
  const history = useHistory();
  
  const search =(e) => {
  e.preventDefault()
  dispatch(setTextstring(input));
  history.push("/search")
  }



  return (
 <>
     <form className="search">
       <GoogleInput>
        <SearchIcon  className="search__inputIcon"/>
        <input value={input} onChange={e=>setInput(e.target.value)}/>
        <MicIcon/>
        </GoogleInput>
        <div className="search__buttons">
          <GoogleButton type="submit" onClick={search} className={hideButtons? "search__hideButtons" : ""}>Buscar con Google</GoogleButton>
          <GoogleButton className={hideButtons? "search__hideButtons" : ""}>Voy a tener suerte</GoogleButton>
        </div>
     </form>
 </>
  )
}

export default Search