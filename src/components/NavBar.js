//simple nav bar to display the name of the app.
export default function NavBar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid  d-flex justify-content-center">
                    <h1 className="mb-2 display-1">My Movie Library</h1>
                </div>
            </nav>
        </div>
    )
}