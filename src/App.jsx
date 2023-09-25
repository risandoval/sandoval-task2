import { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import ToDoList from './ToDoList';

function App() {
    const [todos, setTodos] = useState([]);

    function addTask(title) {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                {id: crypto.randomUUID(), title, completed: false},
            ]
        })
    }

    function checkTask(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }

                return todo;
            })
        })
    }

    function deleteTask(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    function toggleEdit(id) {
        setTodos((currentTodos) =>
          currentTodos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, editable: !todo.editable };
            }
    
            return todo;
          })
        );
    }

    function updateTask(id, newTaskTitle) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, title: newTaskTitle };
                }
                return todo;
            });
        });
    }

    return (
        <div className="w-full h-screen bg-bgColor flex flex-col">
            <AddTaskForm onSubmit={addTask} />

            <ToDoList 
                todos={todos} 
                checkTask={checkTask}
                toggleEdit={toggleEdit}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
        </div>
    )
}

export default App;