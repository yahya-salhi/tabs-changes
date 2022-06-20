const about=document.querySelector(".btn-container")
const btns=document.querySelectorAll(".tab-btn")
const articles=document.querySelectorAll(".content")


about.addEventListener("click",(e)=>{
  const id=e.target.dataset.id
// history,vision,gaol
  if(id){
    // remove selected from other btn
 btns.forEach((btn)=>{
  btn.classList.remove("active")
 })
 e.target.classList.add("active")
//  hide other article
 articles.forEach((article)=>{
  article.classList.remove("active")
})
const element=document.getElementById(id)
element.classList.add("active")
  }
})
