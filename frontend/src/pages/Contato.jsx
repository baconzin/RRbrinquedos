import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mensagemWhatsApp = `*Novo Contato do Site*\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nMensagem: ${formData.mensagem}`;
    
    window.open(`https://wa.me/5519971636969?text=${encodeURIComponent(mensagemWhatsApp)}`, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Complete o envio da mensagem no WhatsApp.",
    });
    
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppDirect = () => {
    window.open('https://wa.me/5519971636969', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-purple-50">
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
              <Link to="/instalacoes" className="text-lg font-bold text-purple-700 hover:text-cyan-600 transition-all duration-300">Instalações</Link>
              <Link to="/contato" className="text-lg font-bold text-purple-600 border-b-4 border-purple-600">Contato</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-amber-500">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Estamos prontos para atender você e criar o projeto perfeito!
          </p>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <Card className="border-4 border-purple-200 shadow-2xl">
              <CardHeader>
                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
                  Solicite um Orçamento
                </h2>
                <p className="text-gray-600 mt-2">Preencha o formulário abaixo ou fale conosco pelo WhatsApp</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                    <Input
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="border-2 border-gray-300 focus:border-purple-500 rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="border-2 border-gray-300 focus:border-purple-500 rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Telefone/WhatsApp</label>
                    <Input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(19) 99999-9999"
                      required
                      className="border-2 border-gray-300 focus:border-purple-500 rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                    <Textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seu projeto..."
                      rows={5}
                      required
                      className="border-2 border-gray-300 focus:border-purple-500 rounded-xl"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2 h-6 w-6" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações */}
            <div className="space-y-8">
              <Card className="border-4 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-green-50 to-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-green-700">WhatsApp</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 mb-4">Fale conosco agora mesmo!</p>
                  <p className="text-2xl font-bold text-green-600 mb-4">(19) 97163-6969</p>
                  <Button 
                    onClick={handleWhatsAppDirect}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-full"
                  >
                    Abrir WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-4 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-cyan-50 to-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-cyan-700">E-mail</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 mb-2">Envie-nos um e-mail</p>
                  <p className="text-xl font-bold text-cyan-600">contato@regisreis.com.br</p>
                </CardContent>
              </Card>

              <Card className="border-4 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-purple-700">Atendimento</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">Atendemos toda a região com instalação profissional e suporte completo.</p>
                </CardContent>
              </Card>
            </div>
          </div>
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

export default Contato;