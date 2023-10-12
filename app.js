const animation1 = document.getElementById('animation-1');
const tab1 = document.getElementById('tab-1');
const tab1Content = document.getElementById('tab-1-content');

const animation2 = document.getElementById('animation-2');
const tab2 = document.getElementById('tab-2');
const tab2Content = document.getElementById('tab-2-content');

const animation3 = document.getElementById('animation-3');
const tab3 = document.getElementById('tab-3');
const tab3Content = document.getElementById('tab-3-content');

const animation4 = document.getElementById('animation-4');
const tab4 = document.getElementById('tab-4');
const tab4Content = document.getElementById('tab-4-content');

const animation5 = document.getElementById('animation-5');
const tab5 = document.getElementById('tab-5');
const tab5Content = document.getElementById('tab-5-content');

const animation6 = document.getElementById('animation-6');
const tab6 = document.getElementById('tab-6');
const tab6Content = document.getElementById('tab-6-content');

let isRotated = false;
let expanded = false;


tab1.addEventListener('click', () => {
    if (expanded) {
        tab1Content.style.maxHeight = '0'
        tab1.style.marginBottom = '10px'
        tab1Content.style.paddingTop = '0'
        expanded = false
    } else {
        tab1Content.style.maxHeight = '260px'
        tab1.style.marginBottom = '265px'
        tab1Content.style.paddingTop = '50px'
        expanded = true
    }
})

tab2.addEventListener('click', () => {
    if (expanded) {
        tab2Content.style.maxHeight = '0'
        tab2.style.marginBottom = '10px'
        tab2Content.style.paddingTop = '0'
        tab2Content.style.paddingBottom = '0'
        expanded = false
    } else {
        tab2Content.style.maxHeight = '260px'
        tab2.style.marginBottom = '140px'
        tab2Content.style.paddingTop = '30px'
        tab2Content.style.paddingBottom = '35px'
        expanded = true
    }
})

tab3.addEventListener('click', () => {
    if (expanded) {
        tab3Content.style.maxHeight = '0'
        tab3.style.marginBottom = '10px'
        expanded = false
    } else {
        tab3Content.style.maxHeight = '500px'
        tab3.style.marginBottom = '250px'
        expanded = true
    }
})

tab4.addEventListener('click', () => {
    if (expanded) {
        tab4Content.style.maxHeight = '0'
        tab4.style.marginBottom = '10px'
        expanded = false
    } else {
        tab4Content.style.maxHeight = '500px'
        tab4.style.marginBottom = '127px'
        expanded = true
    }
})


tab5.addEventListener('click', () => {
    if (expanded) {
        tab5Content.style.maxHeight = '0'
        tab5.style.marginBottom = '10px'
        expanded = false
    } else {
        tab5Content.style.maxHeight = '500px'
        tab5.style.marginBottom = '127px'
        expanded = true
    }
})

tab6.addEventListener('click', () => {
    if (expanded) {
        tab6Content.style.maxHeight = '0'
        tab6.style.marginBottom = '10px'
        expanded = false
    } else {
        tab6Content.style.maxHeight = '500px'
        tab6.style.marginBottom = '250px'
        expanded = true
    }
})





tab1.addEventListener('click', () => {
    if (isRotated) {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = false
    } else {
        animation1.style.transform = 'rotate(45deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = true
    }
})
tab2.addEventListener('click', () => {
    if (isRotated) {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = false
    } else {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(45deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = true
    }
})
tab3.addEventListener('click', () => {
    if (isRotated) {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = false
    } else {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(45deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = true
    }
})

tab4.addEventListener('click', () => {
    if (isRotated) {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = false
    } else {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(45deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = true
    }
})

tab5.addEventListener('click', () => {
    if (isRotated) {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = false
    } else {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(45deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = true
    }
})

tab6.addEventListener('click', () => {
    if (isRotated) {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(0deg)';
        isRotated = false
    } else {
        animation1.style.transform = 'rotate(0deg)';
        animation2.style.transform = 'rotate(0deg)';
        animation3.style.transform = 'rotate(0deg)';
        animation4.style.transform = 'rotate(0deg)';
        animation5.style.transform = 'rotate(0deg)';
        animation6.style.transform = 'rotate(45deg)';
        isRotated = true
    }
})
