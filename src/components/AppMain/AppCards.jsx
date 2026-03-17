export default function AppCards({ element }) {

    return (
        < div className="col-4 gy-3" key={element.id} >
            <div className="card bg-dark h-100">
                <h2 className="card-title text-white text-center mb-0 mt-3">
                    {element.name}
                </h2>
                <div className="card-body d-flex flex-column align-items-center text-white text-center pt-0">
                    <img src={element.image} alt={element.name} className='img-fluid w-75' />
                    <span className="d-flex gap-3 mb-3">
                        <small>{element.birth_year}</small>
                        <small>{element.nationality}</small>
                    </span>
                    <p>{element.biography}</p>
                    <p className="text-danger d-flex flex-column">
                        <span className="fw-bold">Know For</span>
                        <span>{element.known_for.join(', ')}</span>
                    </p>
                    <p className="text-warning d-flex flex-column">
                        <span className="fw-bold">Awards</span>
                        <span>{element.awards.join(', ')}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}