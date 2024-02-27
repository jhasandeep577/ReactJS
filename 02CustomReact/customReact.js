const Container=document.querySelector('#root');
const reactElement={
    type:'a',
    prop:{
        href:'https://www.google.com/',
        target:'_blank'
        },
    childern:"Click me"
}

function customRender(container,reactElement){
     let newelement=document.createElement(reactElement.type)
      for (const prop in reactElement.prop) {
            newelement.setAttribute(prop,reactElement.prop[prop])
        }
        newelement.innerHTML=reactElement.childern;
     container.appendChild(newelement)   
}

customRender(Container,reactElement)