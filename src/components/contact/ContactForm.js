import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import Footer from '../footer'
import Teamwork from '../../static/images/teamwork.jfif'

import contactUsSchema from '../validation/contactUsSchema'

import './style.css'



const initialValues = {
    intent: {
        buy: true,
        sell: false,
        lease: false,
        offerToLease: false,
        consult: false
    },
    timeframe: {
        lessThan3: true,
        lessThan6: false,
        lessThan12: false,
        nextYear: false,
    },
    name: 'test',
    email: 'test@test.test',
    phone: '6546546545',
    message: 'hi'
}

const initialFormErrors = {
    intent: '',
    timeframe: '',
    name: '',
    email: '',
    phone: '',
    message: ''
}


export default function Contact() {

    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);
    const [message, setMessage] = useState([]);

    //////////////// HELPERS ////////////////
    const postNewMessage = message => {
        axios.post('http://localhost:3002/send', message)
            .then(res => {
                if (res.data.status === 'success'){
                    alert('Message Sent.');
                }else if (res.data.status === 'fail') {
                    alert('Message failed to send.')}
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setFormValues(initialValues)
            })
    }

    //////////////// EVENT HANDLERS ////////////////
    const onInputChange = evt => {
        const { name, value } = evt.target
        Yup
            .reach(contactUsSchema, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [name]: ""
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        setFormValues({
            ...formValues,
            [name]: value
        })
        console.log(formValues)
    }

    const onSubmitHandler = evt => {
        evt.preventDefault();
        const newMessage ={
            intent: formValues.intent,
            timeframe: formValues.timeframe,
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            phone: formValues.phone.trim(),
            message: formValues.message.trim()
        };
        console.log('newMessage',newMessage)
        setMessage(newMessage);
        postNewMessage(newMessage);
    }

    //////////////// SIDE EFFECTS //////////////// 
    useEffect(() => {
        contactUsSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])

    return (
        <div className="content">
            <div className="content-row">
                <form className="contact-us" onSubmit={onSubmitHandler}>
                    <label>I am looking to:</label>
                    <select 
                        value={formValues.intent}
                        onChange={onInputChange}
                        name="intent"
                        >   
                        <option value=''>Please select an option</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                        <option value="lease">Lease</option>
                        <option value="offerToLease">Offer to Lease</option>
                        <option value="consult">Consult/Other</option>
                    </select>

                    <label >My Timeframe is:</label>
                    <select 
                        id="timeframe" 
                        type='select'
                        value={formValues.timeframe}
                        onChange={onInputChange}
                        name='timeframe'
                        >
                        <option value="Please Select">Please select an option</option>
                        <option value="lessThan3">Less than 3 months</option>
                        <option value="lessThan6">Less than 6 months</option>
                        <option value="lessThan12">Less than 12 months</option>
                        <option value="nextYear">Next year</option>
                    </select>

                    <label>Full Name</label>
                    <input 
                        value={formValues.name}
                        onChange={onInputChange}
                        type='text' 
                        placeholder='full name'
                        name='name' 
                    />

                    <label>Email Address</label>
                    <input 
                        value={formValues.email}
                        onChange={onInputChange}
                        type='email' 
                        placeholder='email address'
                        name='email'
                    />

                    <label>Phone Number</label>
                    <input
                        value={formValues.phone}
                        onChange={onInputChange}
                        type='tel' 
                        placeholder='phone'
                        name='phone'
                    />

                    <label> Message</label>
                    <textarea
                        value={formValues.message}
                        onChange={onInputChange}
                        type='text' 
                        className="message-box" 
                        placeholder='type your message here'
                        name="message"
                    />

                    <button disabled={disabled} onSubmit={onSubmitHandler}> Send</button>
                </form>
                <img id="teamworkimg" alt="generic team working together" src={Teamwork} />
            </div>
            <Footer />
        </div>
    )
}
