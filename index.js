/* Your Code Here */

function createEmployeeRecord(record) {
    const [firstName, familyName, title, payPerHour] = record
    return { firstName: firstName,
    familyName: familyName,
title: title,
payPerHour: payPerHour,
timeInEvents: [],
timeOutEvents: []}
}

function createEmployeeRecords(records) {
    return records.map(element => createEmployeeRecord(element))
}

function createTimeInEvent(timeIn) {
    let [date, hour] = timeIn.split(" ")
     const timeInEvent = {type: "TimeIn",
                     date: date,
                     hour: parseInt(hour,10)}
                  this.timeInEvents.push(timeInEvent)
                  return this
 }
 
 function createTimeOutEvent(timeIn) {
     let [date, hour] = timeIn.split(" ")
      const timeOutEvent = {type: "TimeOut",
                      date: date,
                      hour: parseInt(hour,10)}
                   this.timeOutEvents.push(timeOutEvent)
                   return this
  }

  function hoursWorkedOnDate(date) {
    const timeInRecord = this.timeInEvents.find((element) => element.date === date)
    const timeOutRecord = this.timeOutEvents.find((element) => element.date === date)
    return  (timeOutRecord.hour / 100) - (timeInRecord.hour / 100)
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return (hours * this.payPerHour)
}

function calculatePayroll(employees) {
    return employees.reduce((accumulator, currentValue) => { return accumulator + allWagesFor.call(currentValue)},0)

}

function findEmployeeByFirstName(employees,firstName) {
  return employees.find(element => element.firstName = firstName)

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}