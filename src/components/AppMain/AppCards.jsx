

export default function AppCards({ element }) {

    return (
        < div className="col-4 gy-3" key={element.id} >
            <div className="card bg-dark h-100">
                <h1 className="card-title text-white text-center">
                    {element.name}
                </h1>
                <div className="card-body d-flex flex-column align-items-center justify-content-center text-white">
                    <img src={element.image} alt={element.name} className='img-fluid w-75' />
                    <small>{element.birth_year} {element.nationality}</small>
                    <p>

                    </p>
                    <p>

                    </p>
                    <p>

                    </p>
                </div>
            </div>
        </div>
    )
}