import styled from "styled-components";
import spin from './spinner.svg';

const Container = styled.div`
display: flex;

justify-content: center;
align-items: center;
flex-direction: column;

height: calc(var(--vh, 1vh) * 100);
width: 100%;

`

const SpinnerDiv = styled.div`
width: 10rem;
height: 10rem;

background: url("${spin}") no-repeat;
`
const LoadingText = styled.h5`
text-align: center;
color: #aaa;
`

export {
    Container,
    SpinnerDiv,
    LoadingText
}
