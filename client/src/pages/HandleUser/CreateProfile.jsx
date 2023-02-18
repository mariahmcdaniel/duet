import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const ProfileForm = () => {
  // const navigate = useNavigate();
  const [form, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '18',
    city: '',
    state: '',
    interestedIn: 'Friendship',
    gender: 'Other',
    pronouns: 'She/Her'
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...form, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...form },
      });

      Auth.login(data.addUser.token);
      window.location.replace("/quest");
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
    <main className="container">
      <div className="row">
      <form style={styles.ptag} onSubmit={handleFormSubmit}>
        <fieldset>

          <div className="form-group">
            <label htmlFor="firstNameinput" className="form-label mt-4">First Name</label>
            <input
              type="firstName"
              className="form-control"
              id="firstNameinput"
              placeholder="Enter first name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastNameinput" className="form-label mt-4">Last Name</label>
            <input
              type="lastName"
              className="form-control"
              id="lastNameinput"
              placeholder="Enter last name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="usernameinput" className="form-label mt-4">Username</label>
            <input
              type="username"
              className="form-control"
              id="usernameinput"
              placeholder="Enter username"
              name="username"
              value={form.username}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email" 
              name="email"
              value={form.email}
              onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="passwordinput" className="form-label mt-4">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordinput"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="cityinput" className="form-label mt-4">City</label>
            <input
              type="text"
              className="form-control"
              id="cityinput"
              placeholder="City"
              name="city"
              value={form.city}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="stateinput" className="form-label mt-4">State</label>
            <input
              type="text"
              className="form-control"
              id="stateinput"
              placeholder="State" 
              name="state"
              value={form.state}
              onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="pronounSelect" className="form-label mt-4">Pronouns</label>
            <select
              className="form-select"
              id="pronounSelect"
              name="pronouns"
              value={form.pronouns}
              onChange={handleChange}>
              <option>She/Her</option>
              <option>He/Him</option>
              <option>They/Them</option>

            </select>
          </div>
          <div className="form-group">
            <label htmlFor="genderSelect" className="form-label mt-4">Gender</label>
            <select
              multiple=""
              className="form-select"
              id="genderSelect"
              name="gender"
              value={form.gender}
              onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
              <option>Non-Binary</option>
              <option>Prefer not to say</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ageSelect" className="form-label mt-4">Age</label>
            <select
              multiple=""
              className="form-select"
              id="ageSelect"
              name="age"
              value={form.age}
              onChange={handleChange}>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="interestSelect" className="form-label mt-4">Interested in</label>
            <select
              multiple=""
              className="form-select"
              id="interestSelect"
              name="interestedIn"
              value={form.interestedIn}
              onChange={handleChange}>
              <option>Friendship</option>
              <option>Relationship</option>
              <option>Both</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary m-1 p-2">Submit</button>
        </fieldset>
      </form>
      </div>
    </main>
  );
};



export default ProfileForm; 