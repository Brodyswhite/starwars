import {useState,useEffect} from 'react';
import Axios from 'axios';
import JediCard from'./JediCard';
import PlanetCard from './PlanetCard';

const Display = props => {

    const [starwar,setStarwar] = useState({});

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.category}/${props.amount}`)
            .then(res => setStarwar(res.data))
            .catch(err => console.log(err))
    },[props])

    return (
        <div>
            <h2 className="text-center">{props.category.charAt(0) + props.category.slice(1)} </h2>
            {
                props.category==="people" ? <JediCard jedi={starwar} /> : 
                    props.category === "planets" ? <PlanetCard jedi={starwar} />  :
                <p>These are not the droids you're looking for...</p>
            }

        </div>
    )
}

export default Display