import $ from 'jquery';
import './app1.css';

const $btn1 = $('#btn1')
const $btn2 = $('#btn2')
const $btn3 = $('#btn3')
const $btn4 = $('#btn4')
const $num = $('#text')
let n = localStorage.getItem('n')
$num.text(n || 100)

$btn1.on('click',()=>{
    let n = parseInt($num.text())
    n += 1
    localStorage.setItem('n',n)
    $num.text(n)
})

$btn2.on('click',()=>{
    let n = parseInt($num.text())
    n -= 1
    localStorage.setItem('n',n)
    $num.text(n)
})

$btn3.on('click',()=>{
    let n = parseInt($num.text())
    n *= 2
    localStorage.setItem('n',n)
    $num.text(n)
})

$btn4.on('click',()=>{
    let n = parseInt($num.text())
    n /= 2
    localStorage.setItem('n',n)
    $num.text(n)
})