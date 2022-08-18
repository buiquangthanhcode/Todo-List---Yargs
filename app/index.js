// import yargs from "yargs"; // ES6
const yargs = require('yargs');
 //ES5
// yargs la module de console log 
const fs=require('fs') // file system (build in Nodejs)
const {readAllTask,createTask,updateTask,readDetail,deleteTask} = require("./model/task.js")

yargs.command({
    command:"test",
    handler: ()=>{
        console.log("test")
    },
})

yargs.command({
    command:"create",
    handler: (args)=>{
        const {title,description}=args
        console.log("create")
    
        const newTasks=createTask(title,description)
        console.log("Add Successfully")
    },
    builder:{ // De truyen 1 paramter vao handler thi phai xay dung 1 key builder 
        title: {
            type:String
        },
        description:{
            type:String
        },
        
    },
})
yargs.command({
    command:"update",
    builder:{
        id:{
            type:String
        },
        title:{
            type:String
        },
        description:{
            type:String
        },

    },
    handler: (args)=>{
        const {id,title,description}=args
        const result=updateTask(id,title,description)
        if(result)
        {
            console.log(result)
            console.log("Update Successfully")
        }
        else{
            console.log("Update failure")
        }
       
    },
})


yargs.command({
    command:"read-all",
    handler: ()=>{
        const task=readAllTask()
       console.log(task)
        console.log("read-all")
    },
})

yargs.command({
    command:"read-detail",
    handler: (args)=>{
        const {id}=args
        console.log("read-detail")
        const task=readDetail(id)
        console.log("task",task)
    },
    builder:{
        id:{
            type:String
        }
    }
})


yargs.command({
    command:"delete",
    builder:{
        id:{
            type:String
        }
    },
    handler: (args)=>{
        const {id}=args
       
        const result=deleteTask(id)
        if(result)
        {
            console.log("Delete Successfully")
        }
        else{
            console.log("Delete failure")
        }
    },
})

// lưu lại những gì mình nhập thi moi moi xuat ra man hinh console dc
yargs.parse()

