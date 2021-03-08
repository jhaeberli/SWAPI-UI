import React from "react"

export const Planets = ({ planets }) => {
    return (
        <div>
            <h1>List</h1>
            <ul>
                {planets.map(planet => {
                    return <li key={planet.name}>{planet.name}</li>
                })}
            </ul>
        </div>
    )
}
