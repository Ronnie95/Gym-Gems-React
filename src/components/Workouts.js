import {useState, useEffect} from  'react'
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



const Workouts = (props) =>{

    const [workoutForm, setWorkoutForm] = useState({
        body_part: "",
        exercise: "",
        sets: "",
        reps: "",
        date: "",
        
    })
    const [workout, setWorkout] = useState([])

		const BASE_URL = "http://localhost:8000/api/workout";

    const getWorkout = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allWorkouts = await response.json()
            setWorkout(allWorkouts)
        }catch(err){
            //console.log(err)
        }

    }

    useEffect(()=>{getWorkout()}, []);
   
   
    function handleChange(e) {
        setWorkoutForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        // prevent reloading
        e.preventDefault();
        try{
            const myWorkout = await fetch(`http://localhost:8000/api/workout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(workoutForm)
            })
            const myWorkouts = await myWorkout.json()
            // calling this function with array and string
            setWorkout([...workout, myWorkouts]);

          //console.log(myDiet)
        } catch(err){
            console.log(err)
        }
    }



    return (
        <section>

        <form className="ffz"onSubmit={handleSubmit}>
            <input 
                type ="text"
                name='body_part'
                value={workoutForm.body_part}
                placeholder="Body Part"
                onChange={handleChange}
                
                />
           
           <input 
                type ="text"
                name='exercise'
                value={workoutForm.exercise}
                placeholder="Exercise"
                onChange={handleChange}
                
                />
           
           <input 
                type ="text"
                name='sets'
                value={workoutForm.sets}
                placeholder="Sets"
                onChange={handleChange}
                
                />
           <input 
                type ="text"
                name='reps'
                value={workoutForm.reps}
                placeholder="Reps"
                onChange={handleChange}
                
                />
    
           <input 
                type ="date"
                name='date'
                value={workoutForm.date}
                placeholder="Date"
                onChange={handleChange}
                
                />
           <input type ="submit" value="Do It" />
        </form>
        {workout.map((work, idx) => {
            console.log(work)
            return(
                <div key={idx}>

                    <workout work={work} />
                    
                  
                    <Card>
                        
                        <Card.Body className='cb'>
                            <Card.Title>{work.date}</Card.Title>
                            <Card.Text>
                     <ul>
                        <li>{work.body_part}</li>
                        <li>{work.exercise}</li>
                        <li>{work.sets}</li>
                        <li>{work.reps}</li>
                        <li>{work.date}</li>
                    </ul>
                            </Card.Text>
                            <Link to={`/workout/${work.id}`}><Button variant="primary">View</Button></Link> 
                        </Card.Body>
                        </Card>
                
                </div>
                
            )
            
        })}
           
        
        </section>
    
    
        
        
    
    )
};


export default Workouts
