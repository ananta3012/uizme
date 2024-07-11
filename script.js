
const submitHandler = async (e) => {
  document.getElementById('submit').style.backgroundColor = '#afafaf';
  document.getElementById('submit').setAttribute("disabled", "true");
  document.getElementById('form-response').style.display = 'block';
  document.getElementById('form-response').textContent = 'Please Wait...';
  e.preventDefault();
  const email = document.getElementById('email-input').value.toLowerCase();
  console.log(`https://script.google.com/macros/s/AKfycbxhcSw_QURK6SF7XZHIFSzqnYITZXyesL9bTyBtTVQcgyjLL7O_PehmaDhF6Rr9Ke9Q/exec?email=${email}`);
  console.log("Form submitted!")
  // // miimc a delay of 2 sec
  // await new Promise(r => setTimeout(r, 2000));
  await fetch(`https://script.google.com/macros/s/AKfycbxhcSw_QURK6SF7XZHIFSzqnYITZXyesL9bTyBtTVQcgyjLL7O_PehmaDhF6Rr9Ke9Q/exec?email=${email}`,{
    method: 'GET',
  })
  document.getElementById('email-input').value=''
  document.getElementById('form-response').textContent = 'You are added to the waitlist✅';
  document.getElementById('submit').removeAttribute("disabled")
  document.getElementById('submit').style.backgroundColor = '#63432C';
}

const clearResponse = () => {
  console.log("clearing");
  document.getElementById('form-response').style.display = 'none';
  document.getElementById('form-response').textContent = '';

}