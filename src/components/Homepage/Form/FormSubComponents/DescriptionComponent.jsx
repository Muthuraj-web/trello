import React from 'react';
import InputComponent from '../InputComponent'

function DescriptionComponent({readonly,SetFormTask,FormTask}) {
    return (
        readonly?
        <div className="bg-dark rounded p-2 m-0">
            <p className="text-light">{FormTask.description}</p>
        </div>:
        <InputComponent readonly={readonly}  SetFormTask={SetFormTask} obj={{...FormTask}} field={"description"} textarea />
    );
}

export default DescriptionComponent;