import React from 'react'


export default function Stars(props) {
    const rating = Number(props.rating)
    const stars = new Array(rating).fill(null).map(() => "⭐").join("")
    return (
    <div>{stars}</div>
   )
}
