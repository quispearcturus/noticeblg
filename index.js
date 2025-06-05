const noticias = [
  {
    titulo: "La inteligencia artificial transforma la medicina",
    fecha: "Publicado el 4 de junio de 2025",
    contenido:
      "Expertos destacan que los avances en inteligencia artificial están revolucionando la detección temprana de enfermedades como el cáncer y mejorando la precisión de los diagnósticos médicos."
  },
  {
    titulo: "Nuevo descubrimiento en Marte sorprende a los científicos",
    fecha: "Publicado el 3 de junio de 2025",
    contenido:
      "La NASA confirma la presencia de compuestos orgánicos complejos en muestras del suelo marciano, lo que refuerza las hipótesis sobre la existencia pasada de vida en el planeta rojo."
  }
];

const container = document.getElementById("blog-container");

noticias.forEach(noticia => {
  const article = document.createElement("article");

  article.innerHTML = `
    <h2>${noticia.titulo}</h2>
    <p class="date">${noticia.fecha}</p>
    <p>${noticia.contenido}</p>
  `;

  container.appendChild(article);
});
