import React , {  useState , FC } from 'react';
import axios from 'axios';
import Book from "../type/bookType";

import Search from "../components/search/search";
import BookList from "../components/booklist/booklist";
import Error from "../components/error/error";
import '../app/app.css';
import styled from 'styled-components';





interface AppProps {
  isloading ? : boolean,
  errorMessage ?: string,
  apiKey ? : string,
  searchInputVal ? : string,
  Books ? : Book[]
}


const App: FC<AppProps> = ( props : AppProps): JSX.Element => {

  
  const DEFAULT_BOOK_IMAGE ="./assets/images/bookDefault.png";
  const logo = "https://www.google.com/intl/en_ALL/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  const [isloading, setIsLoading] = useState<boolean>(props.isloading || false);
  const [books, setBooks] = useState<Book[]>(props.Books || []);
  const [errorMessage, setErrorMessage] = useState<string>(props.errorMessage || null);
  const [defaultsearchVal, setDefaultsearchVal] = useState<string>(props.searchInputVal);
  const [apiKey, setApiKey] = useState<string>(props.apiKey || "AIzaSyBurBIdD4xVEt-UahTr2inG7N0vT3rqIA0")  
  





  const searchResult = searchValue => {
    
    if(searchValue === defaultsearchVal || searchValue === '')
    return;

    
    
    setDefaultsearchVal(searchValue);
    setIsLoading(true);
    setErrorMessage(null);
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${apiKey}&maxResults=40`)
     .then(
          (jsonResponse) =>{

            
            const newArray = jsonResponse.data.items.map((item , index ) => {
              
              return{
               authors: (item.volumeInfo.authors ? item.volumeInfo.authors : "No author"),
               title: item.volumeInfo.title,
               subtitle: item.volumeInfo.subtitle,
               description : (item.volumeInfo.description ? item.volumeInfo.description : "No description available"),
               publisher: item.volumeInfo.publisher,
               publishedDate: item.volumeInfo.publishedDate,
               imageLinks: (item.volumeInfo.imageLinks === undefined   ? DEFAULT_BOOK_IMAGE : item.volumeInfo.imageLinks.thumbnail),
               link: item.volumeInfo.previewLink,
              }
            
           
            });

              
              setBooks(newArray);
              setIsLoading(false);
          },
          (error) => { 
            setErrorMessage("An error occurred, please try again later");
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
      <h1>Welcome to google-book-app!</h1>
      <Search defaultsearchVal={defaultsearchVal} onSearchClick={searchResult}/>
      
      <div className="books">
        {isloading && !errorMessage ? (
         <span>loading...</span>
         ) :errorMessage ? (
          <Error errorMessage={errorMessage}/>
          
        ) : (
          
          <div className="container"> 
            <div className="row"> 
              <div className="card-deck">
                <BookList searchInputVal={defaultsearchVal} Books={books} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default App;
