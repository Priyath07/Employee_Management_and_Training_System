var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          {/* Navbar */}
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
            {/* Container wrapper */}
            <div className="container">
              {/* Toggle button */}
              <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars" />
              </button>
              {/* Collapsible wrapper */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                {/* Navbar brand */}
                <a className="navbar-brand mt-2 mt-sm-0" href="https://mdbootstrap.com/">
                  <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height={20} alt="MDB Logo" loading="lazy" />
                </a>
                {/* Left links */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="https://mdbootstrap.com/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://mdbootstrap.com/docs/standard/">About MDB</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://mdbootstrap.com/docs/standard/getting-started/installation/">Free download</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://mdbootstrap.com/education/bootstrap/">Free tutorials</a>
                  </li>
                </ul>
                {/* Left links */}
              </div>
              {/* Collapsible wrapper */}
              {/* Right elements */}
              <div className="d-flex align-items-center">
                {/* Icon */}
                <a className="nav-link me-3" href="#">
                  <i className="fas fa-shopping-cart" />
                  <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <a className="nav-link me-3" href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="nav-link me-3" href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="border rounded px-2 nav-link" target="_blank"> <i className="fab fa-github me-2" />MDB GitHub </a>
              </div>
              {/* Right elements */}
            </div>
            {/* Container wrapper */}
          </nav>
          {/* Navbar */}
          {/*Main layout*/}
          <main className="mt-5 pt-4">
            <div className="container mt-5">
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-6 mb-4">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" className="img-fluid" alt="" />
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6 mb-4">
                  {/*Content*/}
                  <div className="p-4">
                    <div className="mb-3">
                      <a href>
                        <span className="badge bg-dark me-1">Category 2</span>
                      </a>
                      <a href>
                        <span className="badge bg-info me-1">New</span>
                      </a>
                      <a href>
                        <span className="badge bg-danger me-1">Bestseller</span>
                      </a>
                    </div>
                    <p className="lead">
                      <span className="me-1">
                        <del>$200</del>
                      </span>
                      <span>$100</span>
                    </p>
                    <strong><p style={{fontSize: '20px'}}>Description</p></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa sint voluptatibus! Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>
                    <form className="d-flex justify-content-left">
                      {/* Default input */}
                      <div className="form-outline me-1" style={{width: '100px'}}>
                        <input type="number" defaultValue={1} className="form-control" />
                      </div>
                      <button className="btn btn-primary ms-1" type="submit">
                        Add to cart
                        <i className="fas fa-shopping-cart ms-1" />
                      </button>
                    </form>
                  </div>
                  {/*Content*/}
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              <hr />
              {/*Grid row*/}
              <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                <div className="col-md-6 text-center">
                  <h4 className="my-4 h4">Additional information</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit voluptates, quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-lg-4 col-md-12 mb-4">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt="" />
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-4 col-md-6 mb-4">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt="" />
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-4 col-md-6 mb-4">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="" />
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
          </main>
          {/*Main layout*/}
          {/* footer */}
          <footer className="text-center text-white mt-4" style={{backgroundColor: '#607d8b'}}>
            {/*Call to action*/}
            <div className="pt-4 pb-2">
              <a className="btn btn-outline-white footer-cta mx-2" style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px'}} href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank" role="button">
                Download MDB
                <i className="fas fa-download ms-2" />
              </a>
              <a className="btn btn-outline-white footer-cta mx-2" style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px'}} href="https://mdbootstrap.com/education/bootstrap/" target="_blank" role="button">
                Start free tutorial
                <i className="fas fa-graduation-cap ms-2" />
              </a>
            </div>
            {/*/.Call to action*/}
            <hr className="text-dark" />
            <div className="container">
              {/* Section: Social media */}
              <section className="mb-3">
                {/* Facebook */}
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f" /></a>
                {/* Twitter */}
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter" /></a>
                {/* Google */}
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google" /></a>
                {/* Instagram */}
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram" /></a>
                {/* YouTube */}
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-youtube" /></a>
                {/* Github */}
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
              </section>
              {/* Section: Social media */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', textColor: '#e0e0e0'}}>
              © 2022 Copyright:
              <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* Copyright */}
          </footer>
        </div>
      );
    }
  });