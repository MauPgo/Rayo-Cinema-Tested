1. Título: RayoCinema, Descripción: Es un sitio de peliculas y series que contiene los títulos de todas tus plataformas favoritas, Objetivo: Implementacion de funcionalidades asincronas y 50% de testing code coverage en el proyecto

2. Pedro Mauricio Godinez Ortiz

3. Screenshots:<img width="1438" alt="principal" src="https://github.com/user-attachments/assets/4f57123c-e829-4443-bf16-444136627709" /> 
<img width="1438" alt="login" src="https://github.com/user-attachments/assets/7ec0286a-294f-41cf-8aec-e0f799d53262" />
<img width="1438" alt="home" src="https://github.com/user-attachments/assets/e07b44c4-fbff-4836-82d6-e87c100917e2" />
<img width="1438" alt="detalle" src="https://github.com/user-attachments/assets/a0797a0b-d373-4d3e-8e71-319ada02458f" />
<img width="1438" alt="favoritos" src="https://github.com/user-attachments/assets/09bce6e3-4e67-49b0-accc-124e2639899b" />

4. Como utilizar el sitio: una vez descargado el repositorio deberas ingresar a la carpeta del proyecto mediante la terminal, después deberás iniciar el servidor de desarrollo local con el comendo ng serve para que te permita ver el proyecto, una vez ejecutado el comando se deberá desplegar el url que te arroja la terminal (ejemplo: http://localhost:4200/), una vez que ya te cargó el proyecto te mostrará el archivo principal.html ahí te mostrará un vistazo previo al sitio, para ingresar deberás dar click en iniciar sesión para dirigirte al login, en el login introducirás tus datos (inventados por ahora) al dar click en iniciar sesión te redigirá a la pantalla principal dónde estan todos los títulos disponibles, si das click en ver te despliegará a una página donde te mostrará una algunos detalles del título, en la pestaña de favoritos se muestran los títulos que marcaste como favoritos, en la pestaña de series se muestran solo las series disponibles así como en la pestaña de películas y en cada pestaña encontrarás un botón para cerrar sesión que te redirigirá al login.

5. Dependencias o bibliotecas utilizadas: @angular/common, @angular/compiler, @angular/core, @angular/forms,@angular/platform-browser,@angular/platform-browser-dynamic, @angular/platform-server, @angular/router, @angular/ssr.
   @fortawesome/fontawesome-free – íconos, bootstrap – estilos y componentes visuales, rxjs – programación reactiva, swiper – carruseles/galerías deslizables, tslib – helpers de TypeScript, zone.js – necesario para el cambio de detección de Angular.

6. Como lo hice: Una vez terminado de revisar y corregir código procedí a ejecutar el comando ng test para ver que todo estuviera bien y desde ese momento me enfrenté a un problema, una vez solucionado proseguí a formular el código de los archivos .spec.ts para las pruebas unitarias, se que en el sprint decía que al 50% pero decidí avanzalo un poco más ya que aun tengo cosas que me gustaría cambiar o mejorar y una vez terminados los test corrí el reporte de test y el reporte del Test Coverage.

7. Reporte de Code Coverage y reporte de testing: <img width="1440" alt="test coverage" src="https://github.com/user-attachments/assets/751e269e-f823-4595-8b49-af3690f2eb51" /> 
<img width="1440" alt="reporte de test" src="https://github.com/user-attachments/assets/6e47b08e-02fc-4608-a105-74090e2c0c17" />

8. Problemas conocidos: El apartado de favoritos no pude lograr que fuera dinámico, falta crear componentes reutilizables para evitar repetir código en los html, al momento de correr por primera vez el comando ng test me aparecía un error en la terminal y en la ventana desplegada me aparecía "Incomplete, no specs found".
   El error me decía que había un problema con una parte de mi css del componente principal, el cual era que karma no está configurado para procesar archivos .css que contienen @font-face, entonces tuve que primero resolver ese problema ignorando los estilos en karma con mocks para poder hacer los tests.

9. Retrospectiva: Que hice bien? Empezar por corregir los errores encontrados al principio para que eso no interviniera más adelante en el proceso y avanzar un poco más de lo solicitado en el Test Coverage. Que hice mal? No revisar que todo lo que hacia fuera la mejor manera de hacerlo, no mantener mi enfoque durante el desarrollo del sprint y no terminar de completar la funcionalidad de la página de favoritos. Que puedo hacer diferente? Seguir mejorando en cada sprint como organizar las tareas a desarrollar y así generar experiencia, medir mis tiempos para evitar la acumulación de tareas.
