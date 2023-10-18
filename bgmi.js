//bgmi page
const teams = document.querySelectorAll(".team");
const teamNames = document.querySelectorAll(".tname");

teams.forEach((team, index) => {
    team.addEventListener("mouseenter", () => {
        team.style.background = "#008B8B";
        teamNames[index].style.opacity = 1;
    });

    team.addEventListener("mouseleave", () => {
        team.style.background = "rgb(44, 110, 110)";
        teamNames[index].style.opacity = 0;
    });
});
