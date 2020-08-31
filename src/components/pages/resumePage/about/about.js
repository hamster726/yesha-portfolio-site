import React from "react";
import {Row, Col} from "reactstrap";
import {StyledContainer} from "./style";

const About = () => {
    return (
        <StyledContainer fluid>
            <Row xs={2}>
                <Col>
                    Image
                </Col>
                <Col>
                    Text
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default About;