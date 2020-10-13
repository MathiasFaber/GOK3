class user {
    constructor(name, birthday, gender, location, email, password, uniqueUserID)
    {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.location = location;
        this.email = email;
        this.password = password;
        this.uniqueUserID = uniqueUserID;
        //like funktion 
    };
    
    //Denne funktion skal skabe et unikt bruger-ID når person opretter sig i dating appen.
    //Funktionen giver bruger 1 nr. 1 og bruger 2 nr 2 osv. 
    generateUserID (){
        var counter = 0;
        return function () {counter += 1; return counter}
    }

}

class paymentUser extends user{
    constructor(name, birthday, gender, location, email, password, uniqueUserID, cardHolderName, expireDate, cardNumber, cvcNumber)
    {
    super(name, birthday, gender, location, email, password, uniqueUserID, cardHolderName)
        this.expireDate = expireDate;
        this.cardNumber = cardNumber;
        this.cvcNumber = cvcNumber;
    // add super like eller sådan noget
    }
}


class freeUser extends user{
    constructor(name, birthday, gender, location, email, password, uniqueUserID)
    {
        super(name, birthday, gender, location, email, password, uniqueUserID)
    }
}

// En funktion som validerer hvorvidt en nyoprettet bruger er en freeuser eller en paymentuser
function validatePaid(){
    var x = document.getElementById("cardNumber").nodeValue;
    if (x == null){
        var newUser = new freeUser ("Mathias", [2000, 02, 02], "Male", "Denmark", "mafaber@hotmail.dk", "hej123", 1);

    } else{
        var newUser = new paymentUser ("Mathias", [2000, 02, 02], "Male", "Denmark", "mafaber@hotmail.dk", "hej123", 1, "Mathias Faber Kristiansen", [2022, 01, 01], 1234567891234567, 123);
    }
}

class interest extends user {
    constructor(name)
    super(name)
    // Hvis personen liker, CRUD til en liste med alle folk som de liker
}

//Et tomt array hvor alle de brugere (ID), som man liker, bliver pushet til.
var likedUsers = [];

class match extends interest {
    constructor(name)
    super(name)
    //Metoder som sammenligner de forskellige CRUD endpoints for forskellige personer og derved laver matches.
    //Dette giver access til besked funktionen. 
}

// Like funktionen skal pushe personer der er blevet liket til det tomme array med variablen likedUsers.
function like() {
    // Disse to varibale nedenfor skal repræsentere swipe right (like) og swipe left (disslike) funktionen på tinder
    // Jeg har lavet det som hhv like og dislike knap.
    let likeBtn = document.getElementById("likeBtn");
    let disslikeBtn = document.getElementById("disslikeBtn");
    // Her laves en eventlistener
    likeBtn.addEventListener(onclick,()=>{
        likedPersons.push(userLike.uniqueUserID)
    })
};
