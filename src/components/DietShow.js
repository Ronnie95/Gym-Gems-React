import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function DietShow () {
    const [diets, setDiets] = useState([]);
    const { dietId } = useParams();
    console.log(dietId)
    async function getDiets() {
        try{
            let myDiets = await fetch(`http://localhost:8000/api/${dietId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            myDiets = await myDiets.json()
            console.log(myDiets)
            setDiets(myDiets);
        } catch(err) {
            console.log(err);
        }
    }
   // console.log(`Current Person: ${JSON.stringify(toDo)}`)
    useEffect(() => {
           getDiets();
         }, [])

         return(
            <>
             <div className="do">
                <h1>My View</h1>
                <h2>{diets.breakfast}</h2>
              <Link to={`/diet/${dietId}/edit`}><Button variant="success">Edit</Button>{' '}</Link> <Link to={`/${dietId}/delete`}><Button variant="success">Delete</Button>{' '}</Link>
                </div>
            
            </>
    
        )
    
}

export default DietShow