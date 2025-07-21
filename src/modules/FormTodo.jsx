const FormTodo = ({todos, setTodos}) => {
    function handleSubmit(e){

        e.preventDefault()
        const data = {
          id:todos[todos.length - 1]?.id ? todos[todos.length - 1].id + 1 : 1,
          title: e.target.todo.value,
          isComplated: false
        } 
        e.target.reset()
        setTodos([... todos, data])
      }
      
return(
   <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md w-[500px] mx-auto mt-5 flex justify-between">
        <input className="outline-none w-[80%] border-[2px] p-2 rounded-md" autoComplete="off" required type="text" placeholder="Enter your todo" name="todo" />
        <button className="w-[19%] p-2 rounded-md cursor-pointer bg-[blue] text-white " type="submit">Create</button>
     </form>
)
}

export default FormTodo