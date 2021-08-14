import React, { useState, useEffect} from 'react';
import API_KEY from "./keys"

const CONTEXT_KEY = "2557823bb2e951fe7"

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then(res => res.json())
      .then(result => {
        setData(result)
      })
    }
    
    fetchData();
  }, [term])

  return { data }

}

export default useGoogleSearch;
