import "./AboutPage.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>Acerca de la API de Dragon Ball</h1>
      <p>
        Esta aplicación utiliza la <strong>Dragon Ball API</strong> para obtener información detallada sobre los personajes de la serie de anime Dragon Ball.
        La API proporciona datos completos, incluyendo el nombre, rol, especie, e imagen de cada personaje.
      </p>
      <p>
        La API de Dragon Ball es ideal para los fanáticos de la serie que desean explorar y aprender más sobre sus personajes favoritos. 
        Con ella, puedes acceder a datos de personajes humanos y no humanos, lo que permite una experiencia inmersiva para los usuarios.
      </p>
      <h2>Características de la API</h2>
      <ul>
        <li>Proporciona información detallada sobre personajes de Dragon Ball.</li>
        <li>Incluye personajes humanos y no humanos.</li>
        <li>Ofrece imágenes de los personajes en alta calidad.</li>
        <li>Actualización constante con datos precisos.</li>
      </ul>
      <p>
        Esta API es gratuita y accesible para desarrolladores y fanáticos de Dragon Ball. Puedes consultar más detalles en su sitio web oficial: 
        <a href="https://dragonball-api.com/" target="_blank" rel="noopener noreferrer">Dragon Ball API</a>.
      </p>
    </div>
  );
};

export default About;
