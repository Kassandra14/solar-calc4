import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
import SaveButton from '../components/SaveButton'
import BackButton from '../components/BackButton'
import "./style.css"
import "../components/SaveButton/style.css"

function Profile(props) {
  // const [book, setBook] = useState({})

  // // When this component mounts, grab the book with the _id of props.match.params.id
  // // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const {id} = useParams()
  // useEffect(() => {
  //   API.getBook(id)
  //     .then(res => setBook(res.data))
  //     .catch(err => console.log(err));
  // }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            
              <h1>
                Your Sites:
              </h1>

            
          </Col>
        </Row>
        <h2>Table here:</h2>
        <Row>
          <Col size="md-10 md-offset-1">
          </Col>
        </Row>        
        <Row>
        <Row></Row>
        <Row></Row>
     
        
        <SaveButton to='/profile'>Save My Score</SaveButton>
  </Row>
    <Row>

    <BackButton to='/about'>Back to SolarCalc</BackButton>
    <Row>
        <Col size="md-2">
      
          </Col>
        </Row>
  </Row>  
  </Container>
    );
  }


export default Profile;