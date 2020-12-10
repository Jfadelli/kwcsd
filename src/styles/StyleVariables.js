import styled from 'styled-components'

//////////////// Style Variables ////////////////
const cardSize = '50em'

const primaryColor = '#FDFDF4'
const secondaryColor = '#7D7E75'
const tertiaryColor = '#3E3E39'
const quaternaryColor = '#242422'
const quinaryColor = 'rgb(180 30 30)'

const margin = '10px'
const flex = `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    `
//////////////// Styled Components ////////////////
const LoginCard = styled.div`
    ${flex};
    margin: 10px 0 10px 0;
    width: ${cardSize};
    background-color: ${secondaryColor};
    border: 1px solid ${quaternaryColor};
    border-radius: 10px;
`

const CardContainer = styled.div`
    ${flex};
    background-color: ${primaryColor};
    `
const Form = styled.form`
    ${flex};
    background-color: ${secondaryColor};
`

const Input = styled.input`
    ${flex};
    color: ${quaternaryColor};
    margin: ${margin};
    font-weight: 500;
    font-size: 1em;
    width: 350px;
    text-align: center;
    border: none;
    border-radius: 3px;
`

const Label = styled.label`
    background-color: ${secondaryColor};
    color: ${quaternaryColor};
    margin: ${margin};
    font-weight: 700;
    font-size: 2em
`
const Select = styled.select`
    display: flex;
    color: ${quaternaryColor};
    margin: ${margin};
    width: 360px;
    border: none;

`
const H2 = styled.h2`
color: ${quinaryColor};
background-color: ${primaryColor};
margin: 10px 0 0 0;
font-size: 4em;
/* border-bottom: 2px solid ${quinaryColor} */
`

const H3 = styled.h3`
color: ${quinaryColor};
background-color: ${primaryColor};
margin: 10px 0 0 0;
font-size: 4em;
/* border-bottom: 2px solid ${quinaryColor} */
`
const P = styled.p`
color: ${quinaryColor};
background-color: ${primaryColor};
margin: 10px 0 0 0;
font-size: 4em;
/* border-bottom: 2px solid ${quinaryColor} */
`

const Button = styled.button`
    margin: ${margin};
    height: 2em;
    font-size: 3em;
    color:${tertiaryColor};
    font-variant: small-caps;
    
`

const Error = styled.div`
color: red;
background-color: ${secondaryColor};
font-size: 2em
`
const Break = styled.div`
background-color: white;
height: 1vh
`



export default {
    cardSize,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    quaternaryColor,
    quinaryColor,
    margin,
    flex,
    LoginCard,
    CardContainer,
    Form,
    Label,
    Select,
    Input,
    Button,
    Error,
    Break,
    H2,
    H3,
    P,
}