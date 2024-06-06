import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { HeaderTitle } from '../../components/Header/HeaderTitle';
import { Title } from '../../components/Title/Title';

export function BookDetails() {
  const { id } = useParams();
  return (
    <Container>
      <HeaderTitle />
      <div className="gap-4 grid md:grid-cols-2 grid-cols-1 mt-16">
        <div>
          <h2 className="text-5xl font-bold text-mainblue">Nome do livro</h2>
          <p className="text-xl text-gray-500 font-light py-4">Autor</p>
          <p className="text-gray-500 mt-6">descrição</p>
        </div>
        <div>
          <img src="" alt="Imagem Livro" className="w-full rounded-lg" />
        </div>
      </div>
      <div>
        <Title title="Recomendações com base nesse livro" className="my-6" />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <Card id="123" />
          <Card id="123" />
          <Card id="123" />
          <Card id="123" />
          <Card id="123" />
        </div>
      </div>
    </Container>
  );
}
