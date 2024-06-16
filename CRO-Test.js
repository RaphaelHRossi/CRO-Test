// Função para formatar a moeda no formato brasileiro
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  
  // Função para calcular e exibir a diferença de preço
  function atualizarDesconto() {
    // Seleciona os valores original e atual
    const precoOriginalElemento = document.querySelector('[data-testid="price-original"]');
    const precoDescontoElemento = document.querySelector('[data-testid="price-value"]');
    
    // Extrai os valores de preço como números
    const precoOriginal = parseFloat(precoOriginalElemento.textContent.replace('R$', '').replace('.', '').replace(',', '.'));
    const precoDesconto = parseFloat(precoDescontoElemento.textContent.replace('R$', '').replace('.', '').replace(',', '.'));

    // Calcula a diferença de preço
    const diferencaPreco = precoOriginal - precoDesconto;

    // Formata a diferença de preço para o formato de moeda brasileiro
    const diferencaPrecoFormatada = formatarMoeda(diferencaPreco);
    
    // Seleciona o elemento que contém a mensagem de desconto em porcentagem
    const porcentagemDescontoElemento = document.querySelector('.sc-eXsaLi.fErFMt');
    const descontoBarraFlutuante = document.querySelector('.sc-fqkvVR.lkyyeb');

    // Atualiza texto desconto em porcentagem
    porcentagemDescontoElemento.textContent = `Desconto de ${diferencaPrecoFormatada}`;

    // Atualiza texto e cor de desconto em porcentagem da barra fluente
    descontoBarraFlutuante.textContent = `(${diferencaPrecoFormatada} de desconto)`;
    descontoBarraFlutuante.style.color = 'green';
  }
  
  // Função para alterar a aparência e funcionalidade dos botões
  function atualizarBotoes() {
    // Seleciona os elemento de botão adicionar sacola
    const botaoSacola = document.querySelector('button[data-testid="bagButton"]');

    // Seleciona os elemento de botão comprar
    const botaoComprar = document.querySelector('button[data-testid="buyButton"]');

    // Seleciona os elemento de botão da caixa flutuante
    const caixaFlutuante = document.querySelector('button[data-testid="float-button"]');
  
    // Esconde botão de Adicionar Sacola
    botaoSacola.style.display = 'none';

    // Troca cor botão Comprar
    botaoComprar.style.backgroundColor = 'blue';

    // Troca cor e texto de botão Comprar caixa Flutuante
    caixaFlutuante.style.backgroundColor = 'blue';
    caixaFlutuante.innerText = 'Comprar';
  }
  
  // Função principal executa todas as atualizações
  function executarAtualizacoes() {
    atualizarDesconto();
    atualizarBotoes();
  }
  
  
  executarAtualizacoes();
  