import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({id, thumbnail, caption, description, link}) => {


    return (<article key={id} className="6u 12u$(xsmall) work-item">
        <a
        className="image fit thumb"
        href={link}
        target="_blank"
        >
        <img src={thumbnail} />
        </a>

        <h3><a href={link} target="_blank" rel="noreferrer">{caption}</a></h3>
      <p>{description}</p>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default GalleryItem