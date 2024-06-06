import backgroundImage from '../../assets/img/background-header.png';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { HeaderTitle } from './HeaderTitle';

export function Header() {
  return (
    <header
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-auto bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <HeaderTitle />
        <div className="text-center mt-12">
          <p className="titulo md:text-5xl text-3xl ">
            Em cada livro um novo mundo
          </p>
          <p className="my-5 text-gray-600 ">
            Viage para onde você quiser, descubra a infinidade <br />
            de mundos que as palavras podem criar
          </p>
          <Button title="Pesquisar Livros" />
        </div>
      </Container>
    </header>
  );
}
