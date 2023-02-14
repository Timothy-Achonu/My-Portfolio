import './index.scss'
import MyImgS from '../../../assets/images/my-img.jpg'

const MyImg = () => {
  return (
    <div className="myImg-container">
      <img className="my-img" src={MyImgS} alt="My-img" />
    </div>
  )
}

export default MyImg;
