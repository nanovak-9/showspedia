import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch"

const ShowSeasons = () => {
    const {idShow} = useParams()
    const { data: episodes, loading } = useFetch(`https://api.tvmaze.com/shows/${idShow}/episodes`)

    if (!episodes.length) return null;

    const groupBySeason = episodes.reduce((seasons, episode) => {
        const { season } = episode;
        seasons[season] = seasons[season] ?? [];
        seasons[season].push(episode);
        return seasons;
    }, {});
  
    return (
        <div className="container card mt-4 mb-5 pb-4">
            <h2 className="card-header text-center">Seasons</h2>
            <div className="accordion" id="accordionExample">
                {Object.entries(groupBySeason).map(([key]) => {
                    const episodesInSeason = groupBySeason[key];
                    console.log(episodesInSeason)
                    return (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`heading${key}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${key}`} aria-expanded="false" aria-controls={`#collapse${key}`}>
                                    <h5 className="m-0"><strong>Season {key}</strong></h5>
                                </button>
                            </h2>
                            <div id={`collapse${key}`} className="accordion-collapse collapse" aria-labelledby={`heading${key}`} data-bs-parent="#accordionExample" style={{}}>
                                    <div className="accordion-body">
                                        <ol>
                                            {episodesInSeason.map(episode => <li>{episode.name}</li> )}
                                           
                                        </ol>
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>


            


        </div>

  )
}

export default ShowSeasons