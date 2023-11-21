import './Card.css'
export const Card = ({movie}) => {

    const {name,imdb_rating,genre,duration,img_link,director_name}=movie;

    return (
        <div className="card-container">
            <div className="card-img-container">
                <img className='card-img' src={img_link} alt="movie-card" />
            </div>
            <div className='details'>
            <div>
                <span className="title">
                     {name}
                </span>
                <br />
            </div>
            <div>
                <span className="genre">
                    Genre: {genre}
                </span>
                <br />
            </div>
            <div>
                <span className='director'>
                    Directed By: {director_name} 
                </span>
                <br />
            </div>
            <div className="rating">
                <span>
                    Rating: {imdb_rating}
                </span>
                <span>
                    Duration: {duration} mins
                </span>
            </div>
            </div>
            
        </div>
    )
}