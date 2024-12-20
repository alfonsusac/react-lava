"use client"
import { useState } from "react"

export function LikeCounter() {
  const [likes, setLikes] = useState(0)
  return (<>
    <div>
      {likes}
    </div>
    <button onClick={() => setLikes(likes + 1)}>
      Like
    </button>
  </>)
}