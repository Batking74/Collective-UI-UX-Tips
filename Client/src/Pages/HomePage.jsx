import React from 'react';

export default function HomePage() {
    return (
        <div>
            <section className="top">
                <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
                    <div
                        className="container flex-row justify-space-between-lg justify-center align-center"
                    >
                        <h1 className="m-0">UI/UX Tips</h1>
                        <p className="m-0">Get practical advice from other developers.</p>
                        <button className="btn" id="feedback-btn">Feedback</button>
                    </div>
                </header>
            </section>
            <section className="tip-form">
                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    id="tip-form"
                >
                    <div className="col-12">
                        <textarea
                            name="tipText"
                            id="tipText"
                            placeholder="Here's a new UI tip..."
                            value=""
                            className="form-input w-100"
                        ></textarea>
                    </div>
                    <div className="col-12 col-lg-9">
                        <input
                            name="tipUsername"
                            id="tipUsername"
                            placeholder="Add your name to get credit for the thought..."
                            value=""
                            className="form-input w-100"
                        />
                    </div>
                    <div className="col-12 col-lg-3">
                        <button className="btn btn-primary btn-block py-3" type="submit">
                            Add Tip
                        </button>
                    </div>
                </form>
            </section>
            <section className="tips" id="tip-container">
                <div className="card mb-3 m-3">
                    <h4 className="card-header bg-primary text-light p-2 m-0">Username</h4>
                    <div className="card-body bg-light p-2">
                        <p>Hello JC</p>
                    </div>
                </div>
            </section>
        </div>
    )
}