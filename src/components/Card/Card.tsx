import { useCallback } from 'react';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: string;
};

export function Card({ id }: Props) {
  const navigate = useNavigate();
  const handleSelectBook = useCallback(() => {
    navigate(`/${id}`);
  }, [id, navigate]);
  return (
    <div className="p-4 grid grid-cols-3 gap-3 shadow-lg rounded-lg border border-gray-100 max-w-lg w-full ">
      <img src="" alt=" " className="col-span-1 w-full rounded-lg" />
      <div className="col-span-2">
        <p className="font-bold text-xl text-mainblue-light">Titulo</p>
        <p className="font-light text-lg text-gray-500 mb-5">Autor</p>
        <Tag title="Tag" className="mb-3" />
        <p>
          <strong>Sinopse: </strong>arferasd
        </p>
        <Button
          title="Ver mais"
          variant="light"
          className="w-1/2"
          onClick={handleSelectBook}
        />
      </div>
    </div>
  );
}
