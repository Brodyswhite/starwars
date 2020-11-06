const PlanetCard = props => {
    const {jedi} = props;

    return (
        <div className="card col-12 dog">
            <div className="card-body">
                <h3 className="card-title">{jedi.name}</h3>
                <p className="card-text">Climate: {jedi.climate}</p>
                <p className="card-text">Terrain: {jedi.terrain}</p>
                <p classname="card-text">Surface Water: {jedi.surfacewater}</p>
                <p classname="card-text">Population: {jedi.population}</p>
            </div>
        </div>
    );
}

export default PlanetCard;