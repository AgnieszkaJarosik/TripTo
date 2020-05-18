import React from "react";
import styled from 'styled-components';
import "fontello/css/fontello.css";
import imgBackground from "images/22.png";

const PlaceContainer = styled.div`
  width: 80%;
  height: 12rem;
  display: flex;
  margin: 0 0 1rem 0;
  border: 1px solid #E9E5E8;
  border-radius: 5px;
  transition: all ease .2s; 

  :hover {
    box-shadow: 0px 0px 10px 2px rgba(205,204,212,.6);
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  } 
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10rem;
    max-height: 12rem;
  }

  @media only screen and (max-width: 480px) {
    img {
      width: 15rem;
      margin-top: 1rem;
    }
  } 
`;

const ContentContainer = styled.div`
  padding: 1rem;
  font-family: "Open Sans";
  color: #4C5254;
`;

const MainContent = styled.div`
  > h2 {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: .5rem;
  }

  > span {
    margin: .5rem 0;
  }

  .rating {
    display: block;
  }

  .category {
    display: inline-block;
    margin-left: 1rem;
  }
`;

const AddressContainer = styled.div`
  margin-top: 1rem;

  > span {
    display: block;
    margin: .3rem;
  }
`;

const Place = (props) => {
  const rating = showStars(props.place.rating);

  return (
    <PlaceContainer>
      <ImgContainer>
        <a href={props.place.url} target="_blanc">
          <img 
            src={props.place.imgUrl || imgBackground}
            alt="" 
          />
        </a>
      </ImgContainer>
      <ContentContainer>
        <MainContent>
          <h2>{props.place.name}</h2>
          <span className="rating">{rating}</span>
          <span>{props.place.price}</span>
          <span className="category">{props.place.category}</span>
        </MainContent>
        <AddressContainer>
          <span>{props.place.street}</span>
          <span>{props.place.city}</span>
          <span>{props.place.phone}</span>
        </AddressContainer>
      </ContentContainer> 
    </PlaceContainer>
  )
}

export default Place;

function showStars (rating) {
  const stars = [];
  let all = Math.floor(rating);
  for(let i=0; i<all; i++){
    stars.push(<i key={i} className="icon-star"></i>);
  }
  if(rating%1===0.5){
    all++;
    stars.push(<i key={all} className="icon-star-half-alt"></i>);
  }
  for(let i=all; i<5; i++){
    stars.push(<i key={i+1} className="icon-star-empty"></i>);
  }
  return stars;
}


// return (
//   <PlaceContainer>
//     <ImgContainer>
//       <a href={props.place.url} target="_blanc">
//         <img
//           src={props.place.image_url || imgBackground}
//           alt=""
//         />
//       </a>
//     </ImgContainer>
//     <ContentContainer>
//       <MainContent>
//         <h2>{props.place.name}</h2>
//         <span className="rating">{rating}</span>
//         <span>{props.place.price}</span>
//         <span className="category">{props.place.categories[0].title}</span>
//       </MainContent>
//       <AddressContainer>
//         <span>{props.place.location.address1}</span>
//         <span>{props.place.location.city}</span>
//         <span>{props.place.display_phone}</span>
//       </AddressContainer>
//     </ContentContainer>
//   </PlaceContainer>
// )