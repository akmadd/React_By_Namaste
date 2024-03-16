// const cret = document.createElement("h1");

// cret.innerHTML = "hello javascript!";

// const holds = document.querySelector(".container");

// holds.appendChild(cret);


/*

 how to ceate a nested element in react js
 like this 

 <div id="parent">
    <div id="child">
    <h1>nested element by React</h1>
    </div>
</div>    


*/



// const heading = React.createElement("h1", 
// {id:"heading",xyz:"abv"},
//  "hello from React!");


const parent = React.createElement("div",
{id:"parent"},
[
    
React.createElement("div",
{id:"child"},
[
React.createElement("h1",{},"i am h1"),
React.createElement("h2",{},"iam h2")

]),

React.createElement("div",
{id:"child2"},
[
React.createElement("h1",{},"i am h1"),
React.createElement("h2",{},"iam h2")

])
]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


// const parents = React.createElement("div",{id:"div1"},
// React.createElement("h1",{},"i am h1",[
// React.createElement("h2",{},"hello i am h2")
// ])
// );
// console.log(parents);
// const another = ReactDOM.createRoot(document.getElementById("anotherRoot"))
// another.render(parents);