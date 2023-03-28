import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ setExerciseToEdit}) {
    const [exercise, setExercise] = useState([]);
    const navigate = useNavigate();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status===204){
            const newExercise = exercise.filter(m => m._id !== _id);
            setExercise(newExercise);

        } else{
            console.error('Failed to delete')
        }
    }

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit)
        navigate('/edit-exercise')
    }

    const loadExercise = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercise(data);
    }

    useEffect( () => {
        loadExercise();
    }, []);

    return (
        <>
            
            <ExerciseList exercise={exercise} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
        </>
    );
}

export default HomePage;