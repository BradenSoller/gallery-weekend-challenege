import { useState } from 'react';
function LikeCounter() {
  const [likeCount, setLikeCount] = useState(0)

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1)
  }
    return (
      <>
      <button onClick={handleLikeClick}>like</button> <span><p>{likeCount}</p></span>
</>
    )
  }
    export default LikeCounter