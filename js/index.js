

var SiteNameInput=document.getElementById("SiteName");
var SiteUrlInput=document.getElementById("SiteUrl");



var sitesContainer=[];
if(localStorage.getItem("sites")!=null){
    sitesContainer=JSON.parse(localStorage.getItem("sites"))
 display();
 }

function addSite(){
        var site={
            name:SiteNameInput.value,
            url:SiteUrlInput.value,
        }
        
        sitesContainer.push(site);
        localStorage.setItem("sites",JSON.stringify(sitesContainer))
        display();
        clearForm();
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
       document.getElementById("tableData").innerHTML=cartona;
    }
}
function deleteData(indexnum){

    sitesContainer.splice(indexnum,1);
    localStorage.setItem("sites",JSON.stringify(sitesContainer))
    display();
    
}

function clearForm(){
    SiteNameInput.value='';
    SiteUrlInput.value='';
}

var x = JSON.parse(localStorage.getItem("sites"));
var btn=document.getElementById('submitbut');
 btn.addEventListener('click' , function(){
           if(sitesContainer.length>0){
         for(var i=0 ; i<sitesContainer.length ; i++){
            if(x[i].url == SiteUrlInput.value){

                     window.alert('URL already exist')
            }else{
                addSite();
            }
         }
      }else{
         addSite();
         
      }


 }
 )

         