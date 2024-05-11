# Nosso Clube - DApp para clubes de futebol lançarem airdrops de recompensas resgatáveis

## Visão Geral:
O Nosso Clube é um aplicativo descentralizado que visa incentivar a associação de torcedores a clubes de futebol e o uso de fan tokens. Partindo do princípio que clubes de futebol possuem os CPFs dos torcedores nas suas bases de dados, a nossa solução cria carteiras digitais linkadas aos CPFs e permite que os clubes enviem Airdrops de produtos, experiências e descontos para associados e não associados. Os torcedores podem ver as recompensas disponíveis em seus CPFs e quando assinam os programas de sócio-torcedor, podem resgatar as recompensas. Este repositório contém a implementação do DApp Nosso Clube, incluindo os contratos na pasta `hardhat` e o frontend na pasta `frontend`.

## Estrutura do Repositório:
- **hardhat**: Contém os contratos inteligentes desenvolvidos na plataforma Hardhat.
- **nextjs**: Contém o frontend da aplicação desenvolvido utilizando Next.js.

## Instruções de Uso:

### 1. Configuração do Ambiente de Desenvolvimento:
   - Certifique-se de ter o Node.js e o npm instalados em sua máquina.
   - Instale o Hardhat e as dependências do projeto executando o comando `yarn install` na pasta `hardhat`.
   - Instale as dependências do frontend executando o comando `npm install` na pasta `nextjs`.

### 2. Teste dos Contratos Inteligentes:
   - Execute o comando `npx hardhat test --network hardhat` na pasta `hardhat` para testar  os contratos.

### 3. Deploy dos Contratos Inteligentes:
   - Configure sua rede de destino no arquivo `hardhat.config.js`.
   - Execute o comando `yarn deploy --network <nome_da_rede>` para realizar o deploy dos contratos.

### 4. Execução do Frontend:
   - Execute o comando `npm run dev` na pasta `nextjs` para iniciar o servidor de desenvolvimento do frontend.

### 5. Utilização do Protocolo ReDigi:
   - Acesse o frontend através do navegador para interagir com o DApp.
   - O frontend ainda em desenvolvimento, oferece uma interface simples e prototipada para ver as principais funcionalidades.

## Autores:
- [Wlad Mendes](https://github.com/wmendes)
- [Layr Felipe](https://github.com/layrfelipe)