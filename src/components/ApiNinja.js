import { useState,useEffect } from "react";
//import { Button } from "react-bootstrap";
//import { useParams } from "react-router-dom";
//import { Link, useParams } from "react-router-dom";
//import Button from 'react-bootstrap/Button';


function ApiNinja () {
const [api, setApi] = useState([])
//const {apiId} = useParams
async function getApi() {
    try{
        let myApi = await fetch(`https://sport-flask.p.rapidapi.com/sport`);
        myApi = await myApi.json()
        setApi(myApi);
    } catch(err) {
        console.log(err);
    }
}
useEffect(() => {
    getApi();
  }, [])

  return(
     <>
      <div className="do">
         <h1>My View</h1>
         <h2>{api.name}</h2>
      
         </div>
     
     </>

 )
}

export default ApiNinja