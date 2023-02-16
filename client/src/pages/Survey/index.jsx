import react, { useState } from "react";
import { surveyQuestions, playlistQuestions, albumQuestion } from "../../utils/questions";
import { useMutation } from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {UPDATE_ANSWERS, UPDATE_PLAYLIST, ADD_PHOTO } from "../../utils/mutations";
import searchDeezerApi from "../../utils/queries";

 
const [currentQuestion, setCurrentQuestion] = useState("");
const [searchResults, setSearchResults] = useState("");


//- container for changing questions
//- handle question change
//- collect answers/ send to db


const MusicAnswers = () =>{
  const songAnswers = []
  const playlistAnswers = []
  const albumAnswer = []
}

const renderSongQuestions = () => {
  return songQuestions.map((question) => {
    <p className="surveyQuestion" id={surveyQuestions.indexOf(question)+1}>{question}</p>
  })
};

  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [savedSongIds, setSavedSongIds] = useState(getSavedBookIds());
  const [saveSong, { error } ] = useMutation(UPDATE_ANSWERS);
  const [savePlaylist, { err } ] = useMutation(UPDATE_PLAYLIST);
  const [saveAlbum, { er } ] = useMutation(ADD_PHOTO);

  useEffect(() => {
    return () => saveBookIds(savedBookIds);
  });


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!songInput) {
      return false;
    }

    try {
      const response = await searchDeezerApi(songInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const songData = items.map((song) => (
        `songquestion${cursor}:`+{
        id: song.id,
        title: song.title,
        artist: song.artist,
        songClip: song.preview,  
        }
      ));

      setSearchResults(songData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveSong = async (id) => {
    const songToSave = searchResults.find((song) => song.id === id);

    try {      
      const { data } = await saveSong({
        variables: songToSave,
      });


      if (!data) {
        throw new Error('something went wrong!');
      }
      setSavedSongIds([...savedSongIds, songToSave.id]);
      

    } catch (err) {
      console.error(err);
    }
  };

  const handleSavePlaylist = async (id) => {
    const songToSave = searchResults.find((song) => song.id === id);

    try {      
      const { data } = await saveSong({
        variables: songToSave,
      });


      if (!data) {
        throw new Error('something went wrong!');
      }
      setSavedSongIds([...savedSongIds, songToSave.id]);
      

    } catch (err) {
      console.error(err);
    }
  };


 return (
 <div>

  <header>
    <h3>Music Preference Survey</h3>
  </header>
  <div className="questionContaner">{renderSongQuestions()}</div>
  <form onSubmit={handleFormSubmit()}>
    
    <div className="form-group">
      <label htmlFor="songInput" className="form-label mt-4">Song Title:</label>
      <input type="text" className="form-control" id="songInput" name="songInput" value={formData.songInput} placeholder="Enter Song Name"/>
    </div>
    <button type="submit" className="btn btn-primary">Search</button>
    
    <div className="searchResults">{searchResults.map((song) =>{
      return (
        <button key={song.id} onClick={handleSaveSong(song.id)} value={song.title}>{song.title} - {song.artist}</button>
      )
    })}
    </div>

    
  
  </form>
 </div>
 )
}