/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response)
    } catch (err) {
      console.log(err)
    } 
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <h1>Home</h1>
  )
}
