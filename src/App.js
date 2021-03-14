import Header from './components/Header'
import Tasks from './components/Tasks'
//uSer affect used when page load
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'







function App() {

  //Another state for toogle
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect (() => {
    const getTasks  =  async () => {
      const taskFromServer =  await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()

  }, [])

  //Fetch tasks

  const fetchTasks  =  async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data  =  await res.json()

    return data
  }
    //Fetch one task

    const fetchTask  =  async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data  =  await res.json()
  
      return data
    }


  const [tasks, setTasks] = useState([])
//Add Tax
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method : 'POST',
    headers : {
      'Content-type' : 'application/json',
    },
    body : JSON.stringify(task)
  
  })
  const  data  = await res.json()
  setTasks([...tasks, data])


  // const id =  Math.floor(Math.random() * 10000) + 1
  // const  newTask  =  {id, ...task}
  // setTasks([...tasks, newTask])
}




//Delete tasks
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {method : 'DELETE',})

  setTasks(tasks.filter((task) =>  task.id !== id));

}


//toggle reminder  + chnage update single field of reminder

const  toggleReminder =  async (id) => {
  const taskToToggle  = await fetchTask(id)
  const  updateTask  =  {...taskToToggle, reminder : !taskToToggle.reminder}
  const res  =  await fetch(`http://localhost:5000/tasks/${id}`,{
    
    method : 'PUT',
    headers : {
      'Content-type' : 'application/json',
    },
    body : JSON.stringify(updateTask)
  
  })

  const data = await res.json()

  setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder : data.reminder} : task
  
  ))
}



  return (
    <div className="App">
      <Header title="Hello" something="navid"  onAdd = {() => setShowAddTask(!showAddTask)} valueOfShowAdd =  {showAddTask}/>

      { showAddTask &&  <AddTask  onAdd = {addTask}/>}



      {tasks.length > 0 ? (
        <Tasks  tasks =  {tasks} onDelete =  {deleteTask}   onToggle  = {toggleReminder}/>) : ("No tasks")}
    </div>
  );
}

export default App;
