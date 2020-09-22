import React from "react";
import {Container, SpinnerDiv, LoadingText} from "./style";

const Spinner = () => {
    return (
        <Container>
            <SpinnerDiv/>
            <LoadingText>Loading</LoadingText>
        </Container>
    )
}

export default Spinner;
