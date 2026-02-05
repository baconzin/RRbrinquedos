import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, CheckCircle, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              REGIS REIS
            </Link>
            <nav className="hidden md:flex items-center gap-10">
              <Link to="/" className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link to="/produtos" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Produtos
              </Link>
              <Link to="/instalacoes" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Instalações
              </Link>
              <Link to="/contato" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Falar no WhatsApp"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale Conosco
        </span>
      </button>

      {/* Hero Section - Redesenhado */}
      <section className="relative px-6 py-32 overflow-hidden bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Conteúdo */}
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="inline-block text-sm font-semibold text-purple-600 tracking-wide uppercase">
                  Instalações Profissionais
                </span>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Brinquedos de Espuma Sob Medida
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Criamos ambientes seguros e estimulantes com instalações personalizadas. Atendemos escolas, clínicas, buffets e condomínios em toda região.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Solicitar Orçamento
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('produtos-destaque').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-semibold px-10 py-7 text-lg rounded-xl transition-all"
                >
                  Conhecer Produtos
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Instalações</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Anos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Personalizável</div>
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative lg:ml-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://customer-assets.emergentagent.com/job_881eaa2f-4116-4ff9-837f-58aefc0a74da/artifacts/su0ng6yq_WhatsApp%20Image%202026-02-05%20at%2000.05.46%20%281%29.jpeg"
                  alt="Instalação de Brinquedos de Espuma"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Instalação Personalizada</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Criamos e instalamos produtos sob medida para seu espaço. Cada projeto é único e adaptado às suas necessidades.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Qualidade Garantida</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Produtos 100% nacionais em espuma de alta qualidade, seguros, duráveis e certificados.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Atendimento Regional</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Atendemos toda região com instalação profissional, suporte completo e garantia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Produtos Destaque */}
      <section id="produtos-destaque" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                className="overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl bg-white group"
                onMouseEnter={() => setHoveredProduct(produto.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden h-64 bg-gray-100">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredProduct === produto.id ? 'scale-105' : 'scale-100'
                    }`}
                  />
                </div>
                <CardHeader>
                  <Badge className="bg-purple-50 text-purple-700 w-fit mb-2 rounded-md px-3 py-1 border-0 text-xs font-medium">
                    {produto.categoria}
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900">{produto.nome}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm mb-2">{produto.descricao}</p>
                  <p className="text-sm text-gray-500">Dimensões: {produto.dimensoes}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
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
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-6 rounded-lg transition-colors"
              >
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instalações */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossas Instalações
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja alguns dos projetos que transformamos em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {instalacoes.slice(0, 4).map((instalacao) => (
              <Card key={instalacao.id} className="overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl group">
                <img 
                  src={instalacao.imagem} 
                  alt={instalacao.titulo}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium text-sm">{instalacao.local}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{instalacao.titulo}</h3>
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
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-6 rounded-lg transition-colors"
              >
                Ver Mais Instalações
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar seu espaço?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato agora e receba um orçamento personalizado!
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-medium text-lg px-12 py-6 rounded-lg transition-colors"
          >
            <Phone className="mr-3 h-6 w-6" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Regis Reis</h3>
              <p className="text-gray-400 leading-relaxed">
                Especialistas em brinquedos de espuma e instalações personalizadas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/produtos" className="text-gray-400 hover:text-white transition-colors">Produtos</Link></li>
                <li><Link to="/instalacoes" className="text-gray-400 hover:text-white transition-colors">Instalações</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-5 w-5" />
                  (19) 97163-6969
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-5 w-5" />
                  contato@regisreis.com.br
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Regis Reis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;