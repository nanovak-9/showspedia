import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch"

export const ShowInfo = ()=> {
    const {idShow} = useParams()


    
    const { data: show, loading } = useFetch(`https://api.tvmaze.com/shows/${idShow}`)
      

    return(
        <section className="container mt-5">
            <div>
                <div className="card mb-3">
                    <h2 className="card-header text-center">{show.name}</h2>
                    <div className="card-body">
                    <h5 className="card-title">Status: {show.status}</h5>
                    <h6 className="card-subtitle text-muted">Premiered: {show.premiered} <br/> 
                    {show.ended ? `Ended: ${show.ended}` : null } </h6>
                    </div>
                    <div className="text-center">
                        {show.image ?
                         <img className="w-50" src={show.image.original} alt={show.name}  /> :
                          <h5 className="card-body text-muted text-center">No Image Available</h5>}
                    </div>
                    
                    <div className="card-body">
                        <h4>Summary:</h4>
                    <div className="card-text" dangerouslySetInnerHTML={{__html: show.summary}}></div>
                    </div>
                    
                </div>
                <div className="card text-center">
                    <div className="card-body text-center">
                    <h3 className="card-header pt-0 text-center">General Information</h3>
                    <p className="mt-2"><strong>Rating: </strong>{show.rating ? `${show.rating.average}` : null }</p>
                    <p><strong>Language: </strong> {show.language}</p>
                    <p><strong>Type: </strong> {show.type}</p>
                    <strong>Genres: </strong><p>{show.genres ? show.genres.join(", "): null }</p>
                    <a className="btn btn-primary mt-4" href={show.officialSite}>Official Site</a>
                    </div>
                </div>
                </div>
        
      </section>
    )
}