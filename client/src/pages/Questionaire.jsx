import { useState } from "react";
import { useMutation } from '@apollo/client';
import { UPDATE_ANSWERS } from '../utils/mutations';
import Auth from '../utils/auth';

const Questionaire = () => {
  

  const [formData, setFormData] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: '',
    nine: '',
    ten: '',
    eleven: '',
    twelve: '',

  });

  const [updateAnswers, { error }] = useMutation(UPDATE_ANSWERS);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('FORMDATA', formData)
      const { data } = await updateAnswers({
        variables: { songAnswers: { ...formData } },
      });

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <div className="form-group">
            <p>You've had a long day but you really need to get a workout in. What song gets you ready to hit the gym?</p>
            <input
              className="form-control"
              name="one"
              value={formData.one}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You must sacrifice yourself to say the world from peril. What song is playing in your final battle scene?</p>
            <input
              className="form-control"
              name="two"
              value={formData.two}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You relly messed up this time. Your car is sinking into a river and theres no way you will escape. What song is playing on the radio?</p>
            <input
              className="form-control"
              name="three"
              value={formData.three}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You're on a 7 hour flight with a crying baby. What song do you put on to restore your peace and drown out the noise?</p>
            <input
              className="form-control"
              name="four"
              value={formData.four}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Your life is is a movie. What is the theme song?</p>
            <input
              className="form-control"
              name="five"
              value={formData.five}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You're a pro-wrestler, about to compete for the championship belt. What song are you walking out to?</p>
            <input
              className="form-control"
              name="six"
              value={formData.six}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Its a restless night and you need to get to sleep. What song could help you decompress before falling asleep?</p>
            <input
              className="form-control"
              name="seven"
              value={formData.seven}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>What song instantly reminds you of your childhood?</p>
            <input
              className="form-control"
              name="eight"
              value={formData.eight}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You're at the house with some friends, pre-gaming before a big night out. What song gets you amped up for a night on the town?</p>
            <input
              className="form-control"
              name="nine"
              value={formData.nine}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>What song would you like to play for the mourners at your own funeral?</p>
            <input
              className="form-control"
              name="ten"
              value={formData.ten}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You just got a brand new car! What song are you throwing on to test the speakers?</p>
            <input
              className="form-control"
              name="eleven"
              value={formData.eleven}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You and your special someone are having a romantic date night together at home. What song would you play to set the mood?</p>
            <input
              className="form-control"
              name="twelve"
              value={formData.twelve}
              onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </main>
  );
};


export default Questionaire;