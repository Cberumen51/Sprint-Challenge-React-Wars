import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const InfoWrap = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 20px
    justify-content: space-around;
`

export default function info(props) {
    return (
        <InfoWrap>
            {props.data.map((character,idx) =>{
                return <Card key={idx} character={character}/>
            })}
        </InfoWrap>
    )
}
