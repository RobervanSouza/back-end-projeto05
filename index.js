const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/jogos.router');
app.use(express.json());
app.use(cors());
const Jogos= [
  {
    id: 1,
    name: 'Gta',
    categoria: 'Guerra',
    description: 'Jogo de luta e ação',
    image:
      'https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
  {
    id: 2,
    name: 'Ação',
    categoria: 'Ação',
    description: 'Jogo de luta e ação',
    image:
      'https://img.mybest-brazil.com.br/press_component/item_part_images/ae9320d678cb11646009e79745d62edf.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip&s=31d73662fc2b3d15ed0be18676026836',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
  {
    id: 3,
    name: 'corrida',
    categoria: 'corrida',
    description: 'Jogo de luta e ação',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSA1jP9coK5MfhDypFm-Mk0mYD3-v2n1RiMg_gTz81wIaImejQEnbLy0Nt5e8j2fHw0I&usqp=CAU',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
  {
    id: 4,
    name: 'luta',
    categoria: 'luta',
    description: 'Jogo de luta e ação',
    image:
      'https://a-static.mlcdn.com.br/800x560/jogo-star-wars-jedi-fallen-order-xbox-one-ea/webfones2/17241/1cc04f1b5102ca52bdf12d0158009815.jpeg',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
  {
    id: 5,
    name: 'futebol',
    categoria: 'futebol',
    description: 'Jogo de luta e ação',
    image:
      'https://a-static.mlcdn.com.br/800x560/jogo-star-wars-jedi-fallen-order-xbox-one-ea/webfones2/17241/1cc04f1b5102ca52bdf12d0158009815.jpeg',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
  {
    id: 6,
    name: 'Gta',
    categoria: 'luta',
    description: 'Jogo de luta e ação',
    image:
      'https://a-static.mlcdn.com.br/800x560/jogo-star-wars-jedi-fallen-order-xbox-one-ea/webfones2/17241/1cc04f1b5102ca52bdf12d0158009815.jpeg',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
  {
    id: 7,
    name: 'Gta',
    categoria: 'futebol',
    description: 'Jogo de luta e ação',
    image:
      'https://a-static.mlcdn.com.br/800x560/jogo-star-wars-jedi-fallen-order-xbox-one-ea/webfones2/17241/1cc04f1b5102ca52bdf12d0158009815.jpeg',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
  {
    id: '507f191e810c19729de860ea',
    name: 'Gta',
    categoria: 'luta',
    description: 'Jogo de luta e ação',
    image:
      'https://a-static.mlcdn.com.br/800x560/jogo-star-wars-jedi-fallen-order-xbox-one-ea/webfones2/17241/1cc04f1b5102ca52bdf12d0158009815.jpeg',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
  {
    id: '507f191e810c19729de860ea',
    name: 'Gta',
    categoria: 'corrida',
    description: 'Jogo de luta e ação',
    image:
      'https://a-static.mlcdn.com.br/800x560/jogo-star-wars-jedi-fallen-order-xbox-one-ea/webfones2/17241/1cc04f1b5102ca52bdf12d0158009815.jpeg',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
  {
    id: '507f191e810c19729de860ea',
    name: 'Gta',
    categoria: 'Guerra',
    description: 'Jogo de luta e ação',
    image:
      'https://a-static.mlcdn.com.br/800x560/jogo-star-wars-jedi-fallen-order-xbox-one-ea/webfones2/17241/1cc04f1b5102ca52bdf12d0158009815.jpeg',
    ano: 2003,
    score: 33,
    treiler: 'https://youtu.be/OU1Hau00F_E',
    gameplay: 'https://youtu.be/OU1Hau00F_E',
  },
];

// todos os jogos
app.get('/Jogos/todos-jogos', (req, res) => {
  res.send(Jogos);
});

// id dos jogos
app.get('/Jogos/jogo/:id', (req, res) => {
  const procuraId = Number(req.params.id);
  const idEncontrado = Jogos.find((jogo) => jogo.id === procuraId);
  res.send(idEncontrado);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
