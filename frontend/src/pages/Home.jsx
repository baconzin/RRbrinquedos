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
            <Link to="/" className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_playground-install/artifacts/zu0z59od_image.png"
                alt="Regis Reis Logo" 
                className="h-12 w-auto"
              />
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
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Falar no WhatsApp"
      >
        <Phone className="h-7 w-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Fale Conosco
        </span>
      </button>

      {/* Hero Section - Redesenhado Centralizado */}
      <section className="relative px-6 py-32 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-12">
            {/* Badge Destaque */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg">
                <CheckCircle className="h-5 w-5" />
                Instalações Profissionais
              </span>
            </div>

            {/* Título Principal */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Brinquedos de Espuma
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
                  Sob Medida
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Criamos ambientes seguros e estimulantes com instalações personalizadas. Atendemos escolas, clínicas, buffets e condomínios.
              </p>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
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

            {/* Imagem Principal */}
            <div className="relative max-w-5xl mx-auto pt-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://customer-assets.emergentagent.com/job_881eaa2f-4116-4ff9-837f-58aefc0a74da/artifacts/su0ng6yq_WhatsApp%20Image%202026-02-05%20at%2000.05.46%20%281%29.jpeg"
                  alt="Instalação de Brinquedos de Espuma"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">500+</div>
                <div className="text-sm text-gray-600 mt-2 font-medium">Instalações Realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">10+</div>
                <div className="text-sm text-gray-600 mt-2 font-medium">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">100%</div>
                <div className="text-sm text-gray-600 mt-2 font-medium">Personalizável</div>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento decorativo */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      </section>

      {/* Diferenciais */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Regis Reis?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experiência e qualidade em cada instalação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Instalação Sob Medida</h3>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Projetos únicos desenvolvidos especificamente para o seu espaço e necessidades.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle className="h-7 w-7 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Qualidade Premium</h3>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Espuma de alta densidade, revestimentos duráveis e acabamento profissional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-8">
              <CardHeader className="p-0 mb-6">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Suporte Regional</h3>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Instalação profissional, manutenção e garantia em toda região de Campinas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Produtos Destaque */}
      <section id="produtos-destaque" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos produtos mais populares
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {produtosDestaque.map((produto) => (
              <Card 
                key={produto.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group"
                onMouseEnter={() => setHoveredProduct(produto.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden h-72 bg-gray-50">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredProduct === produto.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
                <CardHeader className="p-6">
                  <Badge className="bg-purple-50 text-purple-700 w-fit mb-3 rounded-lg px-3 py-1.5 border-0 text-xs font-semibold">
                    {produto.categoria}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{produto.nome}</h3>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed mb-3">{produto.descricao}</p>
                  <p className="text-sm text-gray-500 font-medium">Dimensões: {produto.dimensoes}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl py-6 transition-colors"
                  >
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/produtos">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-semibold px-10 py-7 text-lg rounded-xl transition-all"
              >
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instalações */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Projetos Realizados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transformamos espaços em ambientes incríveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {instalacoes.slice(0, 4).map((instalacao) => (
              <Card key={instalacao.id} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={instalacao.imagem} 
                    alt={instalacao.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium text-sm">{instalacao.local}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{instalacao.titulo}</h3>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-gray-600 leading-relaxed text-lg">{instalacao.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/instalacoes">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-semibold px-10 py-7 text-lg rounded-xl transition-all"
              >
                Ver Mais Instalações
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 bg-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Entre em contato e receba um orçamento personalizado sem compromisso
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-50 font-semibold text-lg px-12 py-7 rounded-xl transition-all shadow-xl"
          >
            <Phone className="mr-3 h-6 w-6" />
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Regis Reis</h3>
              <p className="text-gray-400 leading-relaxed text-lg max-w-md">
                Especialistas em brinquedos de espuma e instalações personalizadas desde 2014.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-base">Home</Link></li>
                <li><Link to="/produtos" className="text-gray-400 hover:text-white transition-colors text-base">Produtos</Link></li>
                <li><Link to="/instalacoes" className="text-gray-400 hover:text-white transition-colors text-base">Instalações</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors text-base">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-base">(19) 97163-6969</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-base">contato@regisreis.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Regis Reis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;