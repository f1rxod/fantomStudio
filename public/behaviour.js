var line = document.querySelector('.line')
var line2 = document.querySelector('.line2')
var line3 = document.querySelector('.line3')
var line4 = document.querySelector('.line4')
var line5 = document.querySelector('.line5')
var line6 = document.querySelector('.line6')
var btn_line = document.querySelector('.line_btn')
var btn_line2 = document.querySelector('.line_btn2')
var btn_line3 = document.querySelector('.line_btn3')
var btn_line4 = document.querySelector('.line_btn4')
var btn_line5 = document.querySelector('.line_btn5')
var btn_line6 = document.querySelector('.line_btn6')
btn_line.style.opacity = 0
btn_line2.style.opacity = 0
btn_line3.style.opacity = 0
btn_line4.style.opacity = 0
btn_line5.style.opacity = 0
btn_line6.style.opacity = 0
var one = document.querySelectorAll('._1')
var two = document.querySelectorAll('._2')
var third = document.querySelectorAll('._3')
var four = document.querySelectorAll('._4')
var five = document.querySelectorAll('._5')
var six = document.querySelectorAll('._6')
line.addEventListener('mouseover', () => {
    btn_line.style.opacity = 1
    one[0].style.color = "white"
    one[1].style.color = "white"
})
line.addEventListener('mouseout', () => {
    btn_line.style.opacity = 0
    one[0].style.color = "gray"
    one[1].style.color = "gray"
})
line2.addEventListener('mouseover', () => {
    btn_line2.style.opacity = 1
    two[0].style.color = "white"
    two[1].style.color = "white"
})
line2.addEventListener('mouseout', () => {
    btn_line2.style.opacity = 0
    two[0].style.color = "gray"
    two[1].style.color = "gray"
})
line3.addEventListener('mouseover', () => {
    btn_line3.style.opacity = 1
    third[0].style.color = "white"
    third[1].style.color = "white"
})
line3.addEventListener('mouseout', () => {
    btn_line3.style.opacity = 0
    third[0].style.color = "gray"
    third[1].style.color = "gray"
})
line4.addEventListener('mouseover', () => {
    btn_line4.style.opacity = 1
    four[0].style.color = "white"
    four[1].style.color = "white"
})
line4.addEventListener('mouseout', () => {
    btn_line4.style.opacity = 0
    four[0].style.color = "gray"
    four[1].style.color = "gray"
})
line5.addEventListener('mouseover', () => {
    btn_line5.style.opacity = 1
    five[0].style.color = "white"
    five[1].style.color = "white"
})
line5.addEventListener('mouseout', () => {
    btn_line5.style.opacity = 0
    five[0].style.color = "gray"
    five[1].style.color = "gray"
})
line6.addEventListener('mouseover', () => {
    btn_line6.style.opacity = 1
    six[0].style.color = "white"
    six[1].style.color = "white"
})
line6.addEventListener('mouseout', () => {
    btn_line6.style.opacity = 0
    six[0].style.color = "gray"
    six[1].style.color = "gray"
})