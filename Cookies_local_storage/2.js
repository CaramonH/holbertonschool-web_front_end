function setCookies() {
  const d = new Date();
  d.setTime(d.getTime() + (8 * 24 * 60 * 60 * 1000)); //8 day expiration
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `firstname=${document.querySelector('#firstname').value}; ${expires}`;
  document.cookie = `email=${document.querySelector('#email').value}; ${expires}`;
}

function showCookies() {
  const p = document.createElement('p');
  const email = getCookie('email');
  const firstname = getCookie('firstname');
  p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
  document.body.appendChild(p);
}

function getCookie(name) {
  let find = name;
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(find) == 0) {
      return c.substring(find.length + 1, c.length);
    }
  }
  return '';
}