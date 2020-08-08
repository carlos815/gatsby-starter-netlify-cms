import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className="search-box bg-background-primary-color flex flex-col rounded-2xl justify-between items-stretch p-10 max-w-lg">
      <div className="input-group first">
        <label className="label">Where you go?</label>

        <input class="input" type="text" placeholder='try "Singapore"' />
      </div>

      <div className="flex">
        <div className="input-group flex-1 flex-grow">
          <label className="label">Check in</label>
          <input class="input" type="date" />
        </div>
        <div className="input-group flex-1 flex-grow">
          <label className="label">Check out</label>
          <input class="input" type="date" />
        </div>
      </div>

      <div className="input-group">
        <label className="label">Guest</label>
        <select id="guests" name="guests" class="input">
          <option value="" disabled selected>
            How many guests?
          </option>

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="flex">
        <input type="checkbox" id="payAfter" name="payAfter" value="" />
        <label for="payAfter">Pay when checking in?</label>
      </div>

      <button formAction="submit" className="btn">
        Search Hotel
      </button>
    </div>
  );
};

export default SearchBox;