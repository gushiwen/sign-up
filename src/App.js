import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={SignupSchema}
      >

        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" placeholder="First Name" />
            {errors.firstName && touched.firstName ? errors.firstName : null}
            <br /><br />
            <Field name="lastName" placeholder="Last Name" />
            {errors.lastName && touched.lastName ? errors.lastName : null}
            <br /><br />
            <Field name="email" placeholder="Email" type="email" />
            {errors.email && touched.email ? errors.email : null}
            <br /><br />
            <button type="submit">Submit</button>
          </Form>
        )}
        
      </Formik>
    </div>
  );
}

export default App;
