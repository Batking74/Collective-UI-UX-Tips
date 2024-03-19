// Importing Modules/Packages
import NavigationComponent from '../Components/NavigationComponent';
import { SAVE_FEEDBACK } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

export default function FeedbackPage() {
    const [addFeedback, { data }] = useMutation(SAVE_FEEDBACK);
    const [Message, setMessage] = useState('');
    const [Name, setName] = useState('');

    // Validates and Saves Feedback
    const submitFeedback = async (e) => {
        e.preventDefault();
        if(Message) {
            // Saving new Feedback to MongoDB
            const { data } = await addFeedback({ variables: { Name, Message } });
            console.log(data);
        }
        else alert('Feedback input cannot be empty!');
    }

    return (
        <>
            {/* Rendering Navigation */}
            <NavigationComponent nameOfNextPage="Homepage" />

            <h1 className="text-center">Submit Feedback</h1>
            <section className="feedback-form">
                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    id="feedback-form">
                    <div className="col-12">
                        <textarea
                            placeholder="Enter feedback here"
                            value={Message}
                            onChange={({ target }) => { setMessage(target.value) }}
                            className="form-input w-100" />
                    </div>

                    <div className="col-12 col-lg-9">
                        <input
                            placeholder="Username here (optional)"
                            value={Name}
                            onChange={({ target }) => { setName(target.value) }}
                            className="form-input w-100" />
                    </div>

                    <div className="col-12 col-lg-3">
                        <button className="btn btn-primary btn-block py-3" onClick={submitFeedback} type="submit">
                            Add feedback
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}