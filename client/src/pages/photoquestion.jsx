import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { UPDATE_PLAYLIST } from '../utils/mutations';

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
       {/* <div>
        
        </div> */}
      <div className="form-group">
        <label htmlFor="pontoonPary" className="form-label mt-4">You are spending the day on the water for a pontoon party! You can only bring one of these playlists with you. which one?</label>
        <select
          className="form-select"
          id="pontoonParty"
          name="one"
          value={formData.one}
          onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>

        </select>
      </div>
      {/* <div>

      </div> */}
      <div className="form-group">
        <label htmlFor="pronounSelect" className="form-label mt-4">If you were going through a tough breakup, which of these playlists would you listen to?</label>
        <select
          className="form-select"
          id="roadTrip"
          name="two"
          value={formData.two}
          onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>

        </select>
      </div>
      {/* <div>
        
        </div> */}
      <div className="form-group">
        <label htmlFor="breakup" className="form-label mt-4">Which one of these playlists would you choose for a roadtrip?</label>
        <select
          className="form-select"
          id="breakup"
          name="three"
          value={formData.three}
          onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>

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