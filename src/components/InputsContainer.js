import styled from 'styled-components';
import InputPlus from "components/InputPlus";

const InputsContainer = styled.div`
  width:30%;
  background-color: rgba(76, 82, 84, 0.8);
  padding: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

  ~ button {
    padding-left: 1rem;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    transform: translate(-100%, 0);

    ~ ${InputPlus} {
      width: 80%;
    }
  }
`;

export default InputsContainer;