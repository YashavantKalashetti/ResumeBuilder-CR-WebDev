function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddButton = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButton);
}

// add Educational Details fields
function addNewEDField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('edField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("ed");
    let edAddButton = document.getElementById("edAddButton");

    weOb.insertBefore(newNode,edAddButton);
}

// add new hobby field
function addNewHobbyField(){
    let newNode = document.createElement("input");
    newNode.classList.add('form-control');
    newNode.classList.add('hobbyField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here");
    // newNode.setAttribute("recquired","recquired");

    let weOb = document.getElementById("hobby");
    let hobbyAddButton = document.getElementById("hobbyAddButton");

    weOb.insertBefore(newNode,hobbyAddButton);
}

// add new language field
function addNewLanguageField(){
    let newNode = document.createElement("input");
    newNode.classList.add('form-control');
    newNode.classList.add('languageField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("language");
    let languageAddButton = document.getElementById("languageAddButton");

    weOb.insertBefore(newNode,languageAddButton);
}

// add new skill Fields
function addNewSkillField(){
    let newNode = document.createElement("input");
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here");

    let skillOb = document.getElementById("skill");
    let skillAddButton = document.getElementById("skillAddButton");

    skillOb.insertBefore(newNode,skillAddButton);
}

// add new project fields
function addNewProjectField(){
    let newNode = document.createElement("input");
    newNode.classList.add('form-control');
    newNode.classList.add('projectField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here");

    let projectOb = document.getElementById("project");
    let projectAddButton = document.getElementById("projectAddButton");

    projectOb.insertBefore(newNode,projectAddButton);
}


// generate Resume function call
function generateResume(selected){
    
    // setting name
    document.getElementById(`nameT${selected}`).innerHTML= document.getElementById('nameField').value;
    // setting contact
    document.getElementById(`contactT${selected}`).innerHTML= document.getElementById('contactField').value;
    // setting address
    document.getElementById(`addressT${selected}`).innerHTML= document.getElementById('addressField').value;
    // setting Email
    document.getElementById(`emailT${selected}`).innerHTML= document.getElementById('emailField').value;

    //connection linkks
    
    //github
    document.getElementById(`githubT${selected}`).href=document.getElementById('githubField').value;
    document.getElementById(`githubT${selected}`).innerHTML=document.getElementById('githubField').value;
    // LinkedIn
    document.getElementById(`linkedinT${selected}`).href=document.getElementById('linkedinField').value;
    document.getElementById(`linkedinT${selected}`).innerHTML=document.getElementById('linkedinField').value;
    //facebook
    document.getElementById(`facebookT${selected}`).href=document.getElementById('facebookField').value;
    document.getElementById(`facebookT${selected}`).innerHTML=document.getElementById('facebookField').value;

    // hobbies Fields
    let hobbyarray = document.getElementsByClassName('hobbyField');
    let hobbystring = "";

    for (let e of hobbyarray) {
        hobbystring = hobbystring + `<li> ${e.value} </li>`;
    }

    document.getElementById(`hobbyT${selected}`).innerHTML= hobbystring;

    // language Fields
    let languagearray = document.getElementsByClassName('languageField');
    let languagestring = "";

    for (let e of languagearray) {
        languagestring = languagestring + `<li> ${e.value} </li>`;
    }

    document.getElementById(`languageT${selected}`).innerHTML= languagestring;

    // Professional Information

    // Role
    document.getElementById(`roleT${selected}`).innerHTML= document.getElementById('roleField').value;

    // about me
    document.getElementById(`aboutmeT${selected}`).innerHTML= document.getElementById('aboutme').value;
    //Objective
    document.getElementById(`objectiveT${selected}`).innerHTML= document.getElementById('objectiveField').value;

//work experiences
    let wearray = document.getElementsByClassName('weField');
    let westring = "";

    for (let e of wearray) {
        westring = westring + `<li> ${e.value} </li>`;
    }

    document.getElementById(`weT${selected}`).innerHTML= westring;

//Educational Details
let edarray = document.getElementsByClassName('edField');
    let edstring = "";

    for (let e of edarray) {
        edstring = edstring + `<li> ${e.value} </li>`;
    }

    document.getElementById(`edT${selected}`).innerHTML= edstring;


// Skill field Details
    let skillarray = document.getElementsByClassName('skillField');
    let skillstring = "";

    for (let e of skillarray) {
        skillstring = skillstring + `<li> ${e.value} </li>`;
    }

    document.getElementById(`skillT${selected}`).innerHTML= skillstring;

// Project Field details
    let projectarray = document.getElementsByClassName('projectField');
    let projectstring = "";

    for (let e of projectarray) {
        projectstring = projectstring + `<li> ${e.value} </li>`;
    }

    document.getElementById(`projectT${selected}`).innerHTML= projectstring;
  

    // Setting Profile Photo
    let file = document.getElementById('imageField').files[0];
    // console.log(file);
    
    let reader = new FileReader();
    if(file){
        reader.readAsDataURL(file);
    }    


    reader.onloadend = function (){
        document.getElementById(`imageT${selected}`).src = reader.result;
    };

    //Changing the visiblities
    document.getElementById('next').style.display = 'none';
    // document.querySelector(".navbar").style.display = "none";
    document.getElementById(`cv-template${selected}`).style.display = 'block';
} 

// Printing the Resume
function printResume(num){
    document.getElementById(`hide_${num}`).style.display = 'none';
    document.querySelector(".navbar").style.display = "none";
    window.print();
    document.getElementById(`hide_${num}`).style.display = 'block';
    document.querySelector(".navbar").style.display = "block";
}


// This function to check for the mandatory field to be filled
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    if(!form.checkValidity()){
        e.preventDefault();
        window.location = window.location(true);
        if(e == '.next'){
            window.alert("Fill the Necessary Fields");
        }
    }
    // form.classList.add('was-validated');
});

const next = document.querySelector('.next-page');
next.addEventListener('click',(e)=>{
    const form = document.querySelector('form');
        if(!form.checkValidity()){
            e.preventDefault();
            window.alert("Fill the Necessary Fields");
        }else{
            document.getElementById('cv-form').style.display = 'none';
            document.getElementById('next').style.display = 'inline';
        }
        form.classList.add('was-validated');
});


function Export2Word(element, filename = ''){
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
}

function convertHTMLtoPDF(template) {

    const { jsPDF } = window.jspdf;

    let doc = new jsPDF('l', 'mm', [1500, 1400]);
    let pdfjs = document.getElementById(template);

    doc.html(pdfjs, {
        callback: function(doc) {
            doc.save("newpdf.pdf");
        },
        x: 12,
        y: 12
    });                

} 