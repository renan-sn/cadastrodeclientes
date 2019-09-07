$(function () {

    $('#repo-form').on('submit', function(event) {
        event.preventDefault();

        let entradaDeEmail = document.getElementById('entrada-de-texto');
        let entradaDeSenha = document.getElementById('entrada-de-senha');

        /* Verifica se há campos vazios */
        if (entradaDeEmail.value.length === 0 || entradaDeSenha.value.length === 0) {
            alert('Há campos que não foram inseridos!');
            return;
        }

        /* Verificar quantidade de caracteres da senha */
        if (entradaDeSenha.value.length <= 7) {
            alert('A senha deve conter 8 caracteres');
            return;
        }
        
        

        //console.log(entradaDeEmail);
        //console.log(entradaDeSenha);
    });
    
});