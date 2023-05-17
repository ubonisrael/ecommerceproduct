import styles from "../styles/slider.module.scss";
import imageThumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import imageThumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import imageThumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import imageThumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { imageSliderProps } from "../lib/interface";

const imgThumbArray: string[] = [imageThumb1, imageThumb2, imageThumb3, imageThumb4]

const ImageSlider = ({image, arr, prev, next, imageNo, openBox, btnStyle}: imageSliderProps) => {

    const handleImage = (value: number) => {
        openBox()
        imageNo(value) 
    }
    
    return (
            <section className={styles.imageContainer}>
            <img src={arr[image]} alt="product image" />
            <div className={styles.thumbnails}>
                {imgThumbArray.map((img, i) => <img key={i} src={img} alt="image thumbnail" onClick={() => handleImage(i)} style={i === image ? {opacity: '0.4', border: '2px solid hsl(26, 100%, 55%)'}: {opacity: '', border: ''}}/>)}
            </div>
            <div className={btnStyle ? btnStyle.wrapper : styles.sliderBtns}>
                <button className={btnStyle ? btnStyle.prev : ''} onClick={prev}><AiOutlineLeft /></button>
                <button className={btnStyle ? btnStyle.next : ''} onClick={next}><AiOutlineRight /></button>
            </div>
        </section>
    )
}

export default ImageSlider