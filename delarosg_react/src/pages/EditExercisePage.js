import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditExercisePage = ({exerciseToEdit}) => {
    const navigate = useNavigate();

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date}
        const response = await fetch (`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        } );
        if (response.status === 200){
            alert('Successful update!');
        } else{
            alert(`Update failed with staus code ${response.status} - taking you back to HomePage`);
        }
        navigate('/');
    }

    return (
        <>
        <div>
            <h3>Edit Exercise</h3>
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

        </div>
        <button
                onClick={editExercise}
            >Save</button>
        </>
    );
}

export default EditExercisePage;