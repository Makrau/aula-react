import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/7682908?s=460&u=6b102a76731c66e0ac01ac085e0109cb9ff75f47&v=4"
            alt="Makrau"
          />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/7682908?s=460&u=6b102a76731c66e0ac01ac085e0109cb9ff75f47&v=4"
            alt="Makrau"
          />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/7682908?s=460&u=6b102a76731c66e0ac01ac085e0109cb9ff75f47&v=4"
            alt="Makrau"
          />
          <div>
            <strong>Nome do repositório</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
