import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const usePlaceFetch = (term) => {
  const places = useSelector(state => state.places);
  const [filteredPlaces, setFilteredPlaces] = useState({});

  useEffect(() => {
      setPlaces();
  }, []);

  function setPlaces(checkboxes)  {
    let results = {};

    setFilteredPlaces(results);
  }

  return [filteredPlaces, setPlaces];
}

export default usePlaceFetch;
