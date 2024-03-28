var fileform= document.querySelector("#formfileinput")
var folderform = document.querySelector("#formfolderinput")
document.querySelector("#fileinput").addEventListener("click",function(){
    fileform.style.display="initial"
})
document.querySelector("#folderinput").addEventListener("click",function(){
    folderform.style.display="initial"
})

document.querySelector("#fileinput").addEventListener("click",function(){
    folderform.style.display="none"
})
document.querySelector("#folderinput").addEventListener("click",function(){
    fileform.style.display="none"
})
document.querySelector("#refresh").addEventListener("click",function(){
    fileform.style.display="none"
    folderform.style.display="none"
})



// document.querySelector("#fileinput").addEventListener("click",function(){
//     if( fileform.style.display==="none")
//     {
//         fileform.style.display="initial"
        
//     }
//     else{
//         fileform.style.display="none"
        
//     }

// })
// document.querySelector("#folderinput").addEventListener("click",function(){
//     if( folderform.style.display==="none")
//     {
//         folderform.style.display="initial"
        
//     }
//     else{
//         folderform.style.display="none"
        
//     }

// })





document.querySelector(".files")
.addEventListener("click",function(dets){
if(dets.target.id==="editbtn"){
    document.querySelector("#overlay").style.display="flex"
    document.querySelector("#overlay #renameinput").value = dets.target.dataset.renamefile
    document.querySelector("#renameForm").setAttribute("action",`/rename/${dets.target.dataset.renamefile}`)
console.log(dets.target.dataset.renamefile)
}

})

document.querySelector("#savefile").addEventListener("click",function(){
    document.querySelector("#openfile").submit()
})

