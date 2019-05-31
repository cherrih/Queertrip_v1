import React from 'react';

const Cities = (props) => {
  return (
    <div className="cities-container">
      <div className="cities-sign-up">
        <div>Guide and map to Pride coming shortly</div>
        <div>Sign up to be the first to know when it launches!</div>
        <button type="button" className="cities-sign-up-button rounded-button">Sign Up</button>
      </div>
      <form>
        <input type="text" name="name" placeholder="I'm traveling to..." />
        <input type="submit" value="Search" />
      </form>
      <div>
        <div>
          Coming soon...
        </div>
        <div className="cities-coming-soon-container">

        </div>
      </div>
    </div>
  );
}

export default Cities;
