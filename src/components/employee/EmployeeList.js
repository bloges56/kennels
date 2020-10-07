import React, { useContext, useEffect } from 'react'
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useHistory } from 'react-router-dom'

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {

        console.log("EmployeeList: useEffect - getEmployeess")
        getEmployees()

    }, [])
    
    const history = useHistory()

    return (	
        <>
            <button onClick={() => {history.push("/employees/create")}}>Add Employee</button>
            <div className="employees">
                {console.log("EmployeeList: Render")}
            {
                employees.map(employee => {
                    return <EmployeeCard key={employee.id} employee={employee} />
                })
            }
            </div>
        </>
    )

}