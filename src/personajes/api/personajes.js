import axios from "axios";

export const url = 'https://rickandmortyapi.com/api/character';

export const todosPersonajes = async (state) => {

    const peticion = await axios.get(url);
    state(peticion.data.results)
};



export const  fetchCharacterById = async (id) =>{
    // const peticion = await axios.get(`${url}/${id}`);

    // state(peticion)

    try {
        const response = await axios.get(`${ url }/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching character by ID:', error);
        return null;
      }
    
}
