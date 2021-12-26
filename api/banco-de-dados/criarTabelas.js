

const modelos = [
    require('../rotas/atividades/ModeloTabelaAtividade'),
    require('../rotas/atividades/tasks/ModeloTabelaTasks')
]


async function criarTabelas() {
    for (let count = 0; count < modelos.length; count++) {
        const modelo = modelos[count]
        await modelo.sync()

    }
}

criarTabelas()

