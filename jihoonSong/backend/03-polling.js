// 터미널에서 curl -X POST http://localhost:8080으로 호출
// curl http://localhost:8080/checkstatus?jobId=job:1737016888837

const app = require("express")();
const jobs = {};

app.post("/submit", (req, res) => {
    const jobId = `job:${Date.now()}`;
    jobs[jobId] = 0;
    updateJob(jobId, 0);
    res.end("\n\n" + jobId + "\n\n");
});

app.get("/checkstatus", (req, res) => {
    console.log(jobs[req.query.jobId]);
    res.end("\n\nJobStatus: " + jobs[req.query.jobId] + "%\n\n");
});

app.listen(8080, () => console.log("litstening on 8080"));

function updateJob(jobId, prg){
    jobs[jobId] = prg;
    console.log(`updated ${jobId} to ${prg}`);
    if(prg == 100) return;
    this.setTimeout(() => updateJob(jobId, prg+10), 3000);
}