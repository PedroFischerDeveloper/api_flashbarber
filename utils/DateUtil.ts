export default class DateUitl {
    
    public getNow() {

        let myDate = new Date();
        let myDate_string = myDate.toISOString();
        myDate_string = myDate_string.replace("T"," ");
        myDate_string = myDate_string.substring(0, myDate_string.length - 5);
    
        let tomorrowToFormat = myDate_string.split(" ");
    
        let endDay   = tomorrowToFormat[0] + " 23:59:59";
        let startDay = tomorrowToFormat[0] + " 10:00:00";
    
        return {start: startDay, end: endDay};
    }
}

