import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import FormularioLuke from './componentes/Formulario/FormularioLuke';
import Especies from './componentes/Especies/Especies';
import NavesEspaciales from './componentes/NavesEspaciales/NavesEspaciales';
import Persona from './componentes/Persona/Persona';
import Planetas from './componentes/Planetas/Planetas';
import Vehiculos from './componentes/Vehiculos/Vehiculos';
import Peliculas from './componentes/Peliculas/Peliculas';

function App(){
    
    const [selectBusqueda, setSelectBusqueda] = useState("");
    const [inputBusqueda, setInputBusqueda] = useState("");
    const [starWars, setStarWars] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");

    const buscarEnStarWars = (event) =>{
        event.preventDefault();
        //console.log( "BuscarAtributos");
        setSelectBusqueda( (selectPrev) => event.target.selectBusqueda.value);
        setInputBusqueda((inputPrev) => event.target.inputBusqueda.value);
    }

    useEffect(() => {
        if(selectBusqueda !== ""){
             axios
            .get(`https://swapi.dev/api/${selectBusqueda}/${inputBusqueda}`)
            .then(respuesta => {
                setStarWars((starWarsPrev) => respuesta.data)
                console.log( respuesta.data );
        })
            .catch(err => {
                setErrorMensaje("Estos no son los droides que estan buscando")
            console.log(err);   
        });
    }
        }
       , [selectBusqueda, inputBusqueda]);

    return (
        <div>
            <FormularioLuke buscarEnStarWars = {buscarEnStarWars}/>
            {(selectBusqueda === "people") ?
             (<Persona starWars = {starWars}/>) : ""}
             {(selectBusqueda === "films") ?
             (<Peliculas starWars = {starWars}/>) : ""}
             {(selectBusqueda === "planets") ?
             (<Planetas starWars = {starWars}/>) : ""}
             {(selectBusqueda === "species") ?
             (<Especies starWars = {starWars}/>) : ""}
             {(selectBusqueda === "starships") ?
             (<NavesEspaciales starWars = {starWars}/>) : ""}
             {(selectBusqueda === "vehicles") ?
             (<Vehiculos starWars = {starWars}/>) : ""}

             {(errorMensaje !== "") ?
               <div>
                   {errorMensaje}
                   <img src="https://elcomercio.pe/resizer/XJ_QLRISo3lrGWYtX86bVBiK2Hk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LO425SZFO5DONMKILCFEAUU2XE.jpg"></img>
               </div>               : ""
            }
        </div>
    );
}

export default App;