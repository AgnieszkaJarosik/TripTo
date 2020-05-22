import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  width: 92%;
  border: 0;
  border-bottom: 2px solid white;
  margin: 1rem 0 0 0;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  ::placeholder {
    color: transparent;
  }

  :placeholder-shown + label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  :focus {
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #E9E5E8, #c3745c);
    border-image-slice: 1;
    color: #fff;
    font-weight: normal;

     & + label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #CCCBD4;
    }

    :required,:invalid { 
      box-shadow:none; 
    }
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #CDCCD4;
`;

const InputContainer = styled.div`
  position: relative;
  margin: 1rem 0 0 1rem ;
`;

const InputPlus = ({name, placeholder, onChange}) => (
  <InputContainer>
    <Input type="text" placeholder={placeholder} name={name} id={name}
           onChange={ e => onChange(e.target.value) } required>
    </Input>
    <Label htmlFor={name} className="form__label">{name}</Label>
  </InputContainer>
);

export default InputPlus;