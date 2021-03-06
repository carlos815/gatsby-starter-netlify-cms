import React from "react";

const SearchBox = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <div className="search-box bg-background-primary-color flex flex-col rounded-2xl justify-between items-stretch p-10 max-w-lg">
      <div className="input-group first">
        <label className="label font-bold">Where do you want to go?</label>

        <input className="input input-location" type="text" placeholder='try "Singapore"' />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="input-group flex-1">
          <label className="label font-bold">Check in</label>
          <input className="input" type="date" />
        </div>
        <div className="input-group flex-1">
          <label className="label font-bold">Check out</label>
          <input className="input" type="date" />
        </div>
      </div>

      <div className="input-group">
        <label className="label font-bold">Guest</label>
        <select id="guests" name="guests" className="input">
          <option defaultValue disabled selected>
            How many guests?
          </option>

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="checkgroup relative flex items-center gap-3 pb-3 z-10">
        <input className='checkmark'type="checkbox" id="payAfter" name="payAfter" value="" />
        <label className='' htmlFor="payAfter">Pay when checking in?</label>
      </div>

      <button formAction="submit" className="btn">
        Search Hotel
      </button>
    </div>
  );
};

export default SearchBox;
