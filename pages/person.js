
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"


export default function person() {

  const [person, updatePerson] = useState(null);

  const baseURL = 'http://localhost:3000/person/'

  console.log("hi")
  useEffect(() => {
    console.log("hello space");
    axios.get(baseURL).then((response) => {
      console.log("hi");
      updatePerson(response.data);
    }).catch((error) => console.log(error))
    console.log(person);
  });


  return (
    <>
      <h1> Person Page </h1>
      
        <p>content: {JSON.stringify(person)} </p>
 
    </>
  );

}
