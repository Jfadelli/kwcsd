
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'

import PropertyValuationSchema from '../../validation/PropertyValuationSchema'
import StyledVariables from '../../../styles/StyledVariables'

const SV = StyledVariables
//////////////// Initial Values ////////////////
const initialValues = {
    name: '',
    email: '',
    phone: '',
}

const initialFormErrors = {
    name: '',
    email: '',
    phone: '',
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
            <SV.CardContainer>
                <SV.H2>Personal Information</SV.H2>
                    <SV.Form
                        onSubmit={onSubmit}
                    >

                        <SV.Label>Enter your name:&nbsp;
                            <SV.Input
                                value={formValues.name}
                                onChange={onInputChange}
                                type='text'
                                placeholder='name'
                                name='name'
                            />
                        </SV.Label>

                        <SV.Label>Enter your E-mail:&nbsp;*
                            <SV.Input
                                value={formValues.email}
                                onChange={onInputChange}
                                type='email'
                                placeholder='email'
                                name='email'
                            />
                        </SV.Label>

                        <SV.Label>Enter your phone:&nbsp;*
                            <SV.Input
                                value={formValues.phone}
                                onChange={onInputChange}
                                type='tel'
                                placeholder='xxx - xxx - xxxx'
                                name='phone'

                            />
                        </SV.Label>

                        <SV.Error>{formErrors.name}</SV.Error>
                        <SV.Error>{formErrors.email}</SV.Error>
                        <SV.Error>{formErrors.phone}</SV.Error>

                    </SV.Form>
            </SV.CardContainer>
        </div >
    )
}