import React, { useState } from 'react'
import PublicLayout from './PublicLayout'
import Hero from './Components/Hero'
import ProductCard from './Components/ProductCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoteState from './Context/NoteState'


const App = () => {
    const [data, setdata] = useState({})
    const getItem = (val) => {
        setdata(val)

    }
    return <>
        <NoteState>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<PublicLayout />}>
                        <Route index element={<Hero getItem={getItem} />} />
                        <Route path="/product" element={<ProductCard data={data} />}></Route>
                    </Route>
                </Routes>

            </BrowserRouter >
        </NoteState>

    </>
}

export default App