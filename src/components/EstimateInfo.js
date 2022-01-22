import react, { useState } from "react";



const EstimateInfo = (props) => {
    const [enteredAddress,setEnteredAddress] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');

    const addressChangeHandler = (event) => {
        setEnteredAddress(event.target.value)
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    };

    const collectedInfo = (event) => {
        event.preventDefault();
        const collectedInfo = {
            address: enteredAddress,
            email: enteredEmail
        };

        props.onEnteredData(collectedInfo);       
        setEnteredAddress('');
        setEnteredEmail('');
    }

    return (
        <div>
            <h3>Need a Quote for your driveway? Enter your address</h3>
            <form onSubmit={collectedInfo}>
                <div>
                    <label>Address </label>
                    <input type='text' value={enteredAddress} onChange={addressChangeHandler}></input>
                </div>
                <div>
                    <label>Email </label>
                    <input type ='email' value={enteredEmail} onChange={emailChangeHandler}></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}



export default EstimateInfo;