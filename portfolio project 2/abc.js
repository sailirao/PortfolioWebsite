function validateform(){
    var name=document.contactme.name.value;
    if (name==nul||name==""){
        alert("Name can't be blank ");
        return false;
    }
}