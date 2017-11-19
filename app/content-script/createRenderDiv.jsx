export default function createDiv(divId){
  if (!document.getElementById(divId)) {
      var div = document.createElement("div");
      div.id = divId;
      document.body.appendChild(div);
  }
}
