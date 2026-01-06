
fetch("components/header.html").then(r=>r.text()).then(d=>header.innerHTML=d);
fetch("components/navbar.html").then(r=>r.text()).then(d=>navbar.innerHTML=d);
