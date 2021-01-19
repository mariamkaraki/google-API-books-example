import React, { useState} from "react";
import { Navbar, Form ,FormControl ,Button} from 'react-bootstrap'; 

const Search = ({ defaultsearchVal , onSearchClick}  ) => {

    const [inputuserText,setInputuserText]  = useState(defaultsearchVal);
  
    const inputChangeHandler = (e) => {
        setInputuserText(e.target.value);
    }


  return (
      <>
      <Navbar variant="dark" className="bg-dark justify-content-between">
      <Navbar.Text>
        Search for:{inputuserText}
      </Navbar.Text>
      <Form inline>
        <FormControl 
        type="text" 
        placeholder="Search Library" 
        className=" mr-sm-2"
        value={inputuserText}
        onChange={inputChangeHandler}
         />
        <Button 
        onClick={(e)=> {e.preventDefault(); onSearchClick(inputuserText);}}
        type="submit">Search</Button>
      </Form>
      
    </Navbar>
      
    </>
    );
    
}

export default Search;