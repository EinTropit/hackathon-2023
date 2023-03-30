function renderCalendar() {
  const daysElement = document.querySelector('.days');
  const monthYearElement = document.querySelector('.month-year');
  daysElement.innerHTML = '';
  monthYearElement.innerText = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    if (i === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
      dayElement.classList.add('current');
    }
    dayElement.setAttribute('onclick', 'openPopup();');
    dayElement.innerText = i;
    daysElement.appendChild(dayElement);
  }

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDayElement = document.createElement('div');
    daysElement.appendChild(emptyDayElement);
  }
}


function openPopup() {
  var now = new Date();
  var popupName = "myPopup" + now.getTime();
  var popup = window.open("", popupName, "width=500,height=500");
  popup.document.write("<form>");
  popup.document.write("<label for='name'>Name:</label><br>");
  popup.document.write("<input type='text' id='name' name='name'><br><br>");
  popup.document.write("<label for='availability'>Hour range:</label><br>");
  popup.document.write("<input type='text' id='availability' name='availability'><br><br>");
  popup.document.write("<label for='profession'>Profession:</label><br>");
  popup.document.write("<input type='text' id='profession' name='profession'><br><br>");
  popup.document.write("<input type='submit' value='Submit' onclick='window.close();'>");
  popup.document.write("</form>");
}

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}


function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

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


renderCalendar();
