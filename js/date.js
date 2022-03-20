const dates = document.querySelector("#date");

function getDate(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const day = String(date.getDate());

    dates.innerText = `${year} / ${month} / ${day}`;

}

getDate();
