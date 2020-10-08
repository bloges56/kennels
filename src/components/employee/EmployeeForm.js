import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from './EmployeeProvider'
import { LocationContext } from '../location/LocationProvider'
import './Employee.css'
import { useHistory, useParams } from 'react-router-dom'

export const EmployeeForm = () => {


    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState()

    const [ isLoading, setIsLoading ] = useState(true)

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newEmployee = { ...employee }
        //animal is an object with properties. 
        //set the property to the new value
        newEmployee[event.target.name] = event.target.value
        //update state
        setEmployee(newEmployee)
    }

    const {employeeId} = useParams()

    useEffect(() => {
        getLocations()
        .then(response => {
            if(employeeId){
                getEmployeeById(employeeId)
                .then(employee => {
                    setEmployee(employee)
                    setIsLoading(false)
                })
            }
            else{
                setIsLoading(false)
            }
        })
    }, [])
    

    const history = useHistory()

    const constructNewEmployee = () => {

        if(parseInt(employee.locationId) === 0){
            window.alert("Select a location")
        }
        else if(employeeId){
            getEmployeeById(employeeId)
            updateEmployee({
                id: employee.id,
                name: employee.name,
                locationId: parseInt(employee.locationId)
            })
            .then(() => history.push(`/employees/detail/${employeeId}`))
        }
        else{
            addEmployee({
                name: employee.name,
                locationId: parseInt(employee.locationId)
            })
            .then(() => history.push(`/employees`))
        }
    }


    

    return (
        <form className="employeeForm">
            <h2>{employeeId ? "Update Employee" : "New Employee"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" name="name" required autoFocus className="form-control" placeholder="Employee Name"
                    onChange={handleControlledInputChange}
                    defaultValue={employee?.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={employee?.locationId} name="locationId" id="employeeLocation" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}
                className="btn btn-primary"
                disabled={isLoading}>
                {employeeId ? "Save Employee" : "Update Employee"}
            </button>
        </form>
    )
}