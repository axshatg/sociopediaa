import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    const shuffledData = shuffleArray(data);
    dispatch(setPosts({ posts: shuffledData }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();

    // Shuffle the data array before dispatching
    const shuffledData = shuffleArray(data);

    dispatch(setPosts({ posts: shuffledData }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {Array.isArray(posts) &&
        posts.map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            userPicturePath,
            likes,
            comments,
          }) => (
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          )
        )}
    </>
  );
};

export default PostsWidget;
