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


const numSnowflakes = 50; 
const snowContainer = document.querySelector('.snow-container');

for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    
    const randomPosition = Math.random() * 100; 
    snowflake.style.setProperty('--random-left', `${randomPosition}%`);
    
   
    const randomSize = Math.random() * (3 - 1) + 1; 
    snowflake.style.width = `${randomSize}vw`;
    snowflake.style.height = `${randomSize}vw`;

    
    const randomSpeed = Math.random() * (12 - 8) + 8; 
    snowflake.style.animationDuration = `${randomSpeed}s`;

    
    snowContainer.appendChild(snowflake);
}