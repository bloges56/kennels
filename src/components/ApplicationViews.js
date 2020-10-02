import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./location/Location"
import { EmployeeCard } from "./employee/EmployeeCard"
import { CustomerCard } from "./customer/CustomerCard"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <div className="animals">
                    <AnimalCard />
                    <AnimalCard />
                </div>
            </Route>

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