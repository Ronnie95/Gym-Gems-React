import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//import { Button } from "react-bootstrap";
//import { useParams } from "react-router-dom";
//import { Link, useParams } from "react-router-dom";
//import Button from 'react-bootstrap/Button';


function ApiNinja () {
    const [ex, setEx ] = useState([])
    const url = 'https://exercisedb.p.rapidapi.com/exercises';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '05c0b0e6c5msh734830410de9d06p10e087jsn21bf4d482e73',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        },
    };
    async function appp() {

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setEx(result)
          //  console.log(result);
        } catch (error) {
            console.error(error);
        }



    }
    useEffect(()=>{appp()}, []);
    console.log(ex)


    return(
        <div>
            {ex.map((exs, idx) => {
                return (
                    <div key={idx}>
                        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={exs.gifUrl} alt="image" />                        
      <Card.Body>
        <Card.Title>{exs.bodyPart} exercise</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Equipment: {exs.equipment}</ListGroup.Item>
    
      </ListGroup>
      <Card.Body>
      </Card.Body>
    </Card>
                                              
                    </div>
                    )
                })}
        </div>
    )
    





    
}

export default ApiNinja