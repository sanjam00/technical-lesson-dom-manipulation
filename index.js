const userInfo = {
    //example data; contains unique data for each user
    //change as we manipulate the DOM to see how the webpage responds/behaves
    username: "flatuser123",
    description: "Hi, this is my webpage!",
    theme: "blue"
}

function displayUser (userInfo){
    // have all of your DOM manipulation happen within this function
    const header = document.querySelector("#main");
    header.textContent = userInfo.username + "'s Personal Webpage";
    header.className = userInfo.theme;
    
    const description = document.createElement("p");
    const body = document.querySelector("body");

    description.textContent = userInfo.description;
    description.className = userInfo.theme;

    body.append(description);
}

displayUser(userInfo);