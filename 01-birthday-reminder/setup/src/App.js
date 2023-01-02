import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [personas,setPersonas] = useState(data)
  return <main>
    <section className="container">
        <h3> {personas.length} cumpleaños hoy</h3>
        <List personas={personas}/>
        <button onClick={()=> setPersonas([])}>borrar todo</button>
    </section>

  </main>
}

export default App;
