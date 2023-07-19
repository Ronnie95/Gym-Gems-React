import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function WorkoutEdit() {
    const { workoutId } = useParams();
    console.log(workoutId)
    const [editWorkout, setEditWorkout] = useState({
        body_part: "",
        exercise: "",
        sets: "",
        reps: "",
        date:"",
    })
    const navigate = useNavigate()
    //const handleChange = (e) => setEditToDo({ ...editToDo, [e.target.do]: e.target.value })

    async function getWorkout() {
        try{
            let myWorkouts = await fetch(`http://localhost:8000/api/workout/${workoutId}/`);
            myWorkouts = await myWorkouts.json()
            setEditWorkout(myWorkouts);
        } catch(err) {
            console.log(err);
        }
    }
   // console.log(`Current Person: ${JSON.stringify(toDo)}`)
    useEffect(() => {
           getWorkout();
         }, [])


    function handleChange(e) {
        setEditWorkout((currentState) => ({
            ...currentState,
           [e.target.name] : e.target.value
        }))
    }
    async function handleSubmit(e) {
        //e.preventDefault()
        // console.log(editForm)
        try {
            e.preventDefault();
            await fetch(`http://localhost:8000/api/workout/${workoutId}/`, {

            method: "PUT",
            headers: {
                 "Content-Type": "application/json"
                 },
            body: JSON.stringify(editWorkout)
            });
            return navigate(`/workout`);
            } catch(err) {
                console.log(err)
            }

        } 
        return (
            <>
            <h1>Edit</h1>
            
            
            <form onSubmit={handleSubmit}>
                     <input 
                        type ="text"
                        name='body_part'
                        value={editWorkout.body_part}
                        placeholder="Body Part"
                        onChange={handleChange}
                     />
           
           <input 
                type ="text"
                name='exercise'
                value={editWorkout.exercise}
                placeholder="Exercise"
                onChange={handleChange}
                
                />
           
           <input 
                type ="text"
                name='sets'
                value={editWorkout.sets}
                placeholder="Sets"
                onChange={handleChange}
                
                />
           <input 
                type ="text"
                name='reps'
                value={editWorkout.reps}
                placeholder="Snack"
                onChange={handleChange}
                
                />
          
    
           <input 
                type ="date"
                name='date'
                value={editWorkout.date}
                placeholder="Date"
                onChange={handleChange} />
                                <button>Edit</button>
                            </form> 
            </>
            
                )
        }
            
    
   
;



export default WorkoutEdit;