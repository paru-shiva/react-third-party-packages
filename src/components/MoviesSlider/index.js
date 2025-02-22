// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="moviessliderComponent">
      <div className="slider-container">
        <Slider {...settings}>
          {moviesList.map(eachItem => (
            <MovieItem key={eachItem.id} data={eachItem} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MoviesSlider
