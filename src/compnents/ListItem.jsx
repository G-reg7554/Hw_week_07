import React from 'react';
import './ListItem.css';

const ListItem = ({poem, onPoemClick}) => {

  const handleClick = function(){
    onPoemClick(poem);
  }


  return <li onClick={handleClick}>{poem.title}</li>
}

export default ListItem;