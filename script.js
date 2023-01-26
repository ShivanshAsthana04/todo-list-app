window.onload = function () {
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let list = document.getElementById('list')
    addtask.onclick = function () {
        let li = document.createElement('li')
        let taskspan = document.createElement('span')

        let xbtn = document.createElement("button")
        xbtn.innerText = "❌"
        xbtn.onclick = function (event) {
            console.log(event.target.parentElement.remove())
        }
        let upbtn = document.createElement('button')
        upbtn.innerText = "⬆️"
        upbtn.onclick = function (event) {
            console.log(
                event.target.parentElement.parentElement.insertBefore(
                    event.target.parentElement,
                    event.target.parentElement.previousElementSibling
                )
            )
        }
        taskspan.innerText = newtask.value


        li.appendChild(xbtn)
        li.appendChild(upbtn)
        li.appendChild(taskspan)


        list.appendChild(li)
    }
}