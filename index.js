const fetch = require("node-fetch");
async function getUTCTimeInMilliSecs() {
    const data = await fetch("https://worldtimeapi.org/api/timezone/Europe/London");
    const json = await data.json();
    return new Date(json.utc_datetime).getTime();
}

module.exports = {
    getUTCTimeInMilliSecs
};