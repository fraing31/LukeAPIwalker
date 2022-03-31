function Persona(props){
    return(
        <div>
            <h2>
                {props.starWars.name}
            </h2>
            <p>Altura: {props.starWars.height}</p>
            <p>Color de cabello: {props.starWars.hair_color}</p>
            <p>Año de nacimiento: {props.starWars.birth_year}</p>
            <p>Planeta natal: {props.starWars.homeworld}</p>
        </div>
    );
}

export default Persona;
