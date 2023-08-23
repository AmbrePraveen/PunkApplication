import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import ProductCard from './ProductCard'
import NoteState from '../Context/NoteState';
import noteContext from '../Context/noteContext';

const Hero = ({ getItem }) => {
    const [Id, setId] = useState(0)
    const { State, handleStateUpdate } = useContext(noteContext)

    const [Data, setData] = useState([])
    const Navigate = useNavigate()
    useEffect(() => {
        handleStateUpdate()
    }, [])

    return (
        <>
            <div div className="container" >
                <div className="row mt-4">
                    {
                        State && State.map(item =>
                            <div className="col-sm-2">
                                <div className='card' onClick={e => {
                                    setId(item.id)
                                    getItem(item)
                                    Navigate(`/product`)
                                }

                                }>
                                    <img src={item.image_url} className='py-3 px-4 offset-2' height={"300"} width={"70%"} />
                                    <div className="card-body">
                                        {item.name}
                                    </div>


                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    )
}


export default Hero