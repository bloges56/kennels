import React, { useContext, useRef } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useHistory } from "react-router-dom"

export const LocationForm = () => {

    const { addLocation } = useContext(LocationContext)

    const address = useRef(null)
    const name = useRef(null)

    const history = useHistory()

    const createNewLocation = () => {

        if(address.current.value.trim() === ""){
            window.alert("Please add an address")
        }
        else{
            addLocation({
                name: name.current.value,
                address:  address.current.value
            })
            .then(() => history.push('/locations'))
        }
    }

    return (
        <form className="locationForm">
            <h2>New Location</h2>
            <fieldset>
                <div class="form-group">
                    <label htmlFor="locationName">Location Name: </label>
                    <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
                </div>
            </fieldset>
            <fieldset>
                <div class="form-group">
                    <label htmlFor="locationAddress">Location Address: </label>
                    <input type="text" id="locationAddress" ref={address} required autoFocus className="form-control" placeholder="Location address" />
                </div>
            </fieldset>
            <button onClick={event => {
                event.preventDefault()
                createNewLocation()
            }} className="btn btn-primary">
                Save Location
            </button>
        </form>
    )
}