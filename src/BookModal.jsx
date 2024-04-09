import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function  BookModal(props){


  return(      
  <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton onClick={props.handleClose}>
      <Modal.Title>Add a Book!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Control value={props.status} onChange={(e) => props.setStatus(e.target.value)} />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={props.handleSaveChanges}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>


  );
}

export default BookModal;