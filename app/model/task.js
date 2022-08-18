const fs=require("fs")

const readAllTask= ()=>{
    const buffer=fs.readFileSync("task.json") // doc file co dong bo ,la 1 chuoi hexa
    const taskString=buffer.toString(); // chuyen sang chuoi luu y |Note: o day khong phai la mang (arrayy
    const taskJson=JSON.parse(taskString) // chuuyen ve dang json
    return taskJson
}
const createTask=(title,description)=>{
    const newTask={
        id:Math.random().toString(),
        title,
        description,
    }
    let Tasks=readAllTask()
    Tasks=[...Tasks,newTask] // tranh bi tham chieu 
    // Cach 2 Task.push
    fs.writeFileSync("task.json",JSON.stringify(Tasks))// phai chuyen ve kieu chuoi 
    return Tasks
   
}

const readDetail=(id)=>{
    let Tasks=readAllTask();
    const task =Tasks.find((task)=> task.id===id.toString())
    return task;
  
}
const updateTask =(id,title,desciption)=>{
    let Tasks=readAllTask();
    const index=Tasks.findIndex((task) =>task.id ===  id.toString())
    console.log(Tasks)  
    console.log(index)  
    if(index!==-1)
    {   const oldTask=Tasks[index]
        const newTask={...oldTask,title,desciption} // update 
        Tasks[index]=newTask
        fs.writeFileSync("task.json",JSON.stringify(Tasks))
        return newTask

    }
    else{
        return  false
    }

}
const deleteTask=(id)=>
{
    
    let Tasks=readAllTask()
    const index=Tasks.findIndex((task )=> task.id===id.toString())
    console.log(index)
    if(index!==-1)
    {
        const task=Tasks[index];
        Tasks=Tasks.filter(task => task.id !==id.toString());
        fs.writeFileSync("task.json",JSON.stringify(Tasks))
        return true
    }
    else{
        return false;
    }
}
//ES5
module.exports={
    readAllTask,createTask,readDetail,updateTask,deleteTask
}