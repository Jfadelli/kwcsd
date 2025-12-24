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
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const isSmall = useMediaQuery('(min-width: 768px)');

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
        postNewProperty(newProperty)
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

                    <form className={classes.form} onSubmit={onSubmit}>
                        <div className={classes.formContainer}>
                            <div className={classes.formImageSection} style={picStyle.container(isSmall)}>
                                <div className={classes.imageWrapper}>
                                    <img className={classes.img} src={PropertyPhoto} alt="Commercial real estate building" />
                                </div>
                            </div>

                            <div className={classes.formFieldsSection}>
                                <div className={classes.formGrid}>
                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            Name <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            value={formValues.name}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='Your name'
                                            name='name'
                                        />
                                        {formErrors.name && <span className={classes.error}>{formErrors.name}</span>}
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            Email <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            value={formValues.email}
                                            onChange={onInputChange}
                                            type='email'
                                            placeholder='your.email@example.com'
                                            name='email'
                                        />
                                        {formErrors.email && <span className={classes.error}>{formErrors.email}</span>}
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            Phone <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            maxLength='10'
                                            value={formValues.phone}
                                            onChange={onInputChange}
                                            type='tel'
                                            placeholder='(555) 555-5555'
                                            name='phone'
                                        />
                                        {formErrors.phone && <span className={classes.error}>{formErrors.phone}</span>}
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            Street Address <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            value={formValues.street_address}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='123 Main Street'
                                            name='street_address'
                                        />
                                        {formErrors.street_address && <span className={classes.error}>{formErrors.street_address}</span>}
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            City <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            value={formValues.city}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='San Diego'
                                            name='city'
                                        />
                                        {formErrors.city && <span className={classes.error}>{formErrors.city}</span>}
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            Zip Code <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            value={formValues.zip}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='92101'
                                            name='zip'
                                            maxLength='5'
                                        />
                                        {formErrors.zip && <span className={classes.error}>{formErrors.zip}</span>}
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            Country <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            value={formValues.country}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='United States'
                                            name='country'
                                        />
                                        {formErrors.country && <span className={classes.error}>{formErrors.country}</span>}
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            Property Type <span className={classes.required}>*</span>
                                        </label>
                                        <select
                                            className={classes.select}
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
                                        {formErrors.property_type && <span className={classes.error}>{formErrors.property_type}</span>}
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            Building SF <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            value={formValues.building_sf}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='e.g., 5,000 sq ft'
                                            name='building_sf'
                                        />
                                        {formErrors.building_sf && <span className={classes.error}>{formErrors.building_sf}</span>}
                                    </div>

                                    <div className={classes.formField}>
                                        <label className={classes.fieldLabel}>
                                            Lot Size <span className={classes.required}>*</span>
                                        </label>
                                        <input
                                            className={classes.input}
                                            value={formValues.lot_size}
                                            onChange={onInputChange}
                                            type='text'
                                            placeholder='e.g., 10,000 sq ft'
                                            name='lot_size'
                                        />
                                        {formErrors.lot_size && <span className={classes.error}>{formErrors.lot_size}</span>}
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
    )
}

const picStyle = {
    container: isSmall => ({
        display: isSmall ? 'block' : 'none',
    }),
};
