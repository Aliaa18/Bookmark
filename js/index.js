

var SiteNameInput=document.getElementById("SiteName");
var SiteUrlInput=document.getElementById("SiteUrl");
var alertWarn = document.getElementById('warn')
var submitbut = document.getElementById('submitbut')

var sitesContainer=[];
if(localStorage.getItem("sites")!=null){
    sitesContainer=JSON.parse(localStorage.getItem("sites"))
 display();
 }

function addSite(){
    if (urlValidation() == true && nameValidation()){
        var site={
            name:SiteNameInput.value,
            url:SiteUrlInput.value,
        }
        sitesContainer.push(site);
        localStorage.setItem("sites",JSON.stringify(sitesContainer))
        display();
        clearForm();
    } 
}



function display(){

    var cartona='';

    for(var i=0;i<sitesContainer.length;i++){
       cartona+=
       `
       <tr>
      <td>${i+1}</td>
      <td>${sitesContainer[i].name}</td>
    
      <td><a href= https://${sitesContainer[i].url}  class="btn  btn-vis"><i class="fa-regular fa-eye "></i> visit</a></td>
       <td><button class="btn btn-outline-danger btn-sm btn-del" onclick="deleteData(${i})"><i class="fa-regular fa-trash-can"></i> Delete</button></td>
      </tr>
       `
       
    }
    document.getElementById("tableData").innerHTML=cartona;
}
function deleteData(indexnum){
             
    sitesContainer.splice(indexnum,1);
    localStorage.setItem("sites",JSON.stringify(sitesContainer))
    display();
    
}

function clearForm(){
    SiteNameInput.value='';
    SiteUrlInput.value='';
    SiteUrlInput.classList.remove('is-valid')
}

var x = JSON.parse(localStorage.getItem("sites"));
var btn=document.getElementById('submitbut');
//  btn.addEventListener('click' , function(){
//            if(sitesContainer.length>0){
//          for(var i=0 ; i<sitesContainer.length ; i++){
//             if(x[i].url == SiteUrlInput.value){

//                      window.alert('URL already exist')
//             }else{
//                 addSite();
//             }
//          }
//       }


//  }
//  )
    function repeated() {  
        var flag=0
                   if(sitesContainer.length>0){ 
                       //4
                    console.log(sitesContainer);
                    
                     for(var i=0 ; i<sitesContainer.length ; i++){ // 0 
                        if(sitesContainer[i].url == SiteUrlInput.value){
                                 
                                 flag=1
                        }
                    }
                    if (flag==1) {
                        window.alert('URL already exist')
                        
                    }else{
                        addSite()
                    }
                }
               
    }
         
  function urlValidation(){
            var  text = SiteUrlInput.value
    var regexUrl = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/
            if(regexUrl.test(text) == true){
                SiteUrlInput.classList.add('is-valid')
                SiteUrlInput.classList.remove('is-invalid')
                alertWarn.classList.add('d-none')
                submitbut.classList.remove('disabled')
                 return true
            }
            // else if(SiteUrlInput.value==' ' || SiteNameInput.value==' '){
            //     window.alert("All fields are required")

            // }
            else{
                SiteUrlInput.classList.remove('is-valid')
                SiteUrlInput.classList.add('is-invalid')
                alertWarn.classList.remove('d-none')
                submitbut.classList.add('disabled')
                return false
            }
  }
  function nameValidation(){
    var nameWarn = document.getElementById('nameWarn')
    var text =SiteNameInput.value;
    var regexName = /^[A-z]{2,50}$/
    if(regexName.test(text)){
      SiteNameInput.classList.add('is-valid')
      SiteNameInput.classList.remove('is-invalid')
      nameWarn.classList.add('d-none')
      btn.classList.remove('disabled')
       return true;
    }else {
      SiteNameInput.classList.add('is-invalid')
      SiteNameInput.classList.remove('is-valid')
      nameWarn.classList.remove('d-none')
      btn.classList.add('disabled')
    return false;
    }
  }
  