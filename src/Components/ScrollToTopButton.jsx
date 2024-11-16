import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del botón

  // Función para realizar el scroll a la parte superior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  // Función que verifica la posición del scroll
  const handleScroll = () => {
    if (window.scrollY > 300) { // Si se ha desplazado más de 100px
      setIsVisible(true); // Mostrar el botón
    } else {
      setIsVisible(false); // Ocultar el botón
    }
  };

  // Añadir el listener al hacer scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div style={contenedorEstilo}>
          <button onClick={scrollToTop} style={botonEstilo}>
            <span className="material-symbols-outlined" style={iconoEstilo}>
              arrow_upward
            </span>
          </button>
        </div>
      )}
    </>
  );
}

// Estilos para centrar el botón horizontalmente y cerca de la parte inferior
const contenedorEstilo = {
  position: 'fixed',
  bottom: '30px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
};

const botonEstilo = {
  padding: '10px',
  backgroundColor: '#A2BB2A',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const iconoEstilo = {
  color: 'white',
  fontSize: '24px',
};

export default ScrollToTopButton;

