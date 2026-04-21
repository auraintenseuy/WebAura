import heroImage from "./src/assets/hero-perfume.webp";
import asadBourbon from "./src/assets/1.webp";
import asadZanzibar from "./src/assets/3.webp";
import lattafaAsad from "./src/assets/5.webp";
import odysseyHommeWhiteEdition from "./src/assets/8.webp";
import odysseyMandarineSky from "./src/assets/9.webp";
import odysseyHommeBlack from "./src/assets/11.webp";
import lattafaKhamrah from "./src/assets/13.webp";
import clubDeNuitIntenseMan from "./src/assets/16.webp";
import odysseyMandarineSkyVintageEdition from "./src/assets/18.webp";
import odysseyRevolution from "./src/assets/19.webp";
import clubDeNuitOud from "./src/assets/21.webp";
import clubDeNuitSillage from "./src/assets/23.webp";
import clubDeNuitPrecieuxI from "./src/assets/26.webp";
import odysseyAoud from "./src/assets/27.webp";
import clubDeNuitIntenseManExtrait from "./src/assets/33.webp";
import odysseyEauDeMontagne from "./src/assets/37.webp";
import odysseyLimoni from "./src/assets/41.webp";
import bhararaKing from "./src/assets/49.webp";
import bhararaKingDoubleBleu from "./src/assets/51.webp";
import bhararaNicheFemme from "./src/assets/53.webp";
import bhararaDon from "./src/assets/55.webp";
import amberOudGoldEdition from "./src/assets/57.webp";
import amberOudAquaDubai from "./src/assets/59.webp";
import hawasIce from "./src/assets/61.webp";
import hawasFire from "./src/assets/64.webp";
import afnan9pm from "./src/assets/66.webp";
import afnan9pmElixir from "./src/assets/68.webp";
import liquidBrun from "./src/assets/70.webp";
import vulcanBaie from "./src/assets/72.webp";
import vulcanFeu from "./src/assets/74.webp";
import poloBlue from "./src/assets/76.webp";
import bleuDeChanel from "./src/assets/80.webp";
import givenchyGentleman from "./src/assets/84.webp";
import vipBlack from "./src/assets/86.webp";
import oneMillionElixir from "./src/assets/88.webp";
import invictusVictory from "./src/assets/90.webp";
import clubDeNuitPrecieux from "./src/assets/94.webp";
import clubDeNuitUntold from "./src/assets/96.webp";
import sexyWomen from "./src/assets/98.webp";
import vipRose from "./src/assets/100.webp";
import azzaroMostWanted from "./src/assets/104.webp";
import sauvageEdp from "./src/assets/106.webp";
import sauvageElixir from "./src/assets/108.webp";
import diorFahrenheit from "./src/assets/110.webp";
import poloRed from "./src/assets/112.webp";
import poloBlack from "./src/assets/114.webp";
import jpgLeMaleElixir from "./src/assets/118.webp";
import jpgLeBeau from "./src/assets/120.webp";
import jpgLeMaleLeParfum from "./src/assets/122.webp";
import acquaDiGioProfondo from "./src/assets/124.webp";
import acquaDiGioia from "./src/assets/126.webp";
import valentinoUomo from "./src/assets/128.webp";
import valentinoUomoIntense from "./src/assets/130.webp";
import valentinoDonna from "./src/assets/132.webp";
import versaceEros from "./src/assets/134.webp";
import versacePourHomme from "./src/assets/136.webp";
import versaceDylanBlue from "./src/assets/138.webp";
import acquaDiGioParfum from "./src/assets/perfume-1.jpg.webp";
import clubDeNuitIntenseWoman from "./src/assets/club-de-nuit-intense-woman.webp";
import clubDeNuitWoman from "./src/assets/club-de-nuit-woman.webp";
import clubDeNuitImperiale from "./src/assets/club-de-nuit-imperiale.webp";
import lattafaYara from "./src/assets/lattafa-yara.webp";
import lattafaYaraCandy from "./src/assets/lattafa-yara-candy.webp";
import lattafaYaraTous from "./src/assets/lattafa-yara-tous.webp";
import lattafaVictoria from "./src/assets/lattafa-victoria.webp";
import lattafaSakeena from "./src/assets/lattafa-sakeena.webp";

const products = [
  { name: "Azzaro The Most Wanted", image: azzaroMostWanted, brand: "Azzaro", section: "Diseñador", gender: "Masculino" },
  { name: "Bleu de Chanel", image: bleuDeChanel, brand: "Chanel", section: "Diseñador", gender: "Masculino" },
  { name: "212 Sexy Women", image: sexyWomen, brand: "Carolina Herrera", section: "Diseñador", gender: "Femenino" },
  { name: "212 VIP Black", image: vipBlack, brand: "Carolina Herrera", section: "Diseñador", gender: "Masculino" },
  { name: "212 VIP Rose", image: vipRose, brand: "Carolina Herrera", section: "Diseñador", gender: "Femenino" },
  { name: "Dior Fahrenheit", image: diorFahrenheit, brand: "Dior", section: "Diseñador", gender: "Masculino" },
  { name: "Sauvage Eau de Parfum", image: sauvageEdp, brand: "Dior", section: "Diseñador", gender: "Masculino" },
  { name: "Sauvage Elixir", image: sauvageElixir, brand: "Dior", section: "Diseñador", gender: "Masculino" },
  { name: "Acqua di Gio Parfum", image: jpgLeMaleLeParfum, brand: "Giorgio Armani", section: "Diseñador", gender: "Masculino" },
  { name: "Acqua di Gio Profondo", image: acquaDiGioProfondo, brand: "Giorgio Armani", section: "Diseñador", gender: "Masculino" },
  { name: "Acqua di Gioia", image: acquaDiGioia, brand: "Giorgio Armani", section: "Diseñador", gender: "Femenino" },
  { name: "Givenchy Gentleman", image: givenchyGentleman, brand: "Givenchy", section: "Diseñador", gender: "Masculino" },
  { name: "Jean Paul Gaultier Le Beau", image: jpgLeBeau, brand: "Jean Paul Gaultier", section: "Diseñador", gender: "Masculino" },
  { name: "Jean Paul Gaultier Le Male Elixir", image: jpgLeMaleElixir, brand: "Jean Paul Gaultier", section: "Diseñador", gender: "Masculino" },
  { name: "Jean Paul Gaultier Le Male Le Parfum", image: acquaDiGioParfum, brand: "Jean Paul Gaultier", section: "Diseñador", gender: "Masculino" },
  { name: "Polo Black", image: poloBlack, brand: "Ralph Lauren", section: "Diseñador", gender: "Masculino" },
  { name: "Polo Blue", image: poloBlue, brand: "Ralph Lauren", section: "Diseñador", gender: "Masculino" },
  { name: "Polo Red", image: poloRed, brand: "Ralph Lauren", section: "Diseñador", gender: "Masculino" },
  { name: "1 Million Elixir", image: oneMillionElixir, brand: "Rabanne", section: "Diseñador", gender: "Masculino" },
  { name: "Invictus Victory", image: invictusVictory, brand: "Rabanne", section: "Diseñador", gender: "Masculino" },
  { name: "Valentino Donna", image: valentinoDonna, brand: "Valentino", section: "Diseñador", gender: "Femenino" },
  { name: "Valentino Uomo", image: valentinoUomo, brand: "Valentino", section: "Diseñador", gender: "Masculino" },
  { name: "Valentino Uomo Intense", image: valentinoUomoIntense, brand: "Valentino", section: "Diseñador", gender: "Masculino" },
  { name: "Versace Dylan Blue", image: versaceDylanBlue, brand: "Versace", section: "Diseñador", gender: "Masculino" },
  { name: "Versace Eros", image: versaceEros, brand: "Versace", section: "Diseñador", gender: "Masculino" },
  { name: "Versace Pour Homme", image: versacePourHomme, brand: "Versace", section: "Diseñador", gender: "Masculino" },
  { name: "Afnan 9PM", image: afnan9pm, brand: "Afnan", section: "Arabes", gender: "Masculino" },
  { name: "Afnan 9PM Elixir", image: afnan9pmElixir, brand: "Afnan", section: "Arabes", gender: "Masculino" },
  { name: "Al Haramain Amber Oud Aqua Dubai", image: amberOudAquaDubai, brand: "Al Haramain", section: "Unisex", gender: "Unisex" },
  { name: "Al Haramain Amber Oud Gold Edition", image: amberOudGoldEdition, brand: "Al Haramain", section: "Unisex", gender: "Unisex" },
  { name: "Club de Nuit Intense Man", image: clubDeNuitIntenseMan, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Club de Nuit Intense Man Extrait de Parfum", image: clubDeNuitIntenseManExtrait, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Club de Nuit Intense Woman", image: clubDeNuitIntenseWoman, brand: "Armaf", section: "Arabes", gender: "Femenino" },
  { name: "Club de Nuit Oud", image: clubDeNuitOud, brand: "Armaf", section: "Unisex", gender: "Unisex" },
  { name: "Club de Nuit Imperiale", image: clubDeNuitImperiale, brand: "Armaf", section: "Arabes", gender: "Femenino" },
  { name: "Club de Nuit Precieux I", image: clubDeNuitPrecieuxI, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Club de Nuit Precieux IV", image: clubDeNuitPrecieux, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Club de Nuit Sillage", image: clubDeNuitSillage, brand: "Armaf", section: "Unisex", gender: "Unisex" },
  { name: "Club de Nuit Untold", image: clubDeNuitUntold, brand: "Armaf", section: "Unisex", gender: "Unisex" },
  { name: "Club de Nuit Woman", image: clubDeNuitWoman, brand: "Armaf", section: "Arabes", gender: "Femenino" },
  { name: "Bharara Don", image: bhararaDon, brand: "Bharara", section: "Arabes", gender: "Masculino" },
  { name: "Bharara King", image: bhararaKing, brand: "Bharara", section: "Arabes", gender: "Masculino" },
  { name: "Bharara King Double Bleu", image: bhararaKingDoubleBleu, brand: "Bharara", section: "Arabes", gender: "Masculino" },
  { name: "Bharara Niche Femme", image: bhararaNicheFemme, brand: "Bharara", section: "Arabes", gender: "Femenino" },
  { name: "French Avenue Liquid Brun", image: liquidBrun, brand: "French Avenue", section: "Arabes", gender: "Masculino" },
  { name: "French Avenue Vulcan Baie", image: vulcanBaie, brand: "French Avenue", section: "Arabes", gender: "Masculino" },
  { name: "French Avenue Vulcan Feu", image: vulcanFeu, brand: "French Avenue", section: "Arabes", gender: "Masculino" },
  { name: "Hawas Fire", image: hawasFire, brand: "Rasasi", section: "Arabes", gender: "Masculino" },
  { name: "Hawas Ice", image: hawasIce, brand: "Rasasi", section: "Arabes", gender: "Masculino" },
  { name: "Lattafa Asad", image: lattafaAsad, brand: "Lattafa", section: "Arabes", gender: "Masculino" },
  { name: "Lattafa Asad Bourbon", image: asadBourbon, brand: "Lattafa", section: "Arabes", gender: "Masculino" },
  { name: "Lattafa Asad Zanzibar", image: asadZanzibar, brand: "Lattafa", section: "Arabes", gender: "Masculino" },
  { name: "Lattafa Khamrah", image: lattafaKhamrah, brand: "Lattafa", section: "Unisex", gender: "Unisex" },
  { name: "Lattafa Sakeena", image: lattafaSakeena, brand: "Lattafa", section: "Arabes", gender: "Femenino" },
  { name: "Lattafa Victoria", image: lattafaVictoria, brand: "Lattafa", section: "Arabes", gender: "Femenino" },
  { name: "Lattafa Yara", image: lattafaYara, brand: "Lattafa", section: "Arabes", gender: "Femenino" },
  { name: "Lattafa Yara Candy", image: lattafaYaraCandy, brand: "Lattafa", section: "Arabes", gender: "Femenino" },
  { name: "Lattafa Yara Tous", image: lattafaYaraTous, brand: "Lattafa", section: "Arabes", gender: "Femenino" },
  { name: "Odyssey Aoud", image: odysseyAoud, brand: "Armaf", section: "Unisex", gender: "Unisex" },
  { name: "Odyssey Eau de Montagne", image: odysseyEauDeMontagne, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Odyssey Homme Black", image: odysseyHommeBlack, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Odyssey Homme White Edition", image: odysseyHommeWhiteEdition, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Odyssey Limoni", image: odysseyLimoni, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Odyssey Mandarine Sky", image: odysseyMandarineSky, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Odyssey Mandarine Sky Vintage Edition", image: odysseyMandarineSkyVintageEdition, brand: "Armaf", section: "Arabes", gender: "Masculino" },
  { name: "Odyssey Revolution", image: odysseyRevolution, brand: "Armaf", section: "Arabes", gender: "Masculino" },
];

const sections = [
  {
    title: "Diseñador",
    eyebrow: "Casas Iconicas",
    description: "Fragancias reconocidas de firmas clásicas y lanzamientos de alta rotación.",
  },
  {
    title: "Arabes",
    eyebrow: "Selección Oriental",
    description: "Perfumes intensos, modernos y de gran rendimiento de casas árabes destacadas.",
  },
  {
    title: "Unisex",
    eyebrow: "Perfumes Unisex",
    description: "Fragancias versátiles y elegantes para todos los géneros.",
  },
];

const state = {
  searchTerm: "",
  genderFilter: "Todos",
  selectedProduct: null,
};

const heroImageElement = document.querySelector("#hero-image");
const yearElement = document.querySelector("#current-year");
const searchInput = document.querySelector("#search-input");
const genderFilter = document.querySelector("#gender-filter");
const catalogSections = document.querySelector("#catalog-sections");
const emptyState = document.querySelector("#empty-state");
const modal = document.querySelector("#product-modal");
const modalTitle = document.querySelector("#modal-title");
const modalImage = document.querySelector("#modal-image");
const modalCloseButton = document.querySelector("#modal-close-button");
const scrollTopButton = document.querySelector("#scroll-top-button");
const homeButton = document.querySelector("#home-button");

heroImageElement.src = heroImage;
yearElement.textContent = String(new Date().getFullYear());

const normalize = (value) => value.trim().toLowerCase();

const getVisibleSections = () => {
  const normalizedSearch = normalize(state.searchTerm);

  return sections
    .map((section) => ({
      ...section,
      products: products.filter((product) => {
        const matchesSection = product.section === section.title;
        const matchesSearch =
          normalizedSearch.length === 0 ||
          product.name.toLowerCase().includes(normalizedSearch) ||
          product.brand.toLowerCase().includes(normalizedSearch);
        const matchesGender =
          state.genderFilter === "Todos" || product.gender === state.genderFilter;

        return matchesSection && matchesSearch && matchesGender;
      }),
    }))
    .filter((section) => section.products.length > 0);
};

const createProductCard = (product) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "product-card";
  button.setAttribute("aria-label", `Ver ${product.name}`);

  button.innerHTML = `
    <div class="product-card__frame">
      <img src="${product.image}" alt="${product.name}" loading="lazy" width="512" height="640" />
    </div>
    <div class="product-card__meta">
      <p class="product-card__brand">${product.brand}</p>
      <h3 class="product-card__name">${product.name}</h3>
    </div>
  `;

  button.addEventListener("click", () => openModal(product));
  return button;
};

const renderCatalog = () => {
  const visibleSections = getVisibleSections();
  catalogSections.innerHTML = "";

  visibleSections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "section-block";

    const heading = document.createElement("div");
    heading.className = "section-block__heading";
    heading.innerHTML = `
      <p class="eyebrow">${section.eyebrow}</p>
      <h3>${section.title}</h3>
      <p class="section-copy">${section.description}</p>
    `;

    const grid = document.createElement("div");
    grid.className = "product-grid";

    section.products.forEach((product) => {
      grid.appendChild(createProductCard(product));
    });

    block.append(heading, grid);
    catalogSections.appendChild(block);
  });

  emptyState.hidden = visibleSections.length !== 0;
};

const openModal = (product) => {
  state.selectedProduct = product;
  modalTitle.textContent = product.name;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalCloseButton.focus();
};

const closeModal = () => {
  state.selectedProduct = null;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  modalImage.removeAttribute("src");
};

searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  renderCatalog();
});

genderFilter.addEventListener("change", (event) => {
  state.genderFilter = event.target.value;
  renderCatalog();
});

modal.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeModal === "true") {
    closeModal();
  }
});

modalCloseButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

scrollTopButton.addEventListener("click", scrollToTop);
homeButton.addEventListener("click", scrollToTop);

renderCatalog();
