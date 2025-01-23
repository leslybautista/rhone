/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevenir el envío normal del formulario
    
        var form = event.target;
        var formData = new FormData(form);
    
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // Mostrar mensaje de éxito y resetear el formulario
                alert("Your message has been sent successfully!");
                form.reset();  // Resetear los campos del formulario
            } else {
                // Manejar cualquier error devuelto por Formspree
                alert("There was an error submitting your message.");
            }
        })
        .catch(error => {
            // Manejar errores de red o cualquier otro
            alert("There was an error submitting the message.");
        });
    }); 

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('submitSuccessMessage');
        const errorMessage = document.getElementById('submitErrorMessage');
    
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Previene el comportamiento por defecto de redirigir
    
            const formData = new FormData(form);
           
        });
    });
    
});
