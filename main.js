import fetch from 'node-fetch';
import fs, { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline, Readable } from 'stream';
import archiver from 'archiver'

const classId = 20396

const getPoll = async (classId, archive) => {
    const res = await fetch(`https://forum.minervaproject.com/api/v1/classes/${classId}/nested_for_seminar`, {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"macOS\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "cookie": "csrftoken=QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk; sessionid=j4m3239wrqts5ypbl38zw9oy6ckd6l9q; fs_uid=rs.fullstory.com#10Q6R0#6153398389530624:5691970525552640#fd7da62f#/1668295309; intercom-session-oky10orf=cml2RkMvTmpXbDBqRmVMU0ZZUVorQkZBcjJ4YklhSEJpUnNOdXZvdkZ0VUtLdmNIeFMrVTB1cmI5am91eWVPWS0tWEFERmNMSVJwT2EraEoycTlwbWFSQT09--2bd993daca63af51a47704b846ac2f3096ba12e5",
                            "Referer": "https://forum.minervaproject.com/app/courses/1078/sections/1573/classes/22502",
                            "Referrer-Policy": "strict-origin-when-cross-origin"
                        },
                        "body": null,
                        "method": "GET"
                        });

    const data = await res.json();

    //res.class-polls[].poll.question
    //res.class-polls[].poll.title
    //res.class-polls[].poll.poll-choices[]

    const polls = data['class-polls'].map(p=>{
        return {
            title: p.poll.title,
            question: p.poll.question,
            choices: p.poll['poll-choices'].map(c=>c.choice),
            graded: p.poll['grading-type']
        }
    })

    //conver polls into string with each value on new line
    const pollString = "===================POLLS===================\n\n" + polls.map(p=>{
        return `${p.title}\n\n${p.graded}\n\n${p.question}\n${p.choices.length ? " - " : ""}${p.choices.join('\n - ')}`
    }).join('\n------------------------------------------\n\n')

    //res.timeline.timeline-sections[].timeline-segments[].details.notes.focus-questions[].question
    //res.timeline.timeline-sections[].timeline-segments[].details.notes.focus-questions[].answer
    //res.timeline.timeline-sections[].timeline-segments[].details.notes.faculty-instructions
    const instructor = data.timeline['timeline-sections'].map(sec=>{

        return sec['timeline-segments'].map(seg=>{
            return{
                instructions: seg.details.notes['faculty-instructions'],
                questions: seg.details.notes['focus-questions'].reduce((acc, q, index)=>{
                    return [...acc, `   ${index+1}. ${q.question}\n    ${q.answer}`]
                }, "")
            }
        })


        // return sec['timeline-segments'].map(s=>{
        //     return {
        //         instructions: s.details.notes['faculty-instructions'] || "",
        //         questions: s.details.notes['focus-questions'].length > 0 ? s.details.notes['focus-questions'].map(e=>{
        //             return{
        //                 question: e.question,
        //                 answer: e.answer
        //             }
        //         }).reduce((a,b)=>{
        //             return a + "\n" + b.question + " -> " + b.answer
        //         }) : "",
        //     }
        // })
    })

    //convert instructor into string with each value on new line
    const instructorString = "===================INSTRUCTOR===================\n\n" + instructor.reduce((a,b)=>[...a, ...b]).map((i, index)=>{
        return `${index+1}.\n${i.instructions}\n${i.questions}`
    }).join('\n----------------------------------------\n\n')



    const resources = data.room['room-resources'].map(r=>{
        return {
            title: r.resource.title,
            url: r.resource.url,
            html: r.resource['html-slide-content']
        }
    })

    //convert resources into string with each value on new line
    const resourcesString = "===================RESOURCES===================\n\n" + resources.map(r=>{
        return `${r.title}\n${r.url}\n${r.html}\n`
    }).join('\n--------------------------------------------\n\n')

    //join all strings into one
    const finalString = `${pollString}\n\n${instructorString}\n\n${resourcesString}`

    //create path
    const fileName = `${data.title} ${data.assignments[0]['due-date']}.txt`

    //write formatted polls data to txt file
    //create folder if doesn't exist with name of courseId

    // fs.writeFileSync("sohib.json", Buffer.from(data), {encoding: 'utf8', flag: 'w'})
    let dataToWrite = JSON.stringify(data);
    fs.writeFileSync('student-2.json', dataToWrite);

    var s = new Readable()
    s.push(finalString)    // the string you want
    s.push(null)
    archive.append(s, { name: fileName + '.txt' });

    // const gzip = createGzip();
    // // const source = createReadStream(path);

    // const destination = createWriteStream(path + '.gz');

    // pipeline(source, gzip, destination, (err) => {
    //     if (err) {
    //         console.error('An error occurred:', err);
    //         process.exitCode = 1;
    //     }
    // });

    return true;

    //res.room.room-resources[].resource.url
    //res.room.room-resources[].resource.title
    //res.room.room-resources[].resource.html-slide-contentx

}

const courses = [
    // "https://forum.minervaproject.com/app/courses/1082/sections/1562",
    // "https://forum.minervaproject.com/app/courses/1078/sections/1573",
    // "https://forum.minervaproject.com/app/courses/1084/sections/1585",
    // "https://forum.minervaproject.com/app/courses/1090/sections/1614",
    "https://forum.minerva.edu/app/courses/2115/sections/8340"
]
const courseParsed = courses.map(c=>{
    console.log(c)
    return {
        //find first number in url
        courseId: c.match(/\d+/g)[0],
        //find second number in url
        sectionId: c.match(/\d+/g)[1]
    }
})

const getClasses = async (courseId, sectionId) => {

    const res = await fetch(`https://forum.minervaproject.com/api/v1/courses/${courseId}/sections/${sectionId}/paginated-classes?category=upcoming&page_size=100`, {
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
          "cookie": "csrftoken=QCTKu6roBy8JV569bxMFjTA7VEpFASC82wnaI27KM3rgHZzTeXWP9JSbZItRpjJk; sessionid=j4m3239wrqts5ypbl38zw9oy6ckd6l9q; fs_uid=rs.fullstory.com#10Q6R0#6153398389530624:5139871869919232#fd7da62f#/1668295309; intercom-session-oky10orf=QzNKQ1ZxMU9nWGdlQlVLTGR6cFdSKzFkay9CNyt5czBISi91YllSblNBQXlxTU5NRDRwZ3BaZ1BoZm1vbEdneC0tcDdIbmdZdUIwSitGUVRBMmV5UU9kZz09--08bf4524c5a7522c36492d43d43f464363f7d982",
          "Referer": "https://forum.minervaproject.com/app/courses/1078/sections/1573",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });

    const data = await res.json()

    const ids = data.results.map(r=>{
        return r.id
    })

    return ids
}

Promise.all(courseParsed.map(c=>{
    return getClasses(c.courseId, c.sectionId)
    // return [20400]
})).then(classes=>{
    console.log(classes)
    classes.forEach((c, index)=>{
        var output = fs.createWriteStream(courseParsed[index].courseId + '.zip');
        // var output = fs.createWriteStream("sohib" + '.zip');
        var archive = archiver('zip');
        
        output.on('close', function () {
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
        });
        
        archive.on('error', function(err){
            throw err;
        });
        
        archive.pipe(output);

        Promise.all(c.map(id=>getPoll(id, archive))).then(e=>archive.finalize())
        
    })
})