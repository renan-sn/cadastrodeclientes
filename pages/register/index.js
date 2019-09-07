$(function () {
   
    $('#repo-form').on('submit', function(event) {
        event.preventDefault();

        let entradaDeEmail = document.getElementById('entrada-de-texto');
        let entradaDeSenha1 = document.getElementById('entrada-de-senha1');
        let entradaDeSenha2 = document.getElementById('entrada-de-senha2');

        /* Verifica se há campos vazios */
        if (entradaDeEmail.value.length === 0 || entradaDeSenha1.value.length === 0 || entradaDeSenha2.value.length === 0) {
            alert('Há campos que não foram inseridos!');
            return;
        }

        /* Verificar quantidade de caracteres digitados na senha */
        if (entradaDeSenha1.value.length <= 7 || entradaDeSenha2.value.length <= 7) {
            alert('A senha deve conter 8 caracteres');
            return;
        }
        
        

        //console.log(entradaDeEmail);
        //console.log(entradaDeSenha1);
    });
    
});