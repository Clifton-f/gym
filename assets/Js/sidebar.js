fetch("../sidebar.html").then(res => res.text())
.then(text => document.getElementById("sidebar-object").innerHTML=text
)