// Mock data para produtos - Baseado em catálogos e concorrentes
export const produtos = [
  // PISCINAS DE BOLINHAS
  {
    id: 1,
    nome: 'Piscina de Bolinhas Quadrada 120x120cm',
    categoria: 'Piscinas',
    imagem: 'https://customer-assets.emergentagent.com/job_881eaa2f-4116-4ff9-837f-58aefc0a74da/artifacts/su0ng6yq_WhatsApp%20Image%202026-02-05%20at%2000.05.46%20%281%29.jpeg',
    descricao: 'Piscina de bolinhas espumada desmontável, ideal para áreas de recreação infantil.',
    dimensoes: '120x120x30cm',
    destaque: true
  },
  {
    id: 2,
    nome: 'Piscina de Bolinhas Grande 150x150cm',
    categoria: 'Piscinas',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Piscina espumada de grande capacidade, perfeita para buffets e escolas.',
    dimensoes: '150x150x30cm',
    destaque: true
  },
  
  // CAMA ELÁSTICA
  {
    id: 3,
    nome: 'Cama Elástica 2,00m Colorida',
    categoria: 'Cama Elástica',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Cama elástica nacional colorida com rede de proteção, ideal para crianças pequenas.',
    dimensoes: 'Diâmetro 2,00m',
    destaque: false
  },
  {
    id: 4,
    nome: 'Cama Elástica 4,27m Profissional',
    categoria: 'Cama Elástica',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Cama elástica grande com lona preta, estrutura reforçada e 4 pés de sustentação.',
    dimensoes: 'Diâmetro 4,27m',
    destaque: false
  },

  // PLAYGROUND MODULAR
  {
    id: 5,
    nome: 'Playground Fun Play',
    categoria: 'Playground',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Playground modular completo com escorregadores, túneis e áreas de escalada.',
    dimensoes: 'Modular',
    destaque: true
  },
  {
    id: 6,
    nome: 'Playground MiniPlay Petit',
    categoria: 'Playground',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Playground compacto ideal para espaços menores, com escorregador e área de escalada.',
    dimensoes: 'Compacto',
    destaque: true
  },
  {
    id: 7,
    nome: 'Casa na Árvore Smart',
    categoria: 'Playground',
    imagem: 'https://images.unsplash.com/photo-1576668174940-75cb03a0897e?w=600',
    descricao: 'Casa elevada com balanços integrados, escorregador e área de recreação.',
    dimensoes: 'Grande',
    destaque: false
  },

  // MÓVEIS MONTESSORI
  {
    id: 8,
    nome: 'Caminha Montessori Solteiro',
    categoria: 'Mobiliário',
    imagem: 'https://customer-assets.emergentagent.com/job_881eaa2f-4116-4ff9-837f-58aefc0a74da/artifacts/x1bm2zqg_WhatsApp%20Image%202026-02-05%20at%2000.05.46.jpeg',
    descricao: '100% espuma e corino, estrutura baixa seguindo método Montessori.',
    dimensoes: '208x108x25cm',
    destaque: true
  },
  {
    id: 9,
    nome: 'Caminha Montessori Casal',
    categoria: 'Mobiliário',
    imagem: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    descricao: 'Cama montessoriana em espuma e corino, tamanho casal para espaços familiares.',
    dimensoes: '208x158x25cm',
    destaque: false
  },

  // CIRCUITOS ESPUMADOS
  {
    id: 10,
    nome: 'Ponte Arco-Íris',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Ponte com 5 degraus coloridos para desenvolvimento motor e equilíbrio.',
    dimensoes: '104x62x40cm',
    destaque: true
  },
  {
    id: 11,
    nome: 'Playground Espumado Borboleta',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1576668174940-75cb03a0897e?w=600',
    descricao: 'Conjunto com 6 peças: escada, rampa e asas decorativas temáticas.',
    dimensoes: '150x130x30cm',
    destaque: false
  },
  {
    id: 12,
    nome: 'Circuito Soft Túnel',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Circuito com 6 peças incluindo túnel, ideal para estimulação sensorial.',
    dimensoes: 'Kit com 6 peças',
    destaque: false
  },
  {
    id: 13,
    nome: 'Módulo Escada Espumada',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Escada modular espumada para compor circuitos psicomotores.',
    dimensoes: '60x30cm',
    destaque: false
  },
  {
    id: 14,
    nome: 'Módulo Rampa Reta',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1576668174940-75cb03a0897e?w=600',
    descricao: 'Rampa espumada para coordenação motora e desenvolvimento infantil.',
    dimensoes: '60x60x30cm',
    destaque: false
  },

  // MÓVEIS LÚDICOS
  {
    id: 15,
    nome: 'BrincaSofá Mil Formas',
    categoria: 'Mobiliário',
    imagem: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    descricao: 'Kit modular com 6 peças: 2 colchonetes, 2 triângulos e 2 almofadas.',
    dimensoes: 'Kit 6 peças',
    destaque: false
  },
  {
    id: 16,
    nome: 'BrincaPoltrona Mil Formas',
    categoria: 'Mobiliário',
    imagem: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    descricao: 'Kit modular com 2 peças: colchonete e trapézio, versátil e funcional.',
    dimensoes: 'Kit 2 peças',
    destaque: false
  },
  {
    id: 17,
    nome: 'Poltroninha 2 em 1',
    categoria: 'Mobiliário',
    imagem: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    descricao: 'Poltrona infantil que se transforma em mesinha com cadeira.',
    dimensoes: '50x46x42cm',
    destaque: false
  },

  // BALANÇOS E GANGORRAS
  {
    id: 18,
    nome: 'Gira Gira 8 Lugares',
    categoria: 'Playground',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Gira-gira tradicional de ferro para 8 crianças, estrutura reforçada.',
    dimensoes: 'Ferro tradicional',
    destaque: false
  },
  {
    id: 19,
    nome: 'Balanço Duplo Plástico',
    categoria: 'Playground',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Balanço infantil para 2 crianças com estrutura em plástico resistente.',
    dimensoes: 'Para 2 lugares',
    destaque: false
  },
  {
    id: 20,
    nome: 'Gangorra 3 Pranchas',
    categoria: 'Playground',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Gangorra de ferro com 3 pranchas para múltiplas crianças.',
    dimensoes: 'Ferro',
    destaque: false
  },
  {
    id: 21,
    nome: 'Gangorra Minhoca',
    categoria: 'Playground',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Gangorra individual temática em formato de minhoca colorida.',
    dimensoes: 'Individual',
    destaque: false
  },

  // ÁREA BABY
  {
    id: 22,
    nome: 'Apoio Bebê para Sentar',
    categoria: 'Área Baby',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Apoio em U para auxiliar bebês na fase de aprender a sentar.',
    dimensoes: '50x40x15cm',
    destaque: false
  },
  {
    id: 23,
    nome: 'Senta Bebê Apoio de Coluna',
    categoria: 'Área Baby',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Suporte espumado ergonômico para desenvolvimento postural de bebês.',
    dimensoes: '60x50x15cm',
    destaque: false
  },
  {
    id: 24,
    nome: 'Rolo Sensorial',
    categoria: 'Área Baby',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Rolo para estimulação sensorial e tummy time de bebês.',
    dimensoes: '60x30cm diâmetro',
    destaque: false
  },

  // EDUCATIVO
  {
    id: 25,
    nome: 'Kit 15 Almofadas Educativas',
    categoria: 'Educativo',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Almofadas com números e símbolos matemáticos, inclui bolsa organizadora.',
    dimensoes: 'Kit 15 peças',
    destaque: false
  },
  {
    id: 26,
    nome: 'Almofadas Coloridas Kit 6un',
    categoria: 'Educativo',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Conjunto de 6 almofadas redondas coloridas para atividades lúdicas.',
    dimensoes: '30cm diâmetro x 5cm',
    destaque: false
  },

  // PLAYGROUND TEMÁTICO
  {
    id: 27,
    nome: 'Castelo Medieval',
    categoria: 'Playground',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Playground temático medieval com torres, escorregadores e área de imaginação.',
    dimensoes: 'Grande',
    destaque: false
  },
  {
    id: 28,
    nome: 'Navio dos Piratas',
    categoria: 'Playground',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Playground temático pirata com estrutura de navio, escorregador e escalada.',
    dimensoes: 'Grande',
    destaque: false
  },

  // ACESSÓRIOS
  {
    id: 29,
    nome: 'Puff Dobrável 3 em 1',
    categoria: 'Mobiliário',
    imagem: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    descricao: 'Puff multiuso que vira colchonete ou assento, revestimento em suede.',
    dimensoes: '180x60x10cm',
    destaque: false
  },
  {
    id: 30,
    nome: 'Túnel Lúdico Colorido',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Túnel tipo centopeia com cores vibrantes para circuitos de atividades.',
    dimensoes: 'Extensível',
    destaque: false
  }
];

export const instalacoes = [
  {
    id: 1,
    titulo: 'Instalação em Escola Infantil',
    local: 'São Paulo - SP',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800',
    descricao: 'Playground completo com piscina de bolinhas, circuitos psicomotores e área de descanso.'
  },
  {
    id: 2,
    titulo: 'Espaço Kids em Buffet Infantil',
    local: 'Campinas - SP',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    descricao: 'Área temática com móveis coloridos, equipamentos sensoriais e circuitos de atividades.'
  },
  {
    id: 3,
    titulo: 'Clínica de Fisioterapia Pediátrica',
    local: 'Ribeirão Preto - SP',
    imagem: 'https://images.unsplash.com/photo-1576668174940-75cb03a0897e?w=800',
    descricao: 'Circuito terapêutico completo com equipamentos especializados para reabilitação infantil.'
  },
  {
    id: 4,
    titulo: 'Play Area em Condomínio',
    local: 'Campinas - SP',
    imagem: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    descricao: 'Espaço de lazer infantil com diversos módulos de brinquedo e área segura.'
  },
  {
    id: 5,
    titulo: 'Brinquedoteca Corporativa',
    local: 'São Paulo - SP',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800',
    descricao: 'Espaço kids em empresa com mobiliário espumado e equipamentos educativos.'
  },
  {
    id: 6,
    titulo: 'Centro de Educação Infantil',
    local: 'Jundiaí - SP',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    descricao: 'Instalação completa com circuitos, piscina de bolinhas e área pedagógica.'
  }
];

export const categorias = [
  { nome: 'Todos', slug: 'todos' },
  { nome: 'Piscinas', slug: 'piscinas' },
  { nome: 'Cama Elástica', slug: 'cama elastica' },
  { nome: 'Playground', slug: 'playground' },
  { nome: 'Mobiliário', slug: 'mobiliario' },
  { nome: 'Circuitos', slug: 'circuitos' },
  { nome: 'Área Baby', slug: 'area baby' },
  { nome: 'Educativo', slug: 'educativo' }
];