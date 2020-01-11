import React from 'react'
import Card from './Card'

export default function info(props) {
    return (
        <div>
            {props.data.map((character,idx) =>{
                return <Card key={idx} character={character}/>
            })}
        </div>
    )
}
