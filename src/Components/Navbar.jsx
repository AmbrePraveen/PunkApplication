import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import noteContext from '../Context/noteContext'

const Navbar = () => {
    const { State, handleStateUpdate } = useContext(noteContext)
    const [Search, setSearch] = useState()
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary" >
                <div class="container-fluid">
                    <Link class="navbar-brand text-light" to="/">Punk</Link>
                    <div className='w-50 offset-3 d-flex'>
                        <input type="text" onChange={e => {
                            handleStateUpdate(e.target.value)
                            setSearch(e.target.value)
                        }} className='form-control w-100 m-1' />
                        <button type="button" class="btn btn-primary" onClick={e => handleStateUpdate(Search)}> <i className='bi bi-search'></i></button>
                    </div>
                </div>

            </nav>

        </div>
    )
}

export default Navbar 