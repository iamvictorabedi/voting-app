import React from "react";
import { Card, Button } from "react-bootstrap";

function VoterView(props) {
    console.log("prop", props)
    let { candidate, incrementVoteCount } = props;

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`/img/${candidate.image}`} />
            <Card.Body>
                <Card.Title>{candidate.name}</Card.Title>
                <Button variant="success" onClick={() => incrementVoteCount(candidate._id)}>
                    Vote
                </Button>
            </Card.Body>
            <Card.Footer>Vote count: {candidate.votes}</Card.Footer>
        </Card>
    );
}
export default VoterView;