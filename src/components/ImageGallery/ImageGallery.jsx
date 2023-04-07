import { Component } from 'react';

import { getImages } from 'services/getImages';

import { ImageGalleryContainer } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

class ImageGallery extends Component {
  state = {
    images: [],
    totalPages: 0,
    error: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchText = prevProps.searchText;
    const currSearchText = this.props.searchText;
    const prevPage = prevProps.searchPage;
    const currPage = this.props.searchPage;

    if (prevSearchText !== currSearchText || prevPage !== currPage) {
      this.setState({ isLoading: true });
      getImages(currSearchText, currPage)
        .then(response => {
          console.log(response);
          if (response.ok) return response.json();
          else return Promise.reject(response.statusText);
        })
        .then(data => {
          console.log(data);
          const totalPages = Math.ceil(data.totalHits / 12);
          this.setState(prev => {
            if (currPage === 1) {
              return {
                images: [...data.hits],
                totalPages,
              };
            }
            return { images: [...prev.images, ...data.hits] };
          });
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { images } = this.state;
    const { handlePageChange } = this.props;

    return (
      <>
        <ImageGalleryContainer>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              srcSmallImg={webformatURL}
              srcLargeImg={largeImageURL}
              alt={tags}
            />
          ))}
        </ImageGalleryContainer>
        <Button onClick={handlePageChange} />
      </>
    );
  }
}

export default ImageGallery;
