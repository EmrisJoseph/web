function check(){
            var name = document.myForm.Name.value;
            var mobile = document.myForm.mobile.value;
            var username = document.myForm.UserName.value;
            var pass1 = document.myForm.password1.value;
            var pass2 = document.myForm.password2.value;
    
    
    
            document.getElementById("pic").src="";
            document.getElementById("pic1").src="";
            document.getElementById("pic2").src="";
            document.getElementById("pic3").src="";
            document.getElementById("pic4").src="";
            document.getElementById("msg").innerHTML="";
            document.getElementById("msg1").innerHTML="";
            document.getElementById("msg2").innerHTML="";
            document.getElementById("msg3").innerHTML="";
            document.getElementById("msg4").innerHTML="";
    
            
    
    
    
          if(name != name.match(/^[a-zA-Z]+$/)){
              document.getElementById("pic").src="images/error.jpg";
             document.getElementById("pic").style.height='15px';
              document.getElementById("msg").innerHTML="name must only contain characters";
              return false; 
          }
            else if(name.length > 20){
                document.getElementById("pic").src="images/error.jpg";
                 document.getElementById("pic").style.height='15px';
                document.getElementById("msg").innerHTML="Name must not be greater than 20 characters";
              return false;
          }else if (mobile != mobile.match(/^[0-9]+$/)){
             document.getElementById("pic1").src="images/error.jpg";
                 document.getElementById("pic1").style.height='15px';
                document.getElementById("msg1").innerHTML="Number must only have digits";
              return false; 
        }else if (mobile.length <8){
          document.getElementById("pic1").src="images/error.jpg";
                 document.getElementById("pic1").style.height='15px';
                document.getElementById("msg1").innerHTML="Number must only have more than 8 digits";
              return false;
        }
            else if(mobile.length >10){
                document.getElementById("pic1").src="images/error.jpg";
                 document.getElementById("pic1").style.height='15px';
                document.getElementById("msg1").innerHTML="Number must only have 10 digits";
              return false;
          }
            else if(username != username.match(/^[a-zA-Z0-9]+$/)){
                document.getElementById("pic2").src="images/error.jpg";
                 document.getElementById("pic2").style.height='15px';
                document.getElementById("msg2").innerHTML="Your Username must only contain letters and digits";
              return false;
          }
            else if(pass1 != pass1.match(/^[a-zA-Z0-9]+$/) ){
                document.getElementById("pic3").src="images/error.jpg";
                 document.getElementById("pic3").style.height='15px';
                document.getElementById("msg3").innerHTML="Your password should only contain numbers and letters";
              return false;
          }
            else if(pass1.length < 8){
                document.getElementById("pic3").src="images/error.jpg";
                 document.getElementById("pic3").style.height='15px';
                document.getElementById("msg3").innerHTML="Your password should be greater than 8 characters";
              return false;
          }
            else if(pass1.length > 20){
                document.getElementById("pic3").src="images/error.jpg";
                 document.getElementById("pic3").style.height='15px';
                document.getElementById("msg3").innerHTML="Your Password should be less than 20 characters";
              return false;
          }
            else if(pass2 !== pass1 ){
                document.getElementById("pic4").src="images/error.jpg";
                 document.getElementById("pic4").style.height='15px';
                  document.getElementById("msg4").innerHTML="Your Passwords must match";
              return false;
          } 
        }

    function disp(){
        if((sessionStorage in window) && window[sessionStorage] !== null ){
            var name = document.getElementById('use').value;
            sessionStorage.setItem('username',name);
        }
    }


function checkusername(){
    document.getElementById("pic2").src="";
    document.getElementById("msg2").innerHTML="";
     var username = document.myForm.UserName.value;
    if(('localStorage' in window) && window['localStorage'] !== null ){
        if(username == username.match(/^[a-zA-Z0-9]+$/)){
            localStorage.setItem('username',username);
        }else{
             document.getElementById("pic2").src="images/error.jpg";
             document.getElementById("pic2").style.height='15px';
            document.getElementById("msg2").innerHTML="Your Username must only contain letters and digits";
        }
    }else {
        alert('your browser doesnt support local storagevar username  = document.myForm. ');
    }
}

function reset(){
    if(('localStorage' in window) && window['localStorage'] !== null ){
       localStorage.removeItem('username');
    }else {
        alert('your browser doesnt support local storagevar username  = document.myForm. ');
    }
}