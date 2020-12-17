import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'

import PropertyValuationSchema from '../../validation/PropertyValuationSchema'
import StyledVariables from '../../../styles/StyledVariables'

const SV = StyledVariables
//////////////// Initial Values ////////////////
const initialValues = {
    street_address: '',
    city: '',
    zip: '',
    country: '',
}

const initialFormErrors = {
    street_address: '',
    city: '',
    zip: '',
    country: '',
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

            street_address: formValues.street_address.trim(),
            city: formValues.city.trim(),
            zip: formValues.zip.trim(),
            country: formValues.country.trim(),
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
            <SV.CardContainer>
                <SV.H2>Location Information</SV.H2>
                    <SV.Form
                        onSubmit={onSubmit}
                    >
                        <SV.Label>Subject property street address:&nbsp;*
                            <SV.Input
                                value={formValues.street_address}
                                onChange={onInputChange}
                                type='text'
                                placeholder='street address'
                                name='street_address'
                            />
                        </SV.Label>

                        <SV.Label>Subject property city:&nbsp;*
                            <SV.Input
                                value={formValues.city}
                                onChange={onInputChange}
                                type='text'
                                placeholder='city'
                                name='city'
                            />
                        </SV.Label>

                        <SV.Label>Subject property zip:&nbsp;*
                            <SV.Input
                                value={formValues.zip}
                                onChange={onInputChange}
                                type='zip'
                                placeholder='zip Code'
                                name='zip'
                                maxlength='5'
                            />
                        </SV.Label>

                        <SV.Label>Subject property country:&nbsp;*
                            <SV.Input
                                value={formValues.country}
                                onChange={onInputChange}
                                type='text'
                                placeholder='country'
                                name='country'
                            />
                        </SV.Label>

                        <SV.Error>{formErrors.street_address}</SV.Error>
                        <SV.Error>{formErrors.city}</SV.Error>
                        <SV.Error>{formErrors.zip}</SV.Error>
                        <SV.Error>{formErrors.country}</SV.Error>

                    </SV.Form>
            </SV.CardContainer>
        </div >
    )
}