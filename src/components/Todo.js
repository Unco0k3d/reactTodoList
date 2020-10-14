import React from 'react'


const Todo=({todo,todos,setTodos,text,date})=>{

const completeHandler=(e)=>{
    setTodos(todos.map(t=>{
        if(t.id===todo.id)
            return {...t,completed: !t.completed}
        else return t
    }))
}
const deleteHandler=(e)=>{
    setTodos(todos.filter(t=>t.id!==todo.id))
}

    return(
        <div className='todo-div'>
            <li className='todo-item'>
                <div className='date-div'>
                    <p>{date}</p>
                </div>
                <div className="text-div">
                    <p>{text}</p>
                </div>
                <div className="btn-div">
                    <button onClick={completeHandler} className={`${
                                                                    todo.completed?
                                                                    'completed':
                                                                     ''}`
                                                                     } 
                                                                    >
                                                                    {`${
                                                                    todo.completed?
                                                                    'completed' : 
                                                                    'complete?'}`
                                                                    }
                                                                    </button>
                    <button onClick={deleteHandler} id='delete'>X</button>
                </div>
            </li>
        </div>
    )
}

export default Todo