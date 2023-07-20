import {useState, useEffect} from  'react'
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



const Diet = (props) =>{

    const [dietForm, setDietForm] = useState({
        id: "",
        breakfast: "",
        lunch: "",
        dinner: "",
        snack: "",
        hydration: "",
        date: "",
        //new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
    })
    const [diet, setDiet] = useState([])

		const BASE_URL = `${process.env.REACT_APP_BASEURL}/api/`;

    const getDiet = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allDiet = await response.json()
            setDiet(allDiet)
        }catch(err){
            //console.log(err)
        }

    }

    useEffect(()=>{getDiet()}, []);
   
   
    function handleChange(e) {
        setDietForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        // prevent reloading
        e.preventDefault();
        try{
            const myDiet = await fetch(`${process.env.REACT_APP_BASEURL}/api/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dietForm)
            })
            const myDietString = await myDiet.json()
            // calling this function with array and string
            setDiet([...diet, myDietString]);

          console.log(myDiet)
        } catch(err){
            console.log(err)
        }
    }



    return (
        <section>

        <form className="ff"onSubmit={handleSubmit}>
        <input 
                type ="text"
                name='id'
                value={dietForm.id}
                placeholder="Meal #"
                onChange={handleChange}
                
                />
            <input 
                type ="text"
                name='breakfast'
                value={dietForm.breakfast}
                placeholder="Breakfast"
                onChange={handleChange}
                
                />
           
           <input 
                type ="text"
                name='lunch'
                value={dietForm.lunch}
                placeholder="Lunch"
                onChange={handleChange}
                
                />
           
           <input 
                type ="text"
                name='dinner'
                value={dietForm.dinner}
                placeholder="Dinner"
                onChange={handleChange}
                
                />
           <input 
                type ="text"
                name='snack'
                value={dietForm.snack}
                placeholder="Snack"
                onChange={handleChange}
                
                />
           <input 
                type ="text"
                name='hydration'
                value={dietForm.hydration}
                placeholder="Hydration"
                onChange={handleChange}
                
                />
    
           <input 
                type ="date"
                name='date'
                value={dietForm.date}
                placeholder="Date"
                onChange={handleChange}
                
                />
           <input type ="submit" value="Do It" />
        </form>
        {diet.map((di, idx) => {
            console.log(di)
            return(
                <div key={idx}>

                    <diet di={di} />
                    
                  
                    <Card className='card7'>
                        
                        <Card.Body className='cb'>
                            <Card.Title>Date: {di.date}</Card.Title>
                            <Card.Text>
                     <ul>
                        <li classname="dd">Breakfast: {di.breakfast}</li>
                        <li>Lunch: {di.lunch}</li>
                        <li>Dinner: {di.dinner}</li>
                        <li>Snack: {di.snack}</li>
                        <li>Hydration: {di.hydration}</li>
                        <li>{di.date}</li>
                    </ul>
                            </Card.Text>
                            <Link to={`/diet/${di.id}`}><Button variant="outline-dark">View</Button></Link> 
                        </Card.Body>
                        </Card>
                
                </div>
                
            )
            
        })}
           
        
        </section>
    
    
        
        
    
    )
};


export default Diet
