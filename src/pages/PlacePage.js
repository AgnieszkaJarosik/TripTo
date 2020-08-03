import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import styled from 'styled-components';

// import { connect } from "react-redux";
// import * as fetchEndAcion from "redux/actions/fetchEndAction";
// import { bindActionCreators } from "redux";

import Animation from "components/Animation";
import Fetch from "services/Fetch";

const Container = styled.div`
  min-height: 100%;
  max-width: 100vw;
  display: flex;
  background-color: rgba(233, 229, 232, .2);
  justify-content: center;
`;

const Content = styled.div`
  width: 65%;
  height: auto;
  font-family: 'Open-sans';
  color: #4C5254;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;

  > h2 {
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 700;
    color: #825355;
    margin: 0 1rem 2rem 1rem;
  }


  @media only screen and (max-width: 768px) {
      width: 95%;
    }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

   img {
    width: 15rem;
    height: auto;
  }
`;

const Place = ({input, setEndStatus}) => {
  const trip = useSelector(state => state.trip);
  const [info, setInfo] = useState([]);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    ( async () => {
      try{
        const someInfo = await Fetch.mediaWiki(trip.end);
        setInfo(someInfo);
      } catch(e){
        setInfo([]);
      }
    })();
  }, [trip.end]);

  useEffect(() => {
    ( async () => {
      try{
        const img = await Fetch.wikiImg(trip.end);
        const titles = img.map( i => i.substring(5).replace(/ /g,"_"));
        setImgs(titles);
      } catch(e){
        setImgs([]);
      }
    })()
  },[trip.end]);


  return(
    <Container>
      <Content>
        {/*<Animation></Animation>*/}
        <h2>{trip.end}</h2>
        {info}
      <ImagesContainer>
        { imgs && imgs.map( img => (
          <img src={`https://upload.wikimedia.org/wikipedia/commons/e/eb/${img}`}
            key={img}
            alt=""
          />
        ))}
      </ImagesContainer>
      </Content>
    </Container>
  )
}

export default Place;
