import React from 'react';

function InputComponent({obj,field,type,textarea,SetFormTask,readonly,index}) {

    const handleOnChange=(e)=>{
        if(field==="tags") obj.tags[index].tag = e.currentTarget.value
        else obj[field] = e.currentTarget.value
        SetFormTask(obj)
    }

    return (
        <div className="w-100 pt-1 pb-1">
            <label className="d-block mb-0" style={{fontVariant:"small-caps"}} htmlFor={field}>{field}</label>
            {
                textarea?<textarea className="w-100 p-1" readOnly={readonly} value={obj.description} onChange={(e)=>{handleOnChange(e)}} />:
                <input className="w-100 p-1" readOnly={readonly} value={ field==="tags"?obj.tags[index].tag:obj[field]} type={type} onChange={(e)=>{handleOnChange(e)}}/>
            }
        </div>
    );
}

export default InputComponent;