import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function WorkoutShow () {
    const [work, setWork] = useState([]);
    const { workoutId } = useParams();

    async function getWork() {
        try{
            let myWork = await fetch(`http://localhost:8000/api/workout/${workoutId}/`, {
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
                <h1>My View</h1>
                <h2>{work.body_part}</h2>
              <Link to={`/workout/${workoutId}/edit`}><Button variant="success">Edit</Button>{' '}</Link> <Link to={`/workout/${workoutId}/delete`}><Button variant="success">Delete</Button>{' '}</Link>
                </div>
            
            </>
    
        )
    
}

export default WorkoutShow