async function exc(){
    let user =await getUser(1);
    let repos=await getRepositories(user.gitHubUsername,2);
    let brunch=await getBrunch(repos[2]);
    if (brunch == "master")
        postCommit('new Version').then(function(commited){
            if (commited) console.log("The new version is commited");
            else console.log("The new version is not commited");
        });
}

exc();


function getUser(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('User is founded');
            let user = {id: id,gitHubUsername : 'username'};
            resolve(user);
        }, 2000);
    })}

function getRepositories(username, level) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('repos is ready');
            let repos = ['br1','main','master'];
            resolve(repos,level);
        }, 2000);
    })}
function getBrunch(repo) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('repo[] is ready');
            resolve(repo);
        }, 2000);
    })}

function postCommit(vers) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('new Version');
            resolve(vers == 'new Version');
        }, 2000);
    })}