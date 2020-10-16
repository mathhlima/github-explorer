import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/33881787?s=460&u=f1a27c39c5c5835186e2fca7cdcaaf04ecd414b0&v=4"
            alt="Matheus Lima"
          />
          <div>
            <strong>mathhlima/meu-primeiro-project-react</strong>
            <p>Primeiro project react no curso GoStack da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/33881787?s=460&u=f1a27c39c5c5835186e2fca7cdcaaf04ecd414b0&v=4"
            alt="Matheus Lima"
          />
          <div>
            <strong>mathhlima/meu-primeiro-project-react</strong>
            <p>Primeiro project react no curso GoStack da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/33881787?s=460&u=f1a27c39c5c5835186e2fca7cdcaaf04ecd414b0&v=4"
            alt="Matheus Lima"
          />
          <div>
            <strong>mathhlima/meu-primeiro-project-react</strong>
            <p>Primeiro project react no curso GoStack da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
