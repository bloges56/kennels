import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer, address}) => (
    <section className="customer">
        <h3 className="customer__name">{customer}</h3>
        <div className="customer__address">{address}</div>
    </section>
)