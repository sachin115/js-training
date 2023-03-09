import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";



function Dashboard() {

    const navigate = useNavigate();

    const routePost = () => {
        navigate('/post')
    }

    const routeChange = () => {
        navigate('/tabledata');
    };

    const routeUser = () => {
        navigate("/user")
    }

    const routeComment = () => {
        navigate("/comment")
    }
    return (
        <>
            <div className='header'>
                <Button style={{color:"white"}} onClick={routeUser}>USER</Button>
                <Button style={{color:"white"}} onClick={routePost}>POSTS</Button>
                <Button style={{color:"white"}} onClick={routeChange}>TABLE</Button>
                <Button style={{color:"white"}} onClick={routeComment}>COMMENT</Button>
            </div>
        </>
    )
}

export default Dashboard;