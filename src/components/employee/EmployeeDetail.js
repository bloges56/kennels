import React, { useState, useEffect, useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Employee.css"

export const EmployeeDetail = () => {

    const { getEmployeeById } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({})
    const [location, setLocation] = useState({})

    const {employeeId} = useParams()
    
    useEffect(() => {
        getEmployeeById(employeeId)
        .then(response => {
            setEmployee(response)
            setLocation(response.location)
        })
    }, [])


    const history = useHistory()

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee_location">{location.name}</div>
            <button onClick={() => {
                history.push(`/employees/edit/${employee.id}`)
            }}>Edit</button>
        </section>
    )

}