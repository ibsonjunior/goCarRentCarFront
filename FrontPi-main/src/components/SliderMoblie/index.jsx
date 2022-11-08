import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


export default function SliderMobile({product}){
    return(
        
        <>
        
        <div className="slider_mobile">
         <ImageGallery autoPlay="true" items={product.images} />
        </div>
        </>
        
        
        )
}