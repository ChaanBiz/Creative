
// girls and boys bruh coding hits diff 💗 hahahahha lol
// hahahaha do you know about freelancing, btw? girl

// dipako nakapag freelance but you do know, huh? jasyhuiycfa lol
// oo hahahhahhahahhah gusto mo freelance tayo sometime?

// hmmm pag isipan ko haha || oks

// let sendButton = document.querySelector("#send")

// let response = document.querySelector(".response")

const submitForm = async (e) => {
  let name = document.querySelector("[type='text']").value
  let email = document.querySelector("[type='email']").value
  const url = "http://localhost:8000"
  const res = axios({
    method: "POST",
    url: `${url}/subscribe`,
    data: {
      name,
      email
    },
    headers: {
      'Bypass-Tunnel-Reminder': 'true'
    }
  }).then(res => window.open(res.data.email))
  // if (res) {
  //   console.log(res.data)
  // } else {
  //   console.log("sending")
  // }
  // window.open(res.data.email)
}


function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}