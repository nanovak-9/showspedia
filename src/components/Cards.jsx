import { Link } from "react-router-dom"

const Cards = ( {show} ) => {
  
  const {name, image, summary, id} = show;
  
    return (
        <Link className="text-decoration-none" to= {`/shows/${id}`}>
            
            <div className="card mb-3">
                <h3 className="card-header">{name}</h3>
                <div className="card-body"/>

                {image ? <img src={image.original} alt={name} /> : <h5 className="card-body text-muted text-center">No Image Available</h5>}        
                
                <div className="card-body">
                    <div className="card-text" dangerouslySetInnerHTML={{__html: summary}}></div>
            
                    <div className="card-footer text-muted">
                        <em>Via TVMaze</em>
                    </div>
                </div>
            </div>
        </Link>


  )
}

export default Cards