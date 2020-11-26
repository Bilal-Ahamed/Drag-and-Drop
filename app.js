console.log('this is drag and drop');
let whiteboards=document.getElementsByClassName('whiteboard')
let imgboard=document.querySelector('.imgboard')

imgboard.addEventListener('dragstart',(e)=>{
  console.log('drag in start');
    e.target.className+=" hold"
    setTimeout(() => {
        e.target.className=" hide"
    }, 0);
    
})
imgboard.addEventListener('dragend',(e)=>{
  console.log('drag in end');
    e.target.className='imgboard'
    
})

for (whiteboard of whiteboards) {
    whiteboard.addEventListener('dragover',(e)=>{
        console.log('dragover is occur');
        e.preventDefault();
    })
    whiteboard.addEventListener('dragenter',(e)=>{
        console.log('dragover is occur');
        e.target.className+=' dashed';
    })
    whiteboard.addEventListener('dragleave',(e)=>{
        console.log('dragover is occur');
        e.target.className='whiteboard'
    })
    whiteboard.addEventListener('drop',(e)=>{
        console.log('dragover is occur');
        e.target.append(imgboard)
    })
    
}
