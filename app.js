
// var container=document.getElementById('container');
// container.onclick=function moveon(e){
//   for(i=0; i<=100; i++){
//     var img =document.getElementById('img');
//    img.style.position='fixed';
//    var value1=e.clientX;
//    var value2=e.clientY;
//   img.style.top= `${value2}px`;
//   img.style.left =`${value1}px`;

// }
// }

// function create(){
//   let h1= document.createElement('h1');
//   h1.innerHTML='this is heading 1';
//   let body=document.body;
//   body.append(h1);
// }

function elementCreator(event){
    event.preventDefault()
   var form= document.forms.elementForm;
   var elementName= form.elements.element.value;
   var text= form.elements.text.value;
   var tag= document.createElement(elementName);
     tag.innerHTML= text;
   var saveFile= document.getElementById('save-file');
   saveFile.append(tag)
  //  hello comment
  var hello = 'iimran'
}