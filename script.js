
const submitHandler = async (e) => {
  document.getElementById('form-response').style.display = 'none';
  e.preventDefault();
  const email = document.getElementById('email-input').value.toLowerCase();
  console.log(`https://script.google.com/macros/s/AKfycbxhcSw_QURK6SF7XZHIFSzqnYITZXyesL9bTyBtTVQcgyjLL7O_PehmaDhF6Rr9Ke9Q/exec?email=${email}`);
  console.log("Form submitted!")
  await fetch(`https://script.google.com/macros/s/AKfycbxhcSw_QURK6SF7XZHIFSzqnYITZXyesL9bTyBtTVQcgyjLL7O_PehmaDhF6Rr9Ke9Q/exec?email=${email}`,{
    method: 'GET',
  })
  document.getElementById('email-input').value=''
  document.getElementById('form-response').style.display = 'block';
}

const clearResponse = () => {
  console.log("clearing");
  document.getElementById('form-response').style.display = 'none';
}