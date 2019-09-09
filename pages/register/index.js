$(function () {

    const usuariosRegistrados = [];

    $('#repo-form').on('submit', function(event) {

        let entradaDeEmail = document.getElementById('entrada-de-texto');
        let entradaDeSenha1 = document.getElementById('entrada-de-senha1');
        let entradaDeSenha2 = document.getElementById('entrada-de-senha2');

        /* Verifica se há campos vazios */
        if (entradaDeEmail.value.length === 0 && entradaDeSenha1.value.length === 0 && entradaDeSenha2.value.length === 0) {
            event.preventDefault();
            alert('Insira os dados nos campos correspondentes!');
            return;
        }
        /* email */
        if (entradaDeEmail.value.length === 0) {
            event.preventDefault();
            alert('Insira um email para continuar');
            return;
        }
        /* senha1 */
        if (entradaDeSenha1.value.length === 0) {
            event.preventDefault();
            alert('Insira uma senha para continuar');
            return;
        }
        /* senha2 */
        if (entradaDeSenha2.value.length === 0) {
            event.preventDefault();
            alert('É necessário confirmar a senha para continuar');
            return;
        }

        /* Verificar quantidade de caracteres foram digitados na senha */
        if (entradaDeSenha1.value.length <= 7 || entradaDeSenha2.value.length <= 7) {
            event.preventDefault();
            alert('A senha deve conter de 8 a 12 caracteres');
            return;
        }

        if (entradaDeSenha1.value !== entradaDeSenha2.value) {
            event.preventDefault();
            alert('As senhas não coincidem');
            return;
        }
        
        /* Função de registros */
        registrarUsuario(entradaDeEmail, entradaDeSenha1, entradaDeSenha2);
    });

    /* Registro de Usuário */
    function registrarUsuario(email, senha1, senha2) { 
        event.preventDefault();
        usuariosRegistrados.push({ 
            email: email.value, 
            senha: senha1.value 
        });
        
        /* Limpa entradas */
        email.value = '';
        senha1.value = '';
        senha2.value = '';
    }
    
});