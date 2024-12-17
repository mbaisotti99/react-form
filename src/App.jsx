import { useState } from "react"


function App() {
  const [newPost, setPost ]= useState("")

  const [newArr, setArr] = useState([])

  const add = (event) => {
    event.preventDefault();
    console.log("submit");  

    setArr([...newArr, newPost])
  }

  return (
    <>
      <form onSubmit={add}>
        <label htmlFor="title"></label>
        <input type="text" id="title" className="form-control" onChange={(event) =>{setPost(event.target.value)}}/>
        <button type="submit" className="btn btn-primary">Aggiungi</button>
      </form>
      <div>
        {newPost}
      </div>
      <ul className="list-group">
      {newArr.map((curPost, index) => {
        return (
          <li className="list-group-item" key={index}>
            {curPost}
          </li>
        )
      })}
      </ul>
    </>
  )
}

export default App
