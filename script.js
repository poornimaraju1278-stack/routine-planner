document.getElementById("routineForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let study = Number(document.getElementById("study").value);
    let coding = Number(document.getElementById("coding").value);
    let fitness = Number(document.getElementById("fitness").value);
    let reading = Number(document.getElementById("reading").value);

    let free = 24 - (study + coding + fitness + reading);

    const data = {
        labels: ["Study", "Coding", "Fitness", "Reading", "Free Time"],
        datasets: [{
            data: [study, coding, fitness, reading, free],
            backgroundColor: ["red", "blue", "green", "orange", "purple"]
        }]
    };

    new Chart(document.getElementById("chart"), {
        type: "pie",
        data: data
    });
});
