import { Fragment } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const CategoryForm = ({ handleChange, data }) => {
  return (
    <Fragment>
      <Form.Group className="mb-3">
        <Form.Label>Category image</Form.Label>
        <Form.Control
          name="avatar"
          onChange={handleChange}
          value={data.avatar}
          required
          type="text"
          placeholder="Category image"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
          required
          type="text"
          placeholder="First name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          name="lastName"
          onChange={handleChange}
          value={data.lastName}
          required
          type="text"
          placeholder="Last name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          name="phoneNumber"
          onChange={handleChange}
          value={data.phoneNumber}
          required
          type="text"
          placeholder="Phone number"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
    </Fragment>
  );
};

CategoryForm.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
};

export default CategoryForm;
