$(function () {

    const usuariosRegistrados = [];

    $('#repo-form').on('submit', function(event) {

        let entradaDeEmail = document.getElementById('entrada-de-texto');
        let entradaDeSenha1 = document.getElementById('entrada-de-senha1');
        let entradaDeSenha2 = document.getElementById('entrada-de-senha2');

        /* Verifica se há campos vazios */
        if (entradaDeEmail.value.length === 0 && entradaDeSenha1.value.length === 0 && entradaDeSenha2.value.length === 0) {
            alert('Insira os dados nos campos correspondentes!');
            event.preventDefault();
            return;
        }
        /* email */
        if (entradaDeEmail.value.length === 0) {
            alert('Insira um email para continuar');
            event.preventDefault();
            return;
        }
        /* senha1 */
        if (entradaDeSenha1.value.length === 0) {
            alert('Insira uma senha para continuar');
            event.preventDefault();
            return;
        }
        /* senha2 */
        if (entradaDeSenha2.value.length === 0) {
            alert('É necessário confirmar a senha para continuar');
            event.preventDefault();
            return;
        }

        /* Verificar quantidade de caracteres foram digitados na senha */
        if (entradaDeSenha1.value.length <= 7 || entradaDeSenha2.value.length <= 7) {
            alert('A senha deve conter de 8 a 12 caracteres');
            event.preventDefault();
            return;
        }

        if (entradaDeSenha1.value !== entradaDeSenha2.value) {
            alert('As senhas não coincidem');
            event.preventDefault();
            return;
        }
        
        
        registrarUsuario(entradaDeEmail, entradaDeSenha1);

        //console.log(entradaDeEmail);
        //console.log(entradaDeSenha1);
    });

    function registrarUsuario(entradaDeEmail, entradaDeSenha1) { 
            usuariosRegistrados.push({ email: entradaDeEmail.value, senha: entradaDeSenha1.value });
            console.log(usuariosRegistrados);
            event.preventDefault();
    }
    
});