import { fakerPT_BR as faker } from '@faker-js/faker'

export const perfil = {
  usuario: "aluno_ebac@teste.com",
  senha: "teste@teste.com",
};

export const enderecoFaker = {
  nome: faker.person.firstName(),
  sobreNome: faker.person.lastName(),
  nomeEmpresa: faker.company.name(),
  pais: "Brasil",
  endereco: faker.location.streetAddress(),
  numero: faker.location.buildingNumber(),
  cidade: faker.location.city(),
  estado: faker.location.state(),
  cep: faker.location.zipCode("#####-###"),
  telefone: faker.phone.number("+55##########"),
  email: faker.internet.email(),
};
