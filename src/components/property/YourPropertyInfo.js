import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import PropertyValuationSchema from '../validation/PropertyValuationSchema'
import { sendPropertyValuation } from '../../services/emailService'

import PropertyPhoto from '../../static/images/hi-rise-bldg.jpg'
import Footer from '../footer'

import { useStyles } from './style'

import { initialValues, initialFormErrors } from './initialValues'

import { useMediaQuery } from '../hooks/mediaQuery'

export default function YourPropertyInfo(props) {
    const [property, setProperty] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    // const [disabled, setDisabled] = useState(true);
    const isSmall = useMediaQuery('(min-width: 768px)');
    const isRow = useMediaQuery('(min-width: 768px)');
    // const isWide = useMediaQuery('(min-width: 768px)');

    //////////////// HELPERS ////////////////
    const postNewProperty = async (property) => {
        try {
            const result = await sendPropertyValuation(property);

            if (result.success) {
                alert('Property valuation request sent successfully!');
                setFormValues(initialValues);
            } else {
                alert(`Failed to send request: ${result.message}`);
            }
        } catch (err) {
            console.error('Error submitting property valuation:', err);
            alert('An unexpected error occurred. Please try again.');
        }
    }

    //////////////// EVENT HANDLERS ////////////////
    const onInputChange = evt => {
        const { name, value } = evt.target
        Yup
            .reach(PropertyValuationSchema, name)
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

    const onSubmit = evt => {
        evt.preventDefault()
        const newProperty = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            phone: formValues.phone.trim(),
            street_address: formValues.street_address.trim(),
            city: formValues.city.trim(),
            zip: formValues.zip.trim(),
            country: formValues.country.trim(),
            property_type: formValues.property_type,
            building_sf: formValues.building_sf.trim(),
            lot_size: formValues.lot_size.trim()
        }
        setProperty(newProperty)
        postNewProperty(newProperty)  // Fixed: use newProperty instead of stale state
        console.log('posted')
    }

    //////////////// SIDE EFFECTS //////////////// 
    useEffect(() => {
        PropertyValuationSchema.isValid(formValues).then(valid => {
            // setDisabled(!valid);
        })
    }, [formValues])

    const classes = useStyles()

    //////////////// Form JSX //////////////// 

    return (
        <div className={classes.wrapper}>
            <div className={classes.flexCol}>
                <div className={classes.content}>
                    <h2 className={classes.title}>Property Valuation</h2>
                    <section className={classes.p}>
                        <p>Please identify any listed KW Commercial property for Sale or Lease that you are interested in and we will thoroughly research the market and provide you with a report indicating our opinion of the value of the investment, the competitive Sale or Lease values in the market, and alternate market opportunities we identify that meet your criteria. We will represent you in any Sale or Lease opportunity and the Seller or Building Owner will compensate us through their listing agent at no cost to you. We can also search multiple national commercial listing services for you.</p>
                    </section>
                    <br />
                    <h2 className={classes.h2}>Property Information</h2>
                    <section className={classes.formSection} style={isRowStyle.container(isRow)}>

                        <div className={classes.flexCol}>
                            <img className={classes.img} style={picStyle.container(isSmall)} src={PropertyPhoto} alt="mf cre blg" />
                        </div>
                        <div className={classes.flexRow} style={isRowStyle.container(isRow)}>
                            <div className={classes.flexCol}>

                                <form className={classes.form} onSubmit={onSubmit} >
                                    <label style={isRowStyle.container(isRow)}>Enter your name:&nbsp;
                                        <input
                                            value={formValues.name}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='Name'
                                            name='name'
                                        />
                                    </label>

                                    <label style={isRowStyle.container(isRow)}>Enter your E-mail:&nbsp;*
                                        <input
                                            value={formValues.email}
                                            onChange={onInputChange}
                                            type='email'
                                            placeholder='Email'
                                            name='email'
                                        />
                                    </label>

                                    <label style={isRowStyle.container(isRow)}>Enter your phone:&nbsp;*
                                        <input
                                            maxLength='10'
                                            value={formValues.phone}
                                            onChange={onInputChange}
                                            type='tel'
                                            placeholder='xxx - xxx - xxxx'
                                            name='phone'

                                        />
                                    </label>

                                    <label style={isRowStyle.container(isRow)}>Enter your street address:&nbsp;*
                                        <input
                                            value={formValues.street_address}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='Street Address'
                                            name='street_address'
                                        />
                                    </label>

                                    <label style={isRowStyle.container(isRow)}>Enter your city:&nbsp;*
                                        <input
                                            value={formValues.city}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='City'
                                            name='city'
                                        />
                                    </label>
                                    {/* </form> */}
                                    <div className={classes.errors}>
                                        <e>{formErrors.name}</e>
                                        <e>{formErrors.email}</e>
                                        <e>{formErrors.phone}</e>
                                        <e>{formErrors.street_address}</e>
                                        <e>{formErrors.city}</e>
                                        <e>{formErrors.zip}</e>
                                        <e>{formErrors.country}</e>
                                        <e>{formErrors.building_sf}</e>
                                        <e>{formErrors.lot_sf}</e>
                                        <e>{formErrors.property_type}</e>
                                    </div>
                                    {/* </div> */}

                                    {/* <div className={classes.flexCol} > */}
                                    {/* <form className={classes.form} onSubmit={onSubmit} > */}
                                    <label style={isRowStyle.container(isRow)}>Enter your zip:&nbsp;*
                                        <input
                                            value={formValues.zip}
                                            onChange={onInputChange}
                                            type='zip'
                                            placeholder='Zip Code'
                                            name='zip'
                                            maxlength='5'
                                        />
                                    </label>

                                    <label style={isRowStyle.container(isRow)}>Enter your country:&nbsp;*
                                        <input
                                            value={formValues.country}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='Country'
                                            name='country'
                                        />
                                    </label>

                                    <label style={isRowStyle.container(isRow)}>Property Type:
                                        <select
                                            onChange={onInputChange}
                                            value={formValues.property_type}
                                            name='property_type'
                                        >
                                            <option value=''>- Select an option -</option>
                                            <option value='multifamily'>Multifamily</option>
                                            <option value='office'>Office</option>
                                            <option value='industrial'>Industrial</option>
                                            <option value='retail'>Retail</option>
                                            <option value='hospitality'>Hospitality</option>
                                            <option value='recreation'>Recreation</option>
                                            <option value='specialty'>Specialty</option>
                                        </select>
                                    </label>

                                    <label style={isRowStyle.container(isRow)}>Enter your building square footage:&nbsp;*
                                        <input
                                            value={formValues.building_sf}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='Bldg. SF'
                                            name='building_sf'
                                        />
                                    </label>

                                    <label style={isRowStyle.container(isRow)}>Enter your lot square footage:&nbsp;*
                                        <input
                                            value={formValues.lot_size}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='Lot SF'
                                            name='lot_size'
                                        />
                                    </label>
                                    {/* disabled={disabled} */}
                                    <button className={classes.button} onSubmit={onSubmit}>submit</button >
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const picStyle = {
    container: isSmall => ({
        display: isSmall ? 'flex' : 'none',
    }),
}

const isRowStyle = {
    container: (isRow) => ({
        display: 'flex',
        flexDirection: isRow ? 'row' : 'column',
        alignItems: isRow ? 'flex-start' : 'center',
        gap: '10px',           // optional: spacing between label text and input
        marginBottom: '10px',  // optional: vertical spacing between rows
    }),
};
