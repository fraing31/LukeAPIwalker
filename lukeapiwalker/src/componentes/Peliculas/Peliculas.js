function Peliculas(props){
    return(
        <div>
            <h1>{props.starWars.title}</h1>
            <p>Episodio de pelicula: {props.starWars.episode_id}</p>
            <p>Director: {props.starWars.director}</p>
            <p>Productor: {props.starWars.producer}</p>
            <p>Fecha de lanzamiento: {props.starWars.release_date} </p>
        </div>
    );
}

export default Peliculas;
