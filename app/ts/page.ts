export function initNavbar() {
    let burgers: HTMLElement[] = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'));
    burgers.forEach(function(el: HTMLElement) {
        el.addEventListener('click', function() {
            const targetName = <string>el.dataset.target;
            const target = <HTMLElement>document.getElementById(targetName);
          
            el.classList.toggle('is-active');
            target.classList.toggle('is-active');
        });
    });
}