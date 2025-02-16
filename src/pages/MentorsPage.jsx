import React from 'react'
import { useJsonPlaceholder } from '../context/JsonPlaceholderContext'
import { useModal } from '../context/ModalContext';

const MentorsPage = () => {
  const {posts, loading} = useJsonPlaceholder()
  const { openModal} = useModal(); // from the context
  if(loading) return <p>Loading Posts....</p>
  return (
    <div>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id} className='border border-slate-400'>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}


      <div>
      <button
        onClick={() => {
          openModal("We are in the mentors page");
        }}
        className='py-3 px-6 bg-blue-500 text-white dark:bg-yellow-500 dark:text-black'
      >
        Open Modal
      </button>
      </div>
    </div>
  )
}

export default MentorsPage