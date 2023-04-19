export function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    let time;
    if(new Date().getFullYear() === year){
        time = month + ' ' + date
    }
    else{
        time = month + ' ' + date + ' ' + year
    }
    return time;
}