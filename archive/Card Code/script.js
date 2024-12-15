function open_profile() {
  let profile_wrap_open = document.getElementById("nav__profileWrap");
  profile_wrap_open.classList.toggle("open_menu");
}

function bookmarkToggle(elementId) {
  const bookmark = document.querySelector("#" + elementId);

  if (bookmark.getAttribute("data-name") === "off") {
    bookmark.setAttribute("data-name", "on");
    bookmark.setAttribute("viewBox", "0 0 38 38");

    bookmark.innerHTML = `<defs>
    <style>
      .cls-1 {
        fill: #f1f1f1;
      }
    </style>
  </defs>
  <circle class="cls-1" cx="19" cy="19" r="19" />
  <path
    d="M26.51,8.49c.8.18,1.33.7,1.4,1.54v17.9c-.04,1.42-1.71,2.05-2.75,1.15l-6.14-5.89c-.22.18-.44.38-.65.57-1.72,1.62-3.36,3.35-5.11,4.95-.36.32-.77.72-1.26.79-.99.14-1.87-.57-1.9-1.57V10.07c.06-.85.55-1.36,1.36-1.58h15.07Z" />`;
  } else {
    bookmark.setAttribute("data-name", "off");
    bookmark.setAttribute("viewBox", "0 0 238 238");

    bookmark.innerHTML = `<defs>
          <style>
            .cls-1 {
              fill: #f1f1f1;
            }
          </style>
        </defs>
        <circle class="cls-1" cx="119" cy="119" r="119" />
        <path
          d="M166.05,53.16c5.01,1.14,8.31,4.4,8.74,9.65v112.11c-.26,8.89-10.7,12.84-17.23,7.19l-38.47-36.88c-1.37,1.15-2.78,2.35-4.09,3.57-10.8,10.15-21.05,21.01-32,30.99-2.23,2.03-4.8,4.52-7.91,4.94-6.18.85-11.69-3.56-11.9-9.82V63.05c.39-5.35,3.45-8.49,8.49-9.89h94.36ZM163.48,64.22h-88.96v107.99l44.39-42.4,44.57,42.4v-107.99Z" />`;
  }
}

function dynamic_cardGeneration() {
  const data_card = [
    {
      finalDate: "15 Jan, 2025",
      companyName: "Pepsi",
      jobTitle: "Warehouse Manager",
      companyLogo: "./assets/companyLogo/Pepsi.png",
      jobConditions: [
        `Full-time`,
        `On-site`,
        `Shift Work`,
        `Fast-paced Environtment`,
      ],
      wage: "RM 7,500/month",
      companyLocation: "Selangor, Malaysia",
    },
    {
      finalDate: "31 Jan, 2025",
      companyName: "H & M",
      jobTitle: "Store Manager",
      companyLogo: "./assets/companyLogo/H&M.png",
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `Customer-focused`,
        `Retail Hours`,
        `On-site`,
      ],
      wage: "RM 7,000/month",
      companyLocation: "Kuala Lumpur, Malaysia",
    },
    {
      finalDate: "20 Dec, 2025",
      companyName: "McDonalds",
      jobTitle: "Marketing Analyst",
      companyLogo: "./assets/companyLogo/McDonalds.png",
      jobConditions: [`Full-time`, `Hybrid`, `Flexible Hours`, `Data-driven`],
      wage: "RM 4,000/month",
      companyLocation: "Selangor, Malaysia",
    },
    {
      finalDate: "15 Feb, 2025",
      companyName: "Ford Motor",
      jobTitle: "Product Development Manager",
      companyLogo: "./assets/companyLogo/Ford.png",
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `On-site`,
        `Project-based`,
        `Collaborative`,
      ],
      wage: "RM 8,500/month",
      companyLocation: "Selangor, Malaysia",
    },
    {
      finalDate: "10 Jan, 2025",
      companyName: "Walgreens",
      jobTitle: "Inventory Control Analyst",
      companyLogo: "./assets/companyLogo/Wallgreen.png",
      jobConditions: [
        `Full-time`,
        `On-site`,
        `Junior Level`,
        `Structured Environtment`,
      ],
      wage: "RM 4,000/month",
      companyLocation: "Suband Jaya, Malaysia",
    },
    {
      finalDate: "31 Dec, 2024",
      companyName: "FedEx",
      jobTitle: "Logistics Manager",
      companyLogo: "./assets/companyLogo/FedEx.png",
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `Global Operations`,
        `High-paced`,
      ],
      wage: "RM 7,000/month",
      companyLocation: "Selangor, Malaysia",
    },
  ];

  const templates_card = document.getElementsByClassName("card-template");
  const template_card = templates_card.length ? templates_card[0] : null;
  const cardsContainer = document.getElementsByClassName("cardContainer1")[0];
  let count = 0;

  for (const incident of data_card) {
    count += 1;

    const incidentHTML = template_card.cloneNode(true);

    incidentHTML.classList.remove("card-template");
    incidentHTML.classList.add("card");

    const finalDateHTML = incidentHTML.getElementsByClassName(
      "card__mainDetails__header__date"
    )[0];
    const companyNameHTML = incidentHTML.getElementsByClassName(
      "card__mainDetails__company__name"
    )[0];
    const jobTitleHTML = incidentHTML.getElementsByClassName(
      "card__mainDetails__company__jobTitle"
    )[0];
    const companyLogoHTML =
      incidentHTML.getElementsByClassName("companyLogo")[0];
    const jobConditionsHTML = incidentHTML.getElementsByClassName(
      "card__mainDetails__jobCondition"
    )[0];
    const wageHTML = incidentHTML.getElementsByClassName(
      "card__moreDetails__wage"
    )[0];
    const companyLocationHTML = incidentHTML.getElementsByClassName(
      "card__moreDetails__location"
    )[0];
    const bookmarkIconHTML = incidentHTML.querySelector("#bookmarkIcon");

    finalDateHTML.textContent = incident.finalDate;
    companyNameHTML.textContent = incident.companyName;
    jobTitleHTML.textContent = incident.jobTitle;
    companyLogoHTML.setAttribute("src", incident.companyLogo);
    wageHTML.textContent = incident.wage;
    companyLocationHTML.textContent = incident.companyLocation;
    bookmarkIconHTML.setAttribute("id", `bookmarkIcon${count}`);
    bookmarkIconHTML.setAttribute(
      "onclick",
      `bookmarkToggle('bookmarkIcon${count}')`
    );

    cardsContainer.appendChild(incidentHTML);

    incident.jobConditions.map((paragraph) => {
      const p = document.createElement("p");
      p.className = "cardFullDetails__responsibilities";

      p.innerHTML = paragraph;

      jobConditionsHTML.classList.add("hidden");
      jobConditionsHTML.appendChild(p);
    });
  }
}

if (document.body.classList.contains("PageType")) {
  dynamic_cardGeneration();
}
