import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ data }) {
    // console.log(Object.keys(data))
    const navigate = useNavigate()
    console.log()
    const [info, setinfo] = useState(Object.values(data))
    const [infoKeys, setinfoKeys] = useState(Object.keys(data))
    console.log(info, infoKeys)

    useEffect(() => {
        if (Object.keys(data).length === 0) {
            navigate("/")
            console.log("Hello")

        }
    }, [])


    return <div className="container">
        {/* {JSON.stringify(data)} */}
        <div className="card mt-5">
            <div className="row">

                <div className="col-sm-4 p-4">
                    <img src={data.image_url} className='offset-2' height={"40%"} alt="" />
                </div>
                <div className="col-sm-8">


                    <h1>{data.name}</h1>
                    <div className='card m-4'>
                        <div className="card-body">
                            <div className="row">
                                {
                                    info.slice(1, 4).map((item, index) => (<>
                                        <div className="col-sm-3">{infoKeys[index + 2]}</div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-8"> {info[index + 2]}</div>
                                    </>
                                    ))

                                }
                                {
                                    info.slice(5, 14).map((item, index) => (<>
                                        <div className="col-sm-3">{infoKeys[index + 5]}</div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-8"> {info[index + 5]}</div>
                                    </>
                                    ))


                                }
                                <div className="col-sm-3">{infoKeys[20]}</div>
                                <div className="col-sm-1">:</div>
                                <div className="col-sm-8"> {info[20]}</div>




                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
}
