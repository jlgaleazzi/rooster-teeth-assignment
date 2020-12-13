import React, { useEffect, useState } from 'react'
import DogBreed from './DogBreed';

const styles = {
  breedsContainer: {
    display: 'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    width:'100%'
  },
  header: {
    padding:'10px',
    display:'flex',
    width:'100%',
    color:'#fff',
    fontSize:'2rem',
    justifyContent:'space-between'
  },
  search: {
    paddingRight:'10%',
  }
}

function App() {
  const [breeds, setBreeds] = useState([]);
  const [query, setQuery] = useState("");

  const onChange = (event) => setQuery(event.target.value);

  const filteredBreeds = breeds.filter((dog) => {
    return dog.breed.toLowerCase().includes(query)
  })



useEffect(() => {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => setBreeds(
    Object.keys(data.message).map((d) => ({ "breed":d, "subbreeds" :data.message[d]}))));
}, [])

  return (
    <>
    <div style={styles.header}>
      <div>
        Rooster Teeth React Dogs
      </div>
      <div style={styles.search}>
        <input type="text" placeHolder="Search" value={query} onChange={onChange}/>
      </div>
    </div>
    <div style={styles.breedsContainer}>
    {filteredBreeds.map( b => <DogBreed key={b.breed} breedName={b.breed}/>)}
    </div>
    </>
  );
}

export default App;
