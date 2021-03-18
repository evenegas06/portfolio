const menu = document.getElementById('btn-abrir-menu');

menu.addEventListener('click', () => {
    document.getElementById('contenedor-menu').classList.toggle('active');
});

const link = document.getElementsByName('link-menu');
link.forEach(element => {
    element.addEventListener('click', () => {
        // console.log(element);
        document.getElementById('contenedor-menu').classList.toggle('active');
    });
});

window.addEventListener('load', () => {
    // setTimeout(carga, 3000);
    document.getElementById('loading').classList.toggle('hide');
    document.getElementById('main').classList.toggle('hide');
    document.getElementById('footer').classList.toggle('hide');
});
