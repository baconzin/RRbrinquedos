// Mock data para produtos - Baseado no catálogo e concorrentes
export const produtos = [
  // Produtos do Catálogo PDF
  {
    id: 1,
    nome: 'Almofadão Espumado',
    categoria: 'Almofadas',
    imagem: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    descricao: 'Almofadão gigante que estimula a percepção. Pode ser utilizado com diversos materiais em seu interior.',
    dimensoes: '140x140x15cm',
    destaque: true
  },
  {
    id: 2,
    nome: 'Piscina de Bolinhas',
    categoria: 'Piscinas',
    imagem: 'https://customer-assets.emergentagent.com/job_881eaa2f-4116-4ff9-837f-58aefc0a74da/artifacts/su0ng6yq_WhatsApp%20Image%202026-02-05%20at%2000.05.46%20%281%29.jpeg',
    descricao: 'Piscina de bolinhas espumada desmontável, segura e confortável para diversão das crianças.',
    dimensoes: '120x120x30cm',
    destaque: true
  },
  {
    id: 3,
    nome: 'Conjunto Mesa e Cadeiras',
    categoria: 'Mobiliário',
    imagem: 'https://customer-assets.emergentagent.com/job_881eaa2f-4116-4ff9-837f-58aefc0a74da/artifacts/x1bm2zqg_WhatsApp%20Image%202026-02-05%20at%2000.05.46.jpeg',
    descricao: 'Mesa e cadeiras espumadas coloridas, perfeitas para atividades educativas e recreativas.',
    dimensoes: 'Mesa: 60x60x50cm',
    destaque: true
  },
  {
    id: 4,
    nome: 'Túnel Sensorial',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Túnel indicado para desenvolvimento da propriocepção, planejamento motor e mapeamento visual.',
    dimensoes: 'Comprimento variável',
    destaque: true
  },
  {
    id: 5,
    nome: 'Escada Espumada',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Escada que estimula movimentação e equilíbrio. Ideal para circuitos psicomotores.',
    dimensoes: '60x40x30cm',
    destaque: false
  },
  {
    id: 6,
    nome: 'Rampa Espumada',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1576668174940-75cb03a0897e?w=600',
    descricao: 'Rampa que estimula coordenação olho-mão durante movimentos de subida e descida.',
    dimensoes: '80x40x20cm',
    destaque: false
  },
  {
    id: 7,
    nome: 'Formas Geométricas',
    categoria: 'Educativo',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Conjunto de formas geométricas espumadas para aprendizado lúdico e desenvolvimento cognitivo.',
    dimensoes: 'Variadas',
    destaque: false
  },
  {
    id: 8,
    nome: 'Colchonete',
    categoria: 'Segurança',
    imagem: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600',
    descricao: 'Colchonete espumado para segurança, conforto e relaxamento. Essencial para áreas de atividades.',
    dimensoes: '130x150cm',
    destaque: false
  },
  {
    id: 9,
    nome: 'Rolo Sensorial',
    categoria: 'Equipamentos',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Estimula coordenação motora, concentração e fortalecimento de membros com diversão.',
    dimensoes: '80x30cm diâmetro',
    destaque: false
  },
  {
    id: 10,
    nome: 'Ponte Quadrada',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Ponte que desperta o contato da criança e estimula novas experiências motoras.',
    dimensoes: '100x60x40cm',
    destaque: false
  },
  {
    id: 11,
    nome: 'Prancha Sensorial',
    categoria: 'Equipamentos',
    imagem: 'https://images.unsplash.com/photo-1576668174940-75cb03a0897e?w=600',
    descricao: 'Design moderno que proporciona maior equilíbrio estético e funcional para terapias.',
    dimensoes: '60x40cm',
    destaque: false
  },
  {
    id: 12,
    nome: 'Árvore de Escalada',
    categoria: 'Equipamentos',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Melhora equilíbrio, coordenação motora e resistência muscular através da escalada.',
    dimensoes: '120x80x100cm',
    destaque: false
  },
  {
    id: 13,
    nome: 'Painel Sensorial',
    categoria: 'Educativo',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Melhora raciocínio lógico, coordenação motora e atenção através de atividades interativas.',
    dimensoes: '80x60cm',
    destaque: false
  },
  {
    id: 14,
    nome: 'Bola Sensorial',
    categoria: 'Equipamentos',
    imagem: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600',
    descricao: 'Trabalha direção, lateralidade e graduação de força muscular.',
    dimensoes: 'Diâmetro 65cm',
    destaque: false
  },
  {
    id: 15,
    nome: 'Parede de Escalada',
    categoria: 'Equipamentos',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Auxilia equilíbrio, coordenação, controle de espasticidade e resistência muscular.',
    dimensoes: '200x120cm',
    destaque: false
  },
  {
    id: 16,
    nome: 'Bancos Terapêuticos',
    categoria: 'Mobiliário',
    imagem: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    descricao: 'Alturas variáveis que permitem explorar criatividade e adequar às necessidades.',
    dimensoes: 'Altura regulável',
    destaque: false
  },
  {
    id: 17,
    nome: 'Cavalo Sensorial',
    categoria: 'Equipamentos',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Promove estímulos no tripé da integração sensorial através do movimento.',
    dimensoes: '80x40x60cm',
    destaque: false
  },
  {
    id: 18,
    nome: 'Caminho Linear',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1576668174940-75cb03a0897e?w=600',
    descricao: 'Favorece sistema motor e sensorial, dando noção de profundidade e equilíbrio.',
    dimensoes: '200x30cm',
    destaque: false
  },
  {
    id: 19,
    nome: 'Dado Pedagógico',
    categoria: 'Educativo',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Auxilia a criança a pensar por si mesma usando abordagem sistemática.',
    dimensoes: '30x30x30cm',
    destaque: false
  },
  {
    id: 20,
    nome: 'Disco Flexor',
    categoria: 'Equipamentos',
    imagem: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600',
    descricao: 'Equipamento estável que permite graduar intensidade e experimentar movimento rotacional.',
    dimensões: 'Diâmetro 40cm',
    destaque: false
  },
  {
    id: 21,
    nome: 'Plano Inclinado',
    categoria: 'Equipamentos',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Estimula sistema vestibular relacionado ao equilíbrio e percepção espacial.',
    dimensoes: '100x60cm (20°/30°/40°)',
    destaque: false
  },
  {
    id: 22,
    nome: 'Tapete Sensorial',
    categoria: 'Educativo',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Auxilia desenvolvimento cognitivo e motor explorando habilidades sensoriais.',
    dimensoes: '100x100cm',
    destaque: false
  },
  {
    id: 23,
    nome: 'Trapézio',
    categoria: 'Equipamentos',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Indicado para trabalhar membros superiores e promover estímulos de equilíbrio.',
    dimensoes: '60x30cm',
    destaque: false
  },
  {
    id: 24,
    nome: 'Circuito Completo 1',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    descricao: 'Circuito com escada e rampa espumada para atividades psicomotoras completas.',
    dimensoes: 'Conjunto modular',
    destaque: false
  },
  {
    id: 25,
    nome: 'Circuito Completo 2',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1576668174940-75cb03a0897e?w=600',
    descricao: 'Circuito com escada, ponte e rampa para desenvolvimento motor avançado.',
    dimensoes: 'Conjunto modular',
    destaque: false
  },
  {
    id: 26,
    nome: 'Circuito Completo 3',
    categoria: 'Circuitos',
    imagem: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
    descricao: 'Circuito completo com escada, ponte, rampa e piscina de bolinhas.',
    dimensoes: 'Conjunto modular',
    destaque: false
  },
  {
    id: 27,
    nome: 'Balde Sensorial com Bolas',
    categoria: 'Educativo',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Auxilia habilidades motoras e condicionamento. Acompanha 5 bolas para arremesso.',
    dimensoes: '40x40x50cm',
    destaque: false
  },
  {
    id: 28,
    nome: 'Argolas de Arremesso',
    categoria: 'Educativo',
    imagem: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600',
    descricao: 'Desenvolve percepção visual e motora, estimulando estratégias para conclusão.',
    dimensoes: 'Kit com 6 argolas',
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
  { nome: 'Mobiliário', slug: 'mobiliario' },
  { nome: 'Circuitos', slug: 'circuitos' },
  { nome: 'Almofadas', slug: 'almofadas' },
  { nome: 'Educativo', slug: 'educativo' },
  { nome: 'Equipamentos', slug: 'equipamentos' },
  { nome: 'Segurança', slug: 'seguranca' }
];