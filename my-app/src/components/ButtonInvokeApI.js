import React from 'react'
import '../App.css';

const ButtonAPI = () => {
    return <button class='button'
    type="button" 
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}
> Invoke dummy NS API</button>
}

export default ButtonAPI