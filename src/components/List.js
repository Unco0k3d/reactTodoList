import React from 'react'
import Todo from './Todo'

const List=({todos,setTodos,filteredTodos})=>{

    return(
        <div className='list-div'>
            <ul>
                {filteredTodos.map(t=>(
                    <Todo
                        key={t.id}
                        text={t.text}
                        date={t.date}
                        completed={t.completed}
                        todo={t}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default List