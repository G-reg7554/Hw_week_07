import React from 'react';
import './ListItem.css';


const PoemSelect = ({poem, onPoemSelected}) => {

    const handleChange = function(e) {
        const chosenPoem = poem[e.target.value];
        onPoemSelected(chosenPoem);
    }

    
    const poemOptions = poem.map((poems, index) => {
    return <option value={index} key={index}>{poems.title}</option>
    })

    return (
        <>
        
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Poem</option>
            {poemOptions}
        </select>
        
        </>

       
    

        
    )
}

export default PoemSelect;