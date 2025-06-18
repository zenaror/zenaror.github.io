document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const resultsList = document.getElementById('search-results');
  let posts = [];

  // Carrega o JSON dos posts
  fetch('/search.json')
    .then(res => res.json())
    .then(data => posts = data)
    .catch(() => console.error('Erro ao carregar search.json'));

  // Função para limpar resultados
  function clearResults() {
    resultsList.innerHTML = '';
  }

  // Função que filtra e mostra resultados
  function doSearch(query) {
    clearResults();

    if (!query) return;

    const q = query.toLowerCase();

    const filtered = posts.filter(post => {
      const inTitle = post.title.toLowerCase().includes(q);
      const inContent = post.content.toLowerCase().includes(q);
      const inTags = post.tags.some(tag => tag.toLowerCase().includes(q));
      return inTitle || inContent || inTags;
    });

    if (filtered.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Nenhum resultado encontrado.';
      resultsList.appendChild(li);
      return;
    }

    filtered.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${post.url}">${post.title}</a>`;
      resultsList.appendChild(li);
    });
  }

  // Escuta o evento input e faz a busca
  searchInput.addEventListener('input', e => {
    doSearch(e.target.value);
  });

  // Previna envio no Enter se estiver dentro de um form (opcional)
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault(); // evita reload / submit
      // Você pode colocar alguma ação aqui se quiser
    }
  });

  // Opcional: esconder resultados ao clicar fora
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-box')) {
      clearResults();
    }
  });
});
