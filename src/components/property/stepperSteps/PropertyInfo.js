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
            <SV.CardContainer>
                <SV.H2>Property Information</SV.H2>
                    <SV.Form
                        onSubmit={onSubmit}
                    >
                        <SV.Label>Property Type:
                            <SV.Select
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
                            </SV.Select>
                        </SV.Label>

                        <SV.Label>Enter your building square footage:&nbsp;*
                            <SV.Input
                                value={formValues.building_sf}
                                onChange={onInputChange}
                                type='text'
                                placeholder='bldg. sf'
                                name='building_sf'
                            />
                        </SV.Label>

                        <SV.Label>Enter your lot square footage:&nbsp;*
                            <SV.Input
                                value={formValues.lot_size}
                                onChange={onInputChange}
                                type='text'
                                placeholder='lot sf'
                                name='lot_size'
                            />
                        </SV.Label>
                        <SV.Error>{formErrors.building_sf}</SV.Error>
                        <SV.Error>{formErrors.lot_sf}</SV.Error>
                        <SV.Error>{formErrors.property_type}</SV.Error>
                    </SV.Form>
            </SV.CardContainer>
        </div >
    )
}