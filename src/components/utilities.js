module.exports.generateNewTask = (section)=>{
    return {title:"",description:"",image:"",tags:[{tag:"",color:"#8c8c8c"}],created:Date.now(),section}
}