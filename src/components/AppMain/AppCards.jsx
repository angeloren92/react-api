

export default function AppCards({ element }) {

    return (
        < div className="col-4 gy-3" key={element.id} >
            <div className="card bg-dark h-100">
                <h2 className="card-title text-white text-center mb-0 mt-3">
                    {element.name}
                </h2>
                <div className="card-body d-flex flex-column align-items-center text-white pt-0">
                    <img src={element.image} alt={element.name} className='img-fluid w-75' />
                    <small>{element.birth_year} {element.nationality}</small>
                    <p>{element.biography}</p>
                </div>
            </div>
        </div>
    )
}