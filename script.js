// Function to add the logo (image)
function addLogo(logoPath, logoAlt, logoClass) {
  const logoContainer = document.getElementById('logo-container');
  
  const logoImage = document.createElement('img');
  logoImage.src = logoPath; 
  logoImage.alt = logoAlt;
  logoImage.classList.add(logoClass);
  
  logoContainer.appendChild(logoImage);
}


addLogo('assets/icon/logo.png', '' ,'logo');


function loadStats(stats) {
  const statsContainer = document.getElementById('stats-container');

  stats.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.classList.add('stat-item');
    
    const statHeading = document.createElement('h3');
    statHeading.textContent = stat.value;
    
    const statDescription = document.createElement('p');
    statDescription.textContent = stat.label;
    
    statItem.appendChild(statHeading);
    statItem.appendChild(statDescription);
    statsContainer.appendChild(statItem);
  });
}

// STATS DATA
const statsData = [
  { value: '1 Years Job', label: 'Experience' },
  { value: '4 Projects', label: 'Completed' },
  { value: 'Support', label: 'Online 24/7' }
];


loadStats(statsData);

// Dynamic content for About section
const aboutData = {
  imageSrc: "assets/img/bg1.png",
  title: "About Me",
  description: "As a cybersecurity enthusiast and app developer, I am dedicated to creating secure and user-friendly applications. My expertise lies in building robust, efficient software solutions while ensuring the highest level of protection against online threats. Explore my projects that blend innovation with security!",
  contactInfo: {
    email: "willdelbravo01@gmail.com",
    phone: "+639054213162"
  },
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  }
};

// Set dynamic content for the About section
document.getElementById("about-img").src = aboutData.imageSrc;
document.getElementById("about-title").textContent = aboutData.title;
document.getElementById("about-description").textContent = aboutData.description;
document.getElementById("contact-email").innerHTML = `Email: <a href="mailto:${aboutData.contactInfo.email}">${aboutData.contactInfo.email}</a>`;
document.getElementById("contact-phone").innerHTML = `Phone: <a href="tel:${aboutData.contactInfo.phone}">${aboutData.contactInfo.phone}</a>`;
document.getElementById("facebook-link").href = aboutData.socials.facebook;
document.getElementById("twitter-link").href = aboutData.socials.twitter;
document.getElementById("linkedin-link").href = aboutData.socials.linkedin;


document.getElementById("about").classList.add("hidden");


document.getElementById('btn-start').addEventListener('click', function() {

  const startSection = document.getElementById('start');
  startSection.classList.add('fade-out');
  startSection.classList.add('hidden');
  
  // Show the header, navigation, intro, stats, and about sections with a fade-in effect
  setTimeout(() => {
      document.getElementById('header').classList.remove('hidden');
      document.getElementById('navbar').classList.remove('hidden');
      document.getElementById('intro').classList.remove('hidden');
      document.getElementById('stats').classList.remove('hidden');
      document.getElementById('about').classList.remove('hidden');
      
      document.getElementById('header').classList.add('show');
      document.getElementById('navbar').classList.add('show');
      document.getElementById('intro').classList.add('show-slide-up');
      document.getElementById('stats').classList.add('show');
      document.getElementById('about').classList.add('show');
  }, 500);
});

// Show Skill Set Section
document.getElementById('show-skill-set-btn').addEventListener('click', function() {
  const skillSetSection = document.getElementById('skill-set');
  skillSetSection.classList.remove('hidden');
  setTimeout(() => {
    skillSetSection.classList.add('show-slide-up');
  }, 10);
});

// Show Portfolio Section
document.getElementById('show-portfolio-btn').addEventListener('click', function() {
  const portfolioSection = document.getElementById('portfolio');
  portfolioSection.classList.remove('hidden');
  setTimeout(() => {
    portfolioSection.classList.add('show-slide-up');
  }, 10);
});

// Badge Data (for logos or badges of programming languages/Cisco certifications)
const badgeData = [
  { src: 'assets/icon/badge-1.png', alt: 'badges', title: 'Intro to Cybersecurity' },
  { src: 'assets/icon/badge-2.png', alt: 'badges', title: 'Cyber Threat Management' },
  { src: 'assets/icon/badge-3.png', alt: 'badges', title: 'Intro to IOT' },
  { src: 'assets/icon/badge-4.png', alt: 'badges', title: 'Networking Essentials' },
  { src: 'assets/icon/badge-5.png', alt: 'badges', title: 'Intro to Packet Tracer' },
  { src: 'assets/icon/badge-6.png', alt: 'badges', title: 'MySQL' },
  { src: 'assets/icon/badge-7.png', alt: 'badges', title: 'PHP' },
  { src: 'assets/icon/badge-8.png', alt: 'badges', title: 'Python' },
  { src: 'assets/icon/badge-9.png', alt: 'badges', title: 'CSS' },
  { src: 'assets/icon/badge-10.png', alt: 'badges', title: 'HTML5' },
  { src: 'assets/icon/badge-11.png', alt: 'badges', title: 'Java' },
  { src: 'assets/icon/badge-12.png', alt: 'badges', title: 'Arduino C++' },
];

// Skill Data for skill bars
const skillData = [
  { skill: 'Application Development', level: 63 },
  { skill: 'Website Development', level: 57 },
  { skill: 'Ethical Hacking', level: 46 },
  { skill: 'Networking', level: 55 },
  { skill: 'Arduino', level: 60 },
  { skill: 'Database', level: 39 },
];

// Function to load badges (programming languages or Cisco logos)
function loadBadges() {
  const badgeContainer = document.getElementById('skill-set-logos');
  badgeContainer.innerHTML = '';

  // Create the grid container
  const grid = document.createElement('div');
  grid.className = 'badge-grid';

  badgeData.forEach((badge, index) => {
    const badgeItem = document.createElement('div');
    badgeItem.className = 'logo-item';

    const badgeImage = document.createElement('img');
    badgeImage.src = badge.src;
    badgeImage.alt = badge.alt;
    badgeImage.className = 'logo-img';

    const badgeTitle = document.createElement('p');
    badgeTitle.textContent = badge.title;

    badgeItem.appendChild(badgeImage);
    badgeItem.appendChild(badgeTitle);
    grid.appendChild(badgeItem);
  });

  badgeContainer.appendChild(grid);
}

// Function to load skill bars
function loadSkills() {
  const skillContainer = document.getElementById('skill-set-slider');
  skillContainer.innerHTML = '';
  skillData.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';

    const skillTitle = document.createElement('h3');
    skillTitle.textContent = skill.skill;

    const skillProgressContainer = document.createElement('div');
    skillProgressContainer.className = 'progress-bar';

    const skillProgress = document.createElement('div');
    skillProgress.className = 'progress';
    skillProgress.style.width = `${skill.level}%`;
    skillProgress.textContent = `${skill.level}%`;

    skillProgressContainer.appendChild(skillProgress);
    skillItem.appendChild(skillTitle);
    skillItem.appendChild(skillProgressContainer);
    skillContainer.appendChild(skillItem);
  });
}

// Call the functions to load badges and skills dynamically
loadBadges();
loadSkills();


// Button to show Portfolio from Skill-Set
document.getElementById('show-portfolio-btn').addEventListener('click', function() {
  const portfolioSection = document.getElementById('portfolio');
  portfolioSection.classList.remove('hidden');
  setTimeout(() => {
    portfolioSection.classList.add('show-slide-up');
  }, 10);
});


createPortfolio(); 

function createPortfolio() {
  console.log("Creating portfolio...");
  const portfolio = document.getElementById("portfolio");


  portfolio.innerHTML = "";

  const portfolioData = {
    title: "Projects",
    projects: [
      {
        title: "Garments Transaction Management System",
        description: "A web-based system that oversees transactions in the garment sector, handling sales and inventory management.",
        link: "https://github.com/WBgit01/Garments_Transaction_Management_System-GTMS.git",
        image: "assets/img/prj-1.png",
      },
      {
        title: "Keopi App",
        description: "A hybrid app designed to offer an online ordering system for the Sarang-jin Keopi Hub organization.",
        link: "https://github.com/WBgit01/KEOPI.git",
        image: "assets/img/prj-2.png",
      },
      {
        title: "Mixzy",
        description: "An app offering entertainment through a mini-game, calculation tools, and a module that provides insights into mobile computing.",
        link: "https://github.com/WBgit01/Mixzy.git",
        image: "assets/img/prj-3.png",
      },
      {
        title: "NetPhish",
        description: "A phishing website designed to imitate a streaming platform like Netflix, with the intent to deceive victims into providing their personal information, including email, password, bank details, and more.",
        link: "https://github.com/WBgit01/NetPhish.git",
        image: "assets/img/prj-4.png",
      },
      {
        title: "Coming Soon",
        description: "An entertainment app designed around a fun and engaging guessing game theme.",
        link: "https://github.com/yourusername/project2",
        image: "assets/img/prj-standby.jpg",
      },
      {
        title: "Coming Soon",
        description: "An application that helps manage time and organization by handling scheduling, reminders, deadlines, and task prioritization to keep users on track.",
        link: "https://github.com/yourusername/tapify",
        image: "assets/img/prj-standby.jpg",
      },
    ],
  };

  const header = document.createElement("h1");
  header.textContent = `${portfolioData.title}`;
  portfolio.appendChild(header);


  const grid = document.createElement('div');
  grid.className = 'portfolio-grid';
  portfolio.appendChild(grid);


  portfolioData.projects.forEach(function (project) {
    const card = document.createElement("div");
    card.className = "portfolio-card";


    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectImage.className = "project-image";


    const title = document.createElement("h2");
    title.textContent = project.title;


    const desc = document.createElement("p");
    desc.textContent = project.description;


    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "View Project";
    link.className = "btn-portfolio";
    link.target = "_blank";


    card.appendChild(projectImage);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);


    grid.appendChild(card);
  });
}


// Show the footer after the portfolio section is revealed
document.getElementById('show-portfolio-btn').addEventListener('click', function() {
  const portfolioSection = document.getElementById('portfolio');
  const footer = document.getElementById('footer');

  portfolioSection.classList.remove('hidden');
  setTimeout(() => {
    portfolioSection.classList.add('show-slide-up');
    
    // Show the footer after the portfolio section is displayed
    footer.classList.remove('hidden');
  }, 10);
});


const navbar = document.querySelector('.navbar');


navbar.classList.add('fixed');
