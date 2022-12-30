import React from 'react'

const Person = () => {
    return (
        <>
            <h1>Name: John</h1>
            <h2>Last Name: Doe</h2>
            <h2>Age: 30</h2>
        </>
    )
}


function App() {
    const name = 'John';
  return (
      <div className="App">
        <Person />

        </div>
  )
}

export default App
