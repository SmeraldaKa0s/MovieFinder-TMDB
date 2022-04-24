import { useState, useEffect } from "react";
import { baseUrl, apiKey } from "../utils/variables";


const useFetchDetails = (id, subcategory) => {

  const [element, setElement] = useState({})
  const urlDetail = `${baseUrl}${id}/${subcategory}${apiKey}`


  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(urlDetail)
      const data = await res.json()
      setElement(data)
    }
    fetchApi()
  }, [urlDetail])
  return element
}



export default useFetchDetails; 
