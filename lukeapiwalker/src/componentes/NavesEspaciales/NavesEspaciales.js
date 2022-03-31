function NavesEspaciales(props) {
  return (
    <div>
      <h1>{props.starWars.name}</h1>
      <p>Modelo: {props.starWars.model}</p>
      <p>Costo: {props.starWars.cost_in_credits}</p>
      <p>Longitud: {props.starWars.length}</p>
      <p>Velocidad maxima: {props.starWars.max_atmosphering_speed} </p>
    </div>
  );
}

export default NavesEspaciales;
