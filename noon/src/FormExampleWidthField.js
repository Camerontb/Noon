import React from 'react'
import { Form } from 'semantic-ui-react'

const FormExampleWidthField = () => (
  <Form className="wrapper">
    <Form.Group>
      <Form.Input label='Vessel name' placeholder='Vessel Name' width={6} />
      <Form.Input label='IMO Number' placeholder='IMO Number' width={4} />
      <Form.Input label='Date' placeholder='Date' width={6} type="date" />
    </Form.Group>
    <Form.Group>
      <Form.Input label="Latitude" placeholder='Latitude' width={6} />
      <Form.Input label="Longitude" placeholder='Longitude' width={6} />
      <Form.Input label="Speed" placeholder='Speed Knots' width={6} />


      
    </Form.Group>
    <Form.Group>
      <Form.Input placeholder='8 Wide' width={8} />
      <Form.Input placeholder='6 Wide' width={6} />
      <Form.Input placeholder='2 Wide' width={2} />
    </Form.Group>
  </Form>
)

export default FormExampleWidthField