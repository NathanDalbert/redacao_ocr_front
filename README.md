
# 📘 Projeto: Detector de Texto em Redações (Frontend)

Este projeto é a interface **frontend** para o **Detector de Texto em Redações**, que se comunica com um backend para realizar o processamento de imagens (detecção de áreas de texto e correção de rotação). O frontend foi desenvolvido utilizando **React**.

---

## ✅ Pré-requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- **Node.js** (versão 16 ou superior)  
- **npm** ou **yarn**

Verifique a instalação do Node.js com o comando:

```bash
node -v
```

Se não estiver instalado, acesse [https://nodejs.org/](https://nodejs.org/) para fazer o download.

---

## 🧭 Passo a Passo

### 1. Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/NathanDalbert/redacao_ocr_front.git
```

> Ou, se estiver começando do zero, crie uma nova pasta e inicialize um projeto React:

```bash
npx create-react-app detector-redacoes
```

---

### 2. Instalar as Dependências

Navegue até o diretório do projeto e instale as dependências:

Com **npm**:

```bash
cd <diretorio_do_projeto>
npm install
```

Com **yarn**:

```bash
cd <diretorio_do_projeto>
yarn install
```

---

### 3. Executar o Projeto

Inicie o servidor de desenvolvimento:

Com **npm**:

```bash
npm start
```

Com **yarn**:

```bash
yarn start
```

A aplicação será aberta no navegador em: [http://localhost:3000](http://localhost:3000)

---

### 4. Como Usar

- **Carregar Imagem**: Clique no botão de upload para escolher e enviar uma imagem.
- **Processamento**: O backend irá corrigir a rotação da imagem e detectar áreas de texto.
- **Exibição**: A imagem processada será exibida com as marcações visuais diretamente na interface.

---

## 📦 Dependências do Projeto

Principais bibliotecas e ferramentas utilizadas:

- **React** – Criação da interface de usuário.
- **Tailwind CSS** – Estilização responsiva e moderna.
- **React Hooks** – Gerenciamento de estado e efeitos.
- **Axios** ou **Fetch API** – Comunicação HTTP com o backend.
- **File API** – Manipulação dos arquivos de imagem.

---

