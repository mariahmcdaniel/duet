import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { UPDATE_PLAYLIST } from '../utils/mutations';

const PhotoQuestion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    one: '',
    two: '',
    three: '',
  });
  const [updatePlaylist, { error }] = useMutation(UPDATE_PLAYLIST);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('FORMDATA', formData)
      const { data } = await updatePlaylist({
        variables: { playlistAnswers: { ...formData } },
      });
      navigate("/feed");

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={{ handleFormSubmit }}>
       <div>
        
        </div>
      <div className="form-group">
        <label htmlFor="pronounSelect" className="form-label mt-4">Pronouns</label>
        <select
          className="form-select"
          id="pronounSelect"
          name="one"
          value={formData.one}
          onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>

        </select>
      </div>
      <div>

      </div>
      <div className="form-group">
        <label htmlFor="pronounSelect" className="form-label mt-4">Pronouns</label>
        <select
          className="form-select"
          id="pronounSelect"
          name="one"
          value={formData.two}
          onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>

        </select>
      </div>
      <div>
        
        </div>
      <div className="form-group">
        <label htmlFor="pronounSelect" className="form-label mt-4">Pronouns</label>
        <select
          className="form-select"
          id="pronounSelect"
          name="one"
          value={formData.three}
          onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>

        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )


}

export default PhotoQuestion;