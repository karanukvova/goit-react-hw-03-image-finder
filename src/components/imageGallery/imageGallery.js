import css from './imageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/imageGalleryItem';
export default function ImageGallery({ images, selectedImage }) { 
        return (
          <ul className={css.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                previewImg={webformatURL}
                tags={tags}
                selectedImage={() => selectedImage(largeImageURL, tags)}
              />
            ))}
          </ul>
        );
    
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  selectedImage: PropTypes.func,
};
