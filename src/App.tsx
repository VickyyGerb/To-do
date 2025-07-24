import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItem'
import './App.css'

function App() {

  return (
    <div className="bg-blue-900 grid py-5 min-h-screen"> {/*mt seria margin-top, mb margin bottom, ml margin left, mr margin right, m margin all y 
    con el paddin es lo mismo pero con p*/}
      <div className='rounded-lg bg-white place-self-center w-11/12 max-w-300 flex flex-col p-7 min-h-[650px] rounded-x1'>
        <h1 className='mb-5 text-5xl font-bold text-blue-500'>To-Do App</h1>
        <TodoForm/>
        <TodoItems/>
      </div>
    </div>
  )
}

export default App
