import Header from "./Header"
import Search from "./Search"
//import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import Cards from "./Cards";

export default function App() {
 
  const [shows, setShows] = useState([])
  const [resultsBack, setResultsBack] = useState(false)

  const searchData= async (query) => {
    setResultsBack(false)
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const res = await req.json()
    setShows(res)
    if (res.length == 0) {
       setResultsBack(true)
    }

  }

  

  return (
    <div className="App">
      <Search search = {searchData} />
      <div className="container">
        {resultsBack == true && <h3 className="text-center">No matching results</h3>}
        <div className="row gy-4">
          {shows.length !== 0 &&
          shows.map(({show}) => (
            <div key={show.id} className="col-12 col-sm-6 col-md-3">
              <Cards show = {show}/>
            </div> 
        ))}
        </div>
      </div>
      
    </div>
  )
}
