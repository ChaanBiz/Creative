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
}


function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}