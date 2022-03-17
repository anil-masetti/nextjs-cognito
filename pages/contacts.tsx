import React, {useEffect, useState} from 'react';


function Contacts() {
  const [contacts, setContacts] = useState([]);

  const getContactHandler = async () => {
    //const response = await fetch('http://localhost:4000/api/contact/');
    const response = await fetch('https://9l96bcah4f.execute-api.eu-central-1.amazonaws.com/dev/api/contact', {
      headers: {
        "Authorization": "eyJraWQiOiJQTEI3ak03OGdKZGdVT1RaY0F0b3Z2REVHRm9CaE82S3lLSSs2V3lTSHNVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxM2Q1MjNjZi02ZDVlLTRlYTUtYmQxYy1mYTY1OWMwZTA0YjciLCJldmVudF9pZCI6IjNiZDFiZWQyLWQ4YjYtNGU5OS05ZmY1LWMwMzYwNGEyNTEwYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjQ3NDI5ODkwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9yNWJmV0RMS2UiLCJleHAiOjE2NDc0MzM0OTAsImlhdCI6MTY0NzQyOTg5MCwidmVyc2lvbiI6MiwianRpIjoiNGY4M2QwZTItZjdkNy00MzdmLTg0YmQtNTAwMDEwODgxNDg0IiwiY2xpZW50X2lkIjoiNzc1dW5jczQ4a3FhZnJmcnMzb3EyMDU3Mm8iLCJ1c2VybmFtZSI6InRlc3QifQ.c3eQTkn6ugY3viaQoGO9HSpqcr-AJmlvUYCH6pu6ShHxDfXuubvuKfo4CPCZ05lI9RSvi_BfiG5zFdczVrzWF57n225O9Ts9Pjrw2iizxp4B5fPQ54lzBbhRrjdftJF8Zvwf5JE9GiR4in93ImWv9d-aDspm6DKS2JbZB5ck4680ZxYzklnWjfhUbWrcX5mAlRGz_BY0c14sQSBxNNUIUbBiYKhGw0RDb5wQ-6AWlS3rrT7hm6ss1EP3479nk9y1Z3zeyylNHNQXCEK5noFTrf1l4L1LZy2bBVfcFjH5EpBY7RUuc5ypuSnX1WMbRWSO4xIg6fk6asHYrjMN0PQYLQ"
      },
      method: "GET",
      
    })
    const fetchedContacts = await response.json();
    setContacts(fetchedContacts);
  }

  

 

  

  // Read All Contacts
  useEffect(()=>{
    getContactHandler();
  },[])

  return (
    <div className="pb-2 bg-slate-200 h-screen"> 
      <ul>
        {
        contacts
            .map(contact =>
              <li key={contact._id}>{contact.name}</li>
            )
        }
      </ul>
      
    </div>
  );
}

export default Contacts;