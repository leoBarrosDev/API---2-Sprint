# CRUD - NodeJS

Desafio proposto como avaliação da 2ª Sprint do Programa de Bolsas em NodeJS - Compass UOL

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

![homem letra](https://github.com/leoBarrosDev/frontEnd/blob/master/homemletra.gif)

### 📋 Pré-requisitos

Banco de dados relacional, nesse caso foi utilizado o MySQL como SGBD
POSTMAN para testar as rotas implementadas
NodeJS instalado na maquina
Foi utilizado como editor de código o VSCode
Foi utilizado o Git Bash como terminal para execução das linhas de comando

### 🔧 Instalação

1) Clone o repositório remoto para sua maquina local usando o comando abaixo:
2) Edite o arquivo \PB_NodeJS\CRUD-Sprint2\config\default.json inserindo nele os parametros de acesso do seu banco de dados
3) Crie o banco de dados 'CRUD', isso pode ser feito tanto pelo SGBD como via linha de comando, fique a vontade
4) Abra o diretório do projeto no editor de código de sua preferência
5) Execute o comando 'npm install' para que as dependencias utilizadas no projeto sejam instaladas em sua máquina
6) Execute o arquivo criarTabelas.js que encontrasse em \PB_NodeJS\CRUD-Sprint2\api\banco-de-dados, nesse momento duas tabelas serão criadas em seu banco já existente
7) Execute o comando 'npm start', nesse momento a API será inicializada e uma mensagem deve aparecer no terminal indicando que a mesma está funcionando
8) Abra o POSTMAN para realizar o teste das rotas, na url digite http://localhost:3000/api/project/ e selecione o método GET, pressione o botão SEND, o sistema irá retornar todos os registros do banco de dados CRUD
9) Ainda no POSTMAN podemos inserir dados no banco por meio do método POST, na url insira http://localhost:3000/api/project/, selecione a opção Body, depois a opção raw e JSON, no corpo do Body insira os dados por meio de um objeto tipo json, como as chaves "title" e "description", pressione SEND para que os mesmos sejam inseridos no banco de dados
10) Caso queira buscar no banco um registro em específico basta repetir o processo do primeiro método usado para listar os registro, passando apenas o ID desejado como parametro, por exemplo: http://localhost:3000/api/project/4
11) Caso queira atualizar o registro, use a url acima, trocando apenas para o método PUT, lembre de passar os valores no corpo do body, assim como no post
12) Use a url acima, só que agora com o método DELETE para apagar o registro do banco.


## ⚙️ Executando os testes

Testes automatizados ainda não foram implementados

## 🛠️ Construído com

* [VSCode](https://code.visualstudio.com/?wt.mc_id=DX_841432) - Editor de código utilizado
* [POSTMAN](https://www.postman.com/downloads/) - Software utilizado para testar os métodos implementados na API
* [NodeJS](https://nodejs.org/en/download/) - Para execução de código Java Script fora de um navegador web.
* [GIT](https://git-scm.com/downloads) - Usado para versionamento de código


## ✒️ Autores

* **Leandro Barros** - *Estudante* - [Leandro Barros](https://https://github.com/leoBarrosDev)

## 📄 Licença


## 🎁 Expressões de gratidão

* Meus agradecimentos a toda equipe da Compass UOL envoldida no programa de bolsas, em especial aos instrutores que estavam prontos para tirar dúvidas não importava o dia da semana nem a hora (exceto no fds após o Natal) 📢
* Espero ter a oportunidade de tomar um CHOPP futuramente com todos, já como programador contratado pela empresa 🍺 
* Um obrigado muito especial para Steve, o pato imaginário com quem converso na intenção de resolver os bugs do sistema, esse final de semana ele não ajudou muito, creio que tenha bedido além da conta🤓.
*


---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊
