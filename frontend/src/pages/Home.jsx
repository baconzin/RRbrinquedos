import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Star, ArrowRight, Sparkles } from 'lucide-react';
import { produtos, instalacoes } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const produtosDestaque = produtos.filter(p => p.destaque);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5519971636969?text=Olá! Gostaria de fazer um orçamento.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-amber-300 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_881eaa2f-4116-4ff9-837f-58aefc0a74da/artifacts/ybo57dlj_CATALOGO%20REGISREISS%20%281%29.pdf" 
                alt="Regis Reis Logo" 
                className="h-14 w-auto"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x60/6366f1/ffffff?text=REGIS+REIS';
                }}
              />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110">Home</Link>
              <Link to="/produtos" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110">Produtos</Link>
              <Link to="/instalacoes" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110">Instalações</Link>
              <Link to="/contato" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300 hover:scale-110">Contato</Link>
            </nav>
            <Button 
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-cyan-100 to-amber-100 opacity-60"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-white text-lg px-4 py-2 rounded-full inline-flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Brinquedos de Espuma Personalizados
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-amber-500 leading-tight">
                Criamos Diversão Sob Medida!
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Transformamos espaços em ambientes mágicos com <span className="text-purple-600 font-bold">instalações personalizadas</span> de brinquedos de espuma. Do planejamento à execução!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('produtos-destaque').scrollIntoView({ behavior: 'smooth' })}
                  className="border-3 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Ver Produtos
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-300 via-cyan-300 to-amber-300 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_881eaa2f-4116-4ff9-837f-58aefc0a74da/artifacts/su0ng6yq_WhatsApp%20Image%202026-02-05%20at%2000.05.46%20%281%29.jpeg"
                alt="Brinquedos Coloridos"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-purple-700">Instalação Personalizada</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Criamos e instalamos produtos sob medida para seu espaço. Cada projeto é único!
                </p>
              </CardContent>
            </Card>

            <Card className="border-4 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-cyan-50 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-cyan-700">Qualidade Garantida</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Produtos 100% nacionais em espuma de alta qualidade, seguros e duráveis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-4 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-amber-50 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-amber-700">Atendimento Local</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Atendemos toda região com instalação profissional e suporte completo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Produtos Destaque */}
      <section id="produtos-destaque" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos produtos mais populares
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {produtosDestaque.map((produto) => (
              <Card 
                key={produto.id}
                className="overflow-hidden border-3 border-gray-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white"
                onMouseEnter={() => setHoveredProduct(produto.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredProduct === produto.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <Badge className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold px-3 py-1 rounded-full">
                    Destaque
                  </Badge>
                </div>
                <CardHeader>
                  <Badge className="bg-purple-100 text-purple-700 w-fit mb-2 rounded-full px-3 py-1">
                    {produto.categoria}
                  </Badge>
                  <h3 className="text-xl font-black text-gray-800">{produto.nome}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{produto.descricao}</p>
                  <p className="text-sm text-cyan-600 font-semibold mt-2">Dimensões: {produto.dimensoes}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/produtos">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instalações */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 mb-4">
              Nossas Instalações
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja alguns dos projetos que transformamos em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {instalacoes.map((instalacao) => (
              <Card key={instalacao.id} className="overflow-hidden border-3 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <img 
                  src={instalacao.imagem} 
                  alt={instalacao.titulo}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 text-cyan-600 mb-2">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">{instalacao.local}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-800">{instalacao.titulo}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{instalacao.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/instalacoes">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Ver Mais Instalações
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-cyan-600 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pronto para transformar seu espaço?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado!
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-purple-700 hover:bg-gray-100 font-black text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110"
          >
            <Phone className="mr-3 h-7 w-7" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">Regis Reis</h3>
              <p className="text-gray-300 leading-relaxed">
                Especialistas em brinquedos de espuma e instalações personalizadas.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-cyan-400">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link to="/produtos" className="text-gray-300 hover:text-cyan-400 transition-colors">Produtos</Link></li>
                <li><Link to="/instalacoes" className="text-gray-300 hover:text-cyan-400 transition-colors">Instalações</Link></li>
                <li><Link to="/contato" className="text-gray-300 hover:text-cyan-400 transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-purple-400">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-5 w-5 text-green-400" />
                  (19) 97163-6969
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  contato@regisreis.com.br
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Regis Reis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;