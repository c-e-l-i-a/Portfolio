const ulList = document.getElementById('nav').querySelectorAll('a')
console.log(ulList);

ulList.forEach(element => {
    element.addEventListener('click', () => {
        ulList.forEach(li => li.classList.remove('active'))
        element.classList.add('active')
    })
})