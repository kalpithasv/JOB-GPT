import { useState } from 'react';
import { loginFields } from "../Constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import Axios from 'axios';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }
    
    var formData = new FormData();
    formData.append("Name", 'kalpitha');
    formData.append("Username", 'kalps');
    formData.append("Password", '12345');
    formData.append("Email", 'ikno');

    Axios.post('http://localhost:8000/restapi/',formData)
    .then(json => console.log(json.data))

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
      /*  const endpoint=`https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}`;
        fetch(endpoint,
            {
            method:'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(loginFields)
            }).then(response=>response.json())
            .then(data=>{
               //API Success from LoginRadius Login API
            })
            .catch(error=>console.log(error)) */

    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}