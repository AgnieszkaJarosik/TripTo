import React from "react";
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  height: 100%;
  width: 100vw;
  background-color: rgba(233, 229, 232, .2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 700;
  color: #4C5254;

  > div {
    margin-bottom: 2rem; 
    color: #C3745C;
  }

  > span {
    font-size: 3rem;
  }
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <div>
      404
    </div>
    <span>
      Page Not Found
    </span>
  </NotFoundContainer>
);

export default NotFoundPage;