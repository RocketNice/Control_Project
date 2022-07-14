const background_rename = document.getElementById('bil')
const background_rename1 = document.getElementById('billi')
const background_rename2 = document.getElementById('font')
bil.onclick = () => {
    setTimeout(() => {
        bil.style.color = '#FFFFFF'
    }, 800)
    billi.style.color = 'black'
    font.style.animationName = 'green_block'
    font.style.animationDuration = '1s'
    font.style.animationFillMode = 'forwards'
    font.style.animationIterationCount = '1'
}
billi.onclick = () => {
    bil.style.color = 'black'
    billi.style.color = '#FFFFFF'
    font.style.animationName = 'reverse_block'
    font.style.animationDuration = '1s'
    font.style.animationFillMode = 'forwards'
    font.style.animationIterationCount = '1'
}