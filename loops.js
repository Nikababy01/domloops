console.log('LOOPS');


const colors=['red','orange', 'green', 'blue', 'pink'];

const colorLoop = () => {
    let domString= '';
    for(let i = 0; i < colors.length; i++){
     domString += `<h1>${colors[i]}</h1>`;  // prevents colors from running together
    }
    console.log(domString);
};
const instructorsLoop = () => {
    let domString= '';
    for(let i = 0; i < instructors.length; i++){
     domString += `<h2>${instructors[i].first} ${instructors[i].last}</h2>`;  // need to loop over instructors by add [i].notation
    } 
    
    console.log(domString);
}
const instructors = [
    {first: 'zoe', last: 'ames'},
    {first: 'mary', last: 'west'},
    {first: 'luke', last: 'lancaster'}

];



// <h2>zoe ames</h2><h2>mary west</h2> <h2>luke lancaster</h2>
instructorsLoop();