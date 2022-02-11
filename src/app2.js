import $ from 'jquery';
import './app2.css';

const $olTab = $('.olTab')
const $olContent = $('.olContent')
$olTab.on('click','li',(e)=>{
    const index = $(e.currentTarget).index()
    $olTab.children().eq(index).addClass('active').siblings().removeClass('active')
    $olContent.children().eq(index).addClass('active2').siblings().removeClass('active2')
})