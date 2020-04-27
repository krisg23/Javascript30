/** code by webdevtrick ( https://webdevtrick.com ) **/
var month = [
	"April"
];
var weekday = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
var weekdayShort = [
	"sun",
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat"
];
var monthDirection = 0;

var names = ["JavaScript Drum Kit", "JS and CSS Clock", "CSS Variables", "Array Cardio Day 1", "Flex Panels", "Type Ahead", "Array Cardio Day 2", "HTML5 Canvas", "Dev Tools Domination", "Hold Shift and Check Checkboxes", "Custom Video Player", "Key Sequence Detection", "Slide in on Scroll", "JavaScript References VS Copying", "LocalStorage", "Mouse Move Shadow", "Sort Without Articles", "Adding Up Times with Reduce", "Webcam Fun", "Speech Detection", "Geolocation", "Follow Along Link Highlighter", "Speech Synthesis", "Sticky Nav", "Event Capture", "Stripe Follow Along Nav", "Click and Drag", "Video Speed Controller", "Countdown Timer", "Whack A Mole"];
var thumbs = ["thumbs/thumb1.jpg", "thumbs/thumb2.jpg", "thumbs/thumb3.jpg", "thumbs/thumb4.jpg", "thumbs/thumb5.jpg", "thumbs/thumb6.jpg", "thumbs/thumb7.jpg", "thumbs/thumb8.jpg", "thumbs/thumb9.jpg", "thumbs/thumb10.jpg", "thumbs/thumb11.jpg", "thumbs/thumb12.jpg", "thumbs/thumb13.jpg", "thumbs/thumb14.jpg", "thumbs/thumb15.jpg", "thumbs/thumb16.jpg", "thumbs/thumb17.jpg", "thumbs/thumb18.jpg", "thumbs/thumb19.jpg", "thumbs/thumb20.jpg", "thumbs/thumb21.jpg", "thumbs/thumb22.jpg", "thumbs/thumb23.jpg", "thumbs/thumb24.jpg", "thumbs/thumb25.jpg", "thumbs/thumb26.jpg", "thumbs/thumb27.jpg", "thumbs/thumb28.jpg", "thumbs/thumb29.jpg", "thumbs/thumb30.jpg"]
var routes = ["https://krisg23.github.io/Javascript30/reto1/", "https://krisg23.github.io/Javascript30/reto2/", "https://krisg23.github.io/Javascript30/reto3/", "https://krisg23.github.io/Javascript30/reto4/", "https://krisg23.github.io/Javascript30/reto5/", "https://krisg23.github.io/Javascript30/reto6/", "https://krisg23.github.io/Javascript30/reto7/", "https://krisg23.github.io/Javascript30/reto8/", "https://krisg23.github.io/Javascript30/reto9/", "https://krisg23.github.io/Javascript30/reto10/", "https://krisg23.github.io/Javascript30/reto11/", "https://krisg23.github.io/Javascript30/reto12/", "https://krisg23.github.io/Javascript30/reto13/", "https://krisg23.github.io/Javascript30/reto14/", "https://krisg23.github.io/Javascript30/reto15/", "https://krisg23.github.io/Javascript30/reto16/", "https://krisg23.github.io/Javascript30/reto17/", "https://krisg23.github.io/Javascript30/reto18/", "https://krisg23.github.io/Javascript30/reto19/", "https://krisg23.github.io/Javascript30/reto20/", "https://krisg23.github.io/Javascript30/reto21/", "https://krisg23.github.io/Javascript30/reto22/", "https://krisg23.github.io/Javascript30/reto23/", "https://krisg23.github.io/Javascript30/reto24/", "https://krisg23.github.io/Javascript30/reto25/", "https://krisg23.github.io/Javascript30/reto26/", "https://krisg23.github.io/Javascript30/reto27/", "https://krisg23.github.io/Javascript30/reto28/", "https://krisg23.github.io/Javascript30/reto29/", "https://krisg23.github.io/Javascript30/reto30/"]
/*function getNextMonth() {
	monthDirection++;
	var current;
	var now = new Date();
	if (now.getMonth() == 11) {
		current = new Date(now.getFullYear() + monthDirection, 0, 1);
	} else {
		current = new Date(now.getFullYear(), now.getMonth() + monthDirection, 1);
	}
	initCalender(getMonth(current));
}*/

/*function getPrevMonth() {
	monthDirection--;
	var current;
	var now = new Date();
	if (now.getMonth() == 11) {
		current = new Date(now.getFullYear() + monthDirection, 0, 1);
	} else {
		current = new Date(now.getFullYear(), now.getMonth() + monthDirection, 1);
	}
	initCalender(getMonth(current));
}*/
Date.prototype.isSameDateAs = function (pDate) {
	return (
		this.getFullYear() === pDate.getFullYear() &&
		this.getMonth() === pDate.getMonth() &&
		this.getDate() === pDate.getDate()
	);
};

function getMonth(currentDay) {
	var now = new Date();
	var currentMonth = month[currentDay.getMonth()];
	var monthArr = [];
	for (i = 1 - currentDay.getDate(); i < 31; i++) {
		var tomorrow = new Date(currentDay);
		tomorrow.setDate(currentDay.getDate() + i);
		if (currentMonth !== month[tomorrow.getMonth()]) {
			break;
		} else {
			monthArr.push({
				date: {
					weekday: weekday[tomorrow.getDay()],
					weekday_short: weekdayShort[tomorrow.getDay()],
					day: tomorrow.getDate(),
					month: month[tomorrow.getMonth()],
					year: tomorrow.getFullYear(),
					current_day: now.isSameDateAs(tomorrow) ? true : false,
					date_info: tomorrow
				}
			});
		}
	}
	return monthArr;
}

function clearCalender() {
	/*$("table tbody tr").each(function () {
		$(this).find("td").removeClass("active selectable currentDay between hover").html("");
	});*/
	$("td").each(function () {
		$(this).unbind('mouseenter').unbind('mouseleave');
	});
	$("td").each(function () {
		$(this).unbind('click');
	});
	clickCounter = 0;
} 

function initCalender(monthData) {
	var row = 0;
	var classToAdd = "";
	var currentDay = "";
	var today = new Date(2020,3,1);
	clearCalender();
	$.each(monthData,
		function (i, value) {
			var weekday = value.date.weekday_short;
			var day = value.date.day;
			var column = 0;
			var index = i + 1;
			if (value.date.current_day) {
				//currentDay = "currentDay";
        		classToAdd = "selectable";
				$(".right-wrapper .day").html(value.date.day);
				$(".right-wrapper .month").html(value.date.month);
			}
			if (today.getTime() < value.date.date_info.getTime()) {
				classToAdd = "selectable";

			}
			$("tr.weedays th").each(function () {
				var row = $(this);
				if (row.data("weekday") === weekday) {
					column = row.data("column");
					return;
				}
			});
			$($($($("tr.days").get(row)).find("td").get(column)).addClass(classToAdd + " " + currentDay).html(day));
			currentDay = "";
			if (column == 6) {
				row++;
			}
		});
	$("td.selectable").click(function () {
		dateClickHandler($(this));
	});
}
initCalender(getMonth(new Date()));

var clickCounter = 0;
var number = 0;
$(".fa-angle-double-right").click(function () {
	$(".right-wrapper").toggleClass("is-active");
	$(this).toggleClass("is-active");
});

function dateClickHandler(elem) {
	clickCounter++;
	if (clickCounter > 0){
		$("td.selectable").each(function () {
			$(this).removeClass("active");
		});
		$(elem).toggleClass("active");
		$(".right-wrapper").removeClass("is-active");
		setTimeout(function(){
			number = parseInt(elem[0].innerHTML);
			$(".right-wrapper .header span").html(names[number-1]);
			$(".right-wrapper .thumb a").attr("href", routes[number-1]);
			$(".right-wrapper .thumb").css("background-image", "url("+thumbs[number-1]+")");
		}, 500);
	}
}

