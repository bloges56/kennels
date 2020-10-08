import React, { useState, useEffect, useContext} from 'react'
import { LocationContext } from './LocationProvider'
import { useParams } from 'react-router-dom'
import "./Location.css"

export const LocationDetail = () => {

    const { getLocationById } = useContext(LocationContext)

    const [ location, setLocation ] = useState()

    const {locationId} = useParams()

    useEffect(() => {
        getLocationById(locationId)
        .then(response => {
            setLocation(response)
        })
    }, [])

    return (
        <section className="location">
            <h3 className="location__name">{location?.name}</h3>
            <div className="location_address">{location?.address}</div>
        </section>
    )


}