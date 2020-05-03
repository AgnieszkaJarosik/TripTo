import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";

const Container = styled.div`
  position: absolute;
  align-self: center;
  top: 11rem;
  display: ${ props => props.dispValue};
  transition: all ease .5s;

  .icon-spin1{
    font-size: 7rem;
    color: rgba(130, 83, 85, .2);
    animation: spin 2s infinite linear;
    display: inline-block;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(359deg);
      }
    }
  }
`;

const Animation = (props) => (
  <Container dispValue={props.end ? "none" : "block"}>
    <i className="icon-spin1"></i>
  </Container>
);


function mapSateToProps(state){
  return {
    end: state.end
  }
}

export default connect(mapSateToProps)(Animation);