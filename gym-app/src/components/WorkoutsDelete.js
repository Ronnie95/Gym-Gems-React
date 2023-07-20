import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function WorkoutDelete() {
    const {workoutId} = useParams();

    async function removeWorkout() {
        //console.log("fi")
        try {
            // Make an API call to the DELETE route!
            await fetch(`${process.env.REACT_APP_BASEURL}/api/workout/${workoutId}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <h2>Do you want to delete?</h2>
            
                <Link to={`/workout`}><Button variant="danger" onClick={removeWorkout}>YES</Button></Link>
                
        
            <Link to={`/${workoutId}`}>
            <Button variant="success">NO</Button>{' '}

            </Link>
        </>
    )
}

export default WorkoutDelete;