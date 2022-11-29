import {FormLayout, TextField,Form} from '@shopify/polaris';
import React, { useState } from 'react';

function Textfieldsofpolaris() {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [repassword, setRePassword]= useState("")
    function handleSubmit(e){
        setName('aedfccf');
        setEmail('');
        setPassword('');
        setRePassword('');
    
    }
  return (
    <Form onSubmit={handleSubmit}>
    <FormLayout>
      <FormLayout.Group condensed>
        <TextField label="Name" 
        value={name}
        onChange={(e) => setName(e)} autoComplete="off" />
        <TextField label="Email" 
        value={email}
        onChange={(e) => setEmail(e)} autoComplete="off" />
        <TextField label="Password" 
        value={password}
        onChange={(e) => setPassword(e)} autoComplete="off" />
        <TextField label="RePassword" 
        value={repassword}
        onChange={(e) => setRePassword(e)} autoComplete="off" />
      </FormLayout.Group>
      {name}
      {email}
      {password}
      {repassword}
    </FormLayout>
    </Form>
  );
}
export default Textfieldsofpolaris;