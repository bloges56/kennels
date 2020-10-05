import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import { EmployeeList } from "./employee/EmployeeList.js"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>

                <Route exact path="/animals">
                    <AnimalList />
                </Route>

                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>

            </AnimalProvider>

            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
            

            {/* Render the customer list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}