import { useState } from 'react'
let NavArrow = <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z" fill="white"/></svg>

function Carousel(props) {
  const [slide, setSlide] = useState(0);
  const slideNumber = props.img.length;
  if(slide < 0){
    setSlide(slideNumber);
  }
  if(slide > slideNumber - 1){
    setSlide(0); 
  }
  return (
    <div class="carousel">
      <button class="carousel__button carousel__button--left" onClick={() => setSlide(slide-1)}>{NavArrow}</button>

      <img class="carousel__image" src={props.img[slide]} alt={"Photo de l'appartement numéro " + (slide + 1)}/>

      <button class="carousel__button carousel__button--right" onClick={() => setSlide(slide+1)}>{NavArrow}</button>
    </div>
  )
}

export default Carousel
