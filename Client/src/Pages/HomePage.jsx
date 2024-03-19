// Importing Modules/Packages
import NavigationComponent from '../Components/NavigationComponent';
import DisplayPosts from '../Components/DisplayPosts';
import { CREATE_POST } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

export default function HomePage() {
    const [createPost, { data, loading }] = useMutation(CREATE_POST);
    const [Username, setUsername] = useState('');
    const [Content, setContent] = useState('');

    // Creates a new Post in MongoDB
    const validate = async (e) => {
        e.preventDefault();
        if (Username && Content) {
            // Create a new Post
            try {
                await createPost({ variables: { Name: Username, Content } });
            }
            catch (error) {
                console.error('Error creating post:', error);
            }
        }
        else {
            alert('Inputs cannot be empty!');
        }
    }

    // Rendering JSX
    return (
        <div>
            {/* Rendering Navigation */}
            <NavigationComponent nameOfNextPage="Feedback" />

            <section className="tip-form">
                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    id="tip-form"
                >
                    <div className="col-12">
                        <textarea
                            name="tipText"
                            id="tipText"
                            placeholder="Talk about anything..."
                            value={Content}
                            onChange={({ target }) => { setContent(target.value) }}
                            className="form-input w-100"
                        ></textarea>
                    </div>
                    <div className="col-12 col-lg-9">
                        <input
                            name="tipUsername"
                            id="tipUsername"
                            placeholder="Your First Name"
                            value={Username}
                            onChange={({ target }) => { setUsername(target.value) }}
                            className="form-input w-100"
                        />
                    </div>
                    <div className="col-12 col-lg-3">
                        <button onClick={validate} className="btn btn-primary btn-block py-3" type="submit">
                            Add Tip
                        </button>
                    </div>
                </form>
            </section>
            
            <section className="tips" id="tip-container">
                {/* Rendering Posts */}
                <DisplayPosts />
            </section>
        </div>
    )
}