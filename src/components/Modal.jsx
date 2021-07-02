import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalView({
  postBody,
  setPostBody,
  postTitle,
  setPostTitle,
  setShow,
  show,
}) {
  const [changeTitle, setChangeTitle] = useState(postTitle);
  const [changeBody, setChangeBody] = useState(postBody);
  //Event Handlers
  const getBodyText = (e) => {
    setChangeBody(e.target.value);
  };
  const getTitleText = (e) => {
    setChangeTitle(e.target.value);
  };
  const submitChanges = () => {
    setPostBody(changeBody);
    setPostTitle(changeTitle);
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <textarea
            className='w-100'
            onChange={getTitleText}
            value={changeTitle}
          >
            {postTitle}
          </textarea>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className='w-100'
            cols='30'
            rows='5'
            onChange={getBodyText}
            value={changeBody}
          >
            {postBody}
          </textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger mr-auto' onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant='success' onClick={submitChanges}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalView;
