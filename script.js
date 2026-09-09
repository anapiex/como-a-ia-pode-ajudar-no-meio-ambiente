// Dados contendo as explicações para cada etapa do fluxograma
const stepDetails = {
    1: {
        title: "1. Coleta de Dados Ambientais",
        description: "Sensores IoT, imagens de satélite, drones e câmeras terrestres monitoram florestas, oceanos e a atmosfera em tempo real. A IA precisa desses dados brutos (imagens, temperatura, umidade, ruídos) para poder analisar o ecossistema."
    },
    2: {
        title: "2. Processamento e Visão Computacional",
        description: "Algoritmos de Inteligência Artificial e Machine Learning analisam terabytes de dados em segundos. A Visão Computacional, por exemplo, consegue identificar padrões de desmatamento, focos de incêndio ou áudio de serras elétricas na floresta que humanos levariam dias para notar."
    },
    3: {
        title: "3. Diagnóstico e Modelagem Preditiva",
        description: "A IA cruza informações para emitir alertas precoces. Ela consegue prever para onde um incêndio florestal vai se espalhar com base no vento, prever secas severas ou mapear áreas de risco de extinção de espécies."
    },
    4: {
        title: "4. Ação Humana Direcionada",
        description: "A IA não age sozinha. Os insights gerados pela IA são enviados para ONGs, governos e guardas florestais. Com esses dados precisos, os humanos conseguem enviar equipes exatamente onde o crime ambiental está acontecendo, otimizando recursos."
    },
    5: {
        title: "5. Impacto e Preservação de Longo Prazo",
        description: "O resultado é uma proteção ambiental mais rápida, barata e eficiente. A IA também ajuda a planejar o reflorestamento inteligente (usando drones para plantar sementes) e a criar energias renováveis mais eficientes."
    }
};

// Selecionando elementos do DOM
const cards = document.querySelectorAll('.step-card');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');

// Função para atualizar o painel
function updatePanel(stepNumber) {
    const data = stepDetails[stepNumber];
    if (data) {
        detailTitle.textContent = data.title;
        detailDescription.textContent = data.description;
    }
}

// Adicionando eventos aos cards
cards.forEach(card => {
    // Evento ao passar o mouse
    card.addEventListener('mouseenter', () => {
        const step = card.getAttribute('data-step');
        
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        updatePanel(step);
    });

    // Evento ao clicar (para dispositivos touch)
    card.addEventListener('click', () => {
        const step = card.getAttribute('data-step');
        
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        updatePanel(step);
    });
});
