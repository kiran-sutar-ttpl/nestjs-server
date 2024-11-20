const epochtime = 1718661066921;

const formattedDate = `${new Date(epochtime).toLocaleString('en-US', { 
    hour12: false, 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
}).replace(',', '')} GMT ${(-new Date(epochtime).getTimezoneOffset() / 60 >= 0 ? '+' : '') 
+ (-new Date(epochtime).getTimezoneOffset() / 60)}:00`;


console.log(new Date(new Date().getTime()).toLocaleString());
