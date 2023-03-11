import {Component} from 'react'

import './index.css'

class SongItem extends Component {
  render() {
    const {EachCard, deleteUser} = this.props
    const {imageUrl, name, genre, duration, id} = EachCard
    const deleteAlbum = () => {
      deleteUser(id)
    }
    return (
      <li className="list-items-div">
        <div className="first-div">
          <img src={imageUrl} alt="track" className="image" />
          <div>
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="second-div">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="delete-button"
            data-testid="delete"
            onClick={deleteAlbum}
          >
            <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" />
          </button>
        </div>
      </li>
    )
  }
}
export default SongItem
