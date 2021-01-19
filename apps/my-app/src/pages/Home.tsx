import React , {  useState , useCallback} from 'react';
import axios from 'axios';
import Header from "../components/header";
import Search from "../components/search";
import BookList from "../components/bookList";
import { Alert } from 'react-bootstrap'; 
import '../app/app.css';
import styled from 'styled-components';

import { ReactComponent as Logo } from './app/logo.svg';
import star from './app/star.svg';



const App = () => {

  
  const logo = "https://www.google.com/intl/en_ALL/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  const [isloading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultsearchVal, setDefaultsearchVal] = useState('');
  const [apiKey, setApiKey] = useState("AIzaSyBurBIdD4xVEt-UahTr2inG7N0vT3rqIA0")  
  

 



  const searchResult = searchValue => {
    
    if(searchValue === defaultsearchVal || searchValue === '')
    return;

    
    
    setDefaultsearchVal(searchValue);
    setIsLoading(true);
    setErrorMessage(null);
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${apiKey}&maxResults=40`)
     .then(
          (jsonResponse) =>{
              setBooks(jsonResponse.data.items);
              setIsLoading(false);
          },
          (error) => { 
            setErrorMessage("An error occurred please try again");
            setIsLoading(false);
          }
          
        
      )
      .catch (
        (axiosError) =>{
          setErrorMessage(axiosError);
          setIsLoading(false);
        }
        
      )
    };
    
    

    
    return (
     <div className="App">
      <Header/>
      <Search defaultsearchVal={defaultsearchVal} onSearchClick={searchResult}/>
      
      <div className="books">
        {isloading && !errorMessage ? (
         <span>loading...</span>
         ) :errorMessage ? (
          <Alert variant="danger"> {errorMessage}</Alert>
        ) : (
          
          <div className="container"> 
            <div className="row"> 
              <div className="card-deck">
                <BookList  books={books} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default App;
