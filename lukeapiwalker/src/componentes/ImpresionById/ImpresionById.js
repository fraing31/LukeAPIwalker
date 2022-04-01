import { useEffect, useState } from "react";


function ImpresionById( props ){
    console.log(props)
    useEffect(() => {
    props.setSelectBusqueda("people")
    props.setInputBusqueda(props.match.params.id)
},[])

    return (
        <div>
            
        </div>
        
    );
}

export default ImpresionById; 