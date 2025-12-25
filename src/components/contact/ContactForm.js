import React, { useState, useEffect } from 'react';
import Teamwork from '../../static/images/teamwork.jfif'
import Footer from '../footer'
import { useMediaQuery } from '../hooks/mediaQuery'
import { sendContactForm } from '../../services/emailService'
import { useStyles } from './contactStyles'
import { Agent } from '../teamBio/agentInfo/agentInfoList'


const InputForm = () => {
    const isSmall = useMediaQuery('(min-width: 768px)');
    const classes = useStyles();

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
        <div className={classes.wrapper}>
            <div className={classes.flexCol}>
                <div className={classes.content}>
                    <h2 className={classes.title}>Contact Us</h2>
                    <section className={classes.p}>
                        <p>We're here to help with all your commercial real estate needs. Whether you're looking to buy, sell, lease, or simply need expert advice, our team is ready to assist you.</p>
                    </section>

                    <form className={classes.form} onSubmit={handleSubmit}>
                        <div className={classes.formContainer}>
                            <div className={classes.formImageSection} style={picStyle.container(isSmall)}>
                                <div className={classes.imageWrapper}>
                                    <img className={classes.img} src={Teamwork} alt="Commercial real estate team collaboration" />
                                </div>
                            </div>

                            <div className={classes.formFieldsSection}>
                                <div className={classes.formGrid}>
                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel} htmlFor="type">
                                            I am looking to <span className={classes.required}>*</span>
                                        </label>
                                        <select
                                            className={classes.select}
                                            name="type"
                                            id="type"
                                            value={formValues.type}
                                            onChange={handleChange}
                                        >
                                            <option value="">- Select an option -</option>
                                            <option value="buy">Buy</option>
                                            <option value="sell">Sell</option>
                                            <option value="lease">Lease</option>
                                            <option value="offerToLease">Offer to Lease</option>
                                            <option value="consult">Consult</option>
                                        </select>
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel} htmlFor="timeframe">
                                            My timeframe is <span className={classes.required}>*</span>
                                        </label>
                                        <select
                                            className={classes.select}
                                            name="timeframe"
                                            id="timeframe"
                                            value={formValues.timeframe}
                                            onChange={handleChange}
                                        >
                                            <option value="">- Select an option -</option>
                                            <option value="lessThan3Months">Less than 3 Months</option>
                                            <option value="lessThan6Months">Less than 6 Months</option>
                                            <option value="lessThan12Months">Less than 12 Months</option>
                                            <option value="nextYear">Next Year</option>
                                        </select>
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel} htmlFor="agent">
                                            Preferred Agent
                                        </label>
                                        <select
                                            className={classes.select}
                                            name="agent"
                                            id="agent"
                                            value={formValues.agent}
                                            onChange={handleChange}
                                        >
                                            <option value="">- Select an option -</option>
                                            {Object.keys(Agent).map((agentKey) => {
                                                const agent = Agent[agentKey];
                                                const specialization = agent.specialization || 'General';
                                                return (
                                                    <option
                                                        key={agentKey}
                                                        name={agentKey}
                                                        value={agent.email}
                                                    >
                                                        {agent.name} ({specialization})
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel} htmlFor="fullName">
                                            Full Name <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formValues.fullName}
                                            placeholder="Your full name"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel} htmlFor="email">
                                            Email Address <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formValues.email}
                                            placeholder="your.email@example.com"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel} htmlFor="phone">
                                            Phone Number <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formValues.phone}
                                            placeholder="(555) 555-5555"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={classes.formFieldFullWidth}>
                                        <label className={classes.fieldLabel} htmlFor="message">
                                            Message <span className={classes.required}>*</span>
                                        </label>
                                        <textarea
                                            className={classes.textarea}
                                            id="message"
                                            name="message"
                                            value={formValues.message}
                                            placeholder="Tell us about your needs..."
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <button className={classes.button} type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const picStyle = {
    container: isSmall => ({
        display: isSmall ? 'block' : 'none',
    }),
};

export default InputForm;