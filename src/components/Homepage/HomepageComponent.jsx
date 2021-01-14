import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SectionComponent from './SectionComponent';
import CardForm from './Form/CardForm'
const data = require('../data.json')


function HomepageComponent(props) {

    const [task,SetTask] = useState([])
    const [lastId,SetLastId] = useState(0)
    const [formStatus,SetFormStatus] = useState(false)
    const [activeTask,SetActiveTask] = useState(false)
    const [formSection,SetFormSection] = useState(false)

    useEffect(()=>{
        SetTask(data)
        SetLastId(data.length+1)
    },[])

    const filterTask=(section)=>{
        let returnObj = {}
        returnObj =  task.filter(each=>each.section===section)
        return returnObj
    }
    const cancelTask = ()=>{
        SetActiveTask(false)
        SetFormStatus(false)
        SetFormSection(false)
    }
    const AddTask=(newTask)=>{
        newTask['id'] = lastId
        console.log(newTask)
        cancelTask()
        SetTask([...task,newTask])
        SetLastId(lastId+1)
    }
    const editActiveTask = (editedTask)=>{
        console.log(editedTask)
        const oldTasks = [...task]
        const balance = oldTasks.filter(each=>each.id!==editedTask.id)
        balance.push(editedTask)
        SetTask(balance)
        cancelTask()
    }

    const todo = filterTask("To Do")
    const inprogress = filterTask("In Progress")
    const completed = filterTask("Completed")


    return (
        <div className="container m-auto position-relative">
            <div className="row m-0 p-0" style={{zIndex:'-1',opacity:activeTask||formStatus?'0.2':'1',filter:activeTask||formStatus?'blur(0.5px)':'none'}}>
                <div className="col-sm-4 m-0 p-0">
                    <SectionComponent section="To Do" data={todo} SetActiveTask={SetActiveTask} SetFormStatus={SetFormStatus} SetFormSection={SetFormSection} />
                </div>
                <div className="col-sm-4 m-0 p-0">
                    <SectionComponent section="In Progress" data={inprogress} SetActiveTask={SetActiveTask} SetFormStatus={SetFormStatus} SetFormSection={SetFormSection}/>
                </div>
                <div className="col-sm-4 m-0 p-0">
                    <SectionComponent section="Completed" data={completed} SetActiveTask={SetActiveTask} SetFormStatus={SetFormStatus} SetFormSection={SetFormSection}/>
                </div>
            </div>
            {
                formStatus||activeTask?

                <div className="container cardform-wrapper" >
                    <div className="w-50 p-3 border mt-5 ml-auto mr-auto bg-light">
                        <CardForm 
                        formStatus={formStatus} 
                        formSection={formSection} 
                        activeTask={activeTask}
                        cancelTask={cancelTask} 
                        editActiveTask={editActiveTask}
                        SetActiveTask={SetActiveTask}
                        AddTask={AddTask} />
                    </div>
                </div>:
                
                <React.Fragment/>
            }
        </div>
    );
}

export default HomepageComponent;