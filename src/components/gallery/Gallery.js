import images from './assets/images';

export const Gallery = () => {
  return(
    <>
      {images.map(img => (<img src={img} alt=""/>))}
    </>
  )
}