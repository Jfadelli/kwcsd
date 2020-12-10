import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'

import PropertyValuationSchema from '../validation/PropertyValuationSchema'
import StyleVariables from '../../styles/StyleVariables'

//////////////// Initial Values ////////////////
const initialValues = {
    name: '',
    email: '',
    phone: '',
    street_address: '',
    city: '',
    zip: '',
    country: '',
    property_type: {
        multifamily: false,
        office: false,
        industrial: false,
        retail: false,
        hospitality: false,
        recreation: false,
        specialty: false
    },
    building_sf: '',
    lot_size: ''
}

const initialFormErrors = {
    name: '',
    email: '',
    phone: '',
    street_address: '',
    city: '',
    zip: '',
    country: '',
    building_sf: '',
    lot_size: ''
}

export default function YourPropertyInfo(props) {
    const [property, setProperty] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);
    const history = useHistory()

    //////////////// HELPERS ////////////////
    const postNewProperty = newProperty => {
        axios.post('/', newProperty)
            .then(res => {
                setProperty([...property, res.data])
                console.log(res, 'res')
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
            property_type: {
                multifamily: false,
                office: false,
                industrial: false,
                retail: false,
                hospitality: false,
                recreation: false,
                specialty: false
            },
            building_sf: formValues.building_sf.trim(),
            lot_size: formValues.lot_size.trim()
        }
        postNewProperty(newProperty)
        history.push('/thank-you')
    }

    //////////////// SIDE EFFECTS //////////////// 
    useEffect(() => {
        PropertyValuationSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])

    return (
        <div>
            {/* <Home /> */}
            <StyleVariables.CardContainer>
                <StyleVariables.H2>Property Information</StyleVariables.H2>
                <StyleVariables.LoginCard>

                    <StyleVariables.Form
                        onSubmit={onSubmit}
                    >

                        <StyleVariables.Label>Enter your name:&nbsp;
                            <StyleVariables.Input
                                value={formValues.name}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Name'
                                name='name'
                            />
                        </StyleVariables.Label>

                        <StyleVariables.Label>Enter your E-mail:&nbsp;*
                            <StyleVariables.Input
                                value={formValues.email}
                                onChange={onInputChange}
                                type='email'
                                placeholder='Email'
                                name='email'
                            />
                        </StyleVariables.Label>

                        <StyleVariables.Label>Enter your phone:&nbsp;*
                            <StyleVariables.Input
                                value={formValues.phone}
                                onChange={onInputChange}
                                type='tel'
                                placeholder='xxx - xxx - xxxx'
                                name='phone'

                            />
                        </StyleVariables.Label>

                        <StyleVariables.Label>Enter your street address:&nbsp;*
                            <StyleVariables.Input
                                value={formValues.street_address}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Street Address'
                                name='street_address'
                            />
                        </StyleVariables.Label>

                        <StyleVariables.Label>Enter your city:&nbsp;*
                            <StyleVariables.Input
                                value={formValues.city}
                                onChange={onInputChange}
                                type='text'
                                placeholder='City'
                                name='city'
                            />
                        </StyleVariables.Label>

                        <StyleVariables.Label>Enter your zip:&nbsp;*
                            <StyleVariables.Input
                                value={formValues.zip}
                                onChange={onInputChange}
                                type='zip'
                                placeholder='Zip Code'
                                name='zip'
                                maxlength='5'
                            />
                        </StyleVariables.Label>

                        <StyleVariables.Label>Enter your country:&nbsp;*
                            <StyleVariables.Input
                                value={formValues.country}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Country'
                                name='country'
                            />
                        </StyleVariables.Label>

                        <StyleVariables.Label>Property Type:
                            <StyleVariables.Select
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
                            </StyleVariables.Select>
                        </StyleVariables.Label>

                        <StyleVariables.Label>Enter your building square footage:&nbsp;*
                            <StyleVariables.Input
                                value={formValues.building_sf}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Bldg. SF'
                                name='building_sf'
                            />
                        </StyleVariables.Label>

                        <StyleVariables.Label>Enter your lot square footage:&nbsp;*
                            <StyleVariables.Input
                                value={formValues.lot_size}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Lot SF'
                                name='lot_size'
                            />
                        </StyleVariables.Label>


                        <StyleVariables.Error>{formErrors.name}</StyleVariables.Error>
                        <StyleVariables.Error>{formErrors.email}</StyleVariables.Error>
                        <StyleVariables.Error>{formErrors.phone}</StyleVariables.Error>
                        <StyleVariables.Error>{formErrors.street_address}</StyleVariables.Error>
                        <StyleVariables.Error>{formErrors.city}</StyleVariables.Error>
                        <StyleVariables.Error>{formErrors.zip}</StyleVariables.Error>
                        <StyleVariables.Error>{formErrors.country}</StyleVariables.Error>
                        <StyleVariables.Error>{formErrors.building_sf}</StyleVariables.Error>
                        <StyleVariables.Error>{formErrors.lot_sf}</StyleVariables.Error>
                        <StyleVariables.Error>{formErrors.property_type}</StyleVariables.Error>




                        <StyleVariables.Button disabled={disabled}>submit</StyleVariables.Button >
                    </StyleVariables.Form>
                </StyleVariables.LoginCard>
            </StyleVariables.CardContainer>
            {/* <Link to={`/SignInPage`}>Sign In</Link> */}
        </div >
    )
}

                        // <StyleVariables.Error>{formErrors.username}</StyleVariables.Error>
                        // <StyleVariables.Label>Enter a username:&nbsp;
                        //     <StyleVariables.Input
                        //         value={formValues.username}
                        //         onChange={onInputChange}
                        //         type='text'
                        //         placeholder='Username'
                        //         name='username'
                        //     />
                        // </StyleVariables.Label>

                        // <StyleVariables.Error>{formErrors.role}</StyleVariables.Error> 
                        // <StyleVariables.Label>Select a roll:&nbsp;</StyleVariables.Label>
                        // <select
                        //     onChange={onInputChange}
                        //     value={formValues.role}
                        //     name='role'
                        // >
                        //     <option>-- please select role --</option>
                        //     <option name='client'>Client</option>
                        //     <option name='instructor'>Instructor</option>
                        // </select>