
const baseUrl = 'loacalhost:3000/api';
export  class EndpointsClients {
    static listarClientes = `/clientes`;
    static adicionarCliente = `/add-cliente`;
    static adicionarClienteVeiculo = `/add-cliente-veiculo`;
    static deletarCliente = (id: string) => `/delete-cliente-veiculo/${id}`;
    static deletarClienteVeiculo = (id: string) => `/delete-cliente/${id}`;
    static buscarClientePorId = (id: string) => `/find-cliente/${id}`;
    static editarCliente = (id: string) => `/edit-cliente/${id}`;
    static editarClienteVeiculo = (id: string) => `/edit-cliente-veiculo/${id}`;
}


export class EndpointsUsers {
    static loginUsuario = `/login`;
    static registrarUsuario = `/register`;
    static listarUsuarios = `/usuarios`;
    static logoutUsuario = `/logout`;
    static buscarUsuarioPorId = (id: string) => `/usuario-id/${id}`;
    static deleteUsuario = (id: string) => `/delete-usuario/${id}`;
    static editarUsuario = (id: string) => `/editar-usuario/${id}`;
}

export class EndpointsVeiculos {
    static listarVeiculos = `/veiculos`;
    static adicionarVeiculo = `/add-veiculo`;
    static deletarVeiculo = (id: string) => `/delete-veiculo/${id}`;
    static buscarVeiculoPorId = (id: string) => `/find-veiculo/${id}`;
    static editarVeiculo = (id: string) => `/edit-veiculo/${id}`;
}

export class EndpointsFuncionarios {
    static listarFuncionarios = `/funcionarios`;
    static adicionarFuncionario = `/add-funcionario`;
    static deletarFuncionario = (id: string) => `/delete-funcionario/${id}`;
    static buscarFuncionarioPorId = (id: string) => `/find-funcionario/${id}`;
    static editarFuncionario = (id: string) => `/edit-funcionario/${id}`;
}

export class EndpointsPecas {
    static listarPecas = `/pecas`;
    static adicionarPeca = `/add-peca`; 
    static buscarPecaPorId = (id: string) => `/find-peca/${id}`;
    static deletarPeca = (id: string) => `/delete-peca/${id}`;
    static editarPeca = (id: string) => `/edit-peca/${id}`;

}

export class EndpointsFornecedores {
    static listarFornecedores = `/fornecedores`;
    static adicionarFornecedores = `/add-fornecedor`;
    static deletarFornecedores = (id: string) => `/delete-fornecedores/${id}`;
    static buscarFornecedoresPorId = (id: string) => `/find-fornecedores/${id}`;
    static editarFornecedores = (id: string) => `/edit-fornecedores/${id}`;
}    
    


