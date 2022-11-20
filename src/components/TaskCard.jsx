import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskCard({ task }) {

    // const valor = useContext(TaskContext)
    // console.log(valor)

    const { deleteTask } = useContext(TaskContext)

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className='text-xl font-bold capitalize'>{task.name}</h1>
            <p className='text-gray-300 text-sm'>{task.description}</p>
            <button className='bg-violet-400 px-2 py-1 rounded-md mt-4 hover:bg-violet-300' onClick={() => { deleteTask(task.id) }}>
                eliminar
            </button>
        </div>
    )
}

export default TaskCard