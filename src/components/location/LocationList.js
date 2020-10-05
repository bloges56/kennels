import React, {useContext, useEffect } from 'react'
import { LocationContext } from './LocationProvider'
import { LocationCard } from './Location'
import './Location.css'

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])
    return (
        <div className="locations">
		    {console.log("LocationList: Render")}
        {
			locations.map(location => {
				return <LocationCard key={location.id} address={location.address} name={location.name} />
			})
        }
        </div>
    )

}