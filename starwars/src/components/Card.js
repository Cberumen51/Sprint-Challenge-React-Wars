import React from 'react'
import styled from 'styled-components'

const Card = styled.div `
display: flex;
flex-direction: row;
flex-wrap: wrap
backgroun-color: black
align-item: space-around;
`
const CharName = styled.div `
font-size: 30px;
`


const CharInfo = styled.p `
font-size: 1.2rem;
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
