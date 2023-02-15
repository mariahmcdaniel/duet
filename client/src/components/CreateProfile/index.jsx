import React from 'react';

const ProfileForm = () => {
	return (
		<main>
			<form>
  <fieldset>
    <legend>Legend</legend>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
      </div>
    </div>
    <div class="form-group">
      <label for="usernameinput" class="form-label mt-4">Username</label>
      <input type="username" class="form-control" id="usernameinput"  placeholder="Enter username"/>
      </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password confirmation"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">City</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="City"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">State</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="State"/>
    </div>
    <div class="form-group">
      <label for="exampleSelect1" class="form-label mt-4">Pronouns</label>
      <select class="form-select" id="exampleSelect1">
        <option>She/Her</option>
        <option>He/Him</option>
        <option>They/Them</option>
        
      </select>
    </div>
    <div class="form-group">
      <label for="exampleSelect2" class="form-label mt-4">Gender</label>
      <select multiple="" class="form-select" id="exampleSelect2">
        <option>Male</option>
        <option>Female</option>
        <option>Non-Binary</option>
        <option>Prefer not to say</option>
        <option>Other</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleSelect2" class="form-label mt-4">Age</label>
      <select multiple="" class="form-select" id="exampleSelect2">
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleSelect2" class="form-label mt-4">Interested in</label>
      <select multiple="" class="form-select" id="exampleSelect2">
        <option>Friendship</option>
        <option>Relationship</option>
        <option>Both</option>
        </select>
    </div>
    
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
		</main>
	);
};



export default ProfileForm; 