function Planetas(props){
    return(
        <div>
            <h1>{props.starWars.name}</h1>
            <p>Diametro: {props.starWars.diameter}</p>
            <p>Clima: {props.starWars.climate}</p>
            <p>Gravedad: {props.starWars.gravity}</p>
            <p>Poblacion: {props.starWars.population} </p>
        </div>
    );
}

export default Planetas;
