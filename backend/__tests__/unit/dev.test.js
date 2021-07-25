const request = require('supertest')
const app = require('../../src/app')
const trucante = require('../util/truncate')

describe('CRUD DE DEV', () => { 
  beforeAll( async () => {
    await trucante();

    await request(app)
    .post('/create')
      .send({
        nome: "João",
        sexo: "Masculino",
        idade: 22,
        hobby: "Cartas",
        dataNascimento: '1994-01-17',
      })

      await request(app)
      .post('/create')
        .send({
          nome: "Lucas",
          sexo: "Masculino",
          idade: 22,
          hobby: "Musica",
          dataNascimento: '1994-01-17',
        })

  })



  it('Deve inserir um novo dev quando receber os dados validos',
  async () => {

      const response = await request(app)
      .post('/create')
      .send({
        nome: "Alexandre H. Freitas",
        sexo: "Masculino",
        idade: 27,
        hobby: "Jogos",
        dataNascimento: '1994-01-17',
      })

      expect(response.status).toBe(200);
  })

  
  it('Deve exibir mensagem de campo obrigatorio',
  async () => {

      const response = await request(app)
      .post('/create')
      .send({
        nome: "",
        sexo: "Masculino",
        idade: 27,
        hobby: "Jogos",
        dataNascimento: '1994-01-17',
      })
      expect(response.status).toBe(400);
  })


  it('Deve alterar um Dev',
     async () => {

      const devs = await request(app)
      .get('/getAll');

      const response = await request(app)
      .put(`/update/${devs.body[0].id}`)
      .send({
        nome: "JoselitoNew",
        sexo: "M",
        idade: 18,
        hobby: "Jogos",
        dataNascimento: '1994-01-17',
      })

      expect(response.status).toBe(200);
  })

  it('Deve trazer uma lista de todos os usuários', async () => {
        const response = await request(app)
        .get('/getAll');

        expect(response.status).toBe(200);
  })

  it('Deve deletar um Dev', async () => {

    const devs = await request(app)
      .get('/getAll');

      const resp = await request(app)
      .get(`/getById/${devs.body[1].id}`);
      const { id }  = resp.body;

      expect(resp.status).toBe(200);
  })
})