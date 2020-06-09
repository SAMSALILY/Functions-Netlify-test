
 const fetch = require("node-fetch");
  var M=0;
  M= document.getElementById('id').value;

  console.log(M)
 var q ={}
 fetch("http://localhost:9000/quote", {
    method: 'POST',
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify({"M":M})
    //body: {"M":25}
  })
  .then(res=> res.json())
 .then(res => {res.text; q=res; console.log(res)})
  .catch(err=>console.log(err))

  
  //console.log(a)