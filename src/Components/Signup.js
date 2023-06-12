import { useState } from 'react';
import { signupFields } from "../Constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import Axios from 'axios';


const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  //handle Signup API Integration here
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(signupState);
    postData(signupState);
  };

  const postData = (signupState) => {
    var formData = new FormData();
    formData.append("Username", signupState.username);
    formData.append("Email_Address", signupState.email_address);
    formData.append("Password", signupState.password);
    formData.append("Confirm_Password", signupState.confirm_password);

    Axios.post('http://localhost:8000/restapi/', formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };
    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
    )
}