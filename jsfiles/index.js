

console.log('before');
getUser(1,getRepo);
console.log('after');

//callbacks
//promises
//async/awaits 

function getRepo(user){
    getRepo(use.gituser,getCommits);
}
function getCommits(repos){
    getCommits(repo, displaycommits);
}
function displaycommits (commits) {
    console.log(commits);
}
function getUser(id, callback){
    setTimeout(()=>{
    console.log('reading...');
    callback({id: id, gituser : 'chris'});
},2000);
}
function getRepo(username, callback){
    setTimeout(()=>{
        callback (['repo1','repo2','repo3']);
    },2000);
}