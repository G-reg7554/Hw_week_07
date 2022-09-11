import React, { useState, useEffect } from 'react';
import PoemList from '../compnents/PoemList';
import PoemDetail from '../compnents/PoemDetail';
import PoemSelect from '../compnents/PoemSelect';

import './PoemContainer.css';

const PoemContainer = () => {
    const [poem, setPoem] = useState([]);
    const [selectedPoem, setSelectedPoem] = useState();

    useEffect(() => {
     getPoem();
    }, [])

    const getPoem = function(){
        fetch('https://poetrydb.org/author,title/Shakespeare;Sonnet')
        .then(res => res.json())
        .then(poem => setPoem(poem))
    }
    


    



    


    const onPoemSelected = function(poem){
        setSelectedPoem(poem);
    }

    let greeting = "Shakespear Sonnets"

    return (
        
        <div className="main-container">
            <header>{greeting}</header>
            <section>
            <PoemSelect poem={poem} onPoemSelected={onPoemSelected} />
            {selectedPoem ? <PoemDetail selectedPoem={selectedPoem}/> : null}
            </section>
            <footer>@codeclan this is supposed to be a footer</footer>
        </div>
    )
}

export default PoemContainer;