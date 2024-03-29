import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({tags}) =>{

    const [videos, setVideo] = useState([]);

    useEffect(()=>{
        const fetchVideo = async () =>{
            const res = await axios.get(`/videos/tags?tags=${tags}`);
            setVideo(res.data);
        }
        fetchVideo();
    }, [tags]);
    return (
    <Container>
        {videos.map(video=>(
            <Card type="sm" key={video._id} video={video}/>
        ))}
    </Container>
    )
}

export default Recommendation