import API_KEY from './keys'
import { useEffect, useState } from 'react';



const CONTEXT_KEY="9990f61d942161f13"




const useGoogleSearch =(textString) => {
   
    const [data, setData] = useState(null);

    useEffect(()=>{
    const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${textString}`
    const fetchData =() => {
        fetch(URL).then(response=>response.json()).then(result=>setData(result))
    }
    fetchData()
    

    },[textString])


  
    return {data}

}


export default useGoogleSearch;

