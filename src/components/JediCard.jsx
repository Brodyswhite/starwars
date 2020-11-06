const JediCard = props => {
    const {jedi} = props;

    return (
        <div className="card col-12 dog">
            <div className="card-body">
                <h3 className="card-title">{jedi.name}</h3>
                <p className="card-text">Height: {jedi.height}</p>
                <p className="card-text">Mass: {jedi.mass}</p>
                <p classname="card-text">Hair Color: {jedi.haircolor}</p>
                <p classname="card-text">Skin Color: {jedi.skincolor}</p>
            </div>
        </div>
    );
}

export default JediCard;