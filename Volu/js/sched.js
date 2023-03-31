//holds the relevant data for each day
const dateInfo = [];

//an example
  const exampleHobbyDictsForEachDay = [
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

  //an example for a dict of user hobbies
  const hobbiesList = ['reading', 'cooking'];


const closeBtn = document.querySelector('.close-btn');
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

    
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



function getDayInfo(hobbiesDict, hobbiesList){
    const colorGood ='#77db1f';
    const colorMod ='#fa9200';
    const colorBad ='#fa1616';
    const goodThresh = 3;
    const badThresh = 1;
    let color;
    let dayInfo = {
        color:'',
        sum:0,
        dict:{}
    }
    let sum = 0;
    let dayDict = {};
        for (let i = 0; i < hobbiesList.length; i++) {
            let hobby = hobbiesList[i];
          if (hobbiesDict.hasOwnProperty(hobby)) {
            sum += hobbiesDict[hobby];
            dayDict[hobbiesList[i]]=hobbiesDict[hobby];
          }
        }
        console.log(sum);
        if (sum>= goodThresh){
            color = colorGood;
        }
        else if(sum>=badThresh){
            color = colorMod;
        }
        else{
            color = colorBad;
        }
    dayInfo.color = color;
    dayInfo.sum = sum;
    dayInfo.dict = dayDict;
    
    return [dayDict, sum, color];
}

function openPopup(day, sum){
    day = Number(day);
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    let modalContent = document.querySelector('.modal-inside');
    modalContent.innerHTML = '';
    dict = dateInfo[day];
let listItem = document.createElement('li');
  listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  let itemTitle = document.createElement('span');
  itemTitle.innerText = 'Total';
  let itemValue = document.createElement('span');
  itemValue.innerText = sum;
  itemValue.classList.add('badge', 'badge-primary', 'badge-pill', 'text-primary', 'fs-3');
  itemTitle.classList.add('fs-5', 'text-dark');
  listItem.appendChild(itemTitle);
  listItem.appendChild(itemValue);
  modalContent.appendChild(listItem);
for (let key in dateInfo[day]) {
  let value = dateInfo[day][key];
  let listItem = document.createElement('li');
  listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  let itemTitle = document.createElement('span');
  itemTitle.innerText = key;
  let itemValue = document.createElement('span');
  itemValue.innerText = value;
  itemValue.classList.add('badge', 'badge-primary', 'badge-pill', 'text-primary', 'fs-3');
  itemTitle.classList.add('fs-5', 'text-dark');
  listItem.appendChild(itemTitle);
  listItem.appendChild(itemValue);
  modalContent.appendChild(listItem);
}

}

function renderCalendar() {
    const daysElement = document.querySelector('.days');
    const monthYearElement = document.querySelector('.month-year');
    daysElement.innerHTML = '';
    monthYearElement.innerText = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
  
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    for (let i = 1; i <= daysInMonth; i++) {
    // access database and aquire hobbies dict for that day, get hobbies list from user.
      let [dayInfo, sum, color] = getDayInfo(exampleHobbyDictsForEachDay[i-1], hobbiesList);
      dateInfo[i-1] = dayInfo;
      if (!dateInfo[i]) {
      console.log(dayInfo[i]);
      }
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.style.backgroundColor = color;
      if (i === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
        dayElement.classList.add('current');
      }
      
      dayElement.setAttribute('onclick', 'openPopup('+(i-1)+','+sum+');');
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
