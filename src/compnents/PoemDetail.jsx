import React from 'react';
import PoemContainer from '../containers/PoemContainer';

const PoemDetail = ({selectedPoem}) => {
  return (
      <>
      <div className='sonnet'>
          <h3>{selectedPoem.title}</h3>
          <p>{selectedPoem.lines}</p>
          <p><i>Author: {selectedPoem.author}</i></p>
        </div>
        </>

  )
}


export default PoemDetail;