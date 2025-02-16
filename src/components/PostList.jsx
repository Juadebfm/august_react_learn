import React from 'react'
import { useJsonPlaceholder } from '../context/JsonPlaceholderContext'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const PostList = () => {
  const {posts, loading} = useJsonPlaceholder();

    if(loading) return <div className='flex items-center justify-center animate-spin'><AiOutlineLoading3Quarters size={40}/></div>
  return (
    <div>
        <h2>Posts</h2>
        <ul className='grid grid-cols-3 place-items-center place-content-center'>
            {posts.slice(0, 5).map((post) => (
                <li key={post.id} className='border border-slate-400'>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PostList