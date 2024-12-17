import { useState } from "react"


function App() {
  const [newPostTit, setPostTit] = useState("")
  const [newPostAuth, setPostAuth] = useState("")
  const [newPostDesc, setPostDesc] = useState("")
  
  const [newArr, setArr] = useState([])

  const add = (event) => {
    event.preventDefault();
    // console.log("submit");
    let newObj = {
      title:newPostTit,
      author:newPostAuth,
      description:newPostDesc
    }
    setArr([...newArr, newObj])
    // console.log(newArr);

  }

  const remove = (postToRemove) => {
    // console.log(postToRemove);
    setArr(newArr.filter(curEl =>
      curEl !== postToRemove
    ))
  }

  return (
    <>
    <div className="container">
      <form onSubmit={add} className="text-center mt-5">
        <label htmlFor="title">Titolo</label>
        <input type="text" id="title" className="form-control" onChange={(event) => { setPostTit(event.target.value) }} />
        <label htmlFor="author">Autore</label>
        <input type="text" id="author" className="form-control" onChange={(event) => { setPostAuth(event.target.value) }} />
        <label htmlFor="description">Descrizione</label>
        <input type="text" id="description" className="form-control" onChange={(event) => { setPostDesc(event.target.value) }} />
        <button type="submit" className="btn btn-primary my-5">Aggiungi</button>

      </form>
      {/* <div>
        {newPostTit}
      </div> */}
      <ul className="list-group">
        {newArr.map((curPost, index) => {
          return (
            <>
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                <h2>Titolo: {curPost.title}</h2>
                <h4>Autore: {curPost.author}</h4>
                <p>Descrizione: {curPost.description}</p>
                <div className={`badge`}>asd</div>

              <button onClick={() => { remove(curPost) }} className="btn btn-primary">Remove</button>
              </li>
            </>
          )
        })}
      </ul>
    </div>
    </>
  )
}

export default App
