clock();

setInterval( clock, 1000 );

function clock() {

  var d = new Date();

  var year = d.getFullYear().toString().padStart(2, '0');

  var month = ( d.getMonth() + 1 ).toString().padStart(2, '0');
 
  var day = d.getDate().toString().padStart(2, '0');

  switch ( d.getDay() ) {
    case 1: 
      var weekDay = 'MON'; break;
    case 2: 
      var weekDay = 'TUE'; break;
    case 3: 
      var weekDay = 'WED'; break;
    case 4: 
      var weekDay = 'THU'; break;
    case 5: 
      var weekDay = 'FRI'; break;
    case 6: 
      var weekDay = 'SAT'; break;
    case 0: 
      var weekDay = 'SUN'; break;
  }

  var hr = d.getHours().toString().padStart(2, '0');
  var min = d.getMinutes().toString().padStart(2, '0');
  var sec = d.getSeconds().toString().padStart(2, '0');

  document.querySelector('.date').innerHTML = year + '-' + month + '-' + day + ' ' + weekDay;

  document.querySelector('.hr').innerHTML = hr;

  document.querySelector('.min').innerHTML = min;

  document.querySelector('.sec').innerHTML = sec;
}

document.querySelector('.toggle-btn').onclick = () => {

  document.querySelector('body').classList.toggle('dark');
  document.querySelector('body').classList.toggle('light');
  
};
