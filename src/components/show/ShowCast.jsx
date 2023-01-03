import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch"

const ShowCast = () => {
    const {idShow} = useParams()
    const { data: cast, loading } = useFetch(`https://api.tvmaze.com/shows/${idShow}/cast`)

    if (!cast.length) return null; 

  return (
    <div className="container card mt-4 mb-5 pb-4">
            <h2 className="card-header text-center">Cast</h2>
                <div className="d-flex flex-wrap justify-content-center">
                {cast.map(({person, character}) => (
                    
                        <div className="card m-2 col-md-5">
                        <h3 className="card-header">{person.name}</h3>
                        <div className="card-body"/>

                            {person.image ? <img src={person.image.original} alt={person.name} className="p-2 w-50 mx-auto" /> : <h5 className="card-body text-muted text-center">No Image Available</h5>}        
                
                        <div className="card-body">
                            
                            <h5><strong>Character: </strong>{character.name}</h5>
                            <h5><strong>Country of origin: </strong>{person.country?.name}</h5>
                            <h5><strong>Date of birth: </strong>{person.birthday}</h5>
                            <h5><strong>Gender: </strong>{person.gender}</h5>
                
                            <div className="card-footer text-muted">
                                <em>Via TVMaze</em>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                


            


        </div>

  )
}

export default ShowCast