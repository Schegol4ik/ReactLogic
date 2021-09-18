import React from 'react';
import MyButton from "../UI/button/MyButton";
import {useHistory} from 'react-router-dom'
const PostItem = ({post,remove}) => {

    const router = useHistory()
    return (
        <div className="post">
            <div className="post_content">
                <strong>{post.id} {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post_btns">
                <MyButton onClick={()=>router.push(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={()=>remove(post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;