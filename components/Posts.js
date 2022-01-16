import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";
import Post from "./Post";
function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          img={post.data().image}
          userImg={post.data().profileImg}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
