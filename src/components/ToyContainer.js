import React from "react";
import ToyCard from "./ToyCard";


function ToyContainer({toys, setToys}) {
    
  function handleDelete(id) {
    const afterDelete = [...toys].filter((toy) => {
      return toy.id !== id
    })
    setToys(afterDelete);

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
  }

  function handleLike(id, likes) {
    let curLikes = likes + 1
    console.log(curLikes);
    const afterLike = [...toys].map((toy) => {
      if (toy.id === id) {
        return {...toy, likes: likes + 1}
      } else {
        return toy
      }
    })
    setToys(afterLike)

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({likes: parseInt(curLikes)}),
    })

  }
  
  return (
    <div id="toy-collection">
      {[...toys].map((toy) => { 
      return <ToyCard toy={toy} key={toy.id} handleDelete={handleDelete} handleLike={handleLike} /> }
      )}
      </div>
  );
}

export default ToyContainer;
