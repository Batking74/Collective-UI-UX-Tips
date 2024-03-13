import React from 'react';


export default function FeedbackPage() {
    return (
        <>
            <section className="top">
                <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
                    <div
                        className="container flex-row justify-space-between-lg justify-center align-center"
                    >
                        <h1 className="m-0">UI/UX Tips</h1>
                        <p className="m-0">Get practical advice from other developers.</p>
                        <button className="btn" id="home-btn">Homepage</button>
                    </div>
                </header>
            </section>
            <h1 className="text-center">Submit Feedback</h1>
            <section className="feedback-form">
                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    id="feedback-form"
                >
                    <div className="col-12">
                        <textarea
                            name="feedbackText"
                            id="feedbackText"
                            placeholder="Enter feedback here"
                            value=""
                            className="form-input w-100"
                        ></textarea>
                    </div>
                    <div className="col-12 col-lg-9">
                        <input
                            name="feedbackUsername"
                            id="feedbackUsername"
                            placeholder="Username here (optional)"
                            value="anonymous"
                            className="form-input w-100"
                        />
                    </div>

                    <div className="col-12 col-lg-3">
                        <button className="btn btn-primary btn-block py-3" type="submit">
                            Add feedback
                        </button>
                    </div>
                </form>
            </section>

        </>
    )
}