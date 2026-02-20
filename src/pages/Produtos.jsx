import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Filter } from 'lucide-react';
import { produtos, categorias } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Produtos = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const produtosFiltrados = categoriaSelecionada === 'todos' 
    ? produtos 
    : produtos.filter(p => p.categoria.toLowerCase() === categoriaSelecionada);

  const handleWhatsApp = (produto) => {
    const mensagem = `Olá! Gostaria de fazer um orçamento para: ${produto.nome}`;
    window.open(`https://wa.me/5519971636969?text=${encodeURIComponent(mensagem)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-cyan-50">
      {/* Header Simplificado */}
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
              <Link to="/produtos" className="text-lg font-bold text-cyan-600 border-b-4 border-cyan-600">Produtos</Link>
              <Link to="/instalacoes" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300">Instalações</Link>
              <Link to="/contato" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300">Contato</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Nossos Produtos
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Brinquedos de espuma de alta qualidade para todos os espaços
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-4 bg-white sticky top-24 z-40 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-6 w-6 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-800">Categorias:</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categorias.map((cat) => (
              <Button
                key={cat.slug}
                onClick={() => setCategoriaSelecionada(cat.slug)}
                variant={categoriaSelecionada === cat.slug ? "default" : "outline"}
                className={`rounded-full font-bold transition-all duration-300 ${
                  categoriaSelecionada === cat.slug 
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg scale-105' 
                    : 'border-2 border-purple-300 text-purple-700 hover:bg-purple-50'
                }`}
              >
                {cat.nome}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-lg text-gray-600">
              Exibindo <span className="font-bold text-purple-600">{produtosFiltrados.length}</span> produtos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {produtosFiltrados.map((produto) => (
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
                  {produto.destaque && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold px-3 py-1 rounded-full">
                      Destaque
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <Badge className="bg-purple-100 text-purple-700 w-fit mb-2 rounded-full px-3 py-1">
                    {produto.categoria}
                  </Badge>
                  <h3 className="text-xl font-black text-gray-800">{produto.nome}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-2">{produto.descricao}</p>
                  <p className="text-sm text-cyan-600 font-semibold">Dimensões: {produto.dimensoes}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleWhatsApp(produto)}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {produtosFiltrados.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
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

export default Produtos;