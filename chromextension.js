let lead = ["btgunlugu.com.tr", "donanimgunlugu.com"]
const ulEl = document.getElementById("ul-el")
const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const container = document.getElementById("container")


saveBtn.addEventListener("click", function() {
    lead.push(inputEl.value)
    inputEl.value = ""
    renderlead()
})

  function renderlead() { 
    for (let i=0; i<lead.length; i++) {
        ulEl.innerHTML += "<li>" + lead[i] + "</li>"
    }
  }