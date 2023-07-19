import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function DietEdit() {
    const { dietId } = useParams();
    console.log(dietId)
    const [ediDiet, setEditDiet] = useState({})
    const navigate = useNavigate()
    //const handleChange = (e) => setEditToDo({ ...editToDo, [e.target.do]: e.target.value })

    async function getDiets() {
        try{
            let myDiets = await fetch(`http://localhost:8000/api/${dietId}/`);
            myDiets = await myDiets.json()
            setEditDiet(myDiets);
        } catch(err) {
            console.log(err);
        }
    }
   // console.log(`Current Person: ${JSON.stringify(toDo)}`)
    useEffect(() => {
           getDiets();
         }, [])


    function handleChange(e) {
        setEditDiet((currentState) => ({
            ...currentState,
           [e.target.name] : e.target.value
        }))
    }
    async function handleSubmit(e) {
        //e.preventDefault()
        // console.log(editForm)
        try {
            e.preventDefault();
            await fetch(`http://localhost:8000/api/${dietId}/`, {

            method: "PUT",
            headers: {
                 "Content-Type": "application/json"
                 },
            body: JSON.stringify(ediDiet)
            });
            return navigate(`/diet`);
            } catch(err) {
                console.log(err)
            }

        } 
        return (
            <>
            <h1>Edit your meal</h1>
            
            
            <form onSubmit={handleSubmit}>
                     <input 
                        type ="text"
                        name='breakfast'
                        value={ediDiet.breakfast}
                        placeholder="Breakfast"
                        onChange={handleChange}
                     />
           
           <input 
                type ="text"
                name='lunch'
                value={ediDiet.lunch}
                placeholder="Lunch"
                onChange={handleChange}
                
                />
           
           <input 
                type ="text"
                name='dinner'
                value={ediDiet.dinner}
                placeholder="Dinner"
                onChange={handleChange}
                
                />
           <input 
                type ="text"
                name='snack'
                value={ediDiet.snack}
                placeholder="Snack"
                onChange={handleChange}
                
                />
           <input 
                type ="text"
                name='hydration'
                value={ediDiet.hydration}
                placeholder="Hydration"
                onChange={handleChange}
                
                />
    
           <input 
                type ="date"
                name='date'
                value={ediDiet.date}
                placeholder="Date"
                onChange={handleChange} />
                                <input type ="submit" value="Do It" />
                            </form> 
            </>
            
                )
        }
            
    
   
;



export default DietEdit;