document.addEventListener('DOMContentLoaded', () => {

    let btnFloat = document.querySelector('#btn-floating');

    function openNav() {
        if (document.querySelector('.nav-modern').style.height === '100vh') {
            document.querySelector('.nav-modern').style.height = '0';
        }
        else {
            document.querySelector('.nav-modern').style.height = '100vh';
        }
    }

    btnFloat.onclick = openNav;

    let li = document.querySelector('#nav-ul');
    li.onclick = openNav;

    // console.log(document.styleSheets[0].cssRules[0].style[0]);
});