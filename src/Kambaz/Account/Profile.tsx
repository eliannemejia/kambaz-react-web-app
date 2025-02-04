import { Form, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <div id="wd-signup-screen">
        <h2>Profile</h2>
        <Form.Control id="wd-username"
          placeholder="username"
          className="mb-2" />
        <Form.Control id="wd-password"
          placeholder="password" type="password"
          className="mb-2" />
        <Form.Control id="wd-firstname"
          defaultValue="Alice"
          placeholder="First Name"
          className="mb-2" />
        <Form.Control id="wd-lastname"
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="mb-2" />
        <Form.Control id="wd-dob"
          defaultValue="mm/dd/yyyy"
          placeholder="mm/dd/yyyy"
          type="date"
          className="mb-2" />
        <Form.Control
          defaultValue="alice@wonderland"
          type="email" id="wd-email"
          className="mb-2" />
        <FormSelect defaultValue="FACULTY" id="wd-role">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </FormSelect>
        <Link to="/Kambaz/Account/Signin" className="btn btn-danger" style={{ width: "200px", marginTop:"10px"}}>Sign out</Link>
      </div>
    </div>
  );
}
