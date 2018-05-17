// enum
enum months {
	January,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December
}
enum days {
	Sunday,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday
}
console.log("Months enum:");
console.log(months);
// months.January = 2; // a constant cannot be changed
console.log('January: ' + months.January);
console.log('Month 1: ' + months[1]);

// html element
let pTodayData = document.getElementById('p--today-date');

// today's date
let today: Date = new Date();
console.log(today);

// today's month
console.log(today.getMonth());
let todayMonth:string = months[today.getMonth()];

// today's day of week
console.log(today.getDay());
let todayDayOfWeek:string = days[today.getDay()];

// today's day of month
console.log(today.getDate());

// today's year
console.log(today.getFullYear());

// display today's date to page
pTodayData.innerHTML = `Today is ${ todayDayOfWeek }, ${ todayMonth } ${ today.getDate() }, ${ today.getFullYear() }`;

// part 2
let inputDate = document.getElementById('input--date-picker');
let btn = document.getElementById('button--birthday');
let ouputMsg = document.getElementById('p--birthday-message');

function birthdayOutput(bDay) {
	let today = new Date();
	let dateDiff = today.getDate() - bDay.getDate();
	let monthDiff = today.getMonth() - bDay.getMonth();
	if (dateDiff || monthDiff) {
		return `Your birthday will be on ${ days[bDay.getDay()] }, ${ months[bDay.getMonth()] } ${ bDay.getDate() }, ${ bDay.getFullYear() }.`;
	} else {
		return "Happy Birthday";
	}
}

btn.addEventListener("click", function () {
	if (inputDate.value) { 
		let getBday = inputDate.value;
		let bDay = new Date(getBday);
		// console.log(bDay);
		ouputMsg.innerHTML = birthdayOutput(bDay);
	} else {
		ouputMsg.innerHTML = "Please select a date.";
	}
});

