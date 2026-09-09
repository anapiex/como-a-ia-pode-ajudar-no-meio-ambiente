// Dados focados na redução e combate à poluição
const stepDetails = {
    1: {
        title: "1. Monitoramento de Emissões e Descartes",
        description: "Sensores instalados em chaminés de fábricas, bueiros urbanos e rios monitoram a liberação de gases tóxicos e efluentes químicos. Satélites rastreiam a qualidade do ar nas grandes cidades e o acúmulo de plástico nos oceanos."
    },
    2: {
        title: "2. Mapeamento de Fontes Poluidoras",
        description: "A Inteligência Artificial analisa esses dados para identificar a origem exata dos poluentes. Ela consegue diferenciar poluição veicular de industrial, rastrear vazamentos de óleo no mar e detectar descarte ilegal de lixo antes que cause danos maiores."
    },
    3: {
        title: "3. Otimização de Processos e Eficiência",
        description: "Algoritmos de IA ajudam fábricas e sistemas de transporte a consumir menos combustível e gerar menos resíduos. Ela otimiza as rotas de trânsito para diminuir a queima de dióxido de carbono (CO2) e ajusta máquinas industriais para emitirem o mínimo de poluição."
    },
    4: {
        title: "4. Ação Direta e Limpeza Inteligente",
        description: "Com o mapa da poluição em mãos, governos e ONGs aplicam multas e corrigem falhas. Além disso, a IA orienta robôs e barcos autônomos para recolher plástico dos rios e oceanos de forma automatizada e eficiente."
    },
    5: {
        title: "5. Redução da Pegada Ecológica",
        description: "A aplicação contínua da IA reduz a presença de microplásticos nas águas, melhora a qualidade do ar que respiramos nas cidades e acelera a transição para energias limpas (solar e eólica), deixando o ecossistema saudável."
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
    card.addEventListener('mouseenter', () => {
        const step = card.getAttribute('data-step');
        
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        updatePanel(step);
    });

    card.addEventListener('click', () => {
        const step = card.getAttribute('data-step');
        
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        updatePanel(step);
    });
});
