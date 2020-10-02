import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./location/Location"
import { EmployeeCard } from "./employee/EmployeeCard"
import { CustomerCard } from "./customer/CustomerCard"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"

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
            </AnimalProvider>

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
                <div className="locations">
                    <LocationCard />
                    <LocationCard />
                </div>
            </Route>

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employees">
                <div className="employees">
                    <EmployeeCard />
                    <EmployeeCard />
                </div>
            </Route>

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers">
                <div className="customers">
                    <CustomerCard />
                    <CustomerCard />
                </div>
            </Route>
        </>
    )
}