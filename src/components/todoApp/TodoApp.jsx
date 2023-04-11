import React from 'react'
import "./TodoApp.scss";
import Moon from '../../assets/todo/images/icon-sun.svg';
export const TodoApp = () => {
  return (
    <div className='todo-container'>
    <div className="image-section">
        <span className="contentWrapper">
            <span className='header-section'>
                <h2 className="todo-text">
                    T O D O
                </h2>
                <span className="toggle-button">
                    <img src={Moon}/>
                </span>
            </span>
            <span className="add-section">
                <span className="add-task-button">
                    <input type='checkbox' id='checkbox' className='checkbox'/>
                </span>
                    <input className="input-task" type="text" placeholder='Create a new todo ..'/>
            </span>
        </span>
    </div>
    <div>
        hey everyone
    </div>
    </div>
  )
}
