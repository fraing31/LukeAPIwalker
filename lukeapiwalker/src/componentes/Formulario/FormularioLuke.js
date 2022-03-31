function FormularioLuke(props){
    return (
        <form onSubmit={(event) => props.buscarEnStarWars(event)}>
            <label htmlFor='selectBusqueda'>Buscar por: </label>
            <select id='selectBusqueda'>
                <option value="people"> Persona </option>
                <option value="films"> Peliculas </option>
                <option value="vehicles"> Vehiculos </option>
                <option value="species"> Especies </option>
                <option value="planets"> Planetas </option>
                <option value="starships"> Naves espaciales </option>
            </select>
            
            <label htmlFor='inputBusqueda'>Id: </label>
            <input type="text" id="inputBusqueda"></input>
            <button type="submit">Buscar</button>            
        </form>
    );
}

export default FormularioLuke;