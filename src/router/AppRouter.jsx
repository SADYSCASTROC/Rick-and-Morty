import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Personajes } from '../personajes/pages/Personajes'
import { InfoPersonaje } from '../personajes/pages/InfoPersonaje'



export const AppRouter = () => {
    return (
        <Routes>

            <Route path="personajes" element={<Personajes/>} />
            <Route path="infoPersonaje" element={<InfoPersonaje/>} />


            <Route path='/' element={<Navigate to='Personajes' />} />

        </Routes>
    )
}
