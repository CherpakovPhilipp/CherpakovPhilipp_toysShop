import images from './assets/images';

export const Gallery = () => (
  <>
    {images.map(img => (<img src={img} alt="" />))}
  </>
);
