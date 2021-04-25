// changer le mode nuit-jour
document.querySelector("#mode").addEventListener("click", () => {
  const $body = document.querySelector("body");
  $body.dataset.theme = $body.dataset.theme === "light" ? "dark" : "light";
});

// créer le tableau qui regroupe mes formations
const education = [
  {
    date: "Mars-Juin 2019",
    title: "Pilates Reformer 1,2&3",
    name: "Balanced Body University",
    place: "Londre, UK",
  },
  {
    date: "Octobre 2018 - Janvier 2019",
    title: "Pilates Matwork 1,2&3",
    name: "Balanced Body University",
    place: "Bruxelles, Belgique",
  },
  {
    date: "2014-2015",
    title: "Brevet Professionnel de la Jeuness, de l’éducation populaire et du sport",
    name: "Global Training Formation",
    place: "Paris, France",
  },
  {
    date: "2012-2015",
    title: "Master I & II “Administration et Gestion des Organisations Sportives",
    name: "Université Paris Est",
    place: "Paris, France",
  },
  {
    date: "2005",
    title: "BAC Général",
    name: "Lycée sportif de la ville de Samara",
    place: "Russie",
  },
];
const createTableData = (key, value) => {
  const $element = document.createElement("td");
  $element.classList.add(`incase__${key}`);
  $element.innerText = value;
  return $element;
};
education.forEach((incase) => {
  const $incase = document.createElement("tr");
  $incase.classList.add("incase");

  $incase.appendChild(createTableData("date", incase.date));
  $incase.appendChild(createTableData("title", incase.title));
  $incase.appendChild(createTableData("name", incase.name));
  $incase.appendChild(createTableData("place", incase.place));

  document.querySelector("tbody").appendChild($incase);
});
function responsiveCv(x) {
  if (x.matches) { // If media query matches
    document.getElementById("desktop-version").style.display = "none";
    document.getElementById("mobile-version").style.display = "block";
  }else{
    document.getElementById("desktop-version").style.display = "block";
    document.getElementById("mobile-version").style.display = "none";
  }
}
var x = window.matchMedia("(max-width: 1150px)")
responsiveCv(x) // Call listener function at run time
x.addListener(responsiveCv) // Attach listener function on state changes
