import { imageSliderProps } from '../lib/interface';
import style from '../styles/lightbox.module.scss'
import ImageSlider from './imageSlider';
import { AiOutlineClose } from 'react-icons/ai'

const btnStyle = {wrapper: style.sliderBtns, next: style.next, prev: style.prev}

const LightBox = ({ image, arr, prev, next, imageNo, openBox, closeBox }: imageSliderProps) => {

    return (
        <section className={style.container}>
            <div className={style.wrapper}>
            <button className={style.closeBtn} onClick={closeBox}><AiOutlineClose /></button>
            <ImageSlider image={image} arr={arr} prev={prev} next={next} imageNo={imageNo} openBox={openBox} btnStyle={btnStyle} />
            </div>
        </section>
    )
}

export default LightBox