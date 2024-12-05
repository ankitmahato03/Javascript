let globalId = 1;

const markasDone = (todoId) => {
  const parent = document.getElementById(todoId);
  parent.children[2].innerHTML = "Done";
};

const createChild = (title, description, id) => {
  const child = document.createElement("div");
  const fristGrandChild = document.createElement("div");
  fristGrandChild.innerHTML = title;
  const secondGrandChild = document.createElement("div");
  secondGrandChild.innerHTML = description;
  const thirdrandChild = document.createElement("button");
  thirdrandChild.innerHTML = "Mark as Done";
  thirdrandChild.setAttribute("onclick", `markasDone(${id})`);

  child.appendChild(fristGrandChild);
  child.appendChild(secondGrandChild);
  child.appendChild(thirdrandChild);
  child.setAttribute("id", id);
  return child;
};

const updateDom = (state) => {
  const parent = document.getElementById("container");
  parent.innerHTML = "";
  for (let i = 0; i < state.length; i++) {
    const child = createChild(
      state[i].title,
      state[i].description,
      state[i].id
    );
    parent.appendChild(child);
  }
};

updateDom([{
  title: "hellotitle",
  description: "hello desc",
  id: 1,
}]);

const addtodo = () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const parent = document
    .getElementById("container")
    .appendChild(createChild(title, description, globalId++));
  //  parent.appendChild(createChild(title,description,globalId++))
};
