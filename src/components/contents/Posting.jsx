import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Posting() {
    const { postingId } = useParams();
    const location = useLocation();

    return (
        <>
            <h1>{postingId}번 포스팅 페이지입니다.</h1>
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                <li>key : {location.key}</li>
            </ul>
        </>
    )
}

export default Posting;