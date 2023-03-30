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
    dayElement.innerText = i;
    daysElement.appendChild(dayElement);
  }

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDayElement = document.createElement('div');
    daysElement.appendChild(emptyDayElement);
  }
}

renderCalendar();
