import styled from "styled-components";

const Button = styled.button`
  border: 1px solid #825355;
  border-radius: 15px; 
  padding: 15px;
  background: rgb(130, 83, 85, 0.8);
  margin: 1rem 0 0 1rem;
  color: white;
  font-size: 1.3rem;

  :hover {
    cursor: pointer;
    background-color: rgba(195, 116, 92, 0.8);
    border: 1px solid #C3745C;
  }

  @media only screen and (max-width: 768px) {
    margin: 2rem 1rem 0 1rem;
    width: 91%;
  }
`;

export default Button;