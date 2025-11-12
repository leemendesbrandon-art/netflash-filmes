"use client";

import { useState } from "react";
import { Play, Info, X, Star, Clock } from "lucide-react";

// Dados fictícios de filmes
const featuredMovie = {
  id: 1,
  title: "Horizonte Perdido",
  description: "Em um futuro distópico, um grupo de rebeldes luta contra um regime opressor que controla a humanidade através da tecnologia. Uma jornada épica de sobrevivência e esperança.",
  rating: 8.7,
  year: 2024,
  duration: "2h 15min",
  genre: "Ficção Científica, Ação",
  backdrop: "linear-gradient(to right, #e50914, #831010)",
};

const movieCategories = [
  {
    title: "Em Alta",
    movies: [
      { id: 2, title: "Sombras da Noite", image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", rating: 8.5, year: 2024 },
      { id: 3, title: "Código Vermelho", image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", rating: 7.9, year: 2024 },
      { id: 4, title: "Última Fronteira", image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", rating: 8.2, year: 2023 },
      { id: 5, title: "Ecos do Passado", image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", rating: 7.6, year: 2024 },
      { id: 6, title: "Cidade Fantasma", image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", rating: 8.8, year: 2023 },
      { id: 7, title: "Projeto Ômega", image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", rating: 8.1, year: 2024 },
    ],
  },
  {
    title: "Ação e Aventura",
    movies: [
      { id: 8, title: "Tempestade de Fogo", image: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)", rating: 7.8, year: 2024 },
      { id: 9, title: "Operação Resgate", image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", rating: 8.3, year: 2023 },
      { id: 10, title: "Velocidade Máxima", image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", rating: 7.5, year: 2024 },
      { id: 11, title: "Zona de Perigo", image: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)", rating: 8.0, year: 2023 },
      { id: 12, title: "Caçadores", image: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)", rating: 7.7, year: 2024 },
      { id: 13, title: "Impacto Final", image: "linear-gradient(135deg, #f77062 0%, #fe5196 100%)", rating: 8.4, year: 2024 },
    ],
  },
  {
    title: "Ficção Científica",
    movies: [
      { id: 14, title: "Dimensão Paralela", image: "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)", rating: 8.6, year: 2024 },
      { id: 15, title: "Inteligência Artificial", image: "linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)", rating: 8.9, year: 2023 },
      { id: 16, title: "Colônia Marte", image: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)", rating: 7.4, year: 2024 },
      { id: 17, title: "Realidade Virtual", image: "linear-gradient(135deg, #0fd850 0%, #f9f047 100%)", rating: 8.2, year: 2023 },
      { id: 18, title: "Viagem no Tempo", image: "linear-gradient(135deg, #00d2ff 0%, #3a47d5 100%)", rating: 8.7, year: 2024 },
      { id: 19, title: "Singularidade", image: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)", rating: 7.9, year: 2024 },
    ],
  },
];

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between px-4 py-4 md:px-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#e50914]">CINEFLIX</h1>
          <nav className="flex items-center gap-4 md:gap-8 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Início</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Séries</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Filmes</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Minha Lista</a>
          </nav>
        </div>
      </header>

      {/* Banner Principal */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center">
        <div 
          className="absolute inset-0 opacity-60"
          style={{ background: featuredMovie.backdrop }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        
        <div className="relative z-10 px-4 md:px-12 max-w-2xl space-y-4 md:space-y-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl">
            {featuredMovie.title}
          </h2>
          <div className="flex items-center gap-3 text-sm md:text-base">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{featuredMovie.rating}</span>
            </div>
            <span>{featuredMovie.year}</span>
            <span>{featuredMovie.duration}</span>
          </div>
          <p className="text-base md:text-lg text-gray-200 line-clamp-3 drop-shadow-lg">
            {featuredMovie.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button className="flex items-center justify-center gap-2 bg-white text-black px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5 fill-black" />
              Assistir
            </button>
            <button 
              onClick={() => setSelectedMovie(featuredMovie)}
              className="flex items-center justify-center gap-2 bg-gray-500/70 backdrop-blur-sm px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-gray-500/90 transition-all duration-300 hover:scale-105"
            >
              <Info className="w-5 h-5" />
              Mais Informações
            </button>
          </div>
        </div>
      </section>

      {/* Seções de Filmes */}
      <div className="relative z-20 -mt-32 md:-mt-40 space-y-8 md:space-y-12 pb-12">
        {movieCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="px-4 md:px-12">
            <h3 className="text-xl md:text-2xl font-bold mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
              {category.movies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => setSelectedMovie(movie)}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div 
                    className="aspect-[2/3] rounded-md overflow-hidden shadow-lg relative"
                    style={{ background: movie.image }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 fill-white text-white drop-shadow-2xl" />
                    </div>
                  </div>
                  <div className="mt-2 space-y-1">
                    <h4 className="font-semibold text-sm md:text-base line-clamp-1">{movie.title}</h4>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                        <span>{movie.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{movie.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Modal de Detalhes */}
      {selectedMovie && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedMovie(null)}
        >
          <div 
            className="bg-[#181818] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="relative h-[40vh] md:h-[50vh]">
              <div 
                className="absolute inset-0 opacity-70"
                style={{ background: selectedMovie.image || selectedMovie.backdrop }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
              <button
                onClick={() => setSelectedMovie(null)}
                className="absolute top-4 right-4 bg-[#181818] rounded-full p-2 hover:bg-[#282828] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{selectedMovie.title}</h2>
                <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  <Play className="w-5 h-5 fill-black" />
                  Assistir
                </button>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8 space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg">{selectedMovie.rating}</span>
                </div>
                <span className="text-gray-400">{selectedMovie.year}</span>
                {selectedMovie.duration && (
                  <>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{selectedMovie.duration}</span>
                    </div>
                  </>
                )}
              </div>

              {selectedMovie.description && (
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sinopse</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedMovie.description}</p>
                </div>
              )}

              {selectedMovie.genre && (
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gênero</h3>
                  <p className="text-gray-300">{selectedMovie.genre}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Elenco</h4>
                  <p className="text-gray-300">Ana Silva, Carlos Santos, Maria Oliveira</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Direção</h4>
                  <p className="text-gray-300">João Ferreira</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
