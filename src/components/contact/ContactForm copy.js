import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as Yup from 'yup'
// import ReCAPTCHA from "react-recaptcha";

import Footer from '../footer'
import { useMediaQuery } from '../hooks/mediaQuery'
import Teamwork from '../../static/images/teamwork.jfif'
import contactUsSchema from '../validation/contactUsSchema'
import { Agent } from '../teamBio/agentInfo/agentInfoList'
import { initialValues, initialFormErrors } from './initialValues'

import './style.css'

const nodeServerApi = 'https://calm-beyond-58148.herokuapp.com/api/send'

export default function Contact() {
    // const [captchaValue, setCaptchaValue] = useState(false)
    const isHidden = useMediaQuery('(min-width: 1023px)');
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);

    // const [message, setMessage] = useState([]);

    //////////////// HELPERS ////////////////
    const postNewMessage = message => {
        axios.post(nodeServerApi, message)
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

    // var verifyCallback = function(response) {
    //     console.log(formValues.captcha)
    //     console.log('response',response)
    //     setFormValues({...formValues, captcha:true} )
    // if(response!=null){
    //     // $("#rss").show();
    // }
    // setFormValues(...formValues.captcha = true)
    // };

    //////////////// EVENT HANDLERS ////////////////

    const onInputChange = e => {

        const { name, value } = e.target
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
        console.log(formValues)
        setFormValues({
            ...formValues,
            [name]: value

        })
        console.log(formValues)

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
            agent: toString(formValues.agent)
        };
        postNewMessage(newMessage);
        // if(formValues.captcha === true){
        //     console.log('here is the message... ', newMessage)
        //     postNewMessage(newMessage);
        // }
        // else {alert('please complete the captcha')}
    }

    //////////////// SIDE EFFECTS //////////////// 
    useEffect(() => {
        contactUsSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])


    // Main Function
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

                        <label >My timeframe is:</label>
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

                        <label for="agent"> Agent:</label>
                        <select
                            value={formValues.agent}
                            onChange={e => onInputChange(e)}
                            name='agent'
                            id="agents"
                        >
                            <option value="mhughes@kwcommercial.com">Please Select an Agent</option>
                            {/* {(Object.values(Agent).forEach(el => { console.log(el.name) }))} */}
                            {/* {(Object.values(Agent).forEach(agentData => {
                                {
                                    return (
                                        <div>
                                            {console.log(agentData.name, agentData.email)}
                                            <option value={agentData.email}>{agentData.name}</option>
                                        </div>
                                    )
                                }
                            }))} */}
                            <option name={Agent.MarkHughes.name} value={Agent.MarkHughes.email}>Mark Hughes (Team Lead | Generalist)</option>
                            <option name={Agent.HeatherMattlin.name} value={Agent.HeatherMattlin.email}>Heather Mattlin</option>
                            <option name={Agent.Libby.name} value={Agent.Libby.email}>Libby Brignon (Land)</option>
                            <option name={Agent.MarkHughes.name} value={Agent.MarkHughes.email}>Mark Hughes (Team Lead | Generalist)</option>
                            <option name={Agent.SueNa.name} value={Agent.SueNa.email}>Sue Na (Flex/Industrial | Multi Unit | Retail)</option>
                            <option name={Agent.PeterKim.name} value={Agent.PeterKim.email}>Peter Kim</option>
                            <option name={Agent.WillSchneider.name} value={Agent.WillSchneider.email}>Will Schneider (Industrial | Multi-Family | Office)</option> 
                            <option name="jason fadelli" value="jfadelli@gmail.com">Test</option> 
                        </select>


                        <label>Full name</label>
                        <input
                            value={formValues.name}
                            onChange={onInputChange}
                            type='text'
                            placeholder='full name'
                            name='name'
                        />

                        <label>Email address</label>
                        <input
                            value={formValues.email}
                            onChange={onInputChange}
                            type='email'
                            placeholder='email address'
                            name='email'
                        />

                        <label>Phone number</label>
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
                        {/* <ReCAPTCHA
                            sitekey="6LdbnHgaAAAAAIiCridFguHC1-fhyJX9QgoEdiQ_"
                            // onChange={onChange}
                            verifyCallback = {verifyCallback}
                        /> */}
                        <button disabled={disabled} onSubmit={onSubmitHandler}>Send</button>
                        {/* <button onSubmit={onSubmitHandler}>Send</button> */}

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