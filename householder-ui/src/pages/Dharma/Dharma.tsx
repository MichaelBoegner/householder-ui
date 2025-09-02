import React, { useEffect, useState } from "react"
import "./Dharma.css"

interface Post {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  link: string
}

const Dharma: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch(
      "https://public-api.wordpress.com/wp/v2/sites/householder86.wordpress.com/posts"
    )
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err))
  }, [])

  return (
    <section className="dharma">
      <h2>Articles</h2>
      {posts.length === 0 ? (
        <p>Loading…</p>
      ) : (
        posts.map((post) => (
          <article key={post.id}>
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </article>
        ))
      )}
    </section>
  )
}

export default Dharma
