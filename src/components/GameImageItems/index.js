import './index.css'

const GameImageItems = props => {
  const {imageDetails, matchingImage} = props
  const {thumbnailUrl, id} = imageDetails

  const onClickThumbnail = () => {
    console.log(id)
    matchingImage(id)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnailUrl" />
      </button>
    </li>
  )
}
export default GameImageItems
