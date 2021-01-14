import React from 'react';
import InputComponent from '../InputComponent'

function ImageComponent({readonly,SetFormTask,FormTask}) {
    return (
        !readonly?
        <React.Fragment>
        <InputComponent readonly={readonly}  SetFormTask={SetFormTask} obj={{...FormTask}} field={"image"} type="text"/>
        <small>please upload only imageURL</small>
        </React.Fragment>:
        <React.Fragment/>
    );
}

export default ImageComponent;