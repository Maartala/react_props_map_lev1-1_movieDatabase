const MovieCard = (props) => {
    return (
        <article className="movie_item">
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <div className="movie_genres">
                {props.genre.map((elt) =>
                    <p>{elt}</p>
                )}
            </div>
        </article>
    );
}

export default MovieCard;