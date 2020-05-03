import React from "react";
import styled from 'styled-components';
import CheckboxOption from "components/CheckboxOption";

const Container = styled.div`
  h3 {
    font-size: 1.2rem;
    margin: .5rem 0;
    border-bottom: 2px solid;
    border-image: linear-gradient(to right, #E9E5E8, #C3745C);
  }

  h4 {
    font-size: 1.1rem;
    margin: .5rem 0;
  }

  a {
    text-decoration: underline;
    display: inline-block;
    color: #CDCCD4;
    padding: .5rem;
  }

  a:hover {
    color: #C3745C;
  }

  i {
    position: absolute;
    top: 4rem;
    color: transparent;
    transition: transform 0.5s ease-in-out;
  }

  @media only screen and (max-width: 768px) {
    i {
      font-size: 2rem;
      color: #4C5254;
      padding: 1rem;
      z-index: 2;
    }
  }
`;

const Options = styled.div`
  width:20vw;
  height: 100%;
  z-index: 2;
  background-color: rgb(76, 82, 84, 0.8);
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  color: #CDCCD4;
  padding: 1rem;
  font-size: 1rem;
  transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

  @media only screen and (max-width: 768px) {
    position: absolute;
    transform: translate(-120%, 0);
    padding: 3.5rem 1rem 1rem 1rem;
  }
`;

const Checkbox = styled.input`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 3;
  opacity: 0;
  top: 4rem;

  @media only screen and (max-width: 768px) {
    cursor: pointer;

    :checked ~ ${Options} {
      transform: translate(0);
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    :checked ~ i {
      color: #fff;
      transform: rotate(180deg);
    }
  }  
`;

const Sidenav = (props) => {
  const restaurants = ['Restauracja', 'Fastfood', 'Pizzeria', 'Bar mleczny', 'Naleśnikarnia', 'Kawiarnia', 'Pub'];
  const places = ['Muzea', 'Galerie sztuki', 'Zabytki', 'Kościoły', 'Parki', 'Pomniki'];

  return (
    <Container>
      <Checkbox type="checkbox"></Checkbox>
      <i className="icon-right-circled2"></i>
      <Options>
      <h3>Miejsce: {props.end}</h3>
        {props.site==="/restaurants" ? 
            restaurants.map( (restaurant, idx) => (
              <CheckboxOption 
                key={idx}
                label={restaurant} 
                onClick={()=>props.handlePlacesSearch(restaurant)}
                checkboxes={props.checkboxes} 
              >
              </CheckboxOption>
            ))
          :
            places.map( (place, idx) => (
              <CheckboxOption 
                key={idx}
                label={place} 
                onClick={()=>props.handlePlacesSearch(place)}
                checkboxes={props.checkboxes} 
              >
              </CheckboxOption>
            ))}
      </Options> 
    </Container>
  );
}

export default Sidenav;