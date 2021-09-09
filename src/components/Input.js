import React, { useState } from 'react'
import './Input.css'
import {useDispatch } from 'react-redux'
import  { saveTodo }  from '../features/TodoSlice'

function Input() {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        console.log(`adding ${input}`)

        dispatch(saveTodo({
            id: Date.now(),
            item:input,
            done:false
        }))

    }

  return (
    <div className="input">
        <input type="text" onChange={ e => setInput(e.target.value)} value={input}/>
        <button className="input__btn" onClick={addTodo}  >Add!</button>
    </div>
  )
}
 
export default Input
