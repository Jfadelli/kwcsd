import React, { useState, useEffect } from 'react';
import './style.css'
import Teamwork from '../../static/images/teamwork.jfif'
import Footer from '../footer'
import { useMediaQuery } from '../hooks/mediaQuery'
import { sendContactForm } from '../../services/emailService'


const InputForm = () => {
    const isHidden = useMediaQuery('(min-width: 1023px)');
    const [formValues, setFormValues] = useState({
        type: "",
        timeframe: "",
        agent: "",
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                type: formValues.type,
                timeframe: formValues.timeframe,
                fullName: formValues.fullName.trim(),
                email: formValues.email.trim(),
                phone: formValues.phone.trim(),
                message: formValues.message.trim(),
                agent: formValues.agent
            };

            const result = await sendContactForm(data);

            if (result.success) {
                alert('Message sent successfully!');
                // Reset form
                setFormValues({
                    type: "",
                    timeframe: "",
                    agent: "",
                    fullName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                alert(`Failed to send message: ${result.message}`);
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };
    useEffect(() => {
    }, [formValues])

    return (
        <div className="wrapper">
            <div className="flexColumn">
                <div className="content-row">
                    <form className="contact-us" onSubmit={handleSubmit}>
                        <label htmlFor="type">I am looking to:</label>
                        <select name="type" id="type" onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                            <option value="lease">Lease</option>
                            <option value="offerToLease">Offer to Lease</option>
                            <option value="consult">Consult</option>
                        </select>

                        <label htmlFor="timeframe">My timeframe is:</label>
                        <select name="timeframe" id="timeframe" onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option value="lessThan3Months">Less than 3 Months</option>
                            <option value="lessThan6Months">Less than 6 Months</option>
                            <option value="lessThan12Months">Less than 12 Months</option>
                            <option value="nextYear">Next Year</option>
                        </select>

                        <label htmlFor="agent">Agent:</label>
                        <select name="agent" id="agent" onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option name="MarkHughes" value="markhughes@example.com">Mark Hughes (Team Lead | Generalist)</option>
                            <option name="HeatherMattlin" value="heathermattlin@example.com">Heather Mattlin</option>
                            <option name="Libby" value="libbybrignon@example.com">Libby Brignon (Land)</option>
                            <option name="SueNa" value="suena@example.com">Sue Na (Flex/Industrial | Multi Unit | Retail)</option>
                            <option name="PeterKim" value="peterkim@example.com">Peter Kim</option>
                            <option name="WillSchneider" value="willschneider@example.com">Will Schneider (Industrial | Multi-Family | Office)</option>
                            {/* <option name="JasonFadelli" value="jfadelli@gmail.com">Test</option> */}
                        </select>

                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" onChange={handleChange} />

                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" onChange={handleChange} />

                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" onChange={handleChange} />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" onChange={handleChange} />

                        <button onSubmit={handleSubmit} onClick={handleSubmit} type="submit">Submit</button>
                    </form>
                    <img style={styles.container(isHidden)} id="teamworkimg" alt="generic team working together" src={Teamwork} />

                </div>

            </div>
            <Footer />
        </div>
    );
};
const styles = {
    container: isHidden => ({
        display: isHidden ? 'flex' : 'none',
    })
};
export default InputForm;