import React from 'react';

const ProfileForm = () => {
	return (
		<main>
			<form>
  <fieldset>
    
    <div className="form-group">
      <label htmlFor="usernameinput" className="form-label mt-4">Username</label>
      <input type="username" className="form-control" id="usernameinput"  placeholder="Enter username"/>
      </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="passwordinput" className="form-label mt-4">Password</label>
      <input type="password" className="form-control" id="passwordinput" placeholder="Password"/>
    </div>
    <div className="form-group">
      <label htmlFor="passwordconfinput" className="form-label mt-4">Password</label>
      <input type="password" className="form-control" id="passwordconfinput" placeholder="Password confirmation"/>
    </div>
    <div className="form-group">
      <label htmlFor="cityinput" className="form-label mt-4">City</label>
      <input type="text" className="form-control" id="cityinput" placeholder="City"/>
    </div>
    <div className="form-group">
      <label htmlFor="stateinput" className="form-label mt-4">State</label>
      <input type="text" className="form-control" id="stateinput" placeholder="State"/>
    </div>
    <div className="form-group">
      <label htmlFor="pronounSelect" className="form-label mt-4">Pronouns</label>
      <select className="form-select" id="pronounSelect">
        <option>She/Her</option>
        <option>He/Him</option>
        <option>They/Them</option>
        
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="genderSelect" className="form-label mt-4">Gender</label>
      <select multiple="" className="form-select" id="genderSelect">
        <option>Male</option>
        <option>Female</option>
        <option>Non-Binary</option>
        <option>Prefer not to say</option>
        <option>Other</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="ageSelect" className="form-label mt-4">Age</label>
      <select multiple="" className="form-select" id="ageSelect">
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="interestSelect" className="form-label mt-4">Interested in</label>
      <select multiple="" className="form-select" id="interestSelect">
        <option>Friendship</option>
        <option>Relationship</option>
        <option>Both</option>
        </select>
    </div>
    
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>
		</main>
	);
};



export default ProfileForm; 