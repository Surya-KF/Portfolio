const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const header = document.getElementById("header");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("nav__menu--open");
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navToggle.querySelector("i").className = isOpen ? "ri-close-line" : "ri-menu-4-line";
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
    navToggle.setAttribute("aria-label", "Open navigation");
    navToggle.querySelector("i").className = "ri-menu-4-line";
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("header--scroll", window.scrollY > 24);
});

const truthLensCard = document.querySelector(".project-card--feature .project-card__content");
const truthLensGithubLink = truthLensCard?.querySelector(".inline-link");

if (truthLensCard && truthLensGithubLink) {
  const projectLinks = document.createElement("div");
  projectLinks.className = "project-card__links";
  truthLensGithubLink.parentNode.insertBefore(projectLinks, truthLensGithubLink);
  projectLinks.appendChild(truthLensGithubLink);

  const liveLink = document.createElement("a");
  liveLink.className = "inline-link";
  liveLink.href = "https://truth-lens-bert-based-fake-news-and.vercel.app/";
  liveLink.target = "_blank";
  liveLink.rel = "noopener noreferrer";
  liveLink.innerHTML = 'Live demo <i class="ri-external-link-line"></i>';
  projectLinks.appendChild(liveLink);
}

const conversationLink = document.querySelector('.about__copy a[href^="mailto:"]');

if (conversationLink) {
  conversationLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=suryakf04@gmail.com&su=Conversation%20with%20KF%20Surya";
  conversationLink.target = "_blank";
  conversationLink.rel = "noopener noreferrer";
}

const profileTicker = document.querySelector(".hero__ticker .container");

if (profileTicker) {
  profileTicker.innerHTML = '<span>Building where AI meets real work</span><strong>Grounded answers</strong><span class="ticker-line"></span><strong>Healthcare intelligence</strong><span class="ticker-line"></span><strong>Production-ready agents</strong>';
}

const profileFrame = document.querySelector(".hero__image-frame");
const alternateProfile = new Image();

alternateProfile.src = "assets/img/SURYA2.jpeg";
alternateProfile.alt = "KF Surya profile portrait";
alternateProfile.className = "hero__alternate-img";
alternateProfile.loading = "lazy";
alternateProfile.addEventListener("load", () => {
  profileFrame?.appendChild(alternateProfile);
  profileFrame?.classList.add("hero__image-frame--switchable");
});

document.querySelectorAll('a[href*="KF%20SURYA_RESUME.pdf"]').forEach((resumeLink) => {
  resumeLink.href = "assets/sept_resume/KF_SURYA_RESUME.pdf";
});

const footerLinks = document.querySelector(".footer__links");

if (footerLinks && !footerLinks.querySelector('[aria-label="WhatsApp"]')) {
  const whatsappLink = document.createElement("a");
  whatsappLink.href = "https://wa.me/918848617208?text=Hello%20KF%20Surya";
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener noreferrer";
  whatsappLink.setAttribute("aria-label", "WhatsApp");
  whatsappLink.innerHTML = '<i class="ri-whatsapp-line"></i>';
  footerLinks.appendChild(whatsappLink);
}

const experienceCertificates = [
  "assets/Internship%20-%20Surya%20KF_%20valueHealth.pdf",
  "assets/EIsystems_certificate.pdf",
  "assets/yanne_certificate.pdf",
];

document.querySelectorAll(".timeline__item").forEach((item, index) => {
  const body = item.querySelector(".timeline__body");
  if (!body || !experienceCertificates[index]) return;

  const certificateLink = document.createElement("a");
  certificateLink.className = "inline-link experience__certificate";
  certificateLink.href = experienceCertificates[index];
  certificateLink.target = "_blank";
  certificateLink.rel = "noopener noreferrer";
  certificateLink.innerHTML = 'View experience certificate <i class="ri-file-text-line"></i>';
  body.appendChild(certificateLink);
});

const valueHealthItem = document.querySelector(".timeline__item--current");
const valueHealthDescription = valueHealthItem?.querySelector(".timeline__body > p:nth-of-type(2)");

if (valueHealthDescription) {
  valueHealthDescription.innerHTML = "Preprocessed insurance benefit PDFs for the Patient Nexus EBV system with a document intelligence workflow using Mistral OCR, structured extraction, validation, and Batch API processing, cutting per-page cost by <strong>25%</strong>. Trained a Gradient Boosting model to predict drug coverage status from insurance benefit documents.";
}

const valueHealthTags = ["Document Preprocessing", "Mistral OCR", "Data Pipelines"];
const valueHealthTagList = valueHealthItem?.querySelector(".tag-list");

valueHealthTags.forEach((tag) => {
  if (!valueHealthTagList || [...valueHealthTagList.children].some((item) => item.textContent === tag)) return;
  const tagElement = document.createElement("span");
  tagElement.textContent = tag;
  valueHealthTagList.appendChild(tagElement);
});

const toolkitKeywordUpdates = [
  "RAG · LLM integration · AI agents · Prompt engineering · LLM evaluation · Transformers · Fine-tuning · BERT · BiLSTM · Gradient Boosting · Classification",
  "Python · FastAPI · FastMCP · Streamlit · Chainlit · React · LangChain · REST APIs · Docker · Model deployment",
  "Document preprocessing · ETL · Data validation · Embeddings · Semantic search · Milvus · ChromaDB · FAISS · Pinecone · MongoDB Atlas · PostgreSQL · SQLite",
  "OCR · PDF processing · OpenCV · YOLOv5/v8 · Pandas · NumPy · MLOps · LLMOps · Git · Docker Compose · Bash",
];

document.querySelectorAll(".toolkit__grid > div > p").forEach((item, index) => {
  if (toolkitKeywordUpdates[index]) item.textContent = toolkitKeywordUpdates[index];
});

const toolkitIcons = ["ri-lightbulb-line", "ri-code-s-slash-line", "ri-database-2-line", "ri-eye-line"];

document.querySelectorAll(".toolkit__grid > div").forEach((card, index) => {
  const icon = document.createElement("span");
  icon.className = "toolkit__icon";
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = `<i class="${toolkitIcons[index]}"></i>`;
  card.prepend(icon);
});

const certificationLogos = [
  ["https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg", "Udemy logo"],
  ["https://huggingface.co/front/assets/huggingface_logo-noborder.svg", "Hugging Face logo"],
  ["https://www.anthropic.com/images/icons/apple-touch-icon.png", "Anthropic logo"],
  ["https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", "Google logo"],
  ["https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", "Google logo"],
  ["https://www.kpriet.ac.in/asset/frontend/images/logo/logo-full.webp", "KPR Institute logo"],
  ["https://www.kpriet.ac.in/asset/frontend/images/logo/logo-full.webp", "KPR Institute logo"],
  ["https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", "Google logo"],
  ["https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/nxqtqrbyo6lf0ojcmarf", "Nasscom logo"],
  ["https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg", "Coursera logo"],
  ["https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", "Google logo"],
  ["https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg", "Coursera logo"],
  ["https://learn.365datascience.com/favicon.ico", "365 Data Science logo"],
  ["https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", "IBM logo"],
];

document.querySelectorAll(".certification-card").forEach((card, index) => {
  const logoData = certificationLogos[index];
  if (!logoData) return;

  const logo = document.createElement("img");
  logo.className = "certification-card__logo";
  logo.src = logoData[0];
  logo.alt = logoData[1];
  logo.loading = "lazy";
  logo.addEventListener("error", () => {
    logo.classList.add("certification-card__logo--fallback");
    logo.alt = "Issuer logo unavailable";
  });
  card.prepend(logo);
});

document.querySelectorAll(".certification-card p").forEach((meta) => {
  if (meta.textContent.includes("Credential ID:")) {
    meta.textContent = meta.textContent.replace(/\s*[·•-]?\s*Credential ID:\s*[^]*$/, "").trim();
    if (!meta.textContent) meta.remove();
  }
});

const mlopsCertificateCard = document.querySelector(".certification-card");

if (mlopsCertificateCard && !mlopsCertificateCard.querySelector("a")) {
  const udemyLink = document.createElement("a");
  udemyLink.className = "certification-card__link";
  udemyLink.href = "https://www.udemy.com/certificate/UC-0ed26070-5805-46a2-8e8c-e44957f8f9da/";
  udemyLink.target = "_blank";
  udemyLink.rel = "noopener noreferrer";
  udemyLink.innerHTML = 'View certificate <i class="ri-arrow-right-up-line"></i>';
  mlopsCertificateCard.appendChild(udemyLink);
}

const revealItems = document.querySelectorAll(
  ".section-intro, .about__copy, .timeline__item, .education, .project-card, .toolkit__grid > div, .certification-card, .contact__inner"
);

revealItems.forEach((item, index) => {
  item.classList.add("reveal-item");
  item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}