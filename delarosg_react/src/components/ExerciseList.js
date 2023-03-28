import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercise, onDelete, onEdit }) {
    return (
        <table id="exercise">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercise.map((exercise, i) => <Exercise exercise={exercise}
                    onEdit ={onEdit}
                    onDelete={onDelete}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
