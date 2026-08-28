async function carregarAlertas() {
    try {
        // Em produção, isso seria: fetch('https://api.alertaempresa.com/v1/alertas')
        const resposta = await fetch('dados_simulados.json');
        const alertas = await resposta.json();

        preencherTabela(alertas);
    } catch (erro) {
        console.error('Erro ao carregar alertas:', erro);
    }
}

// 2. Função para inserir os dados na tabela HTML
function preencherTabela(dados) {
    const tabelaBody = document.getElementById('alerts-body');
    tabelaBody.innerHTML = '';
}

    dados.forEach(alerta => {
        const linha = document.createElement('tr');
    })

        
        let classeGravidade = alerta.gravidade.toLowerCase(); // 'urgente', 'moderado'

        linha.innerHTML = `
            <td>${alerta.id}</td>
            <td>${alerta.tipo}</td>
            <td>${alerta.descricao}