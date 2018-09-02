import React from 'react';
import Gallery from 'react-grid-gallery';

class PictureGallery extends React.Component {
  constructor(props) {
    super(props);

  }

  pushImages = () => {
    let result = [];
    for (let i = 1; i <= 12; i++) {
      result.push({
        src: require(`../media/gallery/${i}.jpg`),
        thumbnail: require(`../media/gallery/${i}.jpg`),
        thumbnailWidth: 320,
        thumbnailHeight: 174,
      });
    }
    return result;
  };

  render() {
    return (
      <div className="gallery">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <Gallery images={this.pushImages()} enableImageSelection={false} />
          </div>
        </div>
      </div>
    )
  }
}
export default PictureGallery;