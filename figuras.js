

// Cuadrado.
console.group("Cuadrado")
    const ladoCuadrado = 5;
    
    function perimetroCuadrado(lado){
        return lado * 4;
    } 
    
    function areaCuadrado(lado){
        return lado * lado;
    } 

    //console.log("El lado del cuadrado es:" + ladoCuadrado + "cm");
    //console.log("El area del es:" + perimetroCuadrado);

console.groupEnd();

// Triangulo
console.group("Triangulo");
    const ladoTriangulo  = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo  = 4;
    const alturaTriangulo = 5.5;
    
    function perimetroTriangulo(lado,lado2, base){
        return parseInt(lado) + parseInt(lado2) + parseInt(base);
    };
    
    function areaTriangulo (base, altura) {
        return (base * altura ) / 2;
    }


console.groupEnd();

// Circulo
console.group("Circulo");

    const radioCirclo = 4;
    const PI = Math.PI;
    

    function diametroCirculo(radio){
        return radio * 2;
    }
    
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        
        return diametro * PI;
    }

    function areaCirculo (radio){
        return radio * radio * PI;
    }


console.groupEnd();

// Interaccion con el HTML

function calcularPerimetroCuadrado(){
  
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
 
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
  
    const lado = document.getElementById("InputTrianguloLado")
    const value = lado.value;

    const altura = document.getElementById("InputTrianguloAltura");
    const value2 = altura.value;

    const perimetro = perimetroTriangulo(value,value,value2);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const lado = document.getElementById("InputTrianguloLado")
    const value = lado.value;

    const altura = document.getElementById("InputTrianguloAltura");
    const value2 = altura.value;

    const area = areaTriangulo(value, value2);
    alert(area);
}


function calcularDiametroCirculo(){
    let radio = document.getElementById("InputRadioCirculo");
    let radioValue = radio.value;
    
    alert(diametroCirculo(radioValue));
}

function calcularPerimetroCirculo(){
    let radio = document.getElementById("InputRadioCirculo");
    let radioValue = radio.value;
    alert(perimetroCirculo(radioValue));
}

function calcularAreaCirculo(){
    let radio = document.getElementById("InputRadioCirculo");
    let radioValue = radio.value;
    alert(areaCirculo(radioValue));
}

function alturaTrianguloIsosceles() {
    
    let ladoA = document.getElementById("idtrianguloGrandeLadoA");
    let trianguloGrandeLadoA = ladoA.value;
    
    let ladoB = document.getElementById("idtrianguloGrandeLadoB");
    let trianguloGrandeLadoB = ladoB.value;
    
    let ladoC = document.getElementById("idtrianguloGrandeLadoBase");
    let trianguloGrandeLadoBase = ladoC.value;
    

    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        
        alert(trianguloGrandeAltura);
    }
}