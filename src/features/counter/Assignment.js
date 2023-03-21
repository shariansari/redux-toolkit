import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux'

import { getData } from './counterSlice'



function Assignment() {
    const [query ,setQuery] =useState("Nature")
    const count = useSelector((state) => state.counter.count)

    const dispatch = useDispatch()
  return (
    <div>
      <Navbar bg="primary" expand="lg">
      <Container fluid style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        
       
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search What to you want to see"
              className="me-2"
              aria-label="Search"
              style={{width:"70vw"}}
              value={query}
              onChange={(e)=> setQuery(e.target.value)}
            />
            <Button variant="outline-success" style={{background:"orange",color:"white"}} onClick={()=>{dispatch(getData())}}>Search</Button>
          </Form>
       
      </Container>
    </Navbar>
    </div>
  )
}

export default Assignment