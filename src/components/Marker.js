import React from "react";
import styled from 'styled-components';

const Pin = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -115px;
  border-radius: 50% 50% 50% 0;
  background-color: ${props => props.color};
  border: 1px solid white;
  box-shadow: 0px 0px 3px 1px rgba(255,255,255,.7);
  width: 30px;
  height: 30px;
  transform: rotate(-45deg);
  z-index: 2;
  transition: scale ease .1s;
 
  :hover {
    cursor: pointer;
    transform: scale(1.2) rotate(-45deg);

    .info {
      display: block;
    }
  }

  i:before {
    font-size: .94rem;
    padding: .35rem;
  }

  .info {
    min-width: 8rem;
    min-height: 4rem;
    transform: rotate(45deg);
    background-color: rgba(255, 255, 255, 0.7);    
    color: ${props => props.color};
    transition: all ease .2s;
    padding: .5rem;
    border-radius: 5px;
    box-shadow: 0px 0px 16px 6px rgba(205,204,212,0.7);
    z-index: 4;
    display: none;
  }

  .name {
    font-size: 1rem;
    font-weight: 700;
    padding: .4rem 0;
  }

  .category {
    display: inline-block;
  }

  span {
    font-size: .8rem;
    display: block;
  }
`;

const Marker = ({ lat, lng, category, place }) => {
  let classNames = null;
  let color;
  switch(category){
    case 'Restauracje':
      classNames = 'icon-restaurant';
      color = '#9C533E';
      break;
    case 'Kawiarnie':
      classNames = 'icon-cafe';
      color = '#825355';
      break;
    case 'Puby':
      classNames = 'icon-bar';
      color = '#C3745C';
      break;
    case 'Muzea':
      classNames = 'icon-town-hall';
      color = '#9E9292';
      break;
    case 'Zabytki':
      classNames = 'icon-monument';
      color = '#9E9292';
      break;
    case 'Kościoły':
      classNames = 'icon-religious-christian';
      color = '#4C5254';
      break;
    default:
      classNames = 'icon-ok';
      color = '#9F9FA9';
  }

  return (
    <Pin color={color}>
      <i className={classNames}></i>  
      <div className="info">
        <span className="name">{place.name}</span>
        <span className="rating">Ocena: {place.rating}</span>
        <span>{place.price && place.price}</span>
        <span className="category">{place.categories && place.categories[0].title}</span>
      </div>
    </Pin>
  )
}

export default Marker;