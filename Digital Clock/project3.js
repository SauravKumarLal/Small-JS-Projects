const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleDateString);
    clock.innerHTML = date.toLocaleString();
}, 1000);