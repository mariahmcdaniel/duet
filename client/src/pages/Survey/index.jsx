import react, { useState } from "react";
import { surveyQuestions, playlistQuestions, albumQuestion } from "../../utils/questions";
import { useMutation } from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {UPDATE_ANSWERS, UPDATE_PLAYLIST, ADD_PHOTO } from "../../utils/mutations";
import SearchResults from "../../components/searchResults";

 
const [currentQuestion, setCurrentQuestion] = useState("");
const [response, setResponse] = useState("");

const songQs = surveyQuestions;
const playlistQs = playlistQuestions;


//- container for changing questions
//- handle question change
//- collect answers/ send to db


const MusicAnswers = () =>{
  const  songAndArtist = []
  const songAnswers = []
  const playlistAnswers = []
  const albumAnswer = []


  const handleFormSubmit = () => {
    const [artist, setOptions] = useState(null);
	// add another useState hook
	const [questionCategory, setQuestionCategory] = useState("");
	useEffect(() => {
	    const apiUrl = `https://opentdb.com/api_category.php`;
	
	    fetch(apiUrl)
	      .then((res) => res.json())
	      .then((response) => {
	        setOptions(response.trivia_categories);
	      });
	  }, [setOptions]);

  }


 return (
 <div>

  <header>
    <h3>Music Preference Survey</h3>
  </header>
  <p className="questionContaner">{renderQuestion()}</p>
  <form onSubmit={handleFormSubmit()}>
    
    <div className="form-group">
      <label htmlFor="artistInput" className="form-label mt-4">Artist:</label>
      <input type="text" className="form-control" id="artistInput" placeholder="Enter Artist Name"/>
    </div>
    <div className="form-group">
      <label htmlFor="songInput" className="form-label mt-4">Song:</label>
      <input type="text" className="form-control" id="songInput" placeholder="Enter Song Name"/>
    </div>
    <button type="submit" className="btn btn-primary">Search</button>
    
    <div className="searchResults">SetOptions is displayed here</div>

    
  
  </form>
 </div>
 )
}