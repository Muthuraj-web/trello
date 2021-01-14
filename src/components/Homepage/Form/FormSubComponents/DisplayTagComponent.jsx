import React from 'react';

function DisplayTagComponent({tags}) {
    let iter = 0
    return (
            tags.map((each)=>
            <code key={++iter} style={{backgroundColor:each.color}} 
            className="pr-1 pl-1 mr-1 rounded text-light">{each.tag}</code>
            )
    );
}

export default DisplayTagComponent;