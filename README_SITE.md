# Site Regis Reis - Brinquedos de Espuma

## 🎯 Sobre o Projeto

Site institucional e de vendas para a **Regis Reis**, empresa especializada em brinquedos de espuma personalizados e instalações sob medida.

## 🎨 Design

### Cores Principais (Baseadas no Logo)
- **Roxo**: #7c3aed (Purple-600)
- **Turquesa/Cyan**: #06b6d4 (Cyan-600)
- **Amarelo/Laranja**: #f59e0b (Amber-500)

### Estilo
- **Divertido e infantil**
- **Gradientes coloridos** em botões e títulos
- **Cards com bordas grossas** coloridas
- **Animações suaves** de hover e transições
- **Tipografia bold** para títulos impactantes

## 📱 Páginas

### 1. Home (`/`)
- **Hero Section**: Call-to-action principal com foco em instalações personalizadas
- **Diferenciais**: 3 cards destacando instalação personalizada, qualidade e atendimento local
- **Produtos em Destaque**: Grid com 4 produtos principais
- **Instalações**: Galeria de projetos realizados
- **CTA Final**: Botão grande para WhatsApp

### 2. Produtos (`/produtos`)
- **Filtro por categoria**: Todos, Piscinas, Mobiliário, Circuitos, Almofadas, Educativo, Segurança
- **Grid de produtos**: Cards com imagem, descrição, dimensões e botão de orçamento
- **WhatsApp integrado**: Cada produto envia mensagem personalizada

### 3. Instalações (`/instalacoes`)
- **Galeria de projetos**: Cards grandes com imagens dos projetos realizados
- **Localização**: Cada projeto mostra o local da instalação
- **CTA**: Botão para falar com especialista

### 4. Contato (`/contato`)
- **Formulário**: Coleta nome, email, telefone e mensagem
- **Envio via WhatsApp**: Formulário redireciona para WhatsApp com dados preenchidos
- **Cards informativos**: WhatsApp, Email e Atendimento

## 📞 Contato Integrado

**Telefone WhatsApp**: 19 97163-6969
- Todos os botões e formulários redirecionam para este número
- Mensagens personalizadas por contexto (produto específico, instalação, contato geral)

## 🔍 SEO

### Meta Tags Implementadas
- **Title**: "Regis Reis - Brinquedos de Espuma e Instalações Personalizadas | Playground Infantil"
- **Description**: Otimizada com palavras-chave relevantes
- **Keywords**: brinquedos de espuma, playground, piscina de bolinhas, instalação playground
- **Open Graph**: Tags para compartilhamento em redes sociais
- **Schema.org**: Structured data para LocalBusiness

### Otimizações
- **HTML semântico**
- **URLs amigáveis**
- **Alt text** em todas as imagens
- **Meta robots**: index, follow
- **Canonical URL**: https://regisreis.com.br

## 🛠 Tecnologias

- **React 19**
- **React Router** para navegação
- **Shadcn/UI** para componentes
- **Tailwind CSS** para estilização
- **Lucide React** para ícones

## 📦 Estrutura de Arquivos

```
/app/frontend/src/
├── mock.js                 # Dados mockados de produtos e instalações
├── pages/
│   ├── Home.jsx           # Página inicial
│   ├── Produtos.jsx       # Listagem de produtos com filtros
│   ├── Instalacoes.jsx    # Galeria de instalações
│   └── Contato.jsx        # Formulário de contato
├── components/ui/         # Componentes Shadcn
└── App.js                 # Roteamento principal
```

## 🎯 Próximos Passos para Backend

Quando autorizado, implementar:

1. **Backend API** (`/api`)
   - CRUD de produtos
   - CRUD de instalações
   - Armazenamento de formulários de contato
   - Upload de imagens

2. **MongoDB Collections**
   - `produtos`: nome, categoria, descrição, dimensões, imagem, destaque
   - `instalacoes`: título, local, descrição, imagem
   - `contatos`: nome, email, telefone, mensagem, data

3. **Integração**
   - Remover mock.js
   - Conectar páginas às APIs
   - Sistema de cache para performance

## 🚀 Como Usar (Site Estático Atual)

O site está 100% funcional como frontend estático:
- ✅ Navegação entre páginas
- ✅ Filtros de produtos
- ✅ Integração WhatsApp
- ✅ Formulário de contato (redireciona para WhatsApp)
- ✅ Design responsivo
- ✅ SEO otimizado

## 📝 Observações

- **Dados MOCK**: Todos os produtos e instalações estão em `mock.js`
- **Imagens**: Algumas imagens usam placeholders do Unsplash
- **Logo**: Placeholder temporário (substituir quando houver logo final)
- **Instalação no GitHub**: Site 100% estático, pronto para GitHub Pages

## 🎨 Diferenciais do Design

1. **Gradientes Vibrantes**: Uso extensivo de gradientes roxo-cyan-amarelo
2. **Micro-animações**: Hover states em todos os elementos interativos
3. **Bordas Grossas**: Cards com bordas de 3-4px coloridas
4. **Tipografia Bold**: Fonte Inter com weights 700-900 para impacto
5. **Espaçamento Generoso**: Breathing room entre elementos
6. **Sombras Profundas**: Shadow-xl e shadow-2xl para profundidade
7. **CTA Proeminentes**: Botões grandes com gradientes e animações
