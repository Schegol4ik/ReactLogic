import React from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostIdPages = () => {
    const params = useParams()
    const[fetchPostById,isLoading,error] = useFetching(async ()=>{
        const response = await PostService.getById(params.id)
    })

    return (
        <div>
            <h1>На странице поста c ID : {params.id}</h1>
        </div>

    );
};

export default PostIdPages;