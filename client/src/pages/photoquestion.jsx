import { useState } from "react";
import { useMutation } from '@apollo/client';
import { UPDATE_ANSWERS } from '../utils/mutations';
import Auth from '../utils/auth';

const PhotoQuestion = () => {



    return (
        <form onSubmit={{handleFormSubmit}}>

<div className="form-group">
            <label htmlFor="pronounSelect" className="form-label mt-4">Pronouns</label>
            <select
              className="form-select"
              id="pronounSelect"
              name="pronouns"
              value={formData.pronouns}
              onChange={handleChange}>
              <option>She/Her</option>
              <option>He/Him</option>
              <option>They/Them</option>

            </select>
          </div>
        </form>
    )


}