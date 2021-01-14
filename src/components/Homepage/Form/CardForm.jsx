import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { generateNewTask } from '../../utilities';
import TitleComponent from './FormSubComponents/TitleComponent';
import DescriptionComponent from './FormSubComponents/DescriptionComponent';
import ImageComponent from './FormSubComponents/ImageComponent';
import TagComponent from './FormSubComponents/TagComponent';
import MovetoComponent from './FormSubComponents/MovetoComponent';

function CardForm({formStatus,formSection,activeTask,AddTask,cancelTask,editActiveTask}){


    const readonly = Boolean(activeTask)

    const [FormTask,SetFormTask] = useState(activeTask || {...generateNewTask(formSection)})
    const [index,SetIndex] = useState(0) 

    const AddTag=()=>{
        const newTag = {...FormTask}
        newTag.tags.push({tag:"",color:"#00e6e6"})
        SetFormTask(newTag)
        SetIndex(index+1)
    }
    const save=()=>{
        if(readonly) editActiveTask({...FormTask})
        else AddTask({...FormTask})
    }
    return(
        <div>
            {
                readonly?
                    FormTask.image?
                        <img className="w-100 card-img" src={FormTask.image} alt={FormTask.id}/>
                    :<React.Fragment/>
                :<React.Fragment/>
            }

            <TagComponent 
            SetFormTask={SetFormTask} 
            FormTask={FormTask} index={index} 
            AddTag={AddTag} formStatus={formStatus}/>

            <TitleComponent 
            readonly={readonly} 
            SetFormTask={SetFormTask} 
            FormTask={FormTask} />

            <DescriptionComponent 
            readonly={readonly} 
            SetFormTask={SetFormTask} 
            FormTask={FormTask} />

            <ImageComponent
             readonly={readonly} 
             SetFormTask={SetFormTask} 
             FormTask={FormTask} />

             <MovetoComponent
             readonly={readonly}
             SetFormTask={SetFormTask}
             FormTask={FormTask}
             />


            <br/>

            <button className="btn btn-success p-0 pl-1 pr-1 mr-2" onClick={save}>save</button>
            <button className="btn btn-danger p-0 pl-1 pr-1" onClick={cancelTask}>cancel</button>
        </div>
    )
}
export default CardForm