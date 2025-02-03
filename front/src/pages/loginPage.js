import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);

    // Exemplo de como redirecionar após o login (substitua "/home" pela sua rota)
    // if (/* autenticação bem-sucedida */) {
    //   window.location.href = "/home"; // Ou use react-router-dom para navegação
    // } else {
    //   // Mostrar mensagem de erro
    //   alert("Credenciais inválidas.");
    // }
  };

  return (
    <div className="bg-gray-100 font-roboto flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="text-center mb-6">
          <img
            alt="Logo da empresa" // Alt mais descritivo
            className="w-32 h-auto mx-auto"
            src="https://placehold.co/200x100?text=Logo" // Ou seu logo real
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4"> {/* Espaçamento entre os elementos do form */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Digite seu email" // Placeholder mais amigável
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // Campo obrigatório
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Digite sua senha" // Placeholder mais amigável
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required // Campo obrigatório
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Entrar
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#" // Ou para a página de "Esqueci minha senha"
            >
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;