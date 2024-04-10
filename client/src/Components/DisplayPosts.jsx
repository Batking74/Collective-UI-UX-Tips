// Importing Modules/Packages
import { QUERY_ALL_POSTS } from '../utils/queries';
import { useQuery } from "@apollo/client";
import React, { useState } from "react";

export default function DisplayPosts() {
    const [displayNumber, setDisplayNumber] = useState(5);
    const { loading, data } = useQuery(QUERY_ALL_POSTS);
    if (!loading) {
        const { QueryAllPosts } = data;
        if (displayNumber > QueryAllPosts.length) setDisplayNumber(QueryAllPosts.length);
        if (QueryAllPosts.length > 0) {
            return (
                <>
                    {QueryAllPosts.map(({ Username, Content, id }, index) => {
                        if (index < displayNumber) {
                            return (
                                <div key={id} className="card mb-3 m-3">
                                    <h4 className="card-header bg-primary text-light p-2 m-0">{Username}</h4>
                                    <div className="card-body bg-light p-2">
                                        <p>{Content}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    <button onClick={() => { setDisplayNumber(displayNumber + 5); }}>See More</button>
                </>
            )
        }
    }
}