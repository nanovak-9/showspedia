
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><h3 className='m-0'>Shows<span className='text-muted'>pedia</span></h3></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home
                            <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li> */}
                </ul>
                {/* //SearchBar */}
            </div>
        </div>
    </nav>

  )
}

export default Header