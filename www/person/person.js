const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
});

const firstname = document.getElementById('firstname');
firstname.innerHTML = params.firstname;

const lastname = document.getElementById('lastname');
lastname.innerHTML = params.lastname;

const dob = document.getElementById('dob');
dob.innerHTML = params.dob;

const place = document.getElementById('place');
place.innerHTML = params.place;
