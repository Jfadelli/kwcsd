import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import axios from 'axios'

import * as Yup from 'yup'
import Footer from '../footer'

import { useMediaQuery } from '../hooks/mediaQuery'

import Teamwork from '../../static/images/teamwork.jfif'

import contactUsSchema from '../validation/contactUsSchema'

import './style.css'

import { Agent } from '../teamBio/agentInfo/agentInfoList'

import ReCAPTCHA from "react-recaptcha";

// const liveAPI = 'https://kwcsd-mail-util.herokuapp.com/api/send'
const testAPI = 'http://localhost:5000/api/send'


const initialValues = {
    intent: {
        buy: true,
        sell: false,
        lease: false,
        offerToLease: false,
        consult: false,
    },
    timeframe: {
        lessThan3: true,
        lessThan6: false,
        lessThan12: false,
        nextYear: false,
    },
    agent: 'jfadelli@gmail.com',
    name: 'jason',
    email: 'jfadelli@gmail.com',
    phone: '7604053432',
    message: 'test message',
    captcha: false

}

const initialFormErrors = {
    intent: '',
    timeframe: '',
    agent: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha:''
}


export default function Contact() {
    // const [captchaValue, setCaptchaValue] = useState(false)
    const isHidden = useMediaQuery('(min-width: 1023px)');
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);

    // const [message, setMessage] = useState([]);

    //////////////// HELPERS ////////////////
    const postNewMessage = message => {
        axios.post(testAPI, message)
            .then(res => {
                if (res.data.status === 'success') {
                    alert('Message Sent.');
                }
                else if (res.data.status === 'fail') {
                    alert('Message failed to send.')
                }
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
    }

    const onSubmitHandler = evt => {
        evt.preventDefault();
        const newMessage = {
            intent: formValues.intent,
            timeframe: formValues.timeframe,
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            phone: formValues.phone.trim(),
            message: formValues.message.trim(),
            agent: formValues.agent
        };
        console.log('here is the message... ', newMessage)
        postNewMessage(newMessage);
    }


    //////////////// SIDE EFFECTS //////////////// 
    useEffect(() => {
        contactUsSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])

    return (
        <div className="wrapper">
            <div className="flexColumn">
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
                            value={formValues.timeframe}
                            onChange={onInputChange}
                            name="timeframe"
                        >
                            <option value=''>Please select an option</option>
                            <option value="lessThan3">Less than 3 months</option>
                            <option value="lessThan6">Less than 6 months</option>
                            <option value="lessThan12">Less than 12 months</option>
                            <option value="nextYear">Next year</option>
                        </select>

                        <label> Agent:</label>
                        <select
                            value={formValues.agent}
                            onChange={onInputChange}
                            name='agent'
                        >
                            <option value={Agent.JasonTest.email}>Jason Test</option>
                            <option value={Agent.MarkHughes.email}>Please select an agent</option>
                            <option value={Agent.Antonia.email}>Antonia Bokelman</option>
                            <option value={Agent.Libby.email}>Libby Brignon (Land)</option>
                            <option value={Agent.MarkHughes.email}>Mark Hughes (Team Lead | Generalist)</option>
                            <option value={Agent.SueNa.email}>Sue Na (Flex/Industrial | Multi Unit | Retail)</option>
                            <option value={Agent.TommyShort.email}>Tommy Short</option>
                            <option value={Agent.VanSpears.email}>Van Spears (Multi-Family | Industrial | Leasing | Investment)</option>
                            <option value={Agent.WillSchnieder.email}>Will Schnieder</option>

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
                            maxLength='10'
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
                        <ReCAPTCHA
                            sitekey="6LdbnHgaAAAAAIiCridFguHC1-fhyJX9QgoEdiQ_"
                            onChange={onInputChange}
                        />
                        <button disabled={disabled} onSubmit={onSubmitHandler}> Send</button>

                    </form>
                    <img style={styles.container(isHidden)} id="teamworkimg" alt="generic team working together" src={Teamwork} />
                </div>
            </div>


            <Footer />
        </div>
    )
}

const styles = {
    container: isHidden => ({
        display: isHidden ? 'flex' : 'none',
    })
};