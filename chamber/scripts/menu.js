const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//member informaion

fetch("members.json")
  .then(response => response.json())
  .then(data => {
    let members = data.members;
    let cardsContainer = document.querySelector(".cards-container");

    members.forEach(function(member) {
      let card = document.createElement("div");
      card.classList.add("card");

      let h2 = document.createElement("h2");
      h2.textContent = member.name;
      card.appendChild(h2);

      let p1 = document.createElement("p");
      p1.textContent = member.address;
      card.appendChild(p1);

      let p2 = document.createElement("p");
      p2.textContent = member.phone;
      card.appendChild(p2);

      let a = document.createElement("a");
      a.textContent = member.website;
      a.href = member.website;
      card.appendChild(a);

      let img = document.createElement("img");
      img.src = member.icon;
      img.alt = `${member.name} icon`;
      card.appendChild(img);

      let p3 = document.createElement("p");
      p3.textContent = `Membership Level: ${member.membershipLevel}`;
      card.appendChild(p3);

      cardsContainer.appendChild(card);
  });
});