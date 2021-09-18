import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    let addNewPost = (e) => {
        e.preventDefault() //Предотвращает дефолтное поведение браузера
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})

    }

    return (
        <div>
            <form>
                <MyInput
                    type="text" placeholder="Название поста"
                    value={post.title}
                    onChange={e => (setPost({...post, title: e.target.value}))}/>
                <MyInput
                    value={post.body}
                    type="text" placeholder="Описание поста"
                    onChange={e => (setPost({...post, body: e.target.value}))}/>
                <MyButton onClick={addNewPost}>создать пост</MyButton>
            </form>
        </div>
    );
};

export default PostForm;