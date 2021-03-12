
import {useState} from 'react'


const Tasks = () =>{


    const [tasks, setTasks]  =  useState([
        {
            id : 1,
            text : 'Appointment doctor', 
            day : 'Feb 5th at 5:30 pm',
            reminder : true,
        
        },
        {
            id : 2,
            text : 'Appointment schoool', 
            day : 'March 5th at 5:30 pm',
            reminder : true,
        
        },
    
        {
            id : 3,
            text : 'Appointment employee', 
            day : 'Mon 5th at 5:30 pm',
            reminder : false,
        
        }
    
    
    
    
    
    ])

    
    return (
        <>
            {
                tasks.map((tasks) => (
                    <h3 key = {tasks.id}> {tasks.text}</h3>

                ))
                
            }

            

        </>

    )
}


export default Tasks