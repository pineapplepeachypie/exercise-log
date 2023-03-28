import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';



export const AddExercisePage = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const addExercise = async () => {
        const newExercise= {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert ('Success - Exercise has been added');
        } else{
            alert(`Failed to add exercise, status code ${response.status}`);
        }
        navigate('/');
    };

    return (
        <>
        <h3>Create Exercise </h3>
        <div className='createNewExercise'>
            
            <label for='name'>Exercise</label>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
                <br></br>
            <label for='reps'>Reps</label>
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)} />
                <br></br>
            <label for='weight'>Weight</label>
            <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
                <br></br>
            <label for='unit'>Choose Unit</label>
            <select value={unit}
                onChange={e => setUnit(e.target.value)}>
                <option value='lbs'>lbs</option>
                <option value='kgs'>kgs</option>
            </select>
                <br></br>
            <label for='date'>Date</label>
            <input
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)} />
                <br></br>

        </div>
        <button
                onClick={addExercise}
            >Add</button>
        </>
    );
}

export default AddExercisePage;