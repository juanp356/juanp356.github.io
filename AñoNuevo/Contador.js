const fechaFinal = new Date("Jan 1, 2025 00:00:00").getTime();

// Función para actualizar la cuenta regresiva
const interval = setInterval(function() {

    // Obtener la fecha actual
    const ahora = new Date().getTime();

    // Calcular la diferencia entre la fecha final y la fecha actual
    const distancia = fechaFinal - ahora;

    // Calcular días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Mostrar el tiempo restante en el contador
    document.getElementById("countdown-timer").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Si la cuenta regresiva llega a cero, mostrar un mensaje
    if (distancia < 0) {
        clearInterval(interval);
        document.getElementById("countdown-timer").innerHTML = "¡Feliz Año Nuevo!";
    }

}, 1000); // Actualizar cada segundo
