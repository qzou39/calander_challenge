
var currentTimeHeaderFormat = moment().format('dddd MMMM Do')
let day = moment().date()
let year = moment().year()
let month = moment().month()
let second = moment().second()
let minute = moment().minute()
let hour = moment().hour()

var currentTime = moment().year(year).month(month).date(day).hour(12).minute(minute).second(second)


var momentTimes = []
for (let i=0; i<9; i++){
    let time = moment().year(year).month(month).date(day).hour(9 + i).minute(0).second(0)
    momentTimes.push(time)
}

$("#currentDay").text(currentTimeHeaderFormat)
let list = $("li")
list.each(function(index, element){
    let isBefore = momentTimes[index].isBefore(currentTime)
    let isAfter = momentTimes[index].isAfter(currentTime)
    let sameTime = momentTimes[index].hour() === currentTime.hour()
    momentTimes[index]
    if (isBefore) $(element).find("textarea").addClass('past');
    if (isAfter)  $(element).find("textarea").addClass('future');
    if (sameTime)  $(element).find("textarea").addClass('present');
})


list.each(function(index, element){
  $(element).find('.saveBtn').on('click', function() {
    let event = $(element).find('textarea').val().trim()
    let events = JSON.parse(localStorage.getItem('events')) || {}
    events[index] = event
    localStorage.setItem('events', JSON.stringify(events))
  })
})