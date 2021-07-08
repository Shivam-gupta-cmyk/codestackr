const bars = document.querySelector('.bars')
const times = document.querySelector('.times')
const dropdown = document.querySelector('.dropdown')
bars.addEventListener('click', () => {
    dropdown.classList.toggle('active')
})