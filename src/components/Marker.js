import styled from 'styled-components';

const Marker = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -115px;
  border-radius: 50% 50% 50% 0;
  border: 4px solid #C1745B;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);

  :after {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin-left: -5px;
    margin-top: -5px;
    background-color: #C1745B;
  }

  :hover {
    cursor: pointer;
  }
`;

export default Marker;