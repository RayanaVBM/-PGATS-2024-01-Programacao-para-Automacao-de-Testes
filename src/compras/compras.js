const calcularTotal = (ferramentas, comprar) => {
    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    let total = 0;
    let ferramentasCompradas = '';
    for (let i = 0; i < comprar.length; i++) {
        let ferramentaEncontrada = false;
        for (let j = 0; j < ferramentas.length; j++) {
            if (comprar[i] === ferramentas[j].nome) {
                total += ferramentas[j].preco;
                ferramentasCompradas += comprar[i];
                if (i !== comprar.length - 1) {
                    ferramentasCompradas += ', ';
                }
                ferramentaEncontrada = true;
                break;
            }
        }
        if (!ferramentaEncontrada) {
            throw new Error("Nenhuma ferramenta desejada encontrada.");
        }
    }

    return `O valor a pagar pelas ferramentas (${ferramentasCompradas}) é R$ ${total.toFixed(2)}`;
};

module.exports = {
    calcularTotal
}