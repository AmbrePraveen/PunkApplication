import { useState } from "react";
import noteContext from "./noteContext";
import axios from "axios";
const NoteState = (props) => {
    const [State, setState] = useState("")

    const handleStateUpdate = async (value) => {
        if (value) {
            const x = value.toLowerCase()
            await axios.get("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6").then(({ data }) => {
                const result = data.filter((item) => {
                    if (item.name.toLowerCase().includes(x)) {
                        return value
                    }
                })
                setState(result)
            })

        }
        else {

            await axios.get("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6").then(({ data }) => {
                setState(data)

            })

        }
    }
    return (
        <noteContext.Provider value={{ State, handleStateUpdate }}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteState