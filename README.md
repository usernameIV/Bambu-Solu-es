# Antes de começar, certifique-se de que sua máquina está configurada com as seguintes ferramentas:


## Git: Ferramenta de controle de versão.
- [Git](https://www.git-scm.com/downloads)

Após instalar, verifique a instalação usando o comando:
```sh
git --version
```

## IDE Visual Studio Code: Editor de código recomendado.
- [Visual Studio Code](https://code.visualstudio.com/download)



## Android Studio: Necessário para rodar a aplicação em um emulador Android ou dispositivo físico.
- [Androi Studio](https://developer.android.com/studio)

Certifique-se de configurar o SDK do Android após a instalação.

## React Native Expo CLI: Ferramenta para criar e gerenciar projetos React Native.
- [React Native Expo CLI](https://reactnative.dev/)

Instale globalmente usando o comando:
```sh
npm install expo@latest
```
## Expo Go: Aplicativo para visualizar projetos Expo no dispositivo móvel.
- [Expo Go](https://abrir.link/pFfoB)

## Node.js: Ambiente de execução para o JavaScript no servidor.
- [Node.js](https://nodejs.org/en)
Verifique a instalação usando os comandos:
```sh
node --version
npm --version
```

# Implementação do Projeto

## 1. Clonar o Repositório do Git
Para isso, crie uma pasta vazia, no diretório de sua preferência, e abra-a pelo Visual Studio Code.
Primeiro, clonar o repositório do Git onde está o projeto:
```sh
git clone “URL-do-repositorio”
cd “nome-do-repositorio”
```

## 2. Instalar as Dependências do Projeto
Após clonar o repositório, navegue até o diretório do projeto e instale as dependências necessárias:
```sh
npm install
```

## 3. Configurar o Ambiente para Android

Para rodar a aplicação em um emulador Android ou dispositivo físico, siga os passos abaixo:


## 3.1 Configurar Variáveis de Ambiente

Ao abrir o Android Studio, inicialmente e necessariamente sem projetos, acesse “More Actions” e logo em seguida “Virtual Device Manager” 

## 3.2 Iniciar o Emulador Android

Em Device Manager, selecione a opção Create Virtual Device e selecione a opção “Pixel 7”, em seguida “Next” e selecione a opção “UpsideDownCakePrivacySandbox”, após isso “Finish” e em seguida, após o download, selecione “Start”, O emulador já iniciou…


## 4. Finalmente - iniciar a Aplicação no Emulador
   
Enquanto a aplicação estiver rodando, digite no terminal do VScode o comando: 
```sh
npm run android
```
Caso não funcione, tente recarregar a aplicação pelo comando: 
```sh
r  (para Reload) 
a (para Android)
```

Caso queira utilizar pela própria aplicação: 
Abra o aplicativo Expo Go no seu dispositivo móvel, escaneie o QR code exibido no terminal.
