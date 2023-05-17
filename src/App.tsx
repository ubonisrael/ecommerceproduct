import { useState, useEffect } from 'react'
import { CARTITEM } from './lib/interface'
import Header from "./components/header"
import Main from "./components/main"
import LightBox from './components/lightbox'
import imageProduct1 from './assets/images/image-product-1.jpg'
import imageProduct2 from './assets/images/image-product-2.jpg'
import imageProduct3 from './assets/images/image-product-3.jpg'
import imageProduct4 from './assets/images/image-product-4.jpg'

const imageArray: string[] = [imageProduct1, imageProduct2, imageProduct3, imageProduct4]

function App() {

  const [image, setImage] = useState(0)
  const [cart, setCart] = useState<CARTITEM[]>([])
  const [lightbox, setBox] = useState(false)
  const [showCart, setShow] = useState(false)

  const handleNext = () => {
      setImage(prev => {
          if (prev < 3) return prev + 1

          return 0
      })
  }

  const handlePrev = () => {
      setImage(prev => {
          if (prev > 0) return prev - 1

          return 3
      })
  }

  const handleImageNumber = (value: number) => {
      setImage(value)
  }

  const openBox = () => {
    setBox(true)
  }

  const closeBox = () => {
    setBox(false)
  }

  const addToCart = (val: CARTITEM) => {
    setCart(prev => [...prev, val])
  }
  const subFromCart = (val: number) => {
    setCart(prev => prev.filter((item, i) => {
      if (i !== val) return item
    }))
  }

  const openCart = () => {
    setShow(true)
  }
  const closeCart = () => {
    setShow(false)
  }

  useEffect(() => {
    console.log(showCart);
    
  }, [showCart])
  
  
  return (
    <>
      <Header cart={cart} removeItem={subFromCart} cartCount={cart.length} showCart={showCart} openCart={openCart} closeCart={closeCart} />
      <main>
      <Main image={image} arr={imageArray} prev={handlePrev} next={handleNext} imageNo={handleImageNumber} openBox={openBox} addToCart={addToCart} />
      {lightbox ? 
      <LightBox image={image} arr={imageArray} prev={handlePrev} next={handleNext} imageNo={handleImageNumber} openBox={openBox} closeBox={closeBox}/>
      : null}
      </main>
    </>
  )
}

export default App
