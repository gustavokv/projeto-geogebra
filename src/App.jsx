import React from 'react';

// --- Dados dos Applets e da Equipe ---
const projectData = {
  title: "Matemática Interativa com GeoGebra",
  subtitle: "Um projeto acadêmico para fortalecer o ensino da matemática no Ensino Médio através de applets dinâmicos e interativos.",
  about: "Este trabalho foi desenvolvido com o objetivo de criar ferramentas que auxiliem estudantes e professores a visualizar e interagir com conceitos matemáticos de forma mais clara e engajadora. Cada applet foi pensado para abordar os principais tópicos de cada ano do Ensino Médio.",
  team: {
    students: [
      "Gustavo Kermaunar Volobueff",
      "Victor Keony Okabayashi Takatu",
      "Vinícius Alves Schautz"
    ],
    supervisor: "Professora Doutora Mercedes Rocío Gonzales Márquez"
  },
  // --- ADICIONADO: Links dos formulários ---
  forms: {
    primeiroAno: 'https://docs.google.com/forms/d/e/1FAIpQLSfApcFLda0ytoetu-_C2KUXEOLrvmvKUCKIC6mEMEfj2U3VYA/viewform',
    segundoAno: 'https://docs.google.com/forms/d/e/1FAIpQLScav5ZlvpggpRuA_JVBQwFq2pUQupRCYHoTIBsjXDAbYLmNhw/viewform',
    terceiroAno: 'https://docs.google.com/forms/d/e/1FAIpQLScLbJiHSoiNGHJzcmjhIcnRMB8kZkrzKBJwlNecGyAKa2ZzHg/viewform'
  },
  applets: {
    primeiroAno: [
      { title: 'Porcentagem', url: 'https://www.geogebra.org/m/gvwnxejv' },
      { title: 'Razões Trigonométricas', url: 'https://www.geogebra.org/m/y5cwmhwj' },
      { title: 'Razões Trigonométricas (Avançado)', url: 'https://www.geogebra.org/m/udarwkmh' },
      { title: 'Proporcionalidade Direta', url: 'https://www.geogebra.org/m/bnpmey9j' },
      { title: 'Proporcionalidade Inversa', url: 'https://www.geogebra.org/m/qajh5uv6' },
    ],
    segundoAno: [
      { title: 'Funções Exponenciais e Logarítmicas', url: 'https://www.geogebra.org/m/bs8enskc' },
      { title: 'Teste de Probabilidade Simples', url: 'https://www.geogebra.org/m/mye9wezu' },
      { title: 'Probabilidade com Dados', url: 'https://www.geogebra.org/m/vytystby' },
      { title: 'Noções de Combinatória', url: 'https://www.geogebra.org/m/fbr7kaxm' },
    ],
    terceiroAno: [
      { title: 'Círculo Trigonométrico', url: 'https://www.geogebra.org/m/w9wpfefv' },
      { title: 'Funções Trigonométricas', url: 'https://www.geogebra.org/m/ffrukheh' },
      { title: 'Arcos, Ângulos e Razões no Círculo', url: 'https://www.geogebra.org/m/tjhctsgr' },
    ],
  }
};

// --- Componentes Reutilizáveis ---

// Card para cada Applet
const AppletCard = ({ title, url }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col justify-between">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 h-16">{title}</h3>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full text-center bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
    >
      Acessar Atividade
    </a>
  </div>
);

const YearSection = ({ year, description, applets, formUrl }) => (
  <section id={year.replace(' ', '-').toLowerCase()} className="mb-20 scroll-mt-20">
    <h2 className="text-4xl font-bold text-gray-900 mb-3">{year}</h2>
    <p className="text-lg text-gray-600 mb-8">{description}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {applets.map((applet) => (
        <AppletCard key={applet.title} title={applet.title} url={applet.url} />
      ))}
    </div>
    <div className="mt-12 text-center">
        <a 
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-transform transform hover:scale-105"
        >
            Avaliar Applets do {year}
        </a>
    </div>
  </section>
);


// --- Componente Principal da Aplicação ---
function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Cabeçalho */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">GeoMath</div>
          <div className="space-x-4">
             <a href="#1º-ano" className="text-gray-600 hover:text-blue-600">1º Ano</a>
             <a href="#2º-ano" className="text-gray-600 hover:text-blue-600">2º Ano</a>
             <a href="#3º-ano" className="text-gray-600 hover:text-blue-600">3º Ano</a>
          </div>
        </nav>
      </header>
      
      {/* Seção Principal */}
      <main className="container mx-auto px-6 py-16">
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">{projectData.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{projectData.subtitle}</p>
        </section>

        {/* Sobre o Projeto */}
        <section className="bg-white rounded-lg shadow-lg p-10 mb-20">
            <h2 className="text-3xl font-bold text-center mb-6">Sobre o Projeto</h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">{projectData.about}</p>
        </section>

        {/* Applets */}
        <YearSection
          year="1º Ano"
          description="Foco em conceitos fundamentais de proporcionalidade e na introdução ao universo da trigonometria."
          applets={projectData.applets.primeiroAno}
          formUrl={projectData.forms.primeiroAno}
        />
        <YearSection
          year="2º Ano"
          description="Exploração de funções exponenciais e logarítmicas, além dos princípios de probabilidade e combinatória."
          applets={projectData.applets.segundoAno}
          formUrl={projectData.forms.segundoAno}
        />
        <YearSection
          year="3º Ano"
          description="Aprofundamento em trigonometria, com foco no círculo trigonométrico e nas funções trigonométricas."
          applets={projectData.applets.terceiroAno}
          formUrl={projectData.forms.terceiroAno}
        />

        {/* Equipe */}
        <section className="bg-blue-700 text-white rounded-lg shadow-xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-8">Nossa Equipe</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Desenvolvedores</h3>
              <ul className="text-lg space-y-2">
                {projectData.team.students.map(student => <li key={student}>{student}</li>)}
              </ul>
            </div>
            <div className="border-t-2 md:border-t-0 md:border-l-2 border-blue-500 pt-8 md:pt-0 md:pl-12 mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold mb-4">Orientadora</h3>
              <p className="text-lg">{projectData.team.supervisor}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-6 mt-20">
        <div className="container mx-auto px-6 text-center text-[12px]">
          <p>&copy; {new Date().getFullYear()} | Atividades Curriculares de Extensão III - Curso de Ciência da Computação | Universidade Estadual de Mato Grosso do Sul</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
