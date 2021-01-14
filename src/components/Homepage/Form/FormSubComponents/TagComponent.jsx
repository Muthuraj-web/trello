import React from 'react';
import InputComponent from '../InputComponent'
import DisplayTagComponent from './DisplayTagComponent'
import ColorList from './ColorList'

function TagComponent({formStatus,FormTask,index,SetFormTask,AddTag}) {
    return (
        <div>
            <DisplayTagComponent tags={FormTask.tags}/>
        {
            formStatus?
            <React.Fragment>
                <InputComponent index={index} SetFormTask={SetFormTask} obj={{...FormTask}} field={"tags"} type="text" />
                <ColorList  SetFormTask={SetFormTask} FormTask={FormTask} />
                <button className="btn btn-info p-0 pl-1 pr-1" onClick={AddTag}>Add</button>
            </React.Fragment>
            :<React.Fragment/>
        }
    </div>
    );
}

export default TagComponent;