import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useHistory, useParams } from "react-router-dom"

export const LocationForm = () => {

    const { addLocation, updateLocation, getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState()

    const [ isLoading, setIsLoading ] = useState(true)

    const {locationId} = useParams()

    useEffect(() => {
        if(locationId){
            getLocationById(locationId)
            .then(locationObj => {
                setLocation(locationObj)
                setIsLoading(false)
            })
        }
        else{
            setIsLoading(false)
        }
    }, [])

    const handleControlledInputChange = event => {
        const newLocation = {...location}

        newLocation[event.target.name] = event.target.value

        setLocation(newLocation)
    }

    const history = useHistory()

    const createNewLocation = () => {
        if(location.address.trim() === ""){
            window.alert("Please add an address")
        }
        else if(locationId){
            updateLocation({
                name: location.name,
                address:  location.address,
                id: location.id
            })
            .then(() => history.push(`/locations/detail/${location.id}`))
        }
        else{
            addLocation({
                name: location.name,
                address:  location.address
            })
            .then(history.push('/locations'))
        }
    }

    return (
        <form className="locationForm">
            <h2>{locationId ? "Update Location" : "New Location"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location Name: </label>
                    <input type="text" id="locationName" name="name" required autoFocus className="form-control" placeholder="Location name" value={location?.name} onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationAddress">Location Address: </label>
                    <input type="text" id="locationAddress" name="address" required autoFocus className="form-control" placeholder="Location address" value={location?.address} onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <button onClick={event => {
                event.preventDefault()
                createNewLocation()
            }} 
            className="btn btn-primary"
            disable={isLoading}>
                {locationId ? "Save Location" : "Add Location"}
            </button>
        </form>
    )
}