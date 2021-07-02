import { Card } from 'react-bootstrap';
import Modal from './Modal';
import { useState } from 'react';

const Post = ({ post }) => {
  //State
  const [show, setShow] = useState(false);
  const [postBody, setPostBody] = useState(post.body);
  const [postTitle, setPostTitle] = useState(post.title);
  return (
    <>
      <Card className='post' onClick={() => setShow(true)}>
        <h5 className='titleText'>{postTitle}</h5>
        <p className='bodyText'>{postBody}</p>
      </Card>
      <Modal
        postBody={postBody}
        setPostBody={setPostBody}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        show={show}
        setShow={setShow}
      />
    </>
  );
};
export default Post;
