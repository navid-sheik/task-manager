import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'






function App() {

  //Another state for toogle
  const [showAddTask, setShowAddTask] = useState(false)





  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Appointment doctor',
      day: 'Feb 5th at 5:30 pm',
      reminder: true,

    },
    {
      id: 2,
      text: 'Appointment schoool',
      day: 'March 5th at 5:30 pm',
      reminder: true,

    },

    {
      id: 3,
      text: 'Appointment employee',
      day: 'Mon 5th at 5:30 pm',
      reminder: false,

    },
  ])
//Add Tax
const addTask = (task) => {
  const id =  Math.floor(Math.random() * 10000) + 1
  const  newTask  =  {id, ...task}
  setTasks([...tasks, newTask])
}




//Delete tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) =>  task.id !== id));

}
//toggle reminder 

const  toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder : !task.reminder} : task
  
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
