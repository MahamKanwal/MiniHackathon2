const cloudName = "dvaczuwrm";
const unsignedUploadPreset = "h0ctw7p3";
           
//importing
import {getAuth,createUserWithEmailAndPassword} from "./firebase.js";
const auth = getAuth();
let signupBtn = document.getElementById("signupBtn");
let signUpEmail = document.getElementById("signupEmail");
let signUpPassword = document.getElementById("signupPassword");
signupBtn.addEventListener("click",()=>{
  
    // signupBtn.addEventListener('click', async() => {
      
          if (signUpEmail.value === "" || signUpPassword.value === "") {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "enter your all credentials",
              showConfirmButton: false,
              timer: 1500
            });
          }
              else if (signUpEmail.value.trim() && signUpPassword.value.trim()) {
            createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "SignUp successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
                setTimeout(() => {
               location.href = "login.html"
                }, 3000)
        
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error:" + errorCode)
                switch (errorCode) {
                  case "auth/missing-email":
                    Swal.fire({
                      position: "top-end",
                      icon: "error",
                      title: "ERROR:" + errorMessage,
                      showConfirmButton: false,
                      timer: 1500
                    });
                    break;
                  case "auth/missing-password":
                    Swal.fire({
                      position: "top-end",
                      icon: "error",
                      title: "ERROR:" + errorMessage,
                      showConfirmButton: false,
                      timer: 1500
                    });
                    break;
                  case "auth/email-already-in-use":
                    Swal.fire({
                      position: "top-end",
                      icon: "error",
                      title: "ERROR:" + errorMessage,
                      showConfirmButton: false,
                      timer: 1500
                    });
                    break;
                  case "auth/weak-password":
                    Swal.fire({
                      position: "top-end",
                      icon: "error",
                      title: "ERROR:" + errorMessage,
                      showConfirmButton: false,
                      timer: 1500
                    });
                }
        
              });
          }
        
        
        // })
      
})
document.getElementById("signOut").addEventListener("click", ()=>{
        //sign out user
        signOut(auth).then(() => {
            Swal.fire({
                position: "top-end",
                title: "user has been signout",
                showConfirmButton: false,
                timer: 1500
              });
          console.log("user has been signout");
          
          }).catch((error) => {
            console.log("Error");
            
            });
            });
    
    
    
    
    
    
