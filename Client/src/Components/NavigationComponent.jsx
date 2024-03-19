// Importing Modules/Packages
import React from "react";

export default function NavigationComponent({ nameOfNextPage }) {
    // Navigating Route on button Click
    const nextPage = ({ target }) => {
        const route = target.textContent != 'Homepage' ? target.textContent : '/';
        location.pathname = route;
    }
    return (
        <>
            <section className="top">
                <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
                    <div
                        className="container flex-row justify-space-between-lg justify-center align-center"
                    >
                        <h1 className="m-0">OpenChat</h1>
                        <p className="m-0">Engage in lively discussions, and share opinions</p>
                        <button className="btn" onClick={nextPage}>{nameOfNextPage}</button>
                    </div>
                </header>
            </section>
        </>
    );
}