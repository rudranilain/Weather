async function c(){
    appid='143454aa39bbe3442a890cdbf3f9db36';
    place=document.getElementById("u").value;
    base=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appid}`;
    response = await fetch(base);
    data =  await response.json();
    console.log(data)

    if(data.message == "city not found"){
      document.getElementById("h4").innerHTML = "City not found!";
      document.getElementById("ans").style.display="none";
      document.getElementById("body").style.backgroundImage='url("grey.jpg")';
      document.getElementById("u").value = "";
    }
    
    t=Math.floor(data.main.temp);
    mit=Math.floor(data.main.temp_min);
    mat=Math.floor(data.main.temp_max);
    w=Math.floor(data.wind.speed);
    h=Math.floor(data.main.humidity);
    d = data.weather[0].main;
    document.getElementById("ans").style.display="inline-block"
    document.getElementById("h4").innerHTML = "";
    document.getElementById("nop").innerHTML=place;
    document.getElementById("t").innerHTML=t-273+"°C";
    document.getElementById("mit").innerHTML=mit-273+"°C";
    document.getElementById("mat").innerHTML=mat-273+"°C";
    document.getElementById("w").innerHTML=w+"km/hr";
    document.getElementById("h").innerHTML=h+"%";
    document.getElementById("d").innerHTML=d;
    

    if(d=="Clear")
    {
        document.getElementById("img").src="clear.png";
        document.getElementById("body").style.backgroundImage="url('sunnybg.jpg')";
    }
    else if(d=="Clouds")
    {
        document.getElementById("img").src="cloudy.png";
        document.getElementById("body").style.backgroundImage="url('cloudybg.jpg')";

    }
    else if(d=="Rain")
    {
      document.getElementById("img").src="rain.png";
      document.getElementById("body").style.backgroundImage="url('rainybg.jpg')";
    }
    else if(d=="Drizzle")
    {
        document.getElementById("img").src="drizzle.png";
      document.getElementById("body").style.backgroundImage="url('drizzlebg.jpg')";
    }
    else if(d=="Haze")
        {
            document.getElementById("img").src="haze-1.png";
          document.getElementById("body").style.backgroundImage="url('hazebg.avif')";
        }
    else if(d=="Smoke")
        {
            document.getElementById("img").src="smoke.webp";
      document.getElementById("body").style.backgroundImage="url('smokebg.jpg')";
    }
    else if(d=="Mist")
        {
            document.getElementById("img").src="mist.png";
      document.getElementById("body").style.backgroundImage="url('mistbg.jpg')";
    }
    else if(d=="Snow")
      {
          document.getElementById("img").src="snow.png";
    document.getElementById("body").style.backgroundImage="url('snowbg.jpg')";
  }
  document.getElementById("u").value = "";

}

window.addEventListener("keydown", show);
async function show(e){
    ascii = e.keyCode;
    console.log(ascii);
    if(ascii == 13){
      appid='143454aa39bbe3442a890cdbf3f9db36';
      place=document.getElementById("u").value;
      base=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appid}`;
      response = await fetch(base);
      data =  await response.json();
      console.log(data)
      
      if(data.message == "city not found"){
        document.getElementById("h4").innerHTML = "City not found!";
        document.getElementById("ans").style.display="none";
        document.getElementById("body").style.backgroundImage='url("grey.jpg")';
        document.getElementById("u").value = "";
      }
      t=Math.floor(data.main.temp);
      mit=Math.floor(data.main.temp_min);
      mat=Math.floor(data.main.temp_max);
      w=Math.floor(data.wind.speed);
      h=Math.floor(data.main.humidity);
      d = data.weather[0].main;
      
      document.getElementById("ans").style.display="inline-block";
      document.getElementById("h4").innerHTML = "";
      document.getElementById("nop").innerHTML=place;
      document.getElementById("t").innerHTML=t-273+"°C";
      document.getElementById("mit").innerHTML=mit-273+"°C";
      document.getElementById("mat").innerHTML=mat-273+"°C";
      document.getElementById("w").innerHTML=w+"km/hr";
      document.getElementById("h").innerHTML=h+"%";
      document.getElementById("d").innerHTML=d;
  
      if(d=="Clear")
      {
          document.getElementById("img").src="clear.png";
          document.getElementById("body").style.backgroundImage="url('sunnybg.jpg')";
      }
      else if(d=="Clouds")
      {
          document.getElementById("img").src="cloudy.png";
          document.getElementById("body").style.backgroundImage="url('cloudybg.jpg')";
  
      }
      else if(d=="Rain")
      {
        document.getElementById("img").src="rain.png";
        document.getElementById("body").style.backgroundImage="url('rainybg.jpg')";
      }
      else if(d=="Drizzle")
      {
          document.getElementById("img").src="drizzle.png";
        document.getElementById("body").style.backgroundImage="url('drizzlebg.jpg')";
      }
      else if(d=="Haze")
          {
              document.getElementById("img").src="haze-1.png";
        document.getElementById("body").style.backgroundImage="url('hazebg.avif')";
      }
      else if(d=="Smoke")
          {
              document.getElementById("img").src="smoke.webp";
        document.getElementById("body").style.backgroundImage="url('smokebg.jpg')";
      }
      else if(d=="Mist")
          {
              document.getElementById("img").src="mist.png";
        document.getElementById("body").style.backgroundImage="url('mistbg.jpg')";
      }
      else if(d=="Snow")
        {
            document.getElementById("img").src="snow.png";
      document.getElementById("body").style.backgroundImage="url('snowbg.jpg')";
    }
    document.getElementById("u").value = "";
    }
}