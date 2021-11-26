import React from 'react'

export const Titulo = ( {titulo, subtitulo, saludo} ) => {

    

    return (
        <> 
            
        <button onClick={ () => saludo()}>clickeame</button>
            <h2>{titulo}</h2>
            <h2>{subtitulo}</h2>
        </>
    )
}
