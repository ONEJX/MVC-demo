import $ from 'jquery';
import './app4.css';

const $circle = $('.circle')
$circle.on('mouseover',()=>{
    $circle.addClass('active')
}).on('mouseout',()=>{
    $circle.removeClass('active')
}).on('click',()=>{
    $circle.toggleClass('stop')
})