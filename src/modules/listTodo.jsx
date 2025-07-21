const listTodo = ({todos, setTodos}) => {
    function handleDelete(ind){
        todos.splice(ind, 1)
        setTodos([...todos])
      }
      
      function handleEdit(id){
       let findbj = todos.find(item => item.id == id)
       let newValue = prompt(findbj.title)
      findbj.title = newValue
      setTodos([...todos])
      }


      return (
     <div>
      <ul className="bg-white space-y-3 p-4 rounded-md w-[500px] mx-auto mt-5">
        {todos.map((item, index) => (
          <li key={item.id} className="p-2 rounded-md bg-slate-300 flex justify-between ">
            <div className="flex items-center gap-2">
              <span>#{index + 1}.</span>
              <strong>{item.title}</strong>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleEdit} className="bg-green-500 text-white p-2 rounded-md">Edit</button>
              <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded-md">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default listTodo