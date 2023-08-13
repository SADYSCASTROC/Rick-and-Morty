import React, { useEffect, useState } from 'react'
import { fetchCharacterById } from '../api/personajes';
import { useParams } from 'react-router-dom';



export const InfoPersonaje = () => {


  const { id } = useParams();
  const [character, setCharacter] = useState('');

  useEffect(() => {
    async function fetchCharacter() {
      const characterData = await fetchCharacterById(id);
      setCharacter(characterData);
    }

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ marginTop: '200px' }}>

      <div className="container my-5 ">
        <div className="row justify-content-center ">
          <div className="news_img col-md-4 mb-4 ">
            <figure><img src={character.image} alt={character.name} />  </figure>
          </div>
          <div className="col-md-6 mb-4 container-descrip">
            <div id="new" className="news_box my-5 col-md-12 ">
              <div className="news_room">
                <h2 className='name-person'>{character.name}</h2>
                <div>
                </div>
                <ul>
                  <li><a href="Javascript:void(0)">Status: {character.status} <i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                  <li><a href="Javascript:void(0)">Gender: {character.gender} <i className="fa fa-comments-o" aria-hidden="true"></i></a></li>
                  <li><a href="Javascript:void(0)">Episode: {character.episode.length} <i className="fa fa-comments-o" aria-hidden="true"></i></a></li>
                  <ul>
                    {character.episode.map((episode, index) => (
                      <li key={index} className="link-episodio"> 
                        <a href={episode}>{episode}</a>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
