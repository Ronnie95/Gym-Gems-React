import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function WorkoutShow () {
    const [work, setWork] = useState([]);
    const { workoutId } = useParams();
    

    async function getWork() {
        try{
            let myWork = await fetch(`${process.env.REACT_APP_BASEURL}/api/workout/${workoutId}/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },


            });
            myWork = await myWork.json()
            setWork(myWork);
        } catch(err) {
            console.log(err);
        }
    }
   // console.log(`Current Person: ${JSON.stringify(toDo)}`)
    useEffect(() => {
           getWork();
         }, [])

         return(
            <>
             <div className="do">
                <h1>My Workout's For: {work.date}</h1>
                 <ul>
                    <li className="show">{work.body_part}</li>
                    <li className="show">{work.exercise}</li>
                    <li className="show">{work.sets}</li>
                    <li className="show">{work.reps}</li>
                    <li className="show">{work.hydration}</li>
                    <li className="show">{work.date}</li>
                </ul>
              <Link to={`/workout/${workoutId}/edit`}><Button variant="success">Edit</Button>{' '}</Link> <Link to={`/workout/${workoutId}/delete`}><Button variant="success">Delete</Button>{' '}</Link>
                </div>
            
            </>
    
        )
    
}

export default WorkoutShow