import "./App.css";
import Control from "./components/Control";
import { Modal, Button, Form } from "react-bootstrap"
import { useState } from "react";


function App() {
    const [show, setShow] = useState(false);
    const [apiToken, setApiToken] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
  
  
  return (
    <div className="App">
      <h1 style={{marginTop: 0}}>Lifx Light Controls</h1>
      <Button variant="primary" onClick={handleShow}>
        Enter API Token
      </Button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>API Token</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form.Label>Paste your personal API token here!</Form.Label>
        <Form.Control
          type="text"
          value={apiToken}
          onChange={event => setApiToken(event.target.value)}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} >Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
    <Control apiToken={apiToken}/>
    </div>
  );
}

export default App;
