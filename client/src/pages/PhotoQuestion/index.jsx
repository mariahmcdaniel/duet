import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { UPDATE_PLAYLIST } from '../../utils/mutations';
import bk1 from './images/bk1.jpg';
import bk2 from './images/bk2.jpg';
import bk3 from './images/bk3.jpg';
import bk4 from './images/bk4.jpg';
import bk5 from './images/bk5.jpg';
import bk6 from './images/bk6.jpg';
import bk7 from './images/bk7.jpg';
import bk8 from './images/bk8.jpg';
import bk9 from './images/bk9.jpg';
import pp1 from './images/pp1.jpg';
import pp2 from './images/pp2.jpg';
import pp3 from './images/pp3.jpg';
import pp4 from './images/pp4.jpg';
import pp5 from './images/pp5.jpg';
import pp6 from './images/pp6.jpg';
import pp7 from './images/pp7.jpg';
import pp8 from './images/pp8.jpg';
import pp9 from './images/pp9.jpg';
import rt1 from './images/rt1.jpg';
import rt2 from './images/rt2.jpg';
import rt3 from './images/rt3.jpg';
import rt4 from './images/rt4.jpg';
import rt5 from './images/rt5.jpg';
import rt6 from './images/rt6.jpg';
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
      console.log('FORMDATA', formData)
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
       <div>
        <div className="col-3">
            <option><img src={pp1}/></option>
            <option><img src={pp2}/></option>
            <option><img src={pp3}/></option>
          </div>
          <div className="col-3">
            <option><img src={pp4}/></option>
            <option><img src={pp5}/></option>
            <option><img src={pp6}/></option>
          </div>
          <div className="col-3">
            <option><img src={pp7}/></option>
            <option><img src={pp8}/></option>
            <option><img src={pp9}/></option>
          </div>
        </div>
      <div className="form-group">
        <label htmlFor="pronounSelect" className="form-label mt-4">Which Playlist for a Pontoon Party?</label>
        <select
          className="form-select"
          id="pontoonParty"
          name="one"
          value={formData.one}
          onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option> 
        </select>
      </div>
      <div>
          <div className="col-3"> 
            <option><img src={rt1}/></option>
            <option><img src={rt2}/></option>
            <option><img src={rt3}/></option>
          </div>
          <div className="col-3">
          </div>  
            <option><img src={rt4}/></option>
            <option><img src={rt5}/></option>
            <option><img src={rt6}/></option>
          <div className="col-3">  
            <option><img src={rt7}/></option>
            <option><img src={rt8}/></option>
            <option><img src={rt9}/></option>
          </div>
      </div>
      <div className="form-group">
        <label htmlFor="pronounSelect" className="form-label mt-4">Roadtrip Time!</label>
        <select
          className="form-select"
          id="roadTrip"
          name="two"
          value={formData.two}
          onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option> 
        </select>
      </div>
      <div>
         <div className="col-3"> 
            <option><img src={bk1}/></option>
            <option><img src={bk2}/></option>
            <option><img src={bk3}/></option>
          </div>
          <div className="col-3">
            <option><img src={bk4}/></option>
            <option><img src={bk5}/></option>
            <option><img src={bk6}/></option>
          </div>
          <div className="col-3">
            <option><img src={bk7}/></option>
            <option><img src={bk8}/></option>
            <option><img src={bk9}/></option>
          </div>
        </div>
      <div className="form-group">
        <label htmlFor="pronounSelect" className="form-label mt-4">Break-up Songs?</label>
        <select
          className="form-select"
          id="breakup"
          name="three"
          value={formData.three}
          onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>

        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </fieldset>
    </form>
    </div>
    </main>
  )


}

export default PhotoQuestion;