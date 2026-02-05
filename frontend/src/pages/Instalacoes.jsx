import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { instalacoes } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';

const Instalacoes = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5519971636969?text=Olá! Gostaria de fazer um orçamento para instalação.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-amber-300 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://via.placeholder.com/150x60/6366f1/ffffff?text=REGIS+REIS" 
                alt="Regis Reis Logo" 
                className="h-14 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300">Home</Link>
              <Link to="/produtos" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300">Produtos</Link>
              <Link to="/instalacoes" className="text-lg font-bold text-cyan-600 border-b-4 border-cyan-600">Instalações</Link>
              <Link to="/contato" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300">Contato</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Nossas Instalações
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Projetos personalizados que transformaram espaços em ambientes mágicos
          </p>
        </div>
      </section>

      {/* Instalações */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {instalacoes.map((instalacao, index) => (
              <Card 
                key={instalacao.id} 
                className={`overflow-hidden border-3 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  index % 2 === 0 ? 'border-purple-300 hover:border-purple-500' : 'border-cyan-300 hover:border-cyan-500'
                }`}
              >
                <div className="relative overflow-hidden h-96">
                  <img 
                    src={instalacao.imagem} 
                    alt={instalacao.titulo}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <MapPin className="h-5 w-5" />
                      <span className="font-bold text-lg">{instalacao.local}</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-3xl font-black text-gray-800">{instalacao.titulo}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">{instalacao.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-cyan-600 to-amber-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Quer uma instalação personalizada?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Criamos soluções sob medida para escolas, buffets, clínicas e muito mais!
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-white text-purple-700 hover:bg-gray-100 font-black text-xl px-12 py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <Phone className="mr-3 h-7 w-7" />
            Falar com Especialista
            <ArrowRight className="ml-3 h-7 w-7" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2026 Regis Reis. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Instalacoes;