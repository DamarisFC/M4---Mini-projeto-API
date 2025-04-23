# M4 - Mini projeto-API

# Conecta Apoio - API de Unidade Assistenciais da Zona Norte de São Paulo

# Problematização

- Nem sempre é fácil saber onde buscar apoio social, especialmente em regiões periféricas. Essa API tem como objetivo facilitar o acesso a informações sobre unidades do CRAS, CREAS e CENTRO POP da Zona Norte de São Paulo. A partir do CEP, o usuário poderá localizar as unidades mais próximas e os serviços que elas oferecem.

# Solução:

- Foi desenvolvido uma API prática que organiza informações por CEP, bairro e tipo de serviço.Assim, qualquer sistema, ONG ou pessoa pode encontrar rapidamente o apoio que precisa.

# Endpoints

Método	| Rota                    |Descrição
GET	    | unidades                |Lista todas as unidades sociais cadastradas.
GET	    | unidades/cep/:cep	      |Filtra unidades sociais pelo prefixo do CEP.
GET	    | unidades/servicos/:tipo	|Mostra os serviços disponíveis por tipo de unidade (CRAS, etc).
GET	    | unidades/bairro/:bairro	|Lista unidades localizadas em um bairro específico.

#  Utilidade:

- Para cidadãos em busca de apoio:
- Para desenvolvedores integrarem em apps de serviço social:
- Para agentes públicos ou ONGs mapearem recursos da região.

# Tecnologias

- Node.js
- Express
- JavaScript
- Dados simulados em JSON

# Como Executar:

git clone https://github.com/seu-usuario/conecta-apoio-api.git
cd conecta-apoio-api
npm install
node src/app.js

