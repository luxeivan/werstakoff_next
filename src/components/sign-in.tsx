'use client'

import React from "react"

import { Form, Input, Button } from "antd"

export default function SignIn({ handlerOnFinish}) {


  return (
    <Form
      onFinish={handlerOnFinish}
      style={{padding:20}}
    >
      <Form.Item
        label="Email"
        name="email"
      >
        <Input type="email" />

      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
      >
        <Input.Password />

      </Form.Item>
      <Form.Item>
        <Button  block type="primary" htmlType="submit">Sign In</Button>
      </Form.Item>
    </Form>
  )
}