


function setTime() {
    var vegasTime = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', timeStyle: 'full', dateStyle: 'short' }).format(new Date());
    document.getElementById('vegas-time').innerHTML = "Current Time/Date : " + vegasTime;

}