import React from "react";
import { Modal, Button } from "react-bootstrap";
const customStyles = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0)",
	},
	content: {
		width: "570px",
		top: "5%",
		left: "auto",
		right: "10%",
		bottom: "auto",
		marginRight: "auto",
		marginBottom: "auto",
		transform: "translate(0, 0)",
		padding: "20px",
		borderRadius: "10px",
	},
};
const SignUpModal = ({ show, onHide }) => {
	return (
		<Modal style={customStyles} show={show} onHide={onHide} size="lg">
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Centered Modal</h4>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
					facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
					vestibulum at eros.
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default SignUpModal;
