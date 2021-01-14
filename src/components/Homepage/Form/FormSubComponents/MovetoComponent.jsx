import React from 'react';
const Sections = require('../../sections.json')

function MovetoComponent({readonly,SetFormTask,FormTask}) {
    const move = (section)=>{
        const newFormTask = {...FormTask}
        newFormTask.section = section
        SetFormTask(newFormTask)
    }

    return (
        readonly?
        <div className="mt-2 mb-2">
        <span>Move to</span>
        {
            Sections.map(each=>{
                return each!==FormTask.section?<button className="btn border-dark p-0 pl-2 pr-2 rounded-0 ml-2" onClick={()=>{move(each)}} >{each}</button>:<React.Fragment/>
            })
        }
        </div>
        :<React.Fragment/>
    );
}

export default MovetoComponent;