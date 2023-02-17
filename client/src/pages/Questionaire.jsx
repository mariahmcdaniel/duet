import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useMutation, useLazyQuery } from '@apollo/client';
import { UPDATE_ANSWERS, UPDATE_PHOTO } from '../utils/mutations';
import { SEARCH_DEEZER } from '../utils/queries';

const Questionaire = () => {
  // const navigate = useNavigate();

  const [form, setForm] = useState({
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
  const [searchDeezer, { data, loading }] = useLazyQuery(SEARCH_DEEZER);
  const [updateAnswers, { error }] = useMutation(UPDATE_ANSWERS);
  const [updatePhoto] = useMutation(UPDATE_PHOTO);

  const songs = data?.searchDeezer || {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await searchDeezer({
        variables: {
          song: form.four
        }
      });

      await updateAnswers({
        variables: { songAnswers: { ...form } },
      });

      await updatePhoto({
        variables: { photo: data.searchDeezer.album.cover_medium }
      })
      // window.location.replace('/photo')

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

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <main className="container d-flex justify-content-center">
      <div className="row p-3 m-3">
        <div>
          <pre>{JSON.stringify(songs, null, 2)}</pre>
        </div>
        <form style={styles.ptag} onSubmit={handleFormSubmit}>
          <fieldset>
            <div className="form-group">
              <p>You've had a long day but you really need to get a workout in. What song gets you ready to hit the gym?</p>
              <input
                className="form-control"
                name="one"
                value={form.one}
                onChange={handleChange} />
            </div>
            <div className="form-group">
            <p>You must sacrifice yourself to say the world from peril. What song is playing in your final battle scene?</p>
            <input
              className="form-control"
              name="two"
              value={form.two}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You relly messed up this time. Your car is sinking into a river and theres no way you will escape. What song is playing on the radio?</p>
            <input
              className="form-control"
              name="three"
              value={form.three}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Your life is is a movie. What is the theme song?</p>
            <input
              className="form-control"
              name="four"
              value={form.four}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You're a pro-wrestler, about to compete for the championship belt. What song are you walking out to?</p>
            <input
              className="form-control"
              name="six"
              value={form.six}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Its a restless night and you need to get to sleep. What song could help you decompress before falling asleep?</p>
            <input
              className="form-control"
              name="seven"
              value={form.seven}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>What song instantly reminds you of your childhood?</p>
            <input
              className="form-control"
              name="eight"
              value={form.eight}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You're at the house with some friends, pre-gaming before a big night out. What song gets you amped up for a night on the town?</p>
            <input
              className="form-control"
              name="nine"
              value={form.nine}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>What song would you like to play for the mourners at your own funeral?</p>
            <input
              className="form-control"
              name="ten"
              value={form.ten}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You just got a brand new car! What song are you throwing on to test the speakers?</p>
            <input
              className="form-control"
              name="eleven"
              value={form.eleven}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>You and your special someone are having a romantic date night together at home. What song would you play to set the mood?</p>
            <input
              className="form-control"
              name="twelve"
              value={form.twelve}
              onChange={handleChange} />
          </div>
            <button type="submit" className="btn btn-primary m-1 p-2">Submit</button>
          </fieldset>
        </form>
      </div>
    </main>
  );
};


export default Questionaire;