import styled from 'styled-components'

 //////////////// Style Variables ////////////////
const cardSize = '50em'

const faluRed = '#821E1E' // falu red
const timberwolf = '#D1CFC7' //timberwolf
const jet = '#343434' //jet
const lavendarBlush = '#FFEBF0' // lavendar blush
const kwRed = 'rgb(180 30 30)' // kw red

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

const Div = styled.div`
    ${flex};
`
const SpacedDiv = styled.div`
    margin: 0 0 2rem;
`

// Navbar
const NavBar = styled.div`
    display: flex;
    flex-wrap: none;
    flex-direction: row;
    justify-content: center;
    background-color: ${kwRed};
    height: 3.5rem;
    margin: 1rem 0;
    position: relative;
    z-index: 100;
    width: 100%;
`
const TwoColDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto auto;
    max-width: 80%;
    min-width: 60%;
`

// cards

const Form = styled.form`
    ${flex};
    /* background-color:blue; */
    border-radius: 2px;
    margin: 0 0 5vh 0;
    width:100%;
    justify-content: flex-start;
    align-items: center;
`

const Input = styled.input`
    color: ${jet};
    margin: 10px 0 20px 0;
    font-size: 1rem;
    height: 1.75rem;
    width: 350px;
    text-align: left;
    border: 1px solid black;
    border-radius: 3px;

`

const Label = styled.label`
    /* background-color: red; */
    color: black;
    margin: 0 0 10px;
    font-weight: 700;
    font-size: 1rem;
    width: auto;
    height: auto;
`

const Select = styled.select`
    margin: 10px 0 20px 0;
    font-size: 1rem;
    height: 1.75rem;
    width: 350px;
    text-align: left;
    border: 1px solid black;
    border-radius: 3px;
`

// fonts & headings
const H2 = styled.h2`
    color: ${kwRed};
    text-shadow: -1px 2px 0 #000;
    background-color: none;
    margin: 10px 0 4vh 0;
    font-size: 2em;
    border-bottom: 2px solid black;
    `

const H3 = styled.h3`
    color: ${kwRed};
    background-color: ${faluRed};
    margin: 10px 0 0 0;
    font-size: 4em;
/* border-bottom: 2px solid ${kwRed} */
`
const P = styled.p`
    color: black;
    background-color: none;
    margin: 4em 0 4em 0;
    font-size: 1.5em;
    line-height:2rem;
/* border-bottom: 2px solid ${kwRed} */
`

const Button = styled.button`
    margin: 3vh 0;
    width: 125px;
    height: 50px;
    font-size: 1.5em;
    font-variant: small-caps;
    border: 3px solid;
    border-radius: 3px;
`

const Error = styled.div`
    color: red;
    background-color: none;
    font-size: 1.5rem;
`
const Break = styled.div`
    background-color: white;
    height: 1vh;
`
const Img = styled.img`
    width: auto;
    height: 60vh;
    border: 2px solid ${jet};
    box-shadow: 30px -10px ${faluRed};
`

const StyledVariables = {
    cardSize,
    faluRed,
    timberwolf,
    jet,
    lavendarBlush,
    kwRed,
    margin,
    flex,
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

    Div,
    TwoColDiv,
    Img,
    SpacedDiv
}

export default StyledVariables