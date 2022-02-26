$("#form").submit((e) => {
    e.preventDefault();

    let namecheck = true;
    let emailcheck = true;
    let phonecheck = true;
    let subjectcheck = true;
    let messagecheck = true;

    const name = $("#name").val(); 
    if (name === "") {
        $("#errorName").text("*Insert name!")
        namecheck = false;
    }
    if (!(name === ""))  {
        $("#errorName").text("")
        namecheck = true;
    }

    const email = $("#email").val(); 
    if (email === "" || !email.includes("@")) {
        $("#errorEmail").text("*Insert valid email!")
        emailcheck = false;
    }
    if (!(email === ""|| !email.includes("@"))) {
        $("#errorEmail").text("")
        emailcheck = true;
    }

    const numbers = $("#phoneNumbers").val(); 
    if (numbers.length < 10 || numbers.length > 13 || !numbers.startsWith("08")) {
        $("#errorNumbers").text("*Insert valid phone numbers!")
        phonecheck = false;
    }   
    if (!(numbers.length < 10 || numbers.length > 13 || !numbers.startsWith("08"))) {
        $("#errorNumbers").text("")
        phonecheck = true;
    }   

    const subject = $("#subject").val(); 
    if (subject === "") {
        $("#errorSubject").text("*Input subject!")
        subjectcheck = false;
    }
    if (!(subject === "")) {
        $("#errorSubject").text("")
        subjectcheck = true;
    }

    const message = $("#message").val().trim().split(" "); 
    if (message.length < 3 || message.length > 100) {
        $("#errorMessage").text("*Input 3-100 words!")
        messagecheck = false;
    }

    if (!(message.length < 3 || message.length > 100)) {
        $("#errorMessage").text("")
        messagecheck = true;
    }

    if (namecheck == true && emailcheck == true && phonecheck == true && subjectcheck == true && messagecheck == true){
        $("#name").val("");
        $("#email").val("");
        $("#phoneNumbers").val("");
        $("#subject").val("");
        $("#message").val("");
        $(".form-text").text("Data saved!");
        $(".form-text").css("color", "green");
        setTimeout (() => {
            $(".form-text").text("We'll never share your data with anyone else.");
            $(".form-text").css("color", "#6c757d");
        },5000);
    }
});