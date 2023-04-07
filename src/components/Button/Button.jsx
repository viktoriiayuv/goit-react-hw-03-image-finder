import { ButtonContainer } from './Button.styled';

const Button = ({ onClick }) => {
  return <ButtonContainer onClick={onClick}>Load more</ButtonContainer>;
};

export default Button;
