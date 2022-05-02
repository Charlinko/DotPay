const chart =document.querySelector("#chart").getContext("2d");

new Chart(chart,{
  type: 'line',
  data: {
   labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
   datasets: [
     {
       label: 'BTC',
       data: [29374,33537,496631,59095,57828,36684,33572,39974,48847,48116,61004],
       borderColor:'red',
       borderWidth: 2
     },
     {
       label: 'ETH',
       data: [31500,41000,88800,26000,46000,32698,5000,3000,18656,24832,36844],
       borderColor:'green',
       borderWidth: 2
     },

     ]
  },
  options: {
    responsive: true
  }
})

//=======================show or hide sidbar ============≠=============

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

 function show_bar() {
  sidebar.style.display = 'block';
}
 function hidden_bar(){
  sidebar.style.display = 'none';
}

 
//================================== change theme
const themeBtn = document.querySelector('theme-btn');

  function chage_theme(){
   document.body.classList.toggle('dark-theme');
   themeBtn.querySelector('span:last-child').classList.toggle('active');
   themeBtn.querySelector('span:first-child').classList.toggle('active');
   
 }
