import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import spokesPersonsJson from "./data/spokesperson.json";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import VoterView from "./component/VoterView";

function PresidentView() {
  let [spokesPersons, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(spokesPersonsJson);
  }, []);

  function incrementVoteCount(presidentId) {
    spokesPersons = spokesPersons.map((spokeperson) => {
      if (spokeperson._id === presidentId) {
        spokeperson.votes = spokeperson.votes + 1;
      }
      return spokeperson;
    });
    setCandidates(spokesPersons);
  }

  return (
      <Container className="app">
        <Row>
          {spokesPersons.map((spokeperson) => {
            return (
                <Col md={4}>
                  <VoterView
                      candidate={spokeperson}
                      incrementVoteCount={(presidentId) => incrementVoteCount(presidentId)}
                  />
                </Col>
            );
          })}
        </Row>
      </Container>
  );
}
export default PresidentView;