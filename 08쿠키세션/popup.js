



function createCookie(){
    var date = new Date();
    date.setDate(date.getDate() +1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    
    document.cookie = "mainPopup = true; path=/; expires=" + date.toUTCString();
}