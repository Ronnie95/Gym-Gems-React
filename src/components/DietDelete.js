import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function DietDelete() {
    const {dietId} = useParams();

    async function removeDiet() {
        //console.log("fi")
        try {
            // Make an API call to the DELETE route!
            await fetch(`http://localhost:8000/api/${dietId}/`, {
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
            
                <Link to={`/diet`}><Button variant="danger" onClick={removeDiet}>YES</Button></Link>
                
        
            <Link to={`/diet/${dietId}`}>
            <Button variant="success">NO</Button>{' '}

            </Link>
        </>
    )
}

export default DietDelete;