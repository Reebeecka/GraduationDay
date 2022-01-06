

let between = setInterval(timeDiffCalc, 1000);
let root = document.getElementById("root");


function timeDiffCalc() {

  root.innerHTML="";
  let today = new Date();
  let finish = new Date('2023-09-06 17:00');

  let dateNow = today.getTime()
  let dateFuture = finish.getTime()

    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;

    //calculate seconds
    const seconds = Math.floor(diffInMilliSeconds);
    diffInMilliSeconds -= seconds;



    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${day} days, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hours, ` : `${hours} hours, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes & ` : `${minutes} minutes & `; 

    difference +=(seconds ===0 || minutes ===1) ? `${seconds} seconds` : `${seconds} seconds`;

    let h1 = document.createElement("h1");
    h1.innerHTML = "I graduate in " + difference + "!";

    root.append(h1);
  }