
import React from 'react'
import Footer from '../footer'
import Teamwork from '../../static/images/teamwork.jfif'
// import '../../style/contact-form.css'

export default function Contact() {

    // const [body, setBody] = useState({

    // })

    return (
        <div className="content">
            <div className="content-row">
                <form className="contact-us">
                    <label for="intent">I am looking to:</label>
                    <select id="intent" type='select'>
                        <option value="Please Select">Please select an option</option>
                        <option value="Buy">Buy</option>
                        <option value="Sell">Sell</option>
                        <option value="lease">Lease</option>
                        <option value="offer to lease">Offer to Lease</option>
                        <option value="consult">Consult/Other</option>
                    </select>
                    <label for="intent">My Timeframe is:</label>
                    <select id="timeframe" type='select'>
                        <option value="Please Select">Please select an option</option>
                        <option value="Less than 3 months">Less than 3 months</option>
                        <option value="Less than 6 months">Less than 6 months</option>
                        <option value="Less than 12 months">Less than 12 months</option>
                        <option value="Next year">Next year</option>
                    </select>
                    <label>Full Name</label>
                    <input type='text' placeholder='full name'></input>
                    <label>Email Address</label>
                    <input type='email' placeholder='email address'></input>
                    <label>Phone Number</label>
                    <input type='tel' placeholder='phone: xxx-xxx-xxxx'></input>
                    <label> Message</label>
                    <input type='text' className="message-box" placeholder=''></input>
                </form>
                <img id="teamworkimg" alt="generic team working together" src={Teamwork} />
            </div>
            <Footer />
        </div>
    )
}


