import { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { isShowModal } = this.state;
    const { srcSmallImg, srcLargeImg, alt } = this.props;
    return (
      <GalleryItem onClick={this.showModal}>
        <img src={srcSmallImg} alt={alt} />
        {isShowModal && (
          <Modal src={srcLargeImg} alt={alt} onClose={this.closeModal} />
        )}
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
