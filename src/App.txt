import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Manejar navegación con hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && [
        "home", "parpadea", "tactivo", 
        "sobrenosotros", "licencias", "contacto", "productos"
      ].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-black font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow w-full">
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "parpadea" && <ParpadeaPage setCurrentPage={setCurrentPage} />}
        {currentPage === "tactivo" && <TactivoPage setCurrentPage={setCurrentPage} />}
        {currentPage === "sobrenosotros" && <SobreNosotrosPage setCurrentPage={setCurrentPage} />}
        {currentPage === "licencias" && <LicenciasPage setCurrentPage={setCurrentPage} />}
        {currentPage === "contacto" && <ContactoPage setCurrentPage={setCurrentPage} />}
        {currentPage === "productos" && <ProductosPage setCurrentPage={setCurrentPage} />}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
      <div className="w-full">
        <div className="mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Hispania Software
          </h1>

          <nav className="hidden md:flex space-x-6">
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

          <button
            className="md:hidden"
            onClick={() => alert("Menú móvil no configurado aún")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// NavLink Component
const NavLink = ({ name, page, currentPage, setCurrentPage }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => {
        setCurrentPage(page);
        window.location.hash = `#${page}`;
      }}
      className={`font-medium ${isActive ? "text-black" : "text-gray-700"}`}
    >
      {name}
    </button>
  );
};

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="w-full bg-gray-50 flex-grow">
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Hispania Software: Tecnología para todos</h2>
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
                  onClick={() => setCurrentPage("parpadea")}
                  className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100"
                >
                  Ver Parpadea
                </button>
                <button
                  onClick={() => setCurrentPage("tactivo")}
                  className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100"
                >
                  Ver Tactivo
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://subir-imagen.com/images/2025/07/11/logo.png"
                alt="Hispania Software"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Página Parpadea
const ParpadeaPage = ({ setCurrentPage }) => {
  return (
    <section className="w-full bg-white flex-grow">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <button
          onClick={() => setCurrentPage("productos")}
          className="mb-4 inline-flex items-center group"
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
            className="w-full h-64 md:h-96 rounded-lg shadow-lg"
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
        <div className="bg-gray-50 p-6 rounded-lg mb-8 flex flex-col md:flex-row gap-4">
          <a
            href="https://github.com/IvanCarreSaez/Parpadea"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-6 py-2 rounded-lg hover:bg-gray-100 text-center"
          >
            Descargar Aplicación
          </a>
          <a
            href="#licencias"
            onClick={e => {
              e.preventDefault();
              setCurrentPage("licencias");
              setTimeout(() => {
                const evt = new CustomEvent("abrirLicencia", { detail: "parpadea" });
                window.dispatchEvent(evt);
              }, 100);
            }}
            className="border border-black px-6 py-2 rounded-lg hover:bg-gray-100 text-center"
          >
            Compra tu licencia
          </a>
        </div>
      </div>
    </section>
  );
};

// Página Tactivo
const TactivoPage = ({ setCurrentPage }) => {
  return (
    <section className="w-full bg-white flex-grow">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <button
          onClick={() => setCurrentPage("productos")}
          className="mb-4 inline-flex items-center group"
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
            className="w-full h-64 md:h-96 rounded-lg shadow-lg"
          ></iframe>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Características Principales</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8">
          <li>Reconocimiento de gestos con alta precisión</li>
          <li>Control de dispositivos domóticos, computadoras y más</li>
          <li>Configuración adaptable a diferentes capacidades motoras</li>
          <li>Interfaz visual clara y accesible</li>
          <li>Compatibilidad con múltiples plataformas (Windows, Linux, Android)</li>
        </ul>
        <div className="bg-gray-50 p-6 rounded-lg mb-8 flex flex-col md:flex-row gap-4">
          <a
            href="https://github.com/IvanCarreSaez/Tactivo"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-6 py-2 rounded-lg hover:bg-gray-100 text-center"
          >
            Descargar Aplicación
          </a>
          <a
            href="#licencias"
            onClick={e => {
              e.preventDefault();
              setCurrentPage("licencias");
              setTimeout(() => {
                const evt = new CustomEvent("abrirLicencia", { detail: "tactivo" });
                window.dispatchEvent(evt);
              }, 100);
            }}
            className="border border-black px-6 py-2 rounded-lg hover:bg-gray-100 text-center"
          >
            Compra tu licencia
          </a>
        </div>
      </div>
    </section>
  );
};

// Sobre Nosotros Page
const SobreNosotrosPage = ({ setCurrentPage }) => {
  return (
    <section className="w-full bg-white flex-grow flex items-center">
      <div className="mx-auto max-w-6xl px-4 py-16">        
        <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hispania Software es una marca dedicada a diseñar tecnologías accesibles que empoderan a personas con discapacidades físicas.
        </p>
      </div>
    </section>
  );
};

// Licencias Page
const LicenciasPage = ({ setCurrentPage }) => {
  const [selectedLicense, setSelectedLicense] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handler = (e) => {
      setSelectedLicense(e.detail);
    };
    window.addEventListener("abrirLicencia", handler);
    return () => window.removeEventListener("abrirLicencia", handler);
  }, []);

  // Datos de licencias
  const licenses = [
    {
      app: "Parpadea",
      features: [
        "Uso ilimitado en un dispositivo",
        "Actualizaciones gratuitas durante 1 año",
        "Soporte técnico prioritario",
        "Acceso a nuevas funciones"
      ],
      price: "29,99€",
      type: "parpadea"
    },
    {
      app: "Tactivo",
      features: [
        "Uso ilimitado en un dispositivo",
        "Actualizaciones gratuitas durante 1 año",
        "Soporte técnico prioritario",
        "Acceso a gestos avanzados"
      ],
      price: "24,99€",
      type: "tactivo"
    }
  ];

  // Detalles de cada licencia
  const licenseDetails = {
    parpadea: {
      title: "Licencia Parpadea",
      description: (
        <>
          <p className="mb-4">
            La licencia de <strong>Parpadea</strong> te permite utilizar la aplicación en un dispositivo de forma ilimitada. Incluye todas las actualizaciones durante el primer año y soporte técnico prioritario. Ideal para usuarios que buscan una solución de comunicación accesible y personalizable.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Instalación en un dispositivo</li>
            <li>Actualizaciones automáticas durante 12 meses</li>
            <li>Soporte por correo electrónico con respuesta en menos de 24h</li>
            <li>Acceso a vocabulario y frases personalizadas</li>
          </ul>
          <p className="mb-4">Precio: <strong>29,99€</strong></p>
        </>
      ),
      buyLink: "https://buy.stripe.com/test_Parpadea"
    },
    tactivo: {
      title: "Licencia Tactivo",
      description: (
        <>
          <p className="mb-4">
            La licencia de <strong>Tactivo</strong> permite el uso completo de la app en un dispositivo, con acceso a gestos avanzados y soporte prioritario. Recibe todas las mejoras y nuevas funciones durante el primer año.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Instalación en un dispositivo</li>
            <li>Actualizaciones automáticas durante 12 meses</li>
            <li>Soporte por correo electrónico con respuesta en menos de 24h</li>
            <li>Acceso a gestos avanzados y configuraciones personalizadas</li>
          </ul>
          <p className="mb-4">Precio: <strong>24,99€</strong></p>
        </>
      ),
      buyLink: "https://buy.stripe.com/test_Tactivo"
    }
  };

  // Filtro de licencias
  const filteredLicenses = licenses.filter(lic =>
    lic.app.toLowerCase().includes(search.toLowerCase()) ||
    lic.features.some(f => f.toLowerCase().includes(search.toLowerCase()))
  );

  // Si hay una licencia seleccionada, mostrar detalle
  if (selectedLicense) {
    const detail = licenseDetails[selectedLicense];
    return (
      <section className="w-full bg-white flex-grow flex items-center">
        <div className="mx-auto max-w-2xl px-4 py-16 w-full">
          <button
            onClick={() => setSelectedLicense(null)}
            className="mb-6 inline-flex items-center group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Licencias
          </button>
          <h2 className="text-3xl font-bold mb-6">{detail.title}</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            {detail.description}
            <a
              href={detail.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-black px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-semibold"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Página principal de licencias
  return (
    <section className="w-full bg-white flex-grow flex items-center">
      <div className="mx-auto max-w-6xl px-4 py-16 w-full">
        <h2 className="text-3xl font-bold mb-10 text-center">Licencias</h2>
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Buscar licencia o característica..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredLicenses.length === 0 && (
            <div className="col-span-2 text-center text-gray-500">No se encontraron licencias.</div>
          )}
          {filteredLicenses.map(lic => (
            <div key={lic.type} className="bg-gray-50 rounded-xl shadow p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{lic.app}</h3>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                {lic.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="text-xl font-semibold mb-6">Precio: {lic.price}</div>
              <button
                onClick={() => setSelectedLicense(lic.type)}
                className="border border-black px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-semibold"
              >
                Ver detalles y comprar
              </button>
            </div>
          ))}
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

  return (
    <section className="w-full bg-white flex-grow flex items-center">
      <div className="mx-auto max-w-6xl px-4 py-16 w-full">
        <button
          onClick={() => setCurrentPage("home")}
          className="mb-4 inline-flex items-center group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al Inicio
        </button>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium mb-2">Descripción del Problema</label>
            <textarea
              id="descripcion"
              rows={6}
              placeholder="Describe tu problema aquí..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full border border-black px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Enviar Correo
          </button>
        </form>
      </div>
    </section>
  );
};

// Productos Page
const ProductosPage = ({ setCurrentPage }) => {
  const [search, setSearch] = useState("");

  const products = [
    {
      title: "Parpadea",
      description: "Comunicación mediante parpadeos.",
      image: "https://picsum.photos/600/400?random=1",
      link: "parpadea"
    },
    {
      title: "Tactivo",
      description: "Control táctil mediante gestos manuales simples.",
      image: "https://picsum.photos/600/400?random=2",
      link: "tactivo"
    }
  ];

  const filteredProducts = products.filter(
    p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full bg-white flex-grow">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Todos los Productos</h2>
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.length === 0 && (
            <div className="col-span-2 text-center text-gray-500">No se encontraron productos.</div>
          )}
          {filteredProducts.map(product => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              image={product.image}
              link={product.link}
              setCurrentPage={setCurrentPage}
            />
          ))}
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
        window.location.hash = `#${link}`;
      }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 w-full">
      <div className="w-full bg-gray-50">
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-black mb-2">Hispania Software</h3>
              <p className="text-gray-700 max-w-xs">
                Tecnología para todos. Innovación accesible e inclusiva.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h4 className="font-semibold mb-3">Enlaces Rápidos</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <button onClick={() => setCurrentPage("home")} className="hover:text-black">
                      Inicio
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentPage("productos")} className="hover:text-black">
                      Productos
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentPage("sobrenosotros")} className="hover:text-black">
                      Sobre Nosotros
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentPage("licencias")} className="hover:text-black">
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
      </div>
    </footer>
  );
};