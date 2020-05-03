import React from "react";
import styled from 'styled-components';

const Option = styled.div`
  display: flex;
  font-family: 'Open Sans', sans-serif;
  width: 90%;
  margin: .1rem 0 0 0;
  outline: 0;
  position: relative;
  left: 1rem;

  input {
    cursor: pointer;
    width:90%;
    position: absolute;
    opacity: 0;
  }

  input:hover ~ label {
    color: #C3745C;
  }

  input:checked ~ label {
    color: #C3745C;
  }

  label {
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #CDCCD4;
    padding: 0.3rem;
  }
`;

const CheckboxOption = ({label, onClick, checkboxes=[]}) => (
  <Option>
    <input 
      type="checkbox" 
      name={label} 
      id={label} 
      onChange={ onClick ? onClick : null } 
      checked={checkboxes.includes(label)} 
    >
    </input>
    <label htmlFor={label}>{label}</label>
  </Option>
);

export default CheckboxOption;