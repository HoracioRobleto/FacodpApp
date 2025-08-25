 function downloadApp() {
            // Aquí debes colocar la URL real de tu archivo .exe
            // Por ejemplo: window.location.href = 'https://github.com/tu-usuario/tu-repo/releases/download/v1.0/FACODP.exe';
            Swal.fire({
                title: 'Descarga iniciada',
                text: 'Si la descarga no comienza automáticamente, contacta al desarrollador.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            window.open('https://github.com/HoracioRobleto/FACODP/releases/download/v1.0.0/FacodpInstaller.exe', '_blank');
        }

        function downloadManual() {
            // Aquí debes colocar la URL real de tu manual PDF
            // Por ejemplo: window.open('https://github.com/tu-usuario/tu-repo/releases/download/v1.0/Manual_FACODP.pdf', '_blank');
            Swal.fire({
                title: 'Descarga del manual iniciada',
                text: 'Si la descarga no comienza automáticamente, contacta al desarrollador.',
                icon: 'info',
                confirmButtonText: 'Aceptar'
            });
            window.open('Manual_FACODP.pdf', '_blank');
        }

        function loadLogo() {
            // Función para cargar tu logo personalizado
            const logoContainer = document.getElementById('programLogo');
            
            // Opción 1: Si tienes una imagen de logo, descomenta y modifica esta línea:
            logoContainer.innerHTML = '<img src="facodp.png" alt="Logo FACODP" class="logo-img">';
            
            // Opción 2: Si quieres usar un logo desde GitHub, usa algo como:
            // logoContainer.innerHTML = '<img src="https://raw.githubusercontent.com/tu-usuario/tu-repo/main/logo.png" alt="Logo FACODP" class="logo-img">';
            
            // Por defecto se muestra "FC" como placeholder
        }

        // Cargar logo al inicio
        document.addEventListener('DOMContentLoaded', loadLogo);

        // Animación suave al hacer scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Efecto de parallax suave
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        });