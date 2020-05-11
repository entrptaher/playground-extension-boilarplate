try{
  const frame = document.querySelector('iframe');
  console.log({
    body: document.querySelector('body'),
    documentFrame: frame && frame.contentWindow.document,
  });
}catch(e){
  console.log(window.document.location.href, e.message)
}
