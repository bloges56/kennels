import React from "react"
import "./Customer.css"

export const CustomerCard = (props) => (
    <section className="customer">
        <h3 className="customer__name">{props.customer}</h3>
        <div className="customer__address">{props.address}</div>
    </section>
)