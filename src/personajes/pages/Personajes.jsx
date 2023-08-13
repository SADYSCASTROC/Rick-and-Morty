import React, { useEffect, useState } from 'react'
import { todosPersonajes } from '../api/personajes'
import { Link } from 'react-router-dom';

export const Personajes = () => {

  const [personaje, setPersonaje] = useState([]);
  console.log(personaje)

  useEffect(() => {
    todosPersonajes(setPersonaje);
  }, [])

  return (
    <>
      <div className="row titlepage mt-5" style={{ opacity: '0.5', height: '250px', backgroundImage: 'url("data:image/jpeg;base64,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")' }}>
        <div className="col-md-12 mt-5" >
          <div className="titlepage mt-5">
            <h2 className="position titlepage "> <span className="green" style={{ fontSize: '80px' }}>Rick and Morty</span></h2>
          </div>
        </div>
      </div>

      {/* <div className="container my-5">
        <div className="row justify-content-center ">
          {personaje.map(iten => (
            <div key={iten.id} className="col-md-4 mb-4">
              <div id="new" className="news_box my-5">
                <div className="news_img">
                  <figure><img src={iten.image} alt={iten.name} />  </figure>
                </div>
                <div className="news_room">
                  <h2 className='name-person'>{iten.name}</h2>
                  <div>
                    <span>°</span> status
                  </div>
                  <ul>
                    <li><a href="Javascript:void(0)">Gender {iten.gender} <i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                    <li><a href="Javascript:void(0)">Episode: {iten.episode.length} <i className="fa fa-comments-o" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-12">
              <a class="read_more" href={`/iten/${iten.id}`}>Show Description</a>              
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className=" my-5">
      <div className="row justify-content-center ">

        {personaje.map(iten => (
          <div className="card mb-4 col-md-5 mx-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <figure><img src={iten.image} alt={iten.name} className="img-fluid rounded-start" /></figure>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>

        ))}

      </div>
    </div >
    </>
  )
}
