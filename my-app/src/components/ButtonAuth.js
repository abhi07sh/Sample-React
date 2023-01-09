import React from 'react'
import '../App.css';

const ButtonAuth = () => {
    return <button class='button'
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}
> SignIN/SignUp</button>
}

export default ButtonAuth