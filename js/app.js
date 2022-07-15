const background_rename = document.getElementById('bil')
const background_rename1 = document.getElementById('billi')
const background_rename2 = document.getElementById('font')
const background_rename3 = document.getElementById('zero')
const background_rename4 = document.getElementById('middle')
const background_rename5 = document.getElementById('end')

bil.onclick = () => {
    setTimeout(() => {
        bil.style.color = '#FFFFFF'
    }, 800)
    billi.style.color = 'black'
    font.style.animationName = 'green_block'
    font.style.animationDuration = '1s'
    font.style.animationFillMode = 'forwards'
    font.style.animationIterationCount = '1'
    zero.textContent = '4'
    middle.textContent = '3'
    end.textContent = '30'
}
billi.onclick = () => {
    bil.style.color = 'black'
    setTimeout(() => {
        billi.style.color = '#FFFFFF'
    }, 800)
    font.style.animationName = 'reverse_block'
    font.style.animationDuration = '1s'
    font.style.animationFillMode = 'forwards'
    font.style.animationIterationCount = '1'
    zero.textContent = '0'
    middle.textContent = '8'
    end.textContent = '16'
}