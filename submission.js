const fetch = require('node-fetch');

const main = async () => {
    

      const res = await fetch("https://forum.minervaproject.com/api/v1/resources", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryAZzKsSFS0BB7f8zI",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrftoken": "QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "csrftoken=QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk; sessionid=j4m3239wrqts5ypbl38zw9oy6ckd6l9q; fs_uid=rs.fullstory.com#10Q6R0#6153398389530624:6545225074925568#fd7da62f#/1668295309; intercom-session-oky10orf=OTlVRE0xZ29Hb0xXM1VZcmNVcDlJWkI2dG9sY3JOU1hLZ1dSOEpvZjZza05Ma1U0VUFmN0dibXQzeGRIREF2VS0tOEFnMFF5RTN6Q01ERm8xVHFoZmg3Zz09--65f94e2ef00b742e7b7bb2e245d5e720a3746e39",
    "Referer": "https://forum.minervaproject.com/app/assignments/23941",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "------WebKitFormBoundaryAZzKsSFS0BB7f8zI\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nfile\r\n------WebKitFormBoundaryAZzKsSFS0BB7f8zI\r\nContent-Disposition: form-data; name=\"file\"; filename=\"VariablesLBA.zip\"\r\nContent-Type: application/zip\r\n\r\n\r\n------WebKitFormBoundaryAZzKsSFS0BB7f8zI\r\nContent-Disposition: form-data; name=\"title\"\r\n\r\nVariablesLBA.zip\r\n------WebKitFormBoundaryAZzKsSFS0BB7f8zI\r\nContent-Disposition: form-data; name=\"size\"\r\n\r\n655757\r\n------WebKitFormBoundaryAZzKsSFS0BB7f8zI--\r\n",
  "method": "POST"
});

      const res2 = await fetch("https://forum.minervaproject.com/api/v1/assignment-submission-resources", {
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
          "cookie": "csrftoken=QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk; sessionid=j4m3239wrqts5ypbl38zw9oy6ckd6l9q; fs_uid=rs.fullstory.com#10Q6R0#6153398389530624:6545225074925568#fd7da62f#/1668295309; intercom-session-oky10orf=OTlVRE0xZ29Hb0xXM1VZcmNVcDlJWkI2dG9sY3JOU1hLZ1dSOEpvZjZza05Ma1U0VUFmN0dibXQzeGRIREF2VS0tOEFnMFF5RTN6Q01ERm8xVHFoZmg3Zz09--65f94e2ef00b742e7b7bb2e245d5e720a3746e39",
          "Referer": "https://forum.minervaproject.com/app/assignments/23941",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"primary\":true,\"resource-id\":1582085,\"assignment-submission-id\":54938}",
        "method": "POST"
      });
      

      const res3 = await fetch("https://forum.minervaproject.com/api/v1/assignment-submissions/54928", {
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
          "cookie": "csrftoken=QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk; sessionid=j4m3239wrqts5ypbl38zw9oy6ckd6l9q; fs_uid=rs.fullstory.com#10Q6R0#6153398389530624:6545225074925568#fd7da62f#/1668295309; intercom-session-oky10orf=OTlVRE0xZ29Hb0xXM1VZcmNVcDlJWkI2dG9sY3JOU1hLZ1dSOEpvZjZza05Ma1U0VUFmN0dibXQzeGRIREF2VS0tOEFnMFF5RTN6Q01ERm8xVHFoZmg3Zz09--65f94e2ef00b742e7b7bb2e245d5e720a3746e39",
          "Referer": "https://forum.minervaproject.com/app/assignments/23782",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"id\":54928,\"attempt\":2,\"canvas-id\":null,\"created-on\":\"2022-02-20T18:43:24Z\",\"file-url\":null,\"finalized\":true,\"finalized-at\":null,\"has-been-graded\":false,\"is-incomplete\":false,\"late\":false,\"title\":null,\"type\":null,\"updated-on\":\"2022-02-20T18:43:24Z\",\"url\":null,\"user-id\":15378,\"assignment-id\":23782}",
        "method": "PUT"
      });

}

