
import React from 'react';
import PropTypes from 'prop-types';



const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    
    <div className='box'>
        <div className='card'>
        
      
      <img src={children} alt="profile"  />
      <h2>{fullName}</h2>
      <p style={{color:"purple" }}>{profession}</p>
      <p>{bio}</p>
      <button onClick={handleName}>Click me!</button>
    </div>
    </div>
    
  )
}

Profile.defaultProps = {
    children: "",
    fullName: "Nesrine Laabidi",
  bio: "I create and maintain websites by writing code, troubleshooting and revising code.",
  profession: "A web developer student",
  handleName: () => alert("My name is Nesrine ")
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleName: PropTypes.func
};

export default Profile;
