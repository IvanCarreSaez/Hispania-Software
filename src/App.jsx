import React, { useState, useEffect } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cargar página desde el hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") || "home";
    setCurrentPage(hash);
  }, []);

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "parpadea" && <ParpadeaPage setCurrentPage={setCurrentPage} />}
        {currentPage === "tactivo" && <TactivoPage setCurrentPage={setCurrentPage} />}
        {currentPage === "sobrenosotros" && <SobreNosotrosPage setCurrentPage={setCurrentPage} />}
        {currentPage === "licencias" && <LicenciasPage setCurrentPage={setCurrentPage} />}
        {currentPage === "contacto" && <ContactoPage setCurrentPage={setCurrentPage} />}
        {currentPage === "productos" && <ProductosPage setCurrentPage={setCurrentPage} />}
        {currentPage === "licencia-parpadea" && <LicenciaParpadeaPage setCurrentPage={setCurrentPage} />}
        {currentPage === "licencia-tactivo" && <LicenciaTactivoPage setCurrentPage={setCurrentPage} />}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

// Header Component
const Header = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Hispania Software</h1>

        {/* Menú escritorio */}
        <nav className="hidden md:flex space-x-6 relative">
          <NavLink name="Inicio" page="home" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <NavLink name="Productos" page="productos" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <NavLink name="Sobre Nosotros" page="sobrenosotros" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <NavLink name="Licencias" page="licencias" currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </nav>

        <button
          onClick={() => setCurrentPage("contacto")}
          className="border border-black px-5 py-2 rounded-full hover:bg-gray-100 hidden md:block"
        >
          Contactar
        </button>

        {/* Botón menú móvil */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 p-4 animate-fadeIn flex flex-col gap-4">
          <MobileLink name="Inicio" page="home" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <MobileLink name="Productos" page="productos" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <MobileLink name="Sobre Nosotros" page="sobrenosotros" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <MobileLink name="Licencias" page="licencias" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <button
            onClick={() => {
              setCurrentPage("contacto");
              window.history.pushState(null, "", "#contacto");
              setIsMenuOpen(false);
            }}
            className="w-full border border-black px-5 py-2 rounded-full hover:bg-gray-100 transition-colors mt-2 block text-center"
          >
            Contactar
          </button>
        </div>
      )}
    </header>
  );
};

// NavLink Component (Escritorio)
const NavLink = ({ name, page, currentPage, setCurrentPage }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => {
        setCurrentPage(page);
        window.history.pushState(null, "", `#${page}`);
      }}
      className={`font-medium relative group ${isActive ? "text-black" : "text-gray-700"}`}
    >
      {name}
      <span
        className={`absolute left-0 bottom-[-4px] h-[2px] bg-gradient-to-r from-black to-gray-600 transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </button>
  );
};

// Mobile Link Component (Menú móvil)
const MobileLink = ({ name, page, currentPage, setCurrentPage }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => {
        setCurrentPage(page);
        window.history.pushState(null, "", `#${page}`);
        setIsMenuOpen(false);
      }}
      className={`block w-full text-left text-lg ${isActive ? "font-bold text-black" : "text-gray-700"}`}
    >
      {name}
    </button>
  );
};

// Back Button Component
const BackButton = ({ onBack }) => {
  return (
    <button
      onClick={onBack}
      className="text-black hover:text-gray-700 mb-4 inline-flex items-center group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-1 transform group-hover:-translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
      Volver a Productos
    </button>
  );
};

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Hispania Software: Tecnología para todos
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Hispania Software es una marca cuyo objetivo es acercar la tecnología a todas las personas, sin importar sus capacidades físicas.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="mt-1">✔</span>
                <p><strong>Parpadea:</strong> Comunicación mediante parpadeos.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✔</span>
                <p><strong>Tactivo:</strong> Control táctil mediante gestos manuales simples.</p>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setCurrentPage("parpadea");
                  window.history.pushState(null, "", "#parpadea");
                }}
                className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Ver Parpadea
              </button>
              <button
                onClick={() => {
                  setCurrentPage("tactivo");
                  window.history.pushState(null, "", "#tactivo");
                }}
                className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Ver Tactivo
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <img
              src="https://picsum.photos/800/600 "
              alt="Desarrollador trabajando en IA"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Nuestras Soluciones */}
        <section className="mt-24">
          <h3 className="text-3xl font-semibold text-center mb-12 bg-gradient-to-r from-black to-gray-500 inline-block text-transparent bg-clip-text">
            Nuestras Soluciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AppCard title="Parpadea" description="Transforma los movimientos oculares y parpadeos en texto legible." link="parpadea" setCurrentPage={setCurrentPage} />
            <AppCard title="Tactivo" description="Interfaz intuitiva basada en reconocimiento de gestos manuales." link="tactivo" setCurrentPage={setCurrentPage} />
          </div>
        </section>
      </div>
    </section>
  );
};

// App Card Component
const AppCard = ({ title, description, link, setCurrentPage }) => {
  return (
    <div
      onClick={() => {
        setCurrentPage(link);
        window.history.pushState(null, "", `#${link}`);
      }}
      className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="text-black font-medium hover:underline flex items-center group">
          Conocer más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Página Parpadea
const ParpadeaPage = ({ setCurrentPage }) => {
  const handleBack = () => {
    setCurrentPage("productos");
    window.history.pushState(null, "", "#productos");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton onBack={handleBack} />
        <h2 className="text-3xl font-bold mb-6">Parpadea</h2>
        <p className="text-lg text-gray-700 mb-6">
          La aplicación <strong>Parpadea</strong> utiliza técnicas avanzadas de visión por computadora e inteligencia artificial para detectar el movimiento de los párpados y convertirlo en texto legible.
        </p>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/8-4rb4jrIxA?si=B2UR7fw-nDbfUqp-"
            title="Parpadea - Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-lg shadow-md"
          ></iframe>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Características Principales</h3>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Detección precisa de parpadeos y movimientos oculares</li>
          <li>Conversión en tiempo real a texto legible</li>
          <li>Personalización del vocabulario y frases comunes</li>
          <li>Integración con asistentes de voz y dispositivos IoT</li>
          <li>Interfaz minimalista y fácil de usar</li>
        </ul>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h4 className="text-xl font-semibold mb-2">Consigue tu licencia ya</h4>
          <div className="flex flex-wrap gap-4">
            <a
              href=" https://github.com/IvanCarreSaez/Parpadea "
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Descargar Aplicación
            </a>
            <button
              onClick={() => {
                setCurrentPage("licencia-parpadea");
                window.history.pushState(null, "", "#licencia-parpadea");
              }}
              className="border border-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Comprar Licencia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Página Tactivo
const TactivoPage = ({ setCurrentPage }) => {
  const handleBack = () => {
    setCurrentPage("productos");
    window.history.pushState(null, "", "#productos");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton onBack={handleBack} />
        <h2 className="text-3xl font-bold mb-6">Tactivo</h2>
        <p className="text-lg text-gray-700 mb-6">
          La aplicación <strong>Tactivo</strong> permite a los usuarios interactuar con dispositivos electrónicos a través de gestos sencillos con los dedos.
        </p>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/f7XsfXzdmS4?si=NduH0hXpfGdJO2v5"
            title="Tactivo - Reconocimiento de gestos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-lg shadow-md"
          ></iframe>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Características Principales</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8 pl-4">
          <li>Reconocimiento de gestos con alta precisión</li>
          <li>Control de dispositivos domóticos, computadoras y más</li>
          <li>Configuración adaptable a diferentes capacidades motoras</li>
          <li>Interfaz visual clara y accesible</li>
          <li>Compatibilidad con múltiples plataformas (Windows, Linux, Android)</li>
        </ul>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h4 className="text-xl font-semibold mb-2">Consigue tu licencia ya</h4>
          <div className="flex flex-wrap gap-4">
            <a
              href=" https://github.com/IvanCarreSaez/Tactivo "
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Descargar Aplicación
            </a>
            <button
              onClick={() => {
                setCurrentPage("licencia-tactivo");
                window.history.pushState(null, "", "#licencia-tactivo");
                setIsMenuOpen(false);
              }}
              className="border border-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Comprar Licencia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Página Licencia Parpadea
const LicenciaParpadeaPage = ({ setCurrentPage }) => {
  const handleBack = () => {
    setCurrentPage("parpadea");
    window.history.pushState(null, "", "#parpadea");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton onBack={handleBack} />
        <h2 className="text-3xl font-bold mb-6">Licencia de Parpadea</h2>
        <p className="text-lg text-gray-700 mb-6">
          Al adquirir la licencia de <strong>Parpadea</strong>, obtienes acceso completo a la aplicación, soporte técnico especializado y actualizaciones mensuales durante todo el primer año.
        </p>
        <LicenseCard
          title="Licencia Individual"
          price="€9.99"
          features={[
            "Uso personal",
            "Soporte técnico básico",
            "Actualizaciones mensuales",
            "1 dispositivo"
          ]}
          actionUrl="https://keygen.example.com/parpadea "
        />
      </div>
    </section>
  );
};

// Página Licencia Tactivo
const LicenciaTactivoPage = ({ setCurrentPage }) => {
  const handleBack = () => {
    setCurrentPage("tactivo");
    window.history.pushState(null, "", "#tactivo");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton onBack={handleBack} />
        <h2 className="text-3xl font-bold mb-6">Licencia de Tactivo</h2>
        <p className="text-lg text-gray-700 mb-6">
          Al adquirir la licencia de <strong>Tactivo</strong>, obtienes acceso completo a la aplicación, soporte técnico prioritario y actualizaciones semanales durante todo el primer año.
        </p>
        <LicenseCard
          title="Licencia Corporativa"
          price="€9.99"
          features={[
            "Uso institucional",
            "Soporte técnico prioritario",
            "Actualizaciones semanales",
            "Hasta 10 dispositivos"
          ]}
          actionUrl="https://keygen.example.com/tactivo "
        />
      </div>
    </section>
  );
};

// License Card Component
const LicenseCard = ({ title, price, features, actionUrl }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            ✔ {feature}
          </li>
        ))}
      </ul>
      <a
        href={actionUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-black px-4 py-2 rounded-lg hover:bg-gray-100 block text-center"
      >
        Adquirir
      </a>
    </div>
  );
};

// Productos Page Component
const ProductosPage = ({ setCurrentPage }) => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-6">Todos los Productos</h2>
        <p className="text-lg text-gray-700 mb-6">
          En Hispania Software creamos aplicaciones accesibles. Usa el buscador para encontrar lo que buscas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ProductCard
            title="Parpadea"
            description="Comunicación mediante parpadeos."
            image="https://picsum.photos/600/400?random=1"
            link="parpadea"
            setCurrentPage={setCurrentPage}
          />
          <ProductCard
            title="Tactivo"
            description="Control táctil mediante gestos manuales simples."
            image=" https://picsum.photos/600/400?random=2"
            link="tactivo"
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ title, description, image, link, setCurrentPage }) => {
  return (
    <div
      onClick={() => {
        setCurrentPage(link);
        window.history.pushState(null, "", `#${link}`);
      }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    >
      <img src={image.trim()} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
};

// Sobre Nosotros Page
const SobreNosotrosPage = ({ setCurrentPage }) => {
  const handleBack = () => {
    setCurrentPage("home");
    window.history.pushState(null, "", "#home");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton onBack={handleBack} />
        <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hispania Software es una marca dedicada a diseñar tecnologías accesibles que empoderan a personas con discapacidades físicas.
        </p>
        <p className="text-gray-700">
          Nuestro objetivo es crear herramientas inclusivas que mejoren la calidad de vida de nuestros usuarios.
        </p>
      </div>
    </section>
  );
};

// Licencias Page
const LicenciasPage = ({ setCurrentPage }) => {
  const handleBack = () => {
    setCurrentPage("home");
    window.history.pushState(null, "", "#home");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton onBack={handleBack} />
        <h2 className="text-3xl font-bold mb-6">Licencias</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ofrecemos dos tipos de licencias: una para cada producto.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <LicenseCard
            title="Licencia Individual"
            price="€9.99"
            features={[
              "Uso personal",
              "Soporte técnico básico",
              "Actualizaciones mensuales",
              "1 dispositivo"
            ]}
            actionUrl="#licencia-parpadea"
          />
          <LicenseCard
            title="Licencia Corporativa"
            price="€9.99"
            features={[
              "Uso institucional",
              "Soporte técnico prioritario",
              "Actualizaciones semanales",
              "Hasta 10 dispositivos"
            ]}
            actionUrl="#licencia-tactivo"
          />
        </div>
      </div>
    </section>
  );
};

// Contacto Page
const ContactoPage = ({ setCurrentPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const problema = document.getElementById("problema").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    if (!problema || !descripcion) {
      alert("Por favor, rellena ambos campos.");
      return;
    }

    window.location.href = `mailto:ivan.carre.saez@gmail.com?subject=${encodeURIComponent(problema)}&body=${encodeURIComponent(descripcion)}`;
    document.getElementById("problema").value = "";
    document.getElementById("descripcion").value = "";

    alert("Correo enviado correctamente. Pronto nos pondremos en contacto contigo.");
  };

  const handleBack = () => {
    setCurrentPage("home");
    window.history.pushState(null, "", "#home");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton onBack={handleBack} />
        <h2 className="text-3xl font-bold mb-6 text-center">Formulario de Contacto</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          ¿Tienes algún problema técnico?
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="problema" className="block text-sm font-medium mb-2">Problema</label>
            <input
              id="problema"
              type="text"
              placeholder="Ejemplo: Problema técnico"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium mb-2">Descripción del Problema</label>
            <textarea
              id="descripcion"
              rows={6}
              placeholder="Describe tu problema aquí..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>
          <button type="submit" className="w-full border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Enviar Correo
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-black mb-2">Hispania Software</h3>
            <p className="text-gray-700 max-w-xs">Tecnología para todos. Innovación accesible e inclusiva.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-semibold mb-3">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <button
                    onClick={() => {
                      setCurrentPage("home");
                      window.history.pushState(null, "", "#home");
                    }}
                    className="hover:text-black"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCurrentPage("productos");
                      window.history.pushState(null, "", "#productos");
                    }}
                    className="hover:text-black"
                  >
                    Productos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCurrentPage("sobrenosotros");
                      window.history.pushState(null, "", "#sobrenosotros");
                    }}
                    className="hover:text-black"
                  >
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCurrentPage("licencias");
                      window.history.pushState(null, "", "#licencias");
                    }}
                    className="hover:text-black"
                  >
                    Licencias
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Hispania Software – Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default App;