import React from 'react';
import UserForm from './UserForm';


const NewUser = (params) => {
    function saveDataHandler(enteredData){
        const userData={
            ...enteredData, 
            id: Math.random().toString()
        };
        params.onFormSubmit(userData);
    }
    return <div>
        <UserForm onSaveUserData={saveDataHandler}/>
    </div>
}

export default NewUser