import { useState } from "react"


function App() {
  const [newPostTit, setPostTit] = useState("")
  const [newPostAuth, setPostAuth] = useState("")
  const [newPostDesc, setPostDesc] = useState("")
  const [newPostStatus, setPostStatus] = useState("")

  const [newArr, setArr] = useState([])

  const add = (event) => {
    event.preventDefault();
    // console.log("submit");
    let newObj = {
      title: newPostTit,
      author: newPostAuth,
      description: newPostDesc,
      status: newPostStatus
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

          <div className="form-floating">
            <select defaultValue="Seleziona Stato Scritto" id="selection" class="form-select my-5" onChange={(event) => { setPostStatus(event.target.value) }}>
              <option value="" selected>Seleziona lo Stato del Post</option>
              <option value="draft">Bozza</option>
              <option value="evaluation">In valutazione</option>
              <option value="approved">Approvato</option>
            </select>
            {/* <label htmlFor="selection" className="fs-2">Seleziona Stato Scritto</label> */}
          </div>

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
                  <div className={`badge rounded-pill ${curPost.status === "approved" ? "text-bg-success" :
                      curPost.status === "draft" ? "text-bg-warning" :
                        curPost.status === "evaluation" ? "text-bg-danger" :
                          ""
                    }`}>{curPost.status.toUpperCase()}</div>

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
