import { useEffect } from 'react'

const useSearchaMovie = ({movieName}) => {
  
    const searchAnMovie = async () =>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzVhZTExNDJlMDZkOGQzZDI0MTg4YThkOWQ0ZDlkOCIsInN1YiI6IjY1OWY1MTI4MzY3OWExMDEyOGFiYjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4BU_PDCkfJi2u84YuPwxIpPcPEpsJ9m-nKmeL-Hh9A'
            }
          };
          
        const data = await fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options);
        const json = data.json();
        
    }
    useEffect(()=>{
        searchAnMovie({movieName});
  })
}

export default useSearchaMovie

