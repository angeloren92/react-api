export default function AppHeader() {


    return (
        <header>
            <div className="container-fluid p-0">
                <p className="bg-dark text-white text-center p-3">Wonderful Cast</p>
                <div className="d-flex justify-content-center align-items-center flex-column my-4">
                <h1 className="mb-0">Actors</h1>
                <small>List of actors fetched from an API</small>
                </div>
            </div>
        </header>
    )
}