const fighters = {
    "GermainMMA": [
        "Fait une clé de bite et étouffe",
        "Pisse par terre, se roule dedans et se moque de son adversaire ridicule",
        "Met KO son adversaire par sa beauté céleste",
        "Prend un shaker de prot et l'enfonce dans le rectum de son adversaire",
        "Maki insulte Germain et prend part au combat et encule l'adversaire"
    ],
    "YoussefGourdini": [
        "Sort son gourdin massif et assomme l'adversaire",
        "Démarre sa Porsche et écrase l'adversaire",
        "Fait un chiffre démentiel et humilie l'adversaire, KO instantané",
        "Prend 3 semaines de vacances 5 fois d'affilé et ridiculise l'adversaire, KO direct"
    ],
    "Dani3some": [
        "Utilise l'attaque Strangulation et étouffe son adversaire de plaisir",
        "Réalise un gangbang et utilise toute la jouissance accumulée pour mettre KO l'adversaire",
        "Utilise ses origines portugaises pour mettre tout le monde dans le Duro et les achever",
        "Sort trop de digestifs à ses adversaires et les met KO"
    ],
    "VictorTetoni": [
        "Se met à faire une danse ougandaise suivie d'une improvisation théâtrale de la célèbre actrice brésilienne Morena Baccarin pour humilier ses adversaires",
        "Accélère en moto et fonce les tétons pincés à l'air sur ses adversaires pour les mettre KO",
        "Chiffre trop fort à Dentego et sort l'attaque Chiffrax qui tue instantanément ses adversaires",
        "Fait un localizasione del tetoni si puissant que les tétons de l'adversaire éclatent et une hémorragie les tue"
    ],
    "JBchiffrémuscu": [
        "Chiffre un max de cash et étouffe son adversaire avec la montagne de cash accumulé de façon illégale",
        "Montre son bras musclé et crée un arrêt cardiaque chez l'adversaire",
        "Prend une trace de C, plus habitué il devient fou et sodomise son adversaire",
        "Casse une vitre de voiture et égorge son adversaire avec les morceaux de verre"
    ],
    "PierreV8-21": [
        "Transperce tous les adversaires avec son chibrax massif de 21 mégatonnes",
        "Tente de faire le Corse Juif mais se rend compte que les juifs sont des FDP, devient fou et chie sur l'adversaire une chiasse monumentale",
        "Chiffre comme un FDP dans le mâconnais et humilie l'adversaire azuréen",
        "Éclate le cerveau de l'adversaire en faisant cracher le V8 démoniaque"
    ],
    "JaytradeFlop": [
        "Fait un trade perdant et étrangle l'adversaire de rage",
        "Rug ses adversaires en leur proposant un Meme coin scandaleux",
        "Répond à un message du groupe, les adversaires meurent instantanément de surprise"
    ],
    "Damlapistebb": [
        "Enfourne une délicieuse raclette dans l'anus de son adversaire puis l'encule à mort",
        "Fait des Revs sur le cadavre encore chaud de l'adversaire pour l'humilier",
        "Construit un mur en pierre, monte dessus et pisse sur l'adversaire",
        "Fait l'attaque Tigne Chalet Rally et électrocute l'adversaire"
    ],
    "SergeShonen": [
        "Devient australien et chie sur la France, l'adversaire est KO",
        "Réalise l'attaque kickboxeur suisse et découpe la tête de l'adversaire avec un highkick féroce",
        "Met un short trop court pour amadouer l'adversaire, et finit par l'enculer jusqu'à la mort"
    ],
    "DavidRacedumito": [
        "Révèle le fameux chiffre scoré officiel et tue l'adversaire choqué",
        "Réalise une race du mito mitonnante et prend par surprise l'adversaire",
        "Vend son parc immobilier de 18 appartements et achète un tank et roule sur l'adversaire"
    ]
};

// Liste complète des noms pour sélection
const fighterNames = Object.keys(fighters);

// Leaderboard
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || {};

// Fonctions utilitaires
function updateLeaderboard(winner) {
    leaderboard[winner] = (leaderboard[winner] || 0) + 1;
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    displayLeaderboard();
}

function displayLeaderboard() {
    const list = document.getElementById("leaderboard-list");
    list.innerHTML = "";
    Object.entries(leaderboard)
        .sort((a, b) => b[1] - a[1])
        .forEach(([name, wins]) => {
            const li = document.createElement("li");
            li.textContent = `${name}: ${wins} victoire(s)`;
            list.appendChild(li);
        });
}

// Démarrer le mode Duel
function startDuel() {
    document.querySelector(".game-mode").classList.add("hidden");
    const selection = document.getElementById("fighters-selection");
    selection.classList.remove("hidden");
    const fighter1 = document.getElementById("fighter1");
    const fighter2 = document.getElementById("fighter2");
    fighterNames.forEach(name => {
        fighter1.innerHTML += `<option value="${name}">${name}</option>`;
        fighter2.innerHTML += `<option value="${name}">${name}</option>`;
    });
}

// Lancer un duel
function launchDuel() {
    const fighter1 = document.getElementById("fighter1").value;
    const fighter2 = document.getElementById("fighter2").value;
    if (fighter1 === fighter2) {
        alert("Choisis deux combattants différents !");
        return;
    }
    document.getElementById("fighters-selection").classList.add("hidden");
    const gameArea = document.getElementById("game-area");
    gameArea.classList.remove("hidden");
    simulateDuel(fighter1, fighter2);
}

// Simuler un duel
function simulateDuel(f1, f2) {
    const log = document.getElementById("combat-log");
    log.innerHTML = `<p>${f1} vs ${f2} : Que le combat commence !</p>`;
    const winner = Math.random() > 0.5 ? f1 : f2;
    const finish = fighters[winner][Math.floor(Math.random() * fighters[winner].length)];
    setTimeout(() => {
        log.innerHTML += `<p>${winner} gagne avec : "${finish}" !</p>`;
        updateLeaderboard(winner);
        document.getElementById("reset-btn").classList.remove("hidden");
    }, 1000);
}

// Démarrer une baston générale
function startBaston() {
    document.querySelector(".game-mode").classList.add("hidden");
    const gameArea = document.getElementById("game-area");
    gameArea.classList.remove("hidden");
    simulateBaston();
}

// Simuler une baston générale
function simulateBaston() {
    const log = document.getElementById("combat-log");
    let remainingFighters = [...fighterNames];
    log.innerHTML = `<p>Baston générale : ${remainingFighters.join(", ")} !</p>`;
    
    while (remainingFighters.length > 1) {
        const attacker = remainingFighters[Math.floor(Math.random() * remainingFighters.length)];
        const victimIdx = remainingFighters.indexOf(attacker);
        const victim = remainingFighters[(victimIdx + 1) % remainingFighters.length];
        const finish = fighters[attacker][Math.floor(Math.random() * fighters[attacker].length)];
        log.innerHTML += `<p>${attacker} élimine ${victim} avec : "${finish}"</p>`;
        remainingFighters.splice(remainingFighters.indexOf(victim), 1);
    }
    
    setTimeout(() => {
        log.innerHTML += `<p>Vainqueur : ${remainingFighters[0]} !</p>`;
        updateLeaderboard(remainingFighters[0]);
        document.getElementById("reset-btn").classList.remove("hidden");
    }, 1000);
}

// Réinitialiser le jeu
function resetGame() {
    document.getElementById("game-area").classList.add("hidden");
    document.getElementById("fighters-selection").classList.add("hidden");
    document.querySelector(".game-mode").classList.remove("hidden");
    document.getElementById("combat-log").innerHTML = "";
    document.getElementById("reset-btn").classList.add("hidden");
}

// Initialiser le leaderboard
displayLeaderboard();