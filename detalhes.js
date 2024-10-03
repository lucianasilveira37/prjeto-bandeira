async function obterDetalhesPais() {
  const urlParams = new URLSearchParams(window.location.search);
  const paisId = urlParams.get('id');

  const resposta = await fetch(`https://restcountries.com/v3.1/alpha/${paisId}`);
  const pais = await resposta.json();

  exibirDetalhes(pais[0]);
}

function exibirDetalhes(pais) {
  const paisDetalhesDiv = document.getElementById('paisDetalhes');

  const detalhesHTML = `
      <h2>${pais.name.official}</h2>
      <img src="${pais.flags.png}" alt="Bandeira de ${pais.name.official}" />
      <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : 'N/A'}</p>
      <p><strong>Língua:</strong> ${Object.values(pais.languages).join(', ')}</p>
      <p><strong>Moeda:</strong> ${Object.values(pais.currencies).map(c => c.name).join(', ')}</p>
      <p><strong>Continente:</strong> ${pais.continents.join(', ')}</p>
      <p><strong>População:</strong> ${pais.population.toLocaleString()}</p>
      <p><strong>Área geográfica:</strong> ${pais.area.toLocaleString()} km²</p>
      <p><a href="https://www.google.com/maps/place/${pais.name.common}" target="_blank">Ver no Maps</a></p>
  `;

  paisDetalhesDiv.innerHTML = detalhesHTML;
}

function voltar() {
  window.history.back();
}

obterDetalhesPais();