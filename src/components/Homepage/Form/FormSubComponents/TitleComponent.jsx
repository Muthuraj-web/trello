import React from 'react';
import InputComponent from '../InputComponent'

function TitleComponent({readonly,SetFormTask,FormTask}) {
    return (
        readonly?
        <h6 className="mb-1">{FormTask.title}</h6>:
        <InputComponent SetFormTask={SetFormTask} obj={{...FormTask}} field={"title"} type="text" />

    );
}

export default TitleComponent;