import React from 'react'
import styled from 'styled-components'

const Card = styled.div `
display: flex;
width: 25%;
padding 2px;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
margin: 1%;
border: 3px solid red;
color: blue;
`
const CharName = styled.div `
font-size: 30px;
padding-top:10px;
`


const CharInfo = styled.p `
font-size: 20px;
align-items:space-evenly;
`

export default function CharaceterCard(props) {
    return (
        
            <Card>
                <CharName>Name: {props.character.name}</CharName>
                <CharInfo>Height: {props.character.height}</CharInfo>
                <CharInfo> Mass: {props.character.mass}</CharInfo>
                <CharInfo> Hair Color: {props.character.hair_color}</CharInfo>
                <CharInfo> Eye Color: {props.character.eye_color}</CharInfo>
                <CharInfo> Gender: {props.character.gender}</CharInfo>
            </Card>
    )
}
