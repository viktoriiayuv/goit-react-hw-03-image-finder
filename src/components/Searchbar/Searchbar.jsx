import {
  SearchbarContainer,
  SearchForm,
  SearchFormBtn,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarContainer>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormBtn type="submit">
          <span className="button-label">Search</span>
        </SearchFormBtn>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarContainer>
  );
};

export default Searchbar;
