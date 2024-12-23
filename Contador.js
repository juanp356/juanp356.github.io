const fechaFinal = new Date("Jan 1, 2025 00:00:00").getTime();


const interval = setInterval(function() {

    
    const ahora = new Date().getTime();

    const distancia = fechaFinal - ahora;

    
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;


    if (distancia < 0) {
        clearInterval(interval);
        document.getElementById("countdown-timer").innerHTML = "¡Feliz Año Nuevo!";
    }

}, 1000); 
