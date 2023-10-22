import React from 'react';


const Header = (props) => {
  
  

  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="text-white">Level: {props.playerLevel}</h1>
      <h1 className="text-white">prestige: {props.prestige}</h1>
    </div>
  );
};

export default Header;
