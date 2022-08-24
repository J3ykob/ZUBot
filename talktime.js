import fetch from 'node-fetch'

const res = fetch("https://forum.minervaproject.com/api/v1/class-events", {
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
    "cookie": "csrftoken=QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk; sessionid=j4m3239wrqts5ypbl38zw9oy6ckd6l9q; fs_uid=rs.fullstory.com#10Q6R0#6153398389530624:6729583285985280#fd7da62f#/1668295309; intercom-session-oky10orf=eUtiQnhaaHFTZllrMktuNnRRTzJvRC9QRmQ3NzlKbzFwQ215bXNhNWoyaWcxZ2EwQklZOTVDTkg5TUtlUDR4Mi0tRkNIRkxOWnNnd0xIZ3M3RHlDRE82dz09--e76e368ec2ddc1b19d0d2c867f3eee93218b396e",
    "Referer": "https://forum.minervaproject.com/app/classes/22502",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"klass-id\":22502,\"actor-id\":15378,\"room-id\":782296,\"room-signature\":\"Main Classroom\",\"event-type\":\"voice\",\"event-data\":{\"duration\":2348}}",
  "method": "POST"
});

const res2 = fetch("https://forum.minervaproject.com/api/v1/class-users/521325", {
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
    "cookie": "csrftoken=QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk; sessionid=j4m3239wrqts5ypbl38zw9oy6ckd6l9q; fs_uid=rs.fullstory.com#10Q6R0#6153398389530624:6729583285985280#fd7da62f#/1668295309; intercom-session-oky10orf=eUtiQnhaaHFTZllrMktuNnRRTzJvRC9QRmQ3NzlKbzFwQ215bXNhNWoyaWcxZ2EwQklZOTVDTkg5TUtlUDR4Mi0tRkNIRkxOWnNnd0xIZ3M3RHlDRE82dz09--e76e368ec2ddc1b19d0d2c867f3eee93218b396e",
    "Referer": "https://forum.minervaproject.com/app/classes/22502",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"classroom-talk-time\":2348}",
  "method": "PATCH"
});

const res3 = fetch("https://forum.minervaproject.com/api/v1/class-users/521325", {
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
    "cookie": "csrftoken=QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk; sessionid=j4m3239wrqts5ypbl38zw9oy6ckd6l9q; fs_uid=rs.fullstory.com#10Q6R0#6153398389530624:6729583285985280#fd7da62f#/1668295309; intercom-session-oky10orf=eUtiQnhaaHFTZllrMktuNnRRTzJvRC9QRmQ3NzlKbzFwQ215bXNhNWoyaWcxZ2EwQklZOTVDTkg5TUtlUDR4Mi0tRkNIRkxOWnNnd0xIZ3M3RHlDRE82dz09--e76e368ec2ddc1b19d0d2c867f3eee93218b396e",
    "Referer": "https://forum.minervaproject.com/app/classes/22502",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"talk-time-color\":\"avg\"}",
  "method": "PATCH"
});