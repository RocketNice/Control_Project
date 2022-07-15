const Bil_Monthly = document.getElementById('bil')
const Bil_Yearly = document.getElementById('billi')
const green_font = document.getElementById('font')
const number_month = document.getElementById('middle')
const year = document.getElementById('end')

Bil_Monthly.onclick = () => {
    setTimeout(() => {
        Bil_Monthly.style.color = '#FFFFFF'
    }, 800)
    Bil_Yearly.style.color = 'black'
    font.style.animationName = 'green_block'
    font.style.animationDuration = '1s'
    font.style.animationFillMode = 'forwards'
    font.style.animationIterationCount = '1'
    number_month.textContent = '0.66'
    year.textContent = '1.33'
}
Bil_Yearly.onclick = () => {
    Bil_Monthly.style.color = 'black'
    setTimeout(() => {
        Bil_Yearly.style.color = '#FFFFFF'
    }, 800)
    font.style.animationName = 'reverse_block'
    font.style.animationDuration = '1s'
    font.style.animationFillMode = 'forwards'
    font.style.animationIterationCount = '1'
    number_month.textContent = '8'
    year.textContent = '16'
}