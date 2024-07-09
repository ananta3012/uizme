const submitHandler = (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.toLowerCase();
  console.log(`https://script.google.com/macros/s/AKfycbxhcSw_QURK6SF7XZHIFSzqnYITZXyesL9bTyBtTVQcgyjLL7O_PehmaDhF6Rr9Ke9Q/exec?email=${email}`);
  console.log("Form submitted!")
  fetch(`https://script.google.com/macros/s/AKfycbxhcSw_QURK6SF7XZHIFSzqnYITZXyesL9bTyBtTVQcgyjLL7O_PehmaDhF6Rr9Ke9Q/exec?email=${email}`,{
    method: 'GET',
  })
}