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

function fullDetails(databaseNumber) {
  const container = document.querySelector(".cardContainer");
  const cardContainer = document.querySelector(".cardContainer1");
  const cardFullDetails = document.querySelectorAll(".cardFullDetails");

  container.style.justifyContent = "space-between";

  cardContainer.style.width = "50vh";
  cardContainer.style.justifyContent = "flex-start";
  cardContainer.style.marginLeft = "8vw";
  cardContainer.style.height = "100vh";

  cardFullDetails.forEach((element) => {
    element.style.display = "none";
  });

  for (
    var i = 0;
    i <= document.querySelectorAll(".cardFullDetails").length;
    i++
  ) {
    if (databaseNumber === i) {
      const cardFullDetails = document.querySelector(`.cardFullDetails${i}`);
      cardFullDetails.style.display = "flex";

      document.querySelector(`.card${i}`).scrollIntoView();
    }
  }
}

// Dynamic Element Generation

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
      jobConditions: [
        `Full-time`,
        `Hybrid`,
        `Flexible Hours`,
        `Data-driven`
      ],
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
    {
      finalDate: "1 Feb, 2025",
      companyName: "Microsoft",
      jobTitle: "Human Resources Manager",
      companyLogo: "./assets/companyLogo/Microsoft.png",
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `Employee-centric`,
        `Hybrid`,
        `Leadership Role`,
      ],
      wage: "RM 7,500/month",
      companyLocation: "Kuala Lumpur, Malaysia",
    },
    {
      finalDate: "25 Jan, 2025",
      companyName: "Nike",
      jobTitle: "Logistics Coordinator",
      companyLogo: "./assets/companyLogo/Nike.png",
      jobConditions: [
        `Full-time`,
        `Hybrid`,
        `Fast-paced`,
        `Problem Solving`
      ],
      wage: "RM 6,500/month",
      companyLocation: "Kuala Lumpur, Malaysia",
    },
    {
      finalDate: "5 Jan, 2025",
      companyName: "Apple",
      jobTitle: "Computer Hardware Engineer",
      companyLogo: "./assets/companyLogo/Apple.png",
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `Collaborative Teamwork`,
        `Innovative`,
      ],
      wage: "RM 7,000/month",
      companyLocation: "Kuala Lumpur, Malaysia",
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
    incidentHTML.classList.add(`card${count}`);

    const mainDetailsHTML = incidentHTML.getElementsByClassName("card__mainDetails")[0];

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
    const buttonHTML = incidentHTML.getElementsByClassName(
      "card__moreDetails__button"
    )[0];

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
    buttonHTML.setAttribute("onclick", `fullDetails(${count})`);

    console.log(mainDetailsHTML)
    console.log(incident.companyName)

    switch (incident.companyName) {
      case "Pepsi": {
        mainDetailsHTML.classList.add("pepsiColor") 
        break;
      }
      case "H & M": {
        mainDetailsHTML.classList.add("hmColor") 
        break;
      }
      case "McDonalds": {
        mainDetailsHTML.classList.add("mcdonaldsColor") 
        break;
      }
      case "Ford Motor": {
        mainDetailsHTML.classList.add("fordColor") 
        break;
      }
      case "Walgreens": {
        mainDetailsHTML.classList.add("walgreensColor") 
        break;
      }
      case "FedEx": {
        mainDetailsHTML.classList.add("fedexColor") 
        break;
      }
      case "Microsoft": {
        mainDetailsHTML.classList.add("microsoftColor") 
        break;
      }
      case "Nike": {
        mainDetailsHTML.classList.add("nikeColor") 
        break;
      }
      case "Apple": {
        mainDetailsHTML.classList.add("appleColor") 
        break;
      }
    }

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

function dynamic_cardDetailsGeneration() {
  const data_cardFullDetails = [
    {
      logoImage: "./assets/companyLogo/Pepsi.png",
      jobTitle: "Marketing Analyst",
      companyName: "Pepsi",
      companyLocation: "Selangor, Malaysia",
      keyResponsibilities: [
        `Oversee inventory control and conduct audits.`,
        `Manage inbound and outbound shipments.`,
        `Supervise and train warehouse staff.`,
        `Ensure health & safety compliance.`,
        `Optimize warehouse space and processes.`,
        `Maintain equipment and report issues.`,
        `Coordinate with logistics and customer service teams.`,
        `Monitor and report on warehouse performance.`,
        `Identify and implement process improvements.`,
        `Control costs while maintaining efficiency.`,
      ],
      whatWeOffer: [
        `Competitive salary and benefits.`,
        `Career growth opportunities within a global company.`,
        `Comprehensive health and retirement benefits.`,
        `Work-life balance and flexible hours.`,
      ],
      jobConditions: [
        `Full-time`,
        `On-site`,
        `Shift Work`,
        `Fast-paced Environtment`,
      ],
      employerQuestions: [
        `What strategies do you use to reduce errors in order picking and shipping?`,
        `How would you manage warehouse shifts to ensure smooth operations 24/7?`,
      ],
    },
    {
      logoImage: "./assets/companyLogo/H&M.png",
      jobTitle: "Store Manager",
      companyName: "H & M",
      companyLocation: "Kuala Lumpur, Malaysia",
      keyResponsibilities: [
        `Oversee daily store operations and ensure high customer service standards.`,
        `Lead, train, and develop store staff to meet performance goals.`,
        `Manage inventory levels, track stock movements, and conduct regular audits.`,
        `Ensure the store is visually appealing and follows company guidelines.`,
        `Implement sales strategies to drive growth and meet targets.`,
        `Monitor sales performance and adjust strategies accordingly.`,
        `Foster a positive and inclusive work environment for all employees.`,
        `Ensure compliance with health and safety regulations.`,
        `Build strong customer relationships and address concerns effectively.`,
        `Collaborate with the marketing team to support local store promotions.`,
      ],
      whatWeOffer: [
        `Competitive salary and bonus opportunities.`,
        `Employee discount on H&M products.`,
        `Opportunities for growth and career advancement.`,
        `Dynamic work environment in the fashion industry.`,
        `Comprehensive health, wellness, and retirement benefits.`,
      ],
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `Customer-focused`,
        `Retail Hours`,
        `On-site`,
      ],
      employerQuestions: [
        `How do you motivate your team to meet sales targets during slow seasons?`,
        `Can you share an experience where you successfully handled a difficult customer situation?`,
      ],
    },
    {
      logoImage: "./assets/companyLogo/McDonalds.png",
      jobTitle: "Marketing Analyst",
      companyName: "McDonalds",
      companyLocation: "Selangor, Malaysia",
      keyResponsibilities: [
        `Analyze market trends and consumer behavior to inform strategy.`,
        `Conduct competitor analysis and track market share changes.`,
        `Develop and manage marketing campaigns to boost brand presence.`,
        `Collaborate with product development teams on marketing strategies.`,
        `Prepare detailed reports and presentations for senior management.`,
        `Monitor and optimize digital marketing channels, including social media.`,
        `Work with regional teams to localize campaigns for specific markets.`,
        `Utilize data analytics to improve customer engagement and retention.`,
        `Manage marketing budgets and track ROI for campaigns.`,
        `Conduct surveys and focus groups to gather consumer insights.`,
      ],
      whatWeOffer: [
        `Competitive salary and performance-based bonuses.`,
        `Opportunities for career growth and advancement.`,
        `Dynamic work environment with global exposure.`,
        `Comprehensive health, wellness, and retirement benefits.`,
      ],
      jobConditions: [
        `Full-time`,
        `Hybrid`,
        `Flexible Hours`,
        `Data-driven`
      ],
      employerQuestions: [
        `How would you approach analyzing the effectiveness of a new marketing campaign?`,
        `Can you share a time when you used data to influence a marketing decision?`,
      ],
    },
    {
      logoImage: "./assets/companyLogo/Ford.png",
      jobTitle: "Product Development Manager",
      companyName: "Ford Motor",
      companyLocation: "Suband Jaya, Malaysia",
      keyResponsibilities: [
        `Lead product development initiatives from concept to launch.`,
        `Collaborate with engineering, design, and marketing teams on new products.`,
        `Conduct market research to identify customer needs and preferences.`,
        `Develop and manage product roadmaps to ensure timely delivery.`,
        `Oversee testing and quality assurance processes for new products.`,
        `Maintain communication with suppliers and external stakeholders.`,
        `Ensure products meet regulatory standards and environmental guidelines.`,
        `Manage budgets and resources for product development projects.`,
        `Track and report on key performance metrics for product success.`,
        `Foster innovation and continuous improvement in product development processes.`
      ],
      whatWeOffer: [
        `Competitive salary with performance incentives.`,
        `Career development opportunities within a global automotive leader.`,
        `Health, dental, and retirement benefits.`,
        `Collaborative, innovative, and supportive team culture.`
      ],
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `On-site`,
        `Project-based`,
        `Collaborative`,
      ],
      employerQuestions: [
        `How do you prioritize features for a new product development project?`,
        `Can you describe a time you overcame a challenge during product development?`
      ]
    },
    {
      logoImage: "./assets/companyLogo/Wallgreen.png",
      jobTitle: "Inventory Control Analyst",
      companyName: "Walgreens",
      companyLocation: "Selangor, Malaysia",
      keyResponsibilities: [
        `Monitor and manage inventory levels to ensure stock availability.`,
        `Analyze inventory trends and recommend stock adjustments.`,
        `Conduct regular inventory audits and reconcile discrepancies.`,
        `Implement and maintain inventory management systems and tools.`,
        `Coordinate with suppliers to manage order fulfillment.`,
        `Work closely with warehouse and logistics teams to optimize stock flow.`,
        `Ensure compliance with inventory control procedures and policies.`,
        `Report on inventory performance and make recommendations for improvements.`,
        `Address stockouts and overstock issues to minimize costs.`,
        `Maintain accurate and up-to-date records in inventory management systems.`
      ],
      whatWeOffer: [
        `Competitive salary and benefits.`,
        `Opportunities for growth in a leading retail company.`,
        `Health and wellness benefits.`,
        `Discounts on products and services.`
      ],
      jobConditions: [
        `Full-time`,
        `On-site`,
        `Junior Level`,
        `Structured Environtment`,
      ],
      employerQuestions: [
        `How would you handle inventory discrepancies discovered during an audit?`,
        `What strategies do you use to forecast demand and avoid stockouts?`
      ]
    },
    {
      logoImage: "./assets/companyLogo/FedEx.png",
      jobTitle: "Logistics Manager",
      companyName: "FedEx",
      companyLocation: "Kuala Lumpur, Malaysia",
      keyResponsibilities: [
        `Oversee and manage the daily logistics operations.`,
        `Coordinate inbound and outbound shipments to ensure timely delivery.`,
        `Supervise a team of logistics professionals to ensure efficiency.`,
        `Develop and implement logistics strategies to reduce costs.`,
        `Monitor and optimize transportation routes and inventory flow.`,
        `Ensure compliance with local, state, and international shipping regulations.`,
        `Manage relationships with external carriers and service providers.`,
        `Track and report on key logistics performance indicators (KPIs).`,
        `Identify and implement process improvements in logistics operations.`,
        `Maintain equipment and ensure proper handling of goods during transit.`
      ],
      whatWeOffer: [
        `Competitive salary and performance bonuses.`,
        `Health, dental, and retirement benefits.`,
        `Global career development opportunities.`,
        `Work-life balance and flexible scheduling.`
      ],
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `Global Operations`,
        `High-paced`,
      ],
      employerQuestions: [
        `How would you handle delays in a critical shipment?`,
        `Can you describe a time you optimized a logistics process to improve efficiency?`
      ]
    },
    {
      logoImage: "./assets/companyLogo/Microsoft.png",
      jobTitle: "Human Resources Manager",
      companyName: "Microsoft",
      companyLocation: "Kuala Lumpur, Malaysia",
      keyResponsibilities: [
        `Develop and implement HR strategies to support organizational goals.`,
        `Oversee recruitment and talent acquisition for various departments.`,
        `Manage employee relations and resolve conflicts in the workplace.`,
        `Ensure compliance with labor laws and company policies.`,
        `Lead performance management processes and staff development programs.`,
        `Implement training and development initiatives to improve workforce skills.`,
        `Monitor employee engagement and retention metrics.`,
        `Work closely with senior leadership to align HR strategies with business objectives.`,
        `Administer compensation and benefits programs.`,
        `Foster a positive work environment through employee wellness initiatives.`
      ],
      whatWeOffer: [
        `Competitive salary with attractive bonuses.`,
        `Career advancement within a leading tech company.`,
        `Comprehensive health, wellness, and retirement benefits.`,
        `Flexible work arrangements and professional development opportunities.`
      ],
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `Employee-centric`,
        `Hybrid`,
        `Leadership Role`,
      ],
      employerQuestions: [
        `How would you handle a situation where two team members have conflicting views on a policy change?`,
        `What strategies do you use to ensure a diverse and inclusive workplace?`
      ]
    },
    {
      logoImage: "./assets/companyLogo/Nike.png",
      jobTitle: "Logistics Coordinator",
      companyName: "Nike",
      companyLocation: "Kuala Lumpur, Malaysia",
      keyResponsibilities: [
        `Coordinate and manage inbound and outbound logistics activities.`,
        `Develop efficient routing and scheduling plans for shipments.`,
        `Work with suppliers and vendors to ensure timely deliveries.`,
        `Monitor logistics performance and identify areas for improvement.`,
        `Ensure inventory levels are sufficient to meet customer demand.`,
        `Collaborate with warehouse and distribution teams for smooth operations.`,
        `Resolve shipping issues and delays in a timely manner.`,
        `Maintain detailed records of shipping and receiving activities.`,
        `Implement cost-saving measures to optimize logistics operations.`,
        `Ensure compliance with transportation regulations and standards.`
      ],
      whatWeOffer: [
        `Competitive salary and performance-based incentives.`,
        `Career progression in a global sportswear company.`,
        `Health and wellness benefits, including gym memberships.`,
        `Flexible work environment with an emphasis on work-life balance.`
      ],
      jobConditions: [
        `Full-time`,
        `Hybrid`,
        `Fast-paced`,
        `Problem Solving`
      ],
      employerQuestions: [
        `How do you ensure timely deliveries during peak seasons?`,
        `How would you improve the current logistics system to reduce costs?`
      ]
    },
    {
      logoImage: "./assets/companyLogo/Apple.png",
      jobTitle: "Computer Hardware Engineer",
      companyName: "Apple",
      companyLocation: "Kuala Lumpur, Malaysia",
      keyResponsibilities: [
        `Design and develop cutting-edge computer hardware components.`,
        `Collaborate with software engineers to ensure hardware compatibility.`,
        `Conduct tests and simulations to validate hardware functionality.`,
        `Analyze and resolve issues related to hardware performance.`,
        `Manage hardware prototype development and troubleshooting.`,
        `Stay updated on industry trends to implement innovative solutions.`,
        `Ensure compliance with industry standards and regulatory requirements.`,
        `Provide technical support and guidance to other engineering teams.`,
        `Document and communicate findings, designs, and testing results.`,
        `Lead hardware development projects from conception to production.`
      ],
      whatWeOffer: [
        `Competitive salary and equity options.`,
        `Health, dental, and retirement benefits.`,
        `Opportunities for professional development and innovation.`,
        `Work in a collaborative and creative environment.`
      ],
      jobConditions: [
        `Full-time`,
        `Senior Level`,
        `Collaborative Teamwork`,
        `Innovative`,
      ],
      employerQuestions: [
        `Can you describe a challenging hardware issue you’ve solved in the past?`,
        `How do you ensure that hardware components meet both performance and cost requirements?`
      ]
    }
  ];

  const templates_cardFullDetails = document.getElementsByClassName(
    "cardFullDetails-template"
  );

  const template_cardFullDetails = templates_cardFullDetails.length
    ? templates_cardFullDetails[0]
    : null;

  const cardsContainer = document.getElementsByClassName("cardContainer")[0];

  let count = 0;

  for (const incident of data_cardFullDetails) {
    count += 1;

    const incidentHTML = template_cardFullDetails.cloneNode(true);

    incidentHTML.classList.remove("cardFullDetails-template");
    incidentHTML.classList.add(`cardFullDetails${count}`);
    incidentHTML.classList.add(`cardFullDetails`);

    const logoImageHTML = incidentHTML.getElementsByClassName(
      "cardFullDetails__logoImage"
    )[0];
    const jobTitleHTML = incidentHTML.getElementsByClassName(
      "cardFullDetails__jobTitle"
    )[0];
    const companyNameHTML = incidentHTML.getElementsByClassName(
      "cardFullDetails__companyName"
    )[0];
    const locationHTML = incidentHTML.getElementsByClassName(
      "cardFullDetails__location"
    )[0];
    const responsibilitiesHTML = incidentHTML.getElementsByClassName(
      "cardFullDetails__responsibilities"
    )[0];
    const whatweOfferHTML = incidentHTML.getElementsByClassName(
      "cardFullDetails__whatWeOffer"
    )[0];
    const jobConditionsHTML = incidentHTML.getElementsByClassName(
      "cardFullDetails__jobConditions"
    )[0];
    const employerQuestionsHTML = incidentHTML.getElementsByClassName(
      "cardFullDetails__employerQuestions"
    )[0];

    logoImageHTML.setAttribute("src", incident.logoImage);
    jobTitleHTML.textContent = incident.jobTitle;
    companyNameHTML.textContent = incident.companyName;
    locationHTML.textContent = incident.companyLocation;

    incident.keyResponsibilities.map((paragraph) => {
      const li = document.createElement("li");
      li.className = "cardFullDetails__responsibilities";

      li.innerHTML = paragraph;

      responsibilitiesHTML.appendChild(li);
    });

    incident.whatWeOffer.map((paragraph) => {
      const li = document.createElement("li");
      li.className = "cardFullDetails__responsibilities";

      li.innerHTML = paragraph;

      whatweOfferHTML.appendChild(li);
    });

    incident.jobConditions.map((paragraph) => {
      const p = document.createElement("p");
      p.className = "cardFullDetails__responsibilities";

      p.innerHTML = paragraph;

      jobConditionsHTML.appendChild(p);
    });

    incident.employerQuestions.map((paragraph) => {
      const li = document.createElement("li");
      li.className = "cardFullDetails__responsibilities";

      li.innerHTML = paragraph;

      employerQuestionsHTML.appendChild(li);
    });

    cardsContainer.appendChild(incidentHTML);
  }
}

if (document.body.classList.contains("CardPage")) {
  dynamic_cardGeneration();
  dynamic_cardDetailsGeneration();
}
