import TodoForm from './components/TodoForm'
import './App.css'

function App() {

  return (
    <div className="mt-5"> {/*mt seria margin-top, mb margin bottom, ml margin left, mr margin right, m margin all y 
    con el paddin es lo mismo pero con p*/}
      <h1 className='mb-5 text-5xl font-bold text-blue-500'>To-Do App</h1>
      <TodoForm/>
    </div>
  )
}

export default App
