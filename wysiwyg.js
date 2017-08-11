// Create an array of objects that represents famous people (see structure below). (DONE)
// Create a text input in your DOM. (DONE)
// Beneath that, create a container, block element in your DOM. (DONE)
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.(DONE)
// For every even numbered element, have a light yellow background. (DONE)
// For every odd numbered element, have a light blue background. (DONE)
// Eah element's DOM structure should be as shown below. (DONE)
// When you click on one of the person elements, a dotted border should appear around it. (DONE)
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing. (DONE)
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter. (DONE)
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
let famousPeople = [
  {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Steave Harvey",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Michale Jackson",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Malcolm X",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Barock Obama",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}
]
famousPeople.forEach(function(person){
  var name= person.name;
  var bio= person.bio;
  var image= person.image;



  var container = document.getElementById("container");
  container.innerHTML += `
  <div class="card" >
  <div>${name}:</div>
  <div> ${bio}</div>

  </div>`;
});
let elements = document.getElementsByClassName("card");
let input = document.getElementById("input");
let current ;
for(var i=0; i<elements.length;i++){
  elements[i].addEventListener("click", action )
  };


  function action(event){
    // console.log(event.currentTarget.children[1].innerHTML);
    // console.log("inputvalue",event.currentTarget.children[1].innerHTML);
    for(var i=0; i<elements.length;i++){
      elements[i].classList.remove("border");
    }
    current = event.currentTarget;
    console.log("CE",current);
    current.classList.add("border");

    console.log("this current", current);
    console.log("current", current);
    input.focus();
    input.addEventListener("keyup", function(event){
      console.log("event", event);
      current.children[1].innerHTML = input.value;
      console.log(event.keyCode);

    });


      // elements[i].event.currentTarget.children[1].innerHTML += input.value;
  };

input.addEventListener("keyup", function(event){
  console.log("KCE", event);
  if(event.keyCode === 13){
    console.log("Ok we got this far");
    input.value = " ";
  }
})
