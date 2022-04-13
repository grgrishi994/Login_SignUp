import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            <Link to="/aadhar">
            <button class="button2">Verify</button></Link>
        </div>
        </>
    )
}
