/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"], // Apenas arquivos .html e .js na pasta src
  theme: {
    extend: {
      // Personalizações do tema
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))", // Adiciona a classe `grid-cols-auto`
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"], // Adiciona a fonte `Outfit`
        Ovo: ["Ovo", "serif"], // Adiciona a fonte `Ovo`
      },
    },
  },
  plugins: [], // Plugins adicionais (opcional)
};
