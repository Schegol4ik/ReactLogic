import React, {useEffect, useState} from 'react'
import {usePost} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/Pages";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/myModal/myModal";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import Pagination from "../UI/pagination/Pagination";
import PostList from "../Components/PostList";
import Loader from "../UI/Loader/Loader";
import PostService from "../API/PostService";


const Posts = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Мультипарадигменный язык программирования."},
        {
            id: 2,
            title: "Ruby ",
            body: "Динамический, рефлективный, интерпретируемый высокоуровневый язык программирования."
        },
        {id: 3, title: "React", body: "Библиотека для создания пользовательских интерфейсов."}
    ]) //Посты
    const [filter, setFilter] = useState({sort: '', query: ''})  //Фильтрация
    const [modal, setModal] = useState(false) //Эффект затемнения
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortAndSearchPost = usePost(posts, filter.sort, filter.query) //Сортировка и Поиск постов
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    } //Создание поста
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    } //Удаление поста
    useEffect(() => {
        fetchPost()
    }, [page]) //Монтирование постов
    const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    }) //Крутилка
    const pagesArray = getPagesArray(totalPages)
    const changePage = (page) => {
        setPage(page)
    }


    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
            <h1 style={{color: 'red', display: 'flex', justifyContent: 'center'}}>Произошла ошибка {postError}</h1>
            }
            {
                isPostsLoading
                    ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                    : <PostList remove={removePost} posts={sortAndSearchPost} title="Список постов"/>
            }
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>


        </div>
    )
}

export default Posts