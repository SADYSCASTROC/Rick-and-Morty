import axios from "axios";

export const url = 'https://rickandmortyapi.com/api/character';

export const todosPersonajes = async (state) =>{

    const peticion = await axios.get(url);
    state(peticion.data.results)
}
