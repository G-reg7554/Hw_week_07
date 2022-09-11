import React from 'react';
import ListItem from './ListItem';

const PoemList = ({poem, onPoemClick}) => {

    const poemItems = poem.map((poems, index) => {
      return <ListItem poems={poems} key={index} onPoemClick={onPoemClick} />
    })

  return (
    <div>
    <ul>
      {poemItems}
    </ul>
  </div>
  )
}

export default PoemList;