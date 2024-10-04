function body() {
  let body = document.body;
  body.style.margin = "0";
  body.style.padding = "0";

  let dom = document.getElementById("full_page");

  let newContainer1 = document.createElement("div");
  newContainer1.classList = "first-container";
  newContainer1.style.background = "gray";

  let newContainerChilde1 = document.createElement("div");
  newContainerChilde1.classList = "newContainerChilde1";
  newContainerChilde1.id = "newContainerChilde1";
  newContainerChilde1.style.width = "100%";
  newContainerChilde1.style.height = "100vh";
  newContainerChilde1.style.backgroundColor = "yellow";

  let newContainerChilde2 = document.createElement("div");
  newContainerChilde2.classList = "newContainerChilde2";
  newContainerChilde2.id = "newContainerChilde2";
  newContainerChilde2.style.backgroundColor = "black";
  newContainerChilde2.style.width = "100%";
  newContainerChilde2.style.height = "100px";

  let newContainerChilde3 = document.createElement("div");
  newContainerChilde3.classList = "newContainerChilde3";
  newContainerChilde3.id = "newContainerChilde3";
  newContainerChilde3.style.backgroundColor = "green";
  newContainerChilde3.style.width = "100%";
  newContainerChilde3.style.height = "100px";

  let newContainerChilde4 = document.createElement("div");
  newContainerChilde4.classList = "newContainerChilde4";
  newContainerChilde4.id = "newContainerChilde4";
  newContainerChilde4.style.backgroundColor = "brown";
  newContainerChilde4.style.width = "100%";
  newContainerChilde4.style.height = "100px";

  let newContainerChilde5 = document.createElement("div");
  newContainerChilde5.classList = "newContainerChilde5";
  newContainerChilde5.id = "newContainerChilde5";
  newContainerChilde5.style.backgroundColor = "blue";
  newContainerChilde5.style.width = "100%";
  newContainerChilde5.style.height = "100px";

  let newContainerChilde6 = document.createElement("div");
  newContainerChilde6.classList = "newContainerChilde6";
  newContainerChilde6.id = "newContainerChilde6";
  newContainerChilde6.style.backgroundColor = "crimson";
  newContainerChilde6.style.width = "100%";
  newContainerChilde6.style.height = "100px";

  newContainer1.appendChild(newContainerChilde1);
  newContainer1.appendChild(newContainerChilde2);
  newContainer1.appendChild(newContainerChilde3);
  newContainer1.appendChild(newContainerChilde4);
  newContainer1.appendChild(newContainerChilde5);
  newContainer1.appendChild(newContainerChilde6);
  dom.appendChild(newContainer1);

  // Return the individual child elements to use in another function
  //   return {
  //     newContainer1,
  //     newContainerChilde1,
  //     newContainerChilde2,
  //     newContainerChilde3,
  //   };

  // on the other hand do this way we can access all the child by children method
  return newContainer1;
}

let newContainer1 = body();

function firstElement() {
  let textH1 = document.createElement("h1");
  textH1.textContent = "Hello world";
  let textH2 = document.createElement("h2");
  textH2.textContent = "hello world next sibling";

  let first = newContainer1.children[0];
  first.appendChild(textH1);

  let second = first.nextElementSibling;
  second.appendChild(textH2);

  let third = second.nextSibling;
  third.textContent = "hello world from third";

  //   third.parentElement.style.padding = "10px";
  let parentNode = third.parentNode;
  parentNode.style.padding = "10px";
  parentNode.style.backgroundColor = "red";

  let first1 = parentNode.firstChild;
  first1.style.backgroundColor = "gray";

  first1.nextSibling.style.backgroundColor = "yellow";

  //   newContainer1.innerHTML = `
  //     <p>hello</p>
  //     hello world
  //   `;

  let node = newContainer1.childNodes;
  // let node = newContainer1.node;
  console.log(node);
}

firstElement();

let nodeCheck = document.querySelector(".master-parent-node");
console.log("here different =>:) ", nodeCheck.childNodes);


