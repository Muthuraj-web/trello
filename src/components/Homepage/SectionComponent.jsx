import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function SectionComponent({section,data,SetFormStatus,SetFormSection,SetActiveTask}) {
    let codeKey = 1
    const generateDateDay = timestamp=>{
        let dateObj = new Date(timestamp).toDateString()
        dateObj = dateObj.slice(0,11)
        dateObj = dateObj.replace(" ",", ")
        return dateObj
    }
    return (
        <div className="rounded m-1 p-2 section">
            <h6 className="m-1">{section}</h6>
            {
                data.map((each)=>
                        <div key={each.id} className="m-1 p-1 pl-2 pr-2 bg-light rounded" onClick={()=>{SetActiveTask(each)}}>
                            {
                                each.tags.map(each=><code key={++codeKey}  style={{backgroundColor:each.color}} className="pr-1 pl-1 mr-1 rounded text-light">{each.tag}</code>)
                            }
                            {
                                each.image&&each.image.length>0?
                                <img className="w-100 rounded section-img" src={each.image} alt={each.id} />:
                                <React.Fragment/>
                            }
                            <p className="mb-1">{each.title}</p>
                            <small className="mb-1 created"><i className="far fa-clock mr-2"></i>{generateDateDay(each.created)}</small>
                        </div>)
            }
            <small onClick={()=>{SetFormStatus(true);SetFormSection(section)}} className="m-1 pt-1 pb-1 add-card">Add card ...</small>
        </div>
    );
}
export default SectionComponent;