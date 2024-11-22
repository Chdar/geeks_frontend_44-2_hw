const seasons = {
    winter: ["December", "January", "February"],
    spring: ["March", "April", "May"],
    summer: ["June", "July", "August"],
    autumn: ["September", "October", "November"]
};

function displayMonths(season) {
    const monthButtons = document.getElementById("month-buttons");
    monthButtons.innerHTML = '';

    const seasonColors = {
        winter: "#add8e6",
        spring: "#lightpink",
        summer: "#ffb347",
        autumn: "#ffa07a"
    };

    const buttonColor = seasonColors[season];

    seasons[season].forEach(month => {
        const button = document.createElement("button");
        button.innerText = month;
        button.classList.add("month-button");
        button.style.backgroundColor = buttonColor;
        button.style.color = "white";

        if (month === "May") {
            button.id = "may";
        }

        monthButtons.appendChild(button);
    });

    document.body.style.backgroundImage = `url('${season}.jpg')`;
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundRepeat = "no-repeat";
}

function setSeasonButtonStyles() {
    const seasonColors = {
        winter: "#add8e6",
        spring: "lightpink",
        summer: "#ffb347",
        autumn: "#ffa07a"
    };

    Object.keys(seasonColors).forEach(season => {
        const button = document.getElementById(season);
        button.style.backgroundColor = seasonColors[season];
        button.style.color = "white"; 
        button.style.border = "none"; 
        button.style.padding = "10px 20px"; 
        button.style.borderRadius = "5px"; 
        button.style.margin = "5px"; 
        button.style.cursor = "pointer"; 
    });
}

document.getElementById("winter").addEventListener("click", () => displayMonths("winter"));
document.getElementById("spring").addEventListener("click", () => displayMonths("spring"));
document.getElementById("summer").addEventListener("click", () => displayMonths("summer"));
document.getElementById("autumn").addEventListener("click", () => displayMonths("autumn"));

setSeasonButtonStyles();
