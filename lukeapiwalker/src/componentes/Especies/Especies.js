function Especies(props){
    return(
    
         <div>
            <h1>{props.starWars.name}</h1>
            <p>Color de piel: {props.starWars.skin_colors}</p>
            <p>Color de cabello: {props.starWars.hair_colors}</p>
            <p>Color de ojos: {props.starWars.eye_colors}</p>
            <p>Idioma: {props.starWars.language} </p>
        </div>
    
    );
}

export default Especies;


