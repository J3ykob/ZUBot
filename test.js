import fetch from 'node-fetch'
(async ()=>{
const res = await fetch("https://forum.minervaproject.com/api/v1/poll/record_long_form_response", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrftoken": "QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "csrftoken=QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk; sessionid=j4m3239wrqts5ypbl38zw9oy6ckd6l9q; fs_uid=rs.fullstory.com#10Q6R0#6153398389530624:6570162095448064#fd7da62f#/1668295309; intercom-session-oky10orf=Q3hxRTAxeWtscHVOY0hSblFidFYxdUJXbkY5MTNleVhOVjdaaWN3d3grdnVqTGFyYjBtTm1iaTIzTGIyWUxRbS0tSmdWWHV6M3k0b1FCVGFTU1I3bWh1QT09--d50e189342e24f898ce1e69cb5b1be71dac4a058",
    "Referer": "https://forum.minervaproject.com/app/classes/23086",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"poll-session-id\":73495,\"user-id\":15378,\"response\":\"The biggest challenge I faced in today's session was to create a more in-detail evaluation of today's challenges. Because of time constrains we had, me and my team weren't able to complete the presentation in as much detail as possible. On the flip side, the quick pace of the class allowed us to generate many interesting solutions, for example the data analysis model or the presentation main deck of slides. For the next class I will try to strategically approach the questions, first analyzing how much time do I need for each of them and only then starting to work on the answers.\",\"is-draft\":false,\"submitted-at\":\"2022-02-21T10:41:48.142Z\"}",
  "method": "POST"
});

console.log(res)
})()