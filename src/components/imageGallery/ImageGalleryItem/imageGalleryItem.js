import css from './ImageGalleryItem.module.css';
export default function ImageGallery({ previewImg,tags,selectedImage }) { 
  
    return (
      <li className={css.ImageGalleryItem} >
        <img src={previewImg} alt={tags} onClick={selectedImage} className={css.ImageGalleryItemImage} />
      </li>
    );
  
}

