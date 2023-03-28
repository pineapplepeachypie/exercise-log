import 'dotenv/config';
import * as exercises from './exercise_model.mjs';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

//This function checks if the request date is in the correct format of MM-DD-YY
function isDateValid(date) {
    // Test using a regular expression. 
    // To learn about regular expressions see Chapter 6 of the text book
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

//This function checks if the value of the request unit is either 'kgs' or 'lbs'. 
function isUnitCorrect(unit){
    if (unit === 'kgs' || unit === 'lbs'){
        return true;
    } else{
        return false;
    }
}

//this function checks if the first three properties, name, reps, and weight are valid per the required specifications. 
function firstThreeProps(name, reps, weight){
    if(name.length > 0 && reps > 0 && reps % 1 === 0 && reps != true && weight > 0 && weight % 1 === 0 && weight != true){
        return true;
    } else{
        return false;
    }
}

//this is the POST end point for creating a new document to be added to the collection. 
app.post('/exercises', (req, res) => {
    if (firstThreeProps(req.body.name, req.body.reps, req.body.weight) === true && isUnitCorrect(req.body.unit) === true && isDateValid(req.body.date) === true){
        exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch (error => {
            console.error(error);
            res.status(400).json({Error: 'Invalid Request'});
        });
    } else{
        res.status(400).json({Error: 'Invalid Request'});
    }


});


/**
 * Retrive the exercise corresponding to the ID provided in the URL.
 */
 app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercise => {
            if (exercise !== null){ 
                res.json(exercise)
            } else {
                res.status(404).json({Error: 'Not Found'})
            }
        })
        .catch (error => {
            console.error(error);
            res.status(404).json({Error: 'Request Failed'})
        })

});


app.get('/exercises', (req, res) => {
    let filter = {};
    exercises.findExercise(filter, '', 0)
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.send({Error: 'Request Failed'})
        })

});

function propertyIsNotNull(name, reps, weight, unit, date){
    if (name != null && reps != null && weight != null && unit != null && date != null){
        return true;
    } else {
        return false;
    }
}


app.put('/exercises/:_id', (req, res) => {
    if (propertyIsNotNull(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date) === true && firstThreeProps(req.body.name, req.body.reps, req.body.weight) === true && isUnitCorrect(req.body.unit) === true && isDateValid(req.body.date) === true){
    exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1){
                res.json({_id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date})
            } else{
                res.status(404).json({Error: 'Not Found'})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Invalid Request'})
        })
    } else{
        res.status(400).json({Error: 'Invalid Request'})
    }
});

/**
 * Delete the movie whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({Error: 'Not Found'});
            }
        })
        .catch (error =>{
            console.error(error);
            res.send({Error: 'Request Failed'})
        })

});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});