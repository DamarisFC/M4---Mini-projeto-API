/*import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const unidades = [
  {
    nome: "CRAS Vila Maria",
    tipo: "CRAS",
    endereco: "Praça Santo Eduardo, 162 - Vila Maria, São Paulo - SP",
    telefone: "(11) 2955-8400",
    horario: "Seg a Sex, 8h às 18h",
    acessibilidade: true,
    latitude: -23.5153,
    longitude: -46.5869
  },

     {
    nome: "CRAS Vila Medeiros",
    tipo: "CRAS",
    endereco: "Av. Gustavo Adolfo, 3250 - Vila Gustavo, São Paulo - SP",
    telefone: "(11) 2201-8100",
    horario: "Seg a Sex, 8h às 18h",
    acessibilidade: true,
    latitude: -23.4945,
    longitude: -46.5902
     
  },

  {
    nome: "CREAS Vila Maria",
    tipo: "CREAS",
    endereco: "Rua Soldado José Antonio Moreira, 546 - Jardim Japão, São Paulo - SP",
    telefone: "(11) 2636-5000",
    horario: "Seg a Sex, 9h às 18h",
    acessibilidade: true,
    latitude: -23.5059,
    longitude: -46.5748

  },
  
  {
    nome: "Centro POP Vila Maria",
    tipo: "Centro POP",
    endereco: "Rua do Imperador, 1660 - Vila Maria, São Paulo - SP",
    telefone: "(11) 2633-5900",
    horario: "Seg a Sex, 8h às 18h",
    acessibilidade: true,
    latitude: -23.4877,
    longitude: -46.5964
  }
];

async function main() {
  for (const unidade of unidades) {
    await prisma.unidade.create({ data: unidade });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());*/



import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

const unidades = JSON.parse(
  fs.readFileSync('./data/unidades.json', 'utf-8')
);

async function main() {
  console.log('Limpando tabela...');
  await prisma.unidade.deleteMany();

  console.log('Inserindo dados...');
  for (const unidade of unidades) {
    await prisma.unidade.create({ data: unidade });
  }

  console.log('Dados inseridos com sucesso!');
}

main()
  .catch((e) => {
    console.error('Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
