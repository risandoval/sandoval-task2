import ToDoList from './ToDoList.jsx';

function App() {
  return (
    <div className="w-full h-screen bg-bgColor">
        <div className="border-b border-dark">
            <h1 className="p-2 text-2xl text-primary">ToDoLoo</h1>
        </div>

        {/* <div className="flex flex-col bg-primary">
            <div className="bg-secondary">
                <input type="text" className="w-full border"/>
            </div>
        </div> */}
        <ToDoList></ToDoList>
        
    </div>
    
  )
}

export default App
