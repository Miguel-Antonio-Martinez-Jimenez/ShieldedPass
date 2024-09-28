// Agregar un evento de clic al botón "Generar Contraseña"
document.getElementById('generate').addEventListener('click', function() {
    // Obtener la longitud de la contraseña desde el campo de entrada
    const length = document.getElementById('length').value;

    // Obtener los estados de las casillas de verificación (si están marcadas o no)
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    // Definir los caracteres que se pueden usar en la contraseña
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Caracteres mayúsculos
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'; // Caracteres minúsculos
    const numberChars = '0123456789'; // Números
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?'; // Caracteres especiales

    // Inicializar un conjunto de caracteres vacío
    let characterSet = '';

    // Agregar caracteres al conjunto según las opciones seleccionadas
    if (includeUppercase) characterSet += uppercaseChars; // Si se seleccionó mayúsculas
    if (includeLowercase) characterSet += lowercaseChars; // Si se seleccionó minúsculas
    if (includeNumbers) characterSet += numberChars; // Si se seleccionó números
    if (includeSpecial) characterSet += specialChars; // Si se seleccionó caracteres especiales

    // Inicializar la variable de contraseña
    let password = '';

    // Generar la contraseña
    for (let i = 0; i < length; i++) {
        // Elegir un índice aleatorio dentro del conjunto de caracteres
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        // Agregar el carácter elegido a la contraseña
        password += characterSet[randomIndex];
    }

    // Mostrar la contraseña generada en el campo de texto de resultado
    document.getElementById('result').value = password;
});

// Agregar un evento de clic al botón "Copiar al Portapapeles"
document.getElementById('copy').addEventListener('click', function() {
    // Obtener la contraseña generada desde el campo de texto de resultado
    const password = document.getElementById('result').value;

    // Copiar la contraseña al portapapeles
    navigator.clipboard.writeText(password).then(() => {
        // Mostrar la alerta emergente para indicar que la contraseña ha sido copiada
        const alertBox = document.getElementById('alert');
        alertBox.classList.remove('d-none'); // Mostrar la alerta

        // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
            alertBox.classList.add('d-none'); // Añadir la clase para ocultar la alerta
        }, 3000); // Tiempo en milisegundos
    });
});