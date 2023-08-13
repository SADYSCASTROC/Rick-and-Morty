import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Personajes } from '../personajes/pages/Personajes'
import { InfoPersonaje } from '../personajes/pages/InfoPersonaje'
import { Header } from '../personajes/component/Header'



export const AppRouter = () => {
    return (

        <>
            <Header />
            <Routes>


                <Route path="personajes" element={<Personajes />} />
                <Route path="iten/:id" element={<InfoPersonaje />} />


                <Route path='/' element={<Navigate to='Personajes' />} />

            </Routes>
        </>
    )
}
