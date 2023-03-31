//holds the relevant data for each day
const dateInfo = [];


//an example
  const exampleHobbyDictsForEachDayCHILDREN = [
    { hiking: 5, reading: 3, cooking: 2 },
    { hiking: 5, reading: 3, cooking: 2 },
    { hiking: 5, reading: 3, cooking: 2 },
    { hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { painting: 2, cycling: 4, dancing: 3 }
  ];
  const exampleHobbyDictsForEachDayVolunteers = [
    { hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { hiking: 2, painting: 4, dancing: 1 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { hiking: 2, painting: 4, dancing: 1 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { hiking: 2, painting: 4, dancing: 1 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { hiking: 2, painting: 4, dancing: 1 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { hiking: 2, painting: 4, dancing: 1 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { hiking: 2, painting: 4, dancing: 1 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },{ hiking: 2, painting: 4, dancing: 1 },
    { swimming: 3, cooking: 2, cycling: 4 },
    { reading: 6, gardening: 1, hiking: 2 },
    { painting: 2, cycling: 4, dancing: 3 }
  ];


const closeBtn = document.querySelector('.close-btn');
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

goodThresh = 3;
badThresh = 1;

function prevMonth() {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    renderCalendar();
  }
  
  function nextMonth() {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    renderCalendar();
  }


    
    
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}


function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function determineColor(avg, sum){
    let points;
    let bySum = localStorage.getItem("bySum");
    if(bySum){
        points = sum;
        
    }
    else{
        
        points = avg*100;
    }
    const colorGood ='#77db1f';
    const colorMod ='#fa9200';
    const colorBad ='#fa1616';
    
    if (points >= goodThresh){
        color = colorGood;
        }
     else if(points>=badThresh){
        color = colorMod;
    }
    else
    {        
        color = colorBad;
    
    }
    return color;
}

function getDayInfo(childDict, volDict){
    let sum =0
    let fracSum=0;
    let counter = 0;
    let resultDict = {};

  for (let key in childDict) {
    if (volDict.hasOwnProperty(key)) {
        counter = counter + 1;
      resultDict[key] = [childDict[key], volDict[key]];
      fracSum += volDict[key]/childDict[key];
      if(fracSum >=1){
        fracSum = 1;
      }
      sum += volDict[key];
    }
  }
  let avg = fracSum/counter;
    console.log(sum);
    let color = determineColor(avg, sum);
    
    
    return [resultDict, sum, avg, color];
}

function openPopup(day, sum, avg){
    day = Number(day);
    sum  = Number(sum);
    avg = Number(avg);
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    let modalContent = document.querySelector('.modal-inside');
    modalContent.innerHTML = '';
    dict = dateInfo[day];
  let listItemSum = document.createElement('li');
  listItemSum.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  let itemTitleSum = document.createElement('span');
  itemTitleSum.innerText = 'Total Volunteers:';
  let itemValueSum = document.createElement('span');
  itemValueSum.innerText = sum;
  itemValueSum.classList.add('badge', 'badge-primary', 'badge-pill', 'text-primary', 'fs-3');
  itemTitleSum.classList.add('fs-5', 'text-dark');
  listItemSum.appendChild(itemTitleSum);
  listItemSum.appendChild(itemValueSum);
  modalContent.appendChild(listItemSum);

  let listItemAVG = document.createElement('li');
  listItemSum.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  let itemTitleAVG = itemTitleSum.cloneNode(true);
  let itemValueAVG = itemValueSum.cloneNode(true);
  itemTitleAVG.innerText = 'Average Hobby Precentage:';
  itemValueAVG.innerText = (avg.toFixed(2))*100 +'%';
  listItemAVG.appendChild(itemTitleAVG);
  listItemAVG.appendChild(itemValueAVG);
  modalContent.appendChild(listItemAVG);

}

function changeSum() {
    localStorage.setItem("bySum",true );
}

function changeAvg(){
    localStorage.setItem("bySum", false);
    
}

function apply(){
    const upper = document.getElementById("upper").value;
    const lower = document.getElementById("lower").value;
    let bySum = localStorage.getItem("bySum");
    if (bySum === false && (upper>100 || lower < 0)){
        alert ('Thresholds not in valid range.');
        return;
    }
    goodThresh = upper;
    badThresh = lower;
}



function renderCalendar() {
    let myData = localStorage.getItem("bySum");
    if (myData === null){
        myData = true;
    }
    alert(myData);
    const daysElement = document.querySelector('.days');
    const monthYearElement = document.querySelector('.month-year');
    daysElement.innerHTML = '';
    monthYearElement.innerText = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
  
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    for (let i = 1; i <= daysInMonth; i++) {
    // access database and aquire hobbies dict for that day, get hobbies list from user.
      let [resultDict, sum, avg, color] = getDayInfo(exampleHobbyDictsForEachDayCHILDREN[i-1], exampleHobbyDictsForEachDayVolunteers[i-1]);
      dateInfo[i-1] = resultDict;
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.style.backgroundColor = color;
      if (i === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
        dayElement.classList.add('current');
      }
      
      dayElement.setAttribute('onclick', 'openPopup('+(i-1)+','+sum+','+avg+');');
      dayElement.innerText = i;
      daysElement.appendChild(dayElement);
    }
  
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyDayElement = document.createElement('div');
      daysElement.appendChild(emptyDayElement);
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
});
