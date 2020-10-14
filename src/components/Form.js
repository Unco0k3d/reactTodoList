import React from 'react'


const Form=({inputText,setInputText,setTodos,todos,setStatus,setFilteredTodos})=>{
    const inputHandler=(e)=>{
        setInputText(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const todo = {
            completed: false,
            text: inputText,
            id: Math.random()*10,
            date: new Date().toLocaleDateString()
}
        if(todos.find(t=>t.text===todo.text))
            alert('You already entered this todo dummy')
        else setTodos([todo,...todos])
        
        setInputText('')
    }
    const statusHandler=(e)=>{setStatus(e.target.value)}
    const sortHandler=(e)=>{
        const value = e.target.value
        const localTodos = JSON.parse(localStorage.getItem('todos'))
    
        if(localTodos!==[]||localTodos!==null){
           if(value==='a-z'){
               const aToz = localTodos.sort((a,b)=>{
                   const todoA = a.text.toUpperCase()
                   const todoB = b.text.toUpperCase()
                   if(todoA<todoB)
                       return -1
                   if(todoA>todoB)
                       return 1
                   return 0
               })
               localStorage.setItem('todos',JSON.stringify(aToz))
           }
   
           if(value==='z-a'){
               const zToa = localTodos.sort((a,b)=>{
                   const todoA = a.text.toUpperCase()
                   const todoB = b.text.toUpperCase()
                   if(todoB<todoA)
                       return -1
                   if(todoB<todoA)
                       return 1
                   return 0
               })
               localStorage.setItem('todos',JSON.stringify(zToa))
           }
        }
    }
    return(
        <div className="form-div">
            <form>
                <div className="input-div">
                    <input value={inputText} onChange={inputHandler} type="text" maxLength='30' placeholder='add todo...'/>
                    <button onClick={submitHandler} type='submit'>+</button>
                    <select onChange={statusHandler} name="filter" id="">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incomplete">Icomplete</option>
                    </select>
                    <div className="button-container">
                        <button onClick={sortHandler} className="a-z" value='a-z'>A-Z</button>
                        <button onClick={sortHandler} className="z-a" value='z-a'>Z-A</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form