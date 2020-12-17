import styled from 'styled-components'

 //////////////// Style Variables ////////////////
const cardSize = '50em'

const primaryColor = '#821E1E' // falu red
const secondaryColor = '#D1CFC7' //timberwolf
const tertiaryColor = '#343434' //jet
const quaternaryColor = '#FFEBF0' // lavendar blush
const quinaryColor = 'rgb(180 30 30)' // kw red

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

// Navbar
const NavBar = styled.div`
    display: flex;
    flex-wrap: none;
    flex-direction: row;
    background-color: ${quinaryColor};
    height: 6rem;
    margin: 3.5rem 0;
    width: 100%;
`

const NavButton = styled.button`
    font-size: 1.5rem;
    color: white;
    text-shadow: -1px 2px 0 #000;
    line-height: 1.5rem;
    padding: 0 5rem 0 5rem
`

    /* fontSize: "1.5rem",
    color: "white",
    textShadow: "-1px 2px 0 #000",
    lineHeight: '1.5rem',
    padding: '0 5rem 0 5rem' */

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
    margin: 0 5% 0 5%;
    border-radius: 6px;
    background-color: ${quinaryColor};
    `
const Form = styled.form`
    ${flex};
    border-radius: 6px;
    background-color: ${secondaryColor};
    margin: 0 0 5vh 0;
    
`

const Input = styled.input`
    ${flex};
    color: black;
    margin: ${margin};
    font-variant: small-caps;
    font-weight: 500;
    font-size: 1rem;
    height: 1.75rem;
    width: 350px;
    text-align: center;
    border: none;
    border-radius: 3px;
`

const Label = styled.label`
    background-color: ${secondaryColor};
    color: ${quaternaryColor};
    color: ${tertiaryColor};
    margin: ${margin};
    font-weight: 700;
    font-size: 1.25rem;
`

const Select = styled.select`
    display: flex;
    color: ${tertiaryColor};
    margin: ${margin};
    font-size: 1.25rem;
    width: 360px;
    border: none;

`
const H2 = styled.h2`
    color: white;
    text-shadow: -1px 2px 0 #000;
    background-color: ${quinaryColor};
    margin: 10px 0 0 0;
    font-size: 2em;
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
font-size: 1.5rem;
`
const Break = styled.div`
background-color: white;
height: 1vh;
`

const StyledVariables = {
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
    NavBar,
    NavButton,
}

export default StyledVariables