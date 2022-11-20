import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState('second')
    const [description, setDescription] = useState('')

    // console.log(useContext(TaskContext))

    const { createTask } = useContext(TaskContext)

    const handleSubmmit = function (e) {
        e.preventDefault()
        console.log(title)
        const newTask = {
            title,
            description
        }
        createTask(newTask)
        setTitle('')
        setDescription('')
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmmit} className="bg-blue-400 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>crear tarea</h1>
                <input placeholder='ingrese la tarea'
                    onChange={(e) => setTitle(e.target.value)}
                    className='bg-blue-100 p-1 w-full mb-2'
                    value={title} autoFocus />
                <br />
                <textarea placeholder='descripcion de la tarea'
                    onChange={(e) => setDescription(e.target.value)}
                    className='bg-blue-100 p-1 w-full mb-2'
                    value={description}></textarea>
                <button className='bg-indigo-600 px-3 py-1 text-green-400'>
                    guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm