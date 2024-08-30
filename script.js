


function calcular() {
    var peso = document.getElementById('peso_id').value;
    var altura = document.getElementById('altura_id').value;
    var idade = document.getElementById('number_id').value;
    var sexo = document.getElementById('sexo_id').value;
    var res = document.getElementById('res');
    var re = document.getElementById('re');
    var botao = document.getElementById('calcular');

    // Verificar se todos os campos estão preenchidos
    if (peso === '' || altura === '' || idade === '' || sexo === 's') {
        re.innerHTML = 'Por favor, preencha todos os campos.';
        return;
    }

    // Limpar conteúdo anterior
    res.innerHTML = '';
    re.innerHTML = '';
    var peso1 = Number(peso);
    var altura1 = Number(altura);
    var imc = peso1 / (altura1 * altura1);

    // Desativar o botão
    botao.disabled = true;

    res.innerHTML = `Seu IMC é de ${imc.toFixed(4)} kg/m²`;

    if (imc < 18.5) {
        re.innerHTML += `Magreza, aconselho consultar<br>um nutricionista.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        re.innerHTML += `Seu IMC indica que estás em boa forma <br>continua assim!. `
    } else if (imc >= 25 && imc <= 29.9) {
        re.innerHTML += `Seu IMC indica que você está com sobrepeso<br>cuida da sua saúde e adota hábitos<br>saudáveis. `
    } else if (imc >= 30 && imc <= 34.9) {
              re.innerHTML += `obesidade do grau I a risco de <br>diversas doenças,cuida-se!`
    } else if (imc >= 35) {
     res.innerHTML += `<br>Obesidade avançada,indicando um acúmulo <br>significativo de gordura corporal.`
    }
    
}

function limpar() {
    document.getElementById('peso_id').value = '';
    document.getElementById('altura_id').value = '';
    document.getElementById('number_id').value = '';
    document.getElementById('sexo_id').value = 's';
    document.getElementById('res').innerHTML = '';
    document.getElementById('re').innerHTML = '';
    document.getElementById('calcular').disabled = false; // Reativar o botão Calcular
} 




