
async function getJson(){
  try {
      let response = await fetch('./example.json')
      let json = await response.json()
      return json
  } catch (err) {
      console.log("Error ==> ", err)
  }
}

function printJson(list){

  listDiv = document.getElementById("listDiv");

  list.results.forEach(element => {
    listDiv.innerHTML += "<p><h2>Tarea: " + element.title + "</h2>" +  "Prioridad: " + element.priority + " / ¿Hecho?: " + element.isDone + "</p>";
  });

}

async function app(){

  let list = await getJson();

  printJson(list);
 
  /* document.getElementById("listDiv").innerHTML = list.results[0].title; */

}

