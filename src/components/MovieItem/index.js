// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data
  console.log(data)

  return (
    <div className="MovieitemComponent">
      <Popup
        trigger={
          <img className="movieImage" src={thumbnailUrl} alt="thumbnail" />
        }
        modal
        nested
      >
        {close => (
          <div className="popupContent">
            <button data-testid="closeButton" className="close" onClick={close}>
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
