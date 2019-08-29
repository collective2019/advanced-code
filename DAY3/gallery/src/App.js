import React from 'react';
import './App.css';
import Form from './components/Form';
import Gallery from './components/Gallery'


function App() {
  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <h2>Add your favorite images!</h2>
      <Form />
      <Gallery/>
    </div>
  );
}

export default App;
