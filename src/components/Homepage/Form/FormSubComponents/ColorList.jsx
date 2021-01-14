import React from 'react';
const colorCodes = require('./colorCodes.json')


function ColorList({SetFormTask,FormTask}) {

    const changeColor = (newColor)=>{
        const newFormTask = {...FormTask}
        newFormTask.tags[newFormTask.tags.length-1].color = newColor
        SetFormTask(newFormTask)
    }

    return(
        <div>
            {
                colorCodes.map(each=><div onClick={()=>{changeColor(each)}} key={each} className={`mr-2 ${FormTask.tags[FormTask.tags.length-1].color===each?'border border-dark':''}`} style={{width:"20px",height:"20px",backgroundColor:each,display:"inline-block"}}></div>)

            }
        </div>    
    )
    
}

export default ColorList;