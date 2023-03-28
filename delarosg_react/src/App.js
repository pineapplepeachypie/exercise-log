import './App.css';
import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation'

function App() {
  const [exerciseToEdit, setExerciseToEdit ] = useState([]);

  return (
    <div className="App">
      <header className='App-header'>

      <Router>
        
        <Navigation />
        <h1>☀️Beach Body Exercise Log 🏖️</h1>
            <p className='descriptionParagraph'>Keep track of your work-outs and progress - you're on your way to your perfect beach bod!</p>
            <p className='descriptionParagraph'>This a Full Stack MERN App</p>
		<Routes>
          <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit} />}/>
          <Route path="/add-exercise" element={<AddExercisePage />}/>
          <Route path="/edit-exercise" element={ <EditExercisePage exerciseToEdit={exerciseToEdit}/>}/>
		  </Routes>
      </Router>
      </header>
      <footer>
      © 2022 Guyllian Dela Rosa
      </footer>
    </div>
  );
}

export default App;