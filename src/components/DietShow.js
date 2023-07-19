import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function DietShow () {
    const [diets, setDiets] = useState([]);
    const { dietId } = useParams();
    console.log(dietId)
    async function getDiets() {
        try{
            let myDiets = await fetch(`http://localhost:8000/api/${dietId}/`, {
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
                <h1 classname="title1"> My Diet</h1>
                
                <ul>
                    <li className="show">{diets.breakfast}</li>
                    <li className="show">{diets.lunch}</li>
                    <li className="show">{diets.dinner}</li>
                    <li className="show">{diets.snack}</li>
                    <li className="show">{diets.hydration}</li>
                    <li className="show">{diets.date}</li>
                    
                </ul>
              <Link to={`/diet/${dietId}/edit`}><Button variant="dark">Edit</Button>{' '}</Link> <Link to={`/diet/${dietId}/delete`}><Button variant="dark">Delete</Button>{' '}</Link>
                </div>
            
            </>
    
        )
    
}

export default DietShow