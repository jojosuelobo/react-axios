/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import blogFetch from "../axios/config"

export default function Home() {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts")
      const data = response.data

      setPosts(data)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className='home'>
      <h1>Ultimos posts</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : (
        posts.map((post) => (
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link>
          </div> // 34:00
        ))
      )}
    </div>
  )
}
