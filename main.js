const liMenu = document.querySelectorAll('.menu-text')

for(let i=0; i < liMenu.length; i++) {
    liMenu[i].addEventListener('click', () => {
        console.log('clicked');
        const current = document.querySelector('.active')
        console.log(current);
        if(current.length > 0) {
            current[0].className = current[0].className.replace(".active", "");
        }
        this.className += ".active";
    })
}