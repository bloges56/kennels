import React, {useContext, useEffect } from 'react'
import { LocationContext } from './LocationProvider'
import { LocationCard } from './Location'
import './Location.css'
import { useHistory } from "react-router-dom"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    const history = useHistory()

    return (
        <>
            <button onClick={event => {history.push("/locations/create")}}>Add Location</button>
            <div className="locations">
                {console.log("LocationList: Render")}
            {
                locations.map(location => {
                    return <LocationCard key={location.id} location={location} />
                })
            }
            </div>
        </>
    )

}