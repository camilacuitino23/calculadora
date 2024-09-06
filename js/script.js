const display = document.querySelector(".display");
const botones = document.querySelectorAll(".boton");
let resultadoMostrado = false;

botones.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonApretado = boton.textContent;

        if (boton.id === "clear") {
            display.textContent = '0';
            resultadoMostrado = false; 
            return;
        }

        if (boton.id === 'borrar') {
            if (display.textContent.length === 1 || display.textContent === "Error") {
                display.textContent = '0';
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            resultadoMostrado = false;
            return;
        }

        if (boton.id === 'igual') {
            try {
                display.textContent = eval(display.textContent);
                resultadoMostrado = true; 
            } catch {
                display.textContent = "Error";
            }
            return;
        }

        if (resultadoMostrado) {
            if (!isNaN(botonApretado) || botonApretado === '.') {
                display.textContent = botonApretado;
                resultadoMostrado = false; 
            } else {
                display.textContent += botonApretado;
                resultadoMostrado = false; 
            }
        } else {
            if (display.textContent === '0' && !isNaN(botonApretado)) {
                display.textContent = botonApretado;
            } else {
                display.textContent += botonApretado;
            }
        }
    });
});
