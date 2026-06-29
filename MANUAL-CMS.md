# Manual do Utilizador — Painel de Administração (CMS)
## Hotel Rainha Njinga

---

## Índice

1. [O que é o CMS e para que serve](#1-o-que-é-o-cms-e-para-que-serve)
2. [Pré-requisitos — Criar conta no GitHub](#2-pré-requisitos--criar-conta-no-github)
3. [Como pedir acesso ao CMS](#3-como-pedir-acesso-ao-cms)
4. [Aceitar o convite de acesso](#4-aceitar-o-convite-de-acesso)
5. [Como entrar no painel (login)](#5-como-entrar-no-painel-login)
6. [Visão geral do painel](#6-visão-geral-do-painel)
7. [Publicar alterações](#7-publicar-alterações)
8. [Secções do CMS — guia detalhado](#8-secções-do-cms--guia-detalhado)
   - [8.1 Página Inicial](#81-página-inicial)
   - [8.2 Página Sobre Nós](#82-página-sobre-nós)
   - [8.3 Quartos](#83-quartos)
   - [8.4 Galeria](#84-galeria)
   - [8.5 Restaurante](#85-restaurante)
   - [8.6 Eventos](#86-eventos)
   - [8.7 Serviços](#87-serviços)
9. [Como fazer upload de imagens](#9-como-fazer-upload-de-imagens)
10. [Boas práticas e avisos](#10-boas-práticas-e-avisos)
11. [Resolução de problemas comuns](#11-resolução-de-problemas-comuns)

---

## 1. O que é o CMS e para que serve

O **CMS** (Sistema de Gestão de Conteúdo) é um painel de administração que permite actualizar o conteúdo do website do Hotel Rainha Njinga **sem necessidade de conhecimentos técnicos ou programação**.

Através do CMS é possível:

- Alterar textos, preços e descrições dos quartos
- Actualizar o menu do restaurante
- Gerir a galeria de fotografias
- Editar informações sobre eventos e salas de reuniões
- Actualizar a missão, visão e equipa na página Sobre Nós
- Modificar os slides e estatísticas da página inicial
- Gerir os serviços disponíveis no hotel

Todas as alterações feitas no CMS são publicadas automaticamente no website após confirmação.

---

## 2. Pré-requisitos — Criar conta no GitHub

O acesso ao CMS é feito através de uma conta **GitHub**. Se já tiver uma conta GitHub, avance para o passo 3.

### Criar uma conta GitHub (passo a passo)

**Passo 1** — Abra o browser (Chrome, Firefox ou Edge) e aceda a:
```
https://github.com
```

**Passo 2** — Clique no botão **"Sign up"** (canto superior direito).

**Passo 3** — Preencha o formulário:
- **Username** (nome de utilizador): escolha um nome simples, ex: `joao-hotel-njinga`
- **Email address**: use o seu email profissional
- **Password**: crie uma palavra-passe segura (mínimo 8 caracteres)

**Passo 4** — Clique em **"Continue"** e complete a verificação que aparece no ecrã (puzzle ou selecção de imagens).

**Passo 5** — Verifique o seu email. A GitHub envia um código de verificação de 6 dígitos. Introduza esse código no formulário.

**Passo 6** — Quando perguntar sobre o plano, escolha **"Continue for free"**.

**Passo 7** — A sua conta GitHub está criada. Guarde o nome de utilizador (username) e a palavra-passe num lugar seguro.

> **Nota:** O email que utilizou no GitHub receberá notificações de alterações no website. Utilize um email que verifique regularmente.

---

## 3. Como pedir acesso ao CMS

Após criar a conta GitHub, é necessário que o administrador do website o adicione como colaborador. Para pedir acesso:

**Envie uma mensagem ao administrador** (Dr. Pedro Júnior ou responsável técnico) com a seguinte informação:

> "O meu nome de utilizador no GitHub é: **[o seu username]**. Peço acesso ao painel CMS do Hotel Rainha Njinga."

O administrador tem de aceder ao repositório do website e:
1. Ir a **Settings → Collaborators and teams**
2. Clicar em **"Add people"**
3. Introduzir o seu nome de utilizador GitHub
4. Seleccionar o nível de permissão **"Write"**
5. Clicar em **"Add [username] to this repository"**

---

## 4. Aceitar o convite de acesso

Após o administrador enviar o convite:

**Passo 1** — Verifique o email associado à sua conta GitHub. Receberá um email com o assunto:
> *"[username] has invited you to collaborate on hsvanda18/hotel-rainha-njinga"*

**Passo 2** — Clique no botão **"View invitation"** no email.

**Passo 3** — Será redirecionado para o GitHub. Clique em **"Accept invitation"**.

**Passo 4** — O acesso está activado. Já pode entrar no painel CMS.

> **Importante:** O convite expira após 7 dias. Se não aceitar dentro desse prazo, o administrador terá de enviar um novo convite.

---

## 5. Como entrar no painel (login)

**Passo 1** — Abra o browser e aceda ao endereço do painel de administração:
```
https://hotel-rainha-njinga.vercel.app/admin
```

**Passo 2** — Clique no botão **"Login with GitHub"**.

**Passo 3** — Será redirecionado para o GitHub. Se ainda não tiver sessão iniciada, introduza o seu **username** e **password** do GitHub.

**Passo 4** — O GitHub pedirá autorização. Clique em **"Authorize"** (autorizar).

**Passo 5** — Será redirecionado de volta para o painel CMS, já com sessão iniciada.

> **Dica:** Para facilitar o acesso futuro, guarde o endereço `https://hotel-rainha-njinga.vercel.app/admin` nos marcadores do browser.

---

## 6. Visão geral do painel

Ao entrar no CMS, verá o seguinte ecrã:

```
┌─────────────────────────────────────────────────────────┐
│  [Logo Decap CMS]           Hotel Rainha Njinga          │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│  CONTEÚDO    │   Bem-vindo ao painel de administração   │
│              │                                          │
│  Página      │   Seleccione uma secção no menu da       │
│  Inicial     │   esquerda para começar a editar.        │
│              │                                          │
│  Sobre Nós   │                                          │
│              │                                          │
│  Quartos     │                                          │
│              │                                          │
│  Galeria     │                                          │
│              │                                          │
│  Restaurante │                                          │
│              │                                          │
│  Eventos     │                                          │
│              │                                          │
│  Serviços    │                                          │
│              │                                          │
└──────────────┴──────────────────────────────────────────┘
```

**Menu lateral esquerdo** — lista todas as secções do website que pode editar. Clique numa secção para a abrir.

**Área principal (direita)** — mostra os campos de edição da secção seleccionada.

---

## 7. Publicar alterações

Após editar qualquer conteúdo, é **obrigatório guardar para que as alterações apareçam no website**.

### Como guardar e publicar

**Passo 1** — Depois de fazer as alterações desejadas, procure o botão **"Publish"** ou **"Save"** no canto superior direito do formulário.

**Passo 2** — Clique em **"Publish now"** (ou "Guardar").

**Passo 3** — O CMS processa a alteração durante alguns segundos.

**Passo 4** — Aguarde entre **1 a 3 minutos** para que o website seja actualizado automaticamente.

**Passo 5** — Abra o website em `https://hotel-rainha-njinga.vercel.app` (noutro separador do browser) e verifique a alteração.

> **Atenção:** Se sair do painel sem clicar em "Publish", as suas alterações serão **perdidas**. Guarde sempre antes de sair.

---

## 8. Secções do CMS — guia detalhado

---

### 8.1 Página Inicial

**Acesso:** Menu lateral → **Página Inicial**

Esta secção controla o conteúdo da página principal do website (a primeira página que os visitantes vêem).

#### Hero — Slideshow de Fundo

São as imagens que rodam automaticamente no fundo do ecrã de boas-vindas.

| Campo | O que faz |
|-------|-----------|
| **Imagem** | Fotografia de fundo do slide. Recomendado: mínimo 1920×1080 pixels. |
| **Texto Alternativo** | Descrição da imagem (ex: "Recepção do hotel"). Importante para acessibilidade. |

- Para **adicionar um slide**: clique em **"Add slides de fundo"**.
- Para **remover um slide**: clique no ícone de lixo ao lado do slide.
- Para **reordenar**: arraste o slide para a posição desejada.

> O website tem actualmente **3 slides**. Recomenda-se manter entre 2 e 4.

#### Estatísticas (barra inferior do hero)

São os números exibidos na barra dourada da página inicial (ex: "52 Quartos", "24h Serviço").

| Campo | Exemplo |
|-------|---------|
| **Valor** | `52`, `24h`, `100%` |
| **Etiqueta** | `Quartos`, `Serviço`, `Satisfação` |

#### Cartões de Destaque (Secção Sobre Nós na homepage)

São os 3 cartões que aparecem na secção Sobre Nós da página inicial.

| Campo | O que faz |
|-------|-----------|
| **Ícone** | Escolha na lista (Pin, Escudo, Relógio, etc.) |
| **Título** | Título do cartão, ex: "Localização Privilegiada" |
| **Descrição** | Texto explicativo do cartão |

---

### 8.2 Página Sobre Nós

**Acesso:** Menu lateral → **Página Sobre Nós**

Controla todo o conteúdo da página `/sobre` do website.

#### Missão e Visão

Dois campos de texto simples. Edite directamente e clique em Publish.

#### Estatísticas (banner de números)

Os números exibidos no banner central da página (ex: "52 Quartos", "32 Colaboradores").

| Campo | Exemplo |
|-------|---------|
| **Valor** | `52`, `10k+`, `4.9` |
| **Etiqueta** | `Quartos`, `Hóspedes / Ano`, `Avaliação Média` |

#### Valores da Empresa

Os 4 cartões de valores (Profissionalismo, Inovação, etc.).

| Campo | O que faz |
|-------|-----------|
| **Ícone** | Escolha o ícone representativo |
| **Título** | Nome do valor, ex: "Profissionalismo" |
| **Descrição** | Texto explicativo |

#### Cronologia (Timeline)

A linha do tempo com marcos históricos do hotel.

| Campo | Exemplo |
|-------|---------|
| **Ano** | `2016` |
| **Título** | `Fundação` |
| **Descrição** | Texto sobre o evento |

#### Equipa

Os membros da equipa exibidos na página Sobre Nós.

| Campo | O que faz |
|-------|-----------|
| **Nome** | Nome completo da pessoa |
| **Cargo** | Ex: "Sócio Gerente", "Chef Executivo" |
| **Biografia** | Texto curto de apresentação |
| **Fotografia** | Foto da pessoa (recomendado: formato quadrado, mínimo 400×400 px) |

---

### 8.3 Quartos

**Acesso:** Menu lateral → **Quartos**

Gere os quartos disponíveis no hotel. O website tem actualmente **3 tipos de quarto**.

> **Aviso:** O campo **ID** de cada quarto não deve ser alterado (`suite`, `double`, `single`). Alterar o ID pode causar erros no website.

#### Campos de cada quarto

| Campo | O que faz | Exemplo |
|-------|-----------|---------|
| **Nome do Quarto** | Nome visível no website | `Suite Júnior` |
| **Tipo** | Categoria do quarto | `Suite Júnior` |
| **Descrição** | Texto de apresentação do quarto | Texto longo descritivo |
| **Preço (AOA/noite)** | Preço em Kwanzas sem formatação | `60.000` |
| **Área** | Tamanho do quarto | `55 m²` |
| **Hóspedes** | Capacidade | `2-3` |
| **Imagem Principal** | Foto de capa exibida nos cards | Upload de imagem |
| **Galeria de Imagens** | Fotos adicionais para o carrossel | Upload de múltiplas imagens |
| **Características Rápidas** | Lista curta visível no card | `Cama King-Size`, `Banheira` |
| **Quarto em Destaque** | Se activado, o quarto tem borda dourada | Sim/Não |
| **Badge** | Etiqueta especial | `Mais Popular`, `Melhor Preço` |
| **Check-in** | Hora de entrada | `12:00` |
| **Check-out** | Hora de saída | `12:00` |
| **Política de Cancelamento** | Texto sobre cancelamentos | `Gratuito até 24h antes` |

#### Comodidades Detalhadas

Divididas em 4 categorias:

- **Quarto** — itens dentro do quarto (cama, cofre, minibar, etc.)
- **Casa de Banho** — itens da casa de banho (chuveiro, banheira, etc.)
- **Tecnologia** — equipamentos electrónicos (TV, Wi-Fi, etc.)
- **Serviços Incluídos** — serviços do hotel incluídos no preço

Para **adicionar um item**: clique em **"Add item"** dentro de cada categoria.
Para **remover**: clique no ícone de lixo ao lado do item.

---

### 8.4 Galeria

**Acesso:** Menu lateral → **Galeria**

Gere todas as fotografias que aparecem na página Galeria do website.

> **Aviso:** O campo **ID** de cada imagem não deve ser alterado. Nunca edite os IDs existentes.

#### Campos de cada imagem

| Campo | O que faz |
|-------|-----------|
| **Imagem Alta Resolução** | Fotografia em tamanho completo |
| **Miniatura** | Versão comprimida (pode usar a mesma fotografia) |
| **Texto Alternativo** | Descrição da imagem para acessibilidade |
| **Legenda** | Título exibido ao passar o rato na galeria |
| **Categoria** | Exterior & Recepção / Quartos / Restaurante & Bar / Eventos |
| **Imagem em Destaque** | Se activado, aparece primeiro na galeria |

#### Como adicionar uma nova fotografia

**Passo 1** — Clique em **"Add imagens"** no final da lista.

**Passo 2** — Preencha todos os campos:
- Faça upload da fotografia
- Escreva um texto alternativo descritivo
- Escreva uma legenda
- Seleccione a categoria correcta

**Passo 3** — Clique em **"Publish"**.

> **Recomendações de imagem:**
> - Formato: JPEG ou PNG
> - Tamanho mínimo: 1200×800 pixels
> - Tamanho máximo recomendado: 3 MB por imagem
> - Fotografias horizontais resultam melhor na galeria

#### Categorias do Filtro

São os botões de filtro visíveis na galeria ("Todos", "Quartos", etc.). Normalmente não necessitam de alteração.

---

### 8.5 Restaurante

**Acesso:** Menu lateral → **Restaurante**

Gere o menu do Restaurante Njinga e os horários de funcionamento.

> **Aviso:** O campo **ID** de cada prato não deve ser alterado.

#### Secções do Menu

O menu está dividido em 4 categorias:

**Entradas** — Pratos de entrada  
**Pratos Principais** — Pratos principais  
**Sobremesas** — Sobremesas e doces  
**Cocktails & Bar** — Bebidas e cocktails  

#### Campos de cada prato

| Campo | O que faz | Exemplo |
|-------|-----------|---------|
| **Nome do Prato** | Nome visível no menu | `Muamba de Galinha` |
| **Descrição** | Ingredientes e preparação | `Galinha estufada com...` |
| **Preço (AOA)** | Preço em Kwanzas | `3500` |
| **Chef's Choice** | Marca com destaque dourado (só pratos principais) | Sim/Não |
| **Classificações** | Etiquetas especiais | `Tradicional`, `Vegetariano`, `Premium` |

#### Classificações disponíveis (badges)

| Classificação | Quando usar |
|---------------|-------------|
| `Tradicional` | Pratos da cozinha angolana tradicional |
| `Vegetariano` | Sem carne nem peixe |
| `Sem Glúten` | Adequado a intolerantes ao glúten |
| `Premium` | Ingredientes de qualidade superior |
| `Assinatura` | Prato exclusivo do Chef |
| `Sem Álcool` | Para cocktails e bebidas sem álcool |

#### Como alterar o preço de um prato

**Passo 1** — Abra a categoria correcta (ex: Pratos Principais).

**Passo 2** — Clique no prato que deseja alterar.

**Passo 3** — Edite o campo **"Preço (AOA)"** — introduza apenas o número (ex: `3500`).

**Passo 4** — Clique em **"Publish"**.

#### Horários de Funcionamento

| Campo | Exemplo |
|-------|---------|
| **Refeição** | `Pequeno-Almoço` |
| **Horário** | `07h00 – 10h30` |
| **Dias** | `Segunda a Domingo` |

---

### 8.6 Eventos

**Acesso:** Menu lateral → **Eventos**

Gere as salas de eventos, tipos de evento, equipamento e pacotes de preços.

#### Espaços

O hotel tem actualmente **3 espaços**:
- Salão Njinga (grande salão de eventos)
- Sala Antonica Gaspar
- Sala Pedro Lopes

| Campo | O que faz | Exemplo |
|-------|-----------|---------|
| **Nome do Espaço** | Nome visível no website | `Sala Antonica Gaspar` |
| **Descrição** | Texto descritivo | Texto longo |
| **Área** | Dimensão | `80 m²` |
| **Imagem** | Fotografia do espaço | Upload |
| **Badge** | Etiqueta especial | `Maior Sala` |
| **Capacidade Teatro** | Máx. pessoas em filas | `50` |
| **Capacidade Banquete** | Máx. pessoas em mesas | `40` |
| **Capacidade Cocktail** | Máx. pessoas em pé | `60` |
| **Capacidade Escola** | Máx. pessoas em secretárias | `30` |
| **Características** | Lista de equipamentos | `Ar condicionado`, `Projecção 4K` |

#### Pacotes de Preços

Os 3 pacotes de eventos actualmente configurados:

| Pacote | Preço actual | Unidade |
|--------|-------------|---------|
| Sala Pedro Lopes | 35.000 Kz | meio-dia |
| Sala Antonica Gaspar | 50.000 Kz | meio-dia |
| Cerimónias | 80.000 Kz | cerimónia |

Para alterar um preço:

**Passo 1** — Clique no pacote desejado.

**Passo 2** — Edite o campo **"Preço (AOA)"**.

**Passo 3** — Edite o campo **"Unidade"** se necessário (ex: `meio-dia`, `dia completo`, `cerimónia`).

**Passo 4** — Clique em **"Publish"**.

#### Equipamento Disponível

Lista do equipamento audiovisual e de apoio disponível para eventos. Adicione ou remova itens conforme o inventário actual.

---

### 8.7 Serviços

**Acesso:** Menu lateral → **Serviços**

Gere as categorias de serviços exibidas na página de serviços do hotel.

Os serviços estão organizados em **categorias** (ex: Restauração, Alojamento, Reuniões). Cada categoria tem vários serviços.

#### Campos de cada serviço

| Campo | O que faz |
|-------|-----------|
| **Ícone** | Ícone representativo (escolha da lista) |
| **Nome do Serviço** | Ex: `Room Service 24h` |
| **Descrição** | Texto explicativo |
| **URL do Link** | Página para onde o botão aponta (ex: `/contactos`) |
| **Texto do Link** | Texto do botão (ex: `Reservar`, `Saber mais`) |
| **Detalhes Adicionais** | Bullets com informação extra |

---

## 9. Como fazer upload de imagens

O processo de upload de imagens é igual em todas as secções.

**Passo 1** — Clique no campo de imagem (aparece com um botão **"Choose an image"** ou uma área de upload).

**Passo 2** — Aparece uma janela com duas opções:
- **"Upload"** — para fazer upload de uma nova imagem do seu computador
- **"Choose existing"** — para usar uma imagem já carregada anteriormente

**Passo 3** — Para fazer upload de uma nova imagem:
- Clique em **"Upload"**
- Clique em **"Choose file"** e seleccione a imagem no seu computador
- Aguarde o upload terminar

**Passo 4** — Seleccione a imagem e clique em **"Choose selected"**.

**Passo 5** — A imagem fica associada ao campo. Clique em **"Publish"** para guardar.

### Formatos e tamanhos recomendados

| Uso | Formato | Tamanho mínimo | Orientação |
|-----|---------|---------------|------------|
| Hero (página inicial) | JPEG | 1920×1080 px | Horizontal |
| Quarto — imagem principal | JPEG | 800×600 px | Horizontal |
| Galeria | JPEG | 1200×800 px | Horizontal |
| Equipa (pessoas) | JPEG | 400×400 px | Quadrado |
| Espaço de eventos | JPEG | 1200×800 px | Horizontal |

> **Tamanho máximo por ficheiro:** 5 MB. Imagens maiores podem demorar a carregar e abrandar o website. Recomenda-se comprimir as imagens antes de fazer upload (use o site gratuito `squoosh.app`).

---

## 10. Boas práticas e avisos

### Avisos importantes

> **NUNCA altere os campos "ID"** presentes em quartos, galeria, pratos do menu, eventos e serviços. Estes campos são identificadores técnicos. Alterá-los pode causar erros no website que requerem intervenção técnica.

> **Guarde sempre antes de sair.** O CMS não guarda automaticamente. Se sair da página sem clicar em "Publish", todas as alterações são perdidas.

> **Aguarde 1 a 3 minutos** após publicar para ver as alterações no website. O website precisa de ser reconstruído após cada publicação.

### Boas práticas de edição

- **Textos:** Escreva sempre com cuidado ortográfico. Os textos aparecem directamente no website público.
- **Preços:** Introduza apenas números (ex: `50.000`). Não inclua "Kz" ou "AKZ" no campo de preço — o website adiciona a moeda automaticamente.
- **Imagens:** Use sempre fotografias de alta qualidade e com boa iluminação. Evite imagens desfocadas ou escuras.
- **Descrições:** Seja detalhado mas conciso. Evite textos demasiado longos.

### Gestão de utilizadores

Apenas pessoas com acesso ao repositório GitHub podem editar o website. Para **adicionar um novo utilizador**, o administrador deve:

1. Aceder a `https://github.com/hsvanda18/hotel-rainha-njinga`
2. Ir a **Settings → Collaborators and teams**
3. Clicar em **"Add people"**
4. Introduzir o username GitHub do novo utilizador
5. Seleccionar permissão **"Write"**

Para **remover acesso** a um utilizador, o administrador vai ao mesmo local e clica em **"Remove"** ao lado do utilizador.

---

## 11. Resolução de problemas comuns

### O botão "Login with GitHub" não funciona

**Causa provável:** O browser está a bloquear o pop-up de autenticação.

**Solução:**
1. Verifique se o browser está a bloquear pop-ups (ícone no canto da barra de endereço)
2. Clique em **"Always allow pop-ups from this site"**
3. Tente fazer login novamente

---

### Após login, aparece mensagem de erro "Not authorized"

**Causa provável:** O seu utilizador GitHub ainda não foi adicionado como colaborador.

**Solução:**
1. Confirme que aceitou o convite de colaboração (ver secção 4)
2. Contacte o administrador para verificar se o seu acesso foi concedido

---

### As alterações não aparecem no website depois de publicar

**Causa provável:** O website ainda está a ser reconstruído.

**Solução:**
1. Aguarde **3 a 5 minutos**
2. Faça refresh (F5) na página do website
3. Se após 10 minutos ainda não aparecer, tente publicar novamente no CMS

---

### A imagem que fiz upload não aparece

**Causa provável:** O ficheiro é demasiado grande ou está num formato não suportado.

**Solução:**
1. Verifique se a imagem tem menos de 5 MB
2. Certifique-se de que está no formato JPEG, PNG ou WebP
3. Se necessário, comprima a imagem em `squoosh.app` e tente novamente

---

### O CMS mostra erro "Failed to persist entry"

**Causa provável:** Problema temporário de ligação ao GitHub.

**Solução:**
1. Aguarde 2 minutos e tente publicar novamente
2. Se persistir, feche o browser, abra novamente e faça login outra vez

---

### Esqueci a palavra-passe do GitHub

**Solução:**
1. Aceda a `https://github.com`
2. Clique em **"Sign in"** → **"Forgot password?"**
3. Introduza o seu email
4. Siga as instruções enviadas para o seu email

---

## Contacto para suporte técnico

Para problemas técnicos que não consiga resolver com este manual, contacte o administrador do website:

- **Email:** hsvanda18@gmail.com
- **Website:** `https://hotel-rainha-njinga.vercel.app/admin`

---

*Manual elaborado para o Hotel Rainha Njinga — Morro Bento, Rua dos Generais, Distrito do Samba, Luanda, Angola.*
