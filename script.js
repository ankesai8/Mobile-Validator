//To obtain Data from url
async function getdata(url) {
    const response = await fetch(url);
    //response from url
    const data = await response.json();
    return data;
  }
  function reset(){
    document.getElementById("code").value="";
    document.getElementById("number").value="";
  }
  async function get() {
    code = document.getElementById("code").value;
    number = document.getElementById("number").value;
    fullnumber = `${code}${number}`;
    
    url = `https://phonevalidation.abstractapi.com/v1/?api_key=7ffbd181dc804c45b06d4b81db6b5e20&phone=${fullnumber}`;
    const data = await getdata(url);
    console.log(data.valid);
    document.getElementById("Country Name").innerHTML = data.country.name;
    document.getElementById("Country Code").innerHTML = data.country.code;
    document.getElementById("Prefix").innerHTML = data.country.prefix;
    document.getElementById("Number").innerHTML = data.phone;
    document.getElementById("Carrier").innerHTML = data.carrier;
    document.getElementById("Valid").innerHTML = data.valid;
    document.getElementById("Location").innerHTML = data.location;
    document.getElementById("Type").innerHTML = data.type;
    document.getElementById("table").style.display = "table";
    if (data.valid == true) {
        document.getElementById("color").style.backgroundColor = "yellow";
        document.getElementById("status").innerHTML = ` <i class="fa fa-check " aria-hidden="true"></i> Number is valid`;
      } else {
        document.getElementById("color").style.backgroundColor = "red";
        document.getElementById("status").innerHTML = `<i class="fa fa-times " aria-hidden="true"></i> Number is invalid`;
      }
    reset();
  }
  
