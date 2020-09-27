import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'

const Gallery = ({ images = DEFAULT_IMAGES }) => {

  return (
    <div>
      {images && (<div className="row">
        {images.map((obj, i) => {
        return (<GalleryItem
          id={obj.id}
          source={obj.source}
          thumbnail={obj.thumbnail}
          caption={obj.caption}
          description={obj.description}
          position={obj.position}
          link={obj.link}
        />);
        })}
        </div>
      )}
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
