import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { UPDATE_PLAYLIST } from '../../utils/mutations';
import './style.css';
import bk1 from './images/bk1.jpg';
import bk2 from './images/bk2.jpeg';
import bk3 from './images/bk3.jpg';
import bk4 from './images/bk4.jpeg';
import bk5 from './images/bk5.jpeg';
import bk6 from './images/bk6.jpeg';
import bk7 from './images/bk7.jpeg';
import bk8 from './images/bk8.jpeg';
import bk9 from './images/bk9.jpeg';
import pp1 from './images/pp1.jpg';
import pp2 from './images/pp2.jpg';
import pp3 from './images/pp3.jpg';
import pp4 from './images/pp4.jpg';
import pp5 from './images/pp5.jpg';
import pp6 from './images/pp6.jpg';
import pp7 from './images/pp7.jpg';
import pp8 from './images/pp8.jpg';
import pp9 from './images/pp9.jpeg';
import rt1 from './images/rt1.jpg';
import rt2 from './images/rt2.jpeg';
import rt3 from './images/rt3.jpeg';
import rt4 from './images/rt4.jpg';
import rt5 from './images/rt5.jpg';
import rt6 from './images/rt6.jpeg';
import rt7 from './images/rt7.jpg';
import rt8 from './images/rt8.jpg';
import rt9 from './images/rt9.jpg';





const PhotoQuestion = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    one: 1,
    two: 1,
    three: 1,
  });
  const [updatePlaylist, { error }] = useMutation(UPDATE_PLAYLIST);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: parseInt(value) });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updatePlaylist({
        variables: { playlistAnswers: { ...formData } },
      });
      window.location.replace('/feed');

    } catch (e) {
      console.error(e);
    }
  };

  const styles = {
    ptag: {
      fontSize: 20,
      fontWeight: 700,
      color: "#000000",
    },
  };

  return (
    <main className="container d-flex justify-content-center">
      <div className="row">
    <form style={styles.ptag} onSubmit={handleFormSubmit}>
      <fieldset>
      <div className="form-group">
        <label id="ppLabel" htmlFor="pontoonParty" className="form-label mt-4 playlistQuestion">You are spending a sunny day on the water with friends for a "pontoon party" Which of these playlists are you bringing with you?</label>
        <select
          className="form-select playlistSelect"
          id="pontoonParty"
          name="one"
          value={formData.one}
          onChange={handleChange}>
            <option value="1">Playlist 1</option>
            <option value="2">Playlist 2</option>
            <option value="3">Playlist 3</option>
            <option value="4">Playlist 4</option>
            <option value="5">Playlist 5</option>
            <option value="6">Playlist 6</option>
            <option value="7">Playlist 7</option>
            <option value="8">Playlist 8</option>
            <option value="9">Playlist 9</option>
        </select>
      </div>
        <div className="imgContainer container">
       <div id="imgrow1" className="row imgrow">
        <div className="col-3">
            <img className="playlistimg" src={pp1} alt="playlistimage"/>
            <img className="playlistimg" src={pp4} alt="playlistimage"/>
            <img className="playlistimg" src={pp7} alt="playlistimage"/>
          </div>
          <div className="col-3">
            <img className="playlistimg" src={pp2} alt="playlistimage"/>
            <img className="playlistimg" src={pp5} alt="playlistimage"/>
            <img className="playlistimg" src={pp8} alt="playlistimage"/>
          </div>
          <div className="col-3">
            <img className="playlistimg" src={pp3} alt="playlistimage"/>
            <img className="playlistimg" src={pp6} alt="playlistimage"/>
            <img className="playlistimg" src={pp9} alt="playlistimage"/>
          </div>
        </div>
        </div>
      <div className="form-group">
        <label id="rtLabel" htmlFor="roadTrip" className="form-label mt-4 playlistQuestion">Which one of these playlists would you choose for a roadtrip?</label>
        <select
          className="form-select playlistSelect"
          id="roadTrip"
          name="two"
          value={formData.two}
          onChange={handleChange}>
            <option value="1">Playlist 1</option>
            <option value="2">Playlist 2</option>
            <option value="3">Playlist 3</option>
            <option value="4">Playlist 4</option>
            <option value="5">Playlist 5</option>
            <option value="6">Playlist 6</option>
            <option value="7">Playlist 7</option>
            <option value="8">Playlist 8</option>
            <option value="9">Playlist 9</option>
        </select>
      </div>
      <div className="imgContainer container">
      <div id="imgrow2" className="row imgrow">
          <div className="col-3"> 
            <img className="playlistimg" src={rt1} alt="playlistimage"/>
            <img className="playlistimg" src={rt4} alt="playlistimage"/>
            <img className="playlistimg" src={rt7} alt="playlistimage"/>
          </div>
          <div className="col-3">
            
            <img className="playlistimg" src={rt2} alt="playlistimage"/>
            <img className="playlistimg" src={rt5} alt="playlistimage"/>
            <img className="playlistimg" src={rt8} alt="playlistimage"/>
            </div>
          <div className="col-3">  
            <img className="playlistimg" src={rt3} alt="playlistimage"/>
            <img className="playlistimg" src={rt6} alt="playlistimage"/>
            <img className="playlistimg" src={rt9} alt="playlistimage"/>
          </div>
      </div>
      </div>
      <div className="form-group">
        <label id="bkLabel" htmlFor="breakup" className="form-label mt-4 playlistQuestion">If you were going through a tough breakup, which of these playlists would you go for?</label>
        <select
          className="form-select playlistSelect"
          id="breakup"
          name="three"
          value={formData.three}
          onChange={handleChange}>
            <option value="1">Playlist 1</option>
            <option value="2">Playlist 2</option>
            <option value="3">Playlist 3</option>
            <option value="4">Playlist 4</option>
            <option value="5">Playlist 5</option>
            <option value="6">Playlist 6</option>
            <option value="7">Playlist 7</option>
            <option value="8">Playlist 8</option>
            <option value="9">Playlist 9</option>

        </select>
      </div>
      <div className="imgContainer container">
      <div id="imgrow3" className="row imgrow">
         <div className="col-3"> 
            <img className="playlistimg" src={bk1} alt="playlistimage"/>
            <img className="playlistimg" src={bk4} alt="playlistimage"/>
            <img className="playlistimg" src={bk7} alt="playlistimage"/>
          </div>
          <div className="col-3">
            <img className="playlistimg" src={bk2} alt="playlistimage"/>
            <img className="playlistimg" src={bk5} alt="playlistimage"/>
            <img className="playlistimg" src={bk8} alt="playlistimage"/>
          </div>
          <div className="col-3">
            <img className="playlistimg" src={bk3} alt="playlistimage"/>
            <img className="playlistimg" src={bk6} alt="playlistimage"/>
            <img className="playlistimg" src={bk9} alt="playlistimage"/>
          </div>
        </div>
        </div>
      <button id="playlistSubmit" type="submit" className="btn btn-primary">Submit</button>
      </fieldset>
    </form>
    </div>
    </main>
  )


}

export default PhotoQuestion;