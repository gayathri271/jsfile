//write a code for userLoggedin checking in array of objects 


let useremail=prompt("enter your email id:")
let userpassword=prompt("enter your password:")
let users=[
    {Email:"Gayathri27@gmail.com",
        password:"Gayathri27"
    },
    {
        Email:"chethan17@gmail.com",
        password:"chethan17"
    }
];
let u=users.find(a=>a.Email==useremail && a.password==userpassword)
if(u){
    console.log("login successfull");
    alert("login successfull")
    
}else{
    console.log("user not found");
    alert("user not found")
    
}


//allow pdf and docx files as resumes to be uploaded


let resumetype1=".pdf";
let resumetype2=".docx";

let uploadResume=prompt("Enter ResumeName along with extension name......");
if(uploadResume.endsWith(resumetype1) || uploadResume.endsWith(resumetype2)){
    alert("Resume uploaded successfully");
}else{
    alert("please choose resume with pdf or docs extension")
}