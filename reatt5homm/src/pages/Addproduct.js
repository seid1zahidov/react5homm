import React from 'react'
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Addproduct = () => {
  return (
    <div>
          <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        url: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        let user = JSON.parse(localStorage.getItem('basket'))
          user.push({
            ...values
          })
          localStorage.setItem('basket' , JSON.stringify(user))
      }}
    >
      <Form>
        <label htmlFor="firstName"> Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Price</label>
        <Field type = 'number' id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="lastName">url</label>
        <Field type = 'url' id="lastName" name="url" placeholder="Doe" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
    </div>
  )
}

export default Addproduct