import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Constants from "../../customUtils/Config";
import PostCard from "./PostCard";


const Post = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    const {userId} = useParams()
    console.log('ID', userId);
    async function PostData() {
        // let response = await axios.get(userId ? Constants.BASE_URL + `/posts/?userId=${userId}`:Constants.BASE_URL + '/posts')
        let response = await axios.get(Constants.BASE_URL + `/posts/?userId=${userId}`)
        setPosts(response.data)
    }

    useEffect(() => {
        PostData()
    }, [])
    return (
        <div>
            {
                posts.map((post) => {
                    return ( <PostCard post={post} />
                    )
                })
            }
        </div>
    )
}

export default Post;


{/* <div className="card mx-md-3 d-inline-block text-white bg-success mb-3" style={{backgroundColor: "#6a1b9a", width: "30%", marginTop: "2vh", marginLeft: "2vh" }}>
                            <div className="card-header">{post.name}</div>
                            <div className="card-body">
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div> */}