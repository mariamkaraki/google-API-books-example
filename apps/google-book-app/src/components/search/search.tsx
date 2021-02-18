import React, { useState, FC} from "react";
// import { Navbar, Form ,FormControl ,Button} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles'; 
import Textfield from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import Button from '../button/button';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    alignContent: 'center'
  },
  textField: {
    padding: '24px',
    margin: 'normal'
  }
}));

interface SearchProps {
  defaultsearchVal: string;
  onSearchClick(string) : void;
}

const Search : FC<SearchProps> = ( props : SearchProps): JSX.Element  => {

    const classes = useStyles();

    const [inputuserText,setInputuserText]  = useState<string>(props.defaultsearchVal || "");
  
    const inputChangeHandler = (e) => {
        setInputuserText(e.target.value);
    }


  return (
      <div>
      
      <form className={classes.root} noValidate autoComplete="off">
          <Textfield  id="searchInput" className={classes.textField} placeholder="Search Library" 
          onChange={inputChangeHandler} onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); props.onSearchClick(inputuserText);
            }
          }}
          ></Textfield>
          <Button title="Search" variant="contained" color="primary" onClick={(e)=> {
            e.preventDefault(); 
            props.onSearchClick(inputuserText);
            }}/>
              
      </form>
    </div>
    );
    
}

export default Search;