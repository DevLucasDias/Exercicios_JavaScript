const form = document.querySelector('#formIMC');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const peso = Number(event.target.querySelector('#peso').value);
    const altura = Number(event.target.querySelector('#altura').value);

    if (!peso) {
        setResultado('Peso Inválido');
        return;
    } else {
        if (!altura) {
            setResultado('Altura Inválida');
            return;
        } else {
            const resultadoCalculoIMC = calculoIMC(peso, altura);
            const resultInfoImc = infoIMC(resultadoCalculoIMC);
            setResultado("O seu IMC é: " + resultadoCalculoIMC, resultInfoImc);
            return;
        }
    }
});
function criaParagrafos(class_name) {
    const p = document.createElement('p');
    p.classList.add(class_name);
    return p;
}
function infoIMC(IMC) {
    let infoIMC;
    if (IMC < 18.5) {
        return infoIMC = 'Abaixo do Peso';
    } else if (IMC <= 24.9) {
        return infoIMC = 'Peso Ideal';
    } else if (IMC <= 29.9) {
        return infoIMC = 'Sobrepeso';
    } else if (IMC <= 39.9) {
        return infoIMC = 'Obesidade I';
    } else if (IMC > 40) {
        return infoIMC = 'Obesidade II';
    }
}
function setResultado(msg, IMC) {
    const resultado = document.querySelector('#resultado');
    const imc = document.querySelector('#imc');
    resultado.innerHTML = msg;
    if(msg.includes('Inválida') || msg.includes('Inválido'))
    {
        imc.innerHTML = '';

    }else{
        imc.innerHTML = IMC;
    }
    const p = criaParagrafos();
};

function calculoIMC(peso, altura) {
    let resultadoIMC = (peso / altura ** 2);
    return resultadoIMC.toFixed(2);
}

