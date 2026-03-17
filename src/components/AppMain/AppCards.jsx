export default function AppCards({ element }) {

    console.log(element)

    return (
        <div className="col gy-3">
            <div className="card bg-dark rounded-4 h-100 d-flex flex-column align-items-center text-white text-center">
                <h2 className="card-title mb-1 mt-3">{element.name}</h2>
                <img src={element.image} alt={element.name} className='img-fluid w-75' />
                <span className="d-flex fst-italic gap-3 mb-3">
                    <small>{element.birth_year}</small>
                    <small>{element.nationality}</small>
                </span>
                <div className="card-body d-flex flex-column align-items-center justify-content-between text-white text-center pt-0">
                    <p>{element.biography}</p>
                    <p className="text-danger d-flex flex-column fst-italic">
                        <span className="fw-bold">Know For</span>
                        <span>{(element.most_famous_movies || element.known_for).join(', ')}</span>
                    </p>
                    <p className="text-warning d-flex flex-column fst-italic">
                        <span className="fw-bold">Awards</span>
                        <span>{element.awards.join(', ')}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}