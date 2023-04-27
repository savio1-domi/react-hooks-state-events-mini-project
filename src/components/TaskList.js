import React from "react";
import Task from "./Task";


function TaskList({tasks, itemDelete}) {

  // const task =function(){
  //   TASKS.map((task)=> task.text)
  // }

  // const categories = function(){
  //   TASKS.map((cat)=>cat.category)
  // }

  // const [task,setTask]= useState("")
  // const [taskCategory,setCategory]= useState("All")


  // const filteredTaskList = todo?.filter((todos)=>{
  //   if(onGoingBtn==="All"){
  //     return true
  //   }else{
  //     return(onGoingBtn===todos.category)
  //   }
  // })

  // function  itemDelete(text){
  //   setTodo(todo.filter((todos)=>(todos.text !== text)))
  //   return todo
  // }

  // const taskList = filteredTaskList?.map((todo)=>(
  //   <Task
  //   key={todo.text}
  //   text={todo.text}
  //   category={todo.categorry}
  //   deleteTodo={deleteTodo}
  //   />
  // ))


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      
        {tasks.map((task,index)=>(
          <Task
          itemDelete={itemDelete}
          key={index}
          text={task.text}
          category={task.category}
          />
        ))}
    </div>
  );
}

export default TaskList;