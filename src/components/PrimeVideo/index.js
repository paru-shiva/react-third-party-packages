// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(eachMovie => eachMovie.categoryId==='ACTION')
  const comedyMovies = moviesList.filter(eachMovie => eachMovie.categoryId==='COMEDY')



  return (
    <div className="PrimevideoComponent">
      <img
        className="primevideoImage"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1 className="heading">Action Movies</h1>
      <MovieSlider moviesList={actionMovies} />

      <h1 className="heading">Comedy Movies</h1>
      <MovieSlider moviesList={comedyMovies} />
    </div>
  )
}

export default PrimeVideo
