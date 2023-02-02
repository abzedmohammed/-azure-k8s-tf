import { Carousel } from 'react-responsive-carousel';

export default function Hero({movies}){
    return (
        <>
        <section id="home" className="iq-main-slider p-0">
        
        <div id="home-slider" className="slider m-0 p-0">
        <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false} showIndicators={false} stopOnHover={true} interval={5000}>
        {
          movies.map(movie => {
            return (
              <div style={{backgroundImage: `url(${movie.poster})`}} className="slide slick-bg s-bg-1 item">
              <div className="container-fluid position-relative h-100">
                <div className="slider-inner h-100">
                  <div className="row align-items-center h--100">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                      <a href="javascript:void(0)">
                        <div className="channel-logo" data-animation-in="fadeInLeft" data-delay-in="0.5">
                          {movie.title}
                        </div>
                      </a>
                      <div className="d-flex flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft"
                        style={{opacity: '1'}}>
                        <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                          <ul
                            className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star-half"></i></li>
                          </ul>
                          <span className="text-white ml-2">{movie.rating}(imbd)</span>
                        </div>
                        <div className="d-flex align-items-center mt-2 mt-md-3">
                          <span className="badge badge-secondary p-2">{movie.rated}</span>
                          <span className="ml-3">{movie.runtime}</span>
                        </div>
                      </div>
                      <p data-animation-in="fadeInUp">
                      {movie.description}
                      </p>
                      <div className="trending-list" data-animation-in="fadeInUp" data-delay-in="1.2">
                        <div className="text-primary title starring">
                          Starring :
                          <span className="text-body">{movie.starring}</span>
                        </div>
                        <div className="text-primary title genres">
                          Genres : <span className="text-body">{movie.genre}</span>
                        </div>
                        <div className="text-primary title tag">
                          Tags :
                          <span className="text-body">Action, Adventure, Horror</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center r-mb-23 mt-4" data-animation-in="fadeInUp" data-delay-in="1.2">
                        <a href="#" className="btn btn-hover iq-button"><i className="fa fa-play mr-3"></i>Play Now</a>
                        <a href="#" className="btn btn-link">More Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })
        }
          </Carousel>
        </div>
      </section>
        </>
    )
}