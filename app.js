const sprites = [
  { id: "water_basic", name: "Water", theme: "Basic", rarity: "Rare", unreleased: false },
  { id: "water_gold", name: "Gold Water", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "water_candy", name: "Gummy Water", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "water_galaxy", name: "Galaxy Water", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "water_gem", name: "Gem Water", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "water_holofoil", name: "Holofoil Water", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "earth_basic", name: "Earth", theme: "Basic", rarity: "Rare", unreleased: false },
  { id: "earth_gold", name: "Gold Earth", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "earth_candy", name: "Gummy Earth", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "earth_galaxy", name: "Galaxy Earth", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "earth_gem", name: "Gem Earth", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "fire_basic", name: "Fire", theme: "Basic", rarity: "Rare", unreleased: false },
  { id: "fire_gold", name: "Gold Fire", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "fire_candy", name: "Gummy Fire", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "fire_galaxy", name: "Galaxy Fire", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "fire_holofoil", name: "Holofoil Fire", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "duck_basic", name: "Duck", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "duck_gold", name: "Gold Duck", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "duck_candy", name: "Gummy Duck", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "duck_galaxy", name: "Galaxy Duck", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "duck_gem", name: "Gem Duck", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "ghost_basic", name: "Ghost", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "ghost_gold", name: "Gold Ghost", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "ghost_candy", name: "Gummy Ghost", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "ghost_galaxy", name: "Galaxy Ghost", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "ghost_holofoil", name: "Holofoil Ghost", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "dream_basic", name: "Dream", theme: "Basic", rarity: "Legendary", unreleased: false },
  { id: "dream_gold", name: "Gold Dream", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "dream_candy", name: "Gummy Dream", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "dream_galaxy", name: "Galaxy Dream", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "dream_rift", name: "Rift Dream", theme: "Rift", rarity: "Special", unreleased: true },
  { id: "demon_basic", name: "Demon", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "demon_gold", name: "Gold Demon", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "demon_candy", name: "Gummy Demon", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "demon_galaxy", name: "Galaxy Demon", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "demon_gem", name: "Gem Demon", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "punk_basic", name: "Punk", theme: "Basic", rarity: "Legendary", unreleased: false },
  { id: "punk_gold", name: "Gold Punk", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "punk_candy", name: "Gummy Punk", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "punk_galaxy", name: "Galaxy Punk", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "punk_gem", name: "Gem Punk", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "punk_rift", name: "Rift Punk", theme: "Rift", rarity: "Special", unreleased: true },
  { id: "king_basic", name: "King", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "king_gold", name: "Gold King", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "king_candy", name: "Gummy King", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "king_galaxy", name: "Galaxy King", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "king_holofoil", name: "Holofoil King", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "zeropoint_basic", name: "Zero Point", theme: "Basic", rarity: "Mythic", unreleased: false },
  { id: "zeropoint_gold", name: "Gold Zero Point", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "zeropoint_candy", name: "Gummy Zero Point", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "zeropoint_galaxy", name: "Galaxy Zero Point", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "zeropoint_gem", name: "Gem Zero Point", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "zeropoint_holofoil", name: "Quack Zero Point", theme: "Holofoil", rarity: "Special", unreleased: true },
  { id: "theburntpeanut_basic", name: "Burnt Peanut", theme: "Basic", rarity: "Mythic", unreleased: false },

  { id: "fishy_basic", name: "Fishy", theme: "Basic", rarity: "Rare", unreleased: false },
  { id: "fishy_gold", name: "Gold Fishy", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "fishy_candy", name: "Gummy Fishy", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "fishy_galaxy", name: "Galaxy Fishy", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "fishy_gem", name: "Gem Fishy", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "fishy_holofoil", name: "Holofoil Fishy", theme: "Holofoil", rarity: "Special", unreleased: true },

  { id: "striker_basic", name: "Striker", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "striker_gold", name: "Gold Striker", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "striker_candy", name: "Gummy Striker", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "striker_galaxy", name: "Galaxy Striker", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "striker_gem", name: "Gem Striker", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "striker_holofoil", name: "Holofoil Striker", theme: "Holofoil", rarity: "Special", unreleased: true },

  { id: "aura_basic", name: "Aura", theme: "Basic", rarity: "Epic", unreleased: false },
  { id: "aura_gold", name: "Gold Aura", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "aura_candy", name: "Gummy Aura", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "aura_galaxy", name: "Galaxy Aura", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "aura_gem", name: "Gem Aura", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "aura_holofoil", name: "Holofoil Aura", theme: "Holofoil", rarity: "Special", unreleased: true },

  { id: "boss_basic", name: "Boss", theme: "Basic", rarity: "Legendary", unreleased: false },
  { id: "boss_gold", name: "Gold Boss", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "boss_candy", name: "Gummy Boss", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "boss_galaxy", name: "Galaxy Boss", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "boss_gem", name: "Gem Boss", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "boss_holofoil", name: "Holofoil Boss", theme: "Holofoil", rarity: "Special", unreleased: true },

  { id: "grim_basic", name: "Grim", theme: "Basic", rarity: "Mythic", unreleased: false },
  { id: "grim_gold", name: "Gold Grim", theme: "Gold", rarity: "Special", unreleased: false },
  { id: "grim_candy", name: "Gummy Grim", theme: "Candy", rarity: "Special", unreleased: false },
  { id: "grim_galaxy", name: "Galaxy Grim", theme: "Galaxy", rarity: "Special", unreleased: false },
  { id: "grim_gem", name: "Gem Grim", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "grim_holofoil", name: "Holofoil Grim", theme: "Holofoil", rarity: "Special", unreleased: true },

  { id: "air_basic", name: "Air", theme: "Basic", rarity: "Rare", unreleased: true },
  { id: "air_gold", name: "Gold Air", theme: "Gold", rarity: "Special", unreleased: true },
  { id: "air_candy", name: "Gummy Air", theme: "Candy", rarity: "Special", unreleased: true },
  { id: "air_galaxy", name: "Galaxy Air", theme: "Galaxy", rarity: "Special", unreleased: true },
  { id: "air_gem", name: "Gem Air", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "air_holofoil", name: "Holofoil Air", theme: "Holofoil", rarity: "Special", unreleased: true },

  { id: "seven_basic", name: "Seven", theme: "Basic", rarity: "Legendary", unreleased: true },
  { id: "seven_gold", name: "Gold Seven", theme: "Gold", rarity: "Special", unreleased: true },
  { id: "seven_candy", name: "Gummy Seven", theme: "Candy", rarity: "Special", unreleased: true },
  { id: "seven_galaxy", name: "Galaxy Seven", theme: "Galaxy", rarity: "Special", unreleased: true },
  { id: "seven_gem", name: "Gem Seven", theme: "Gem", rarity: "Special", unreleased: true },
  { id: "seven_holofoil", name: "Holofoil Seven", theme: "Holofoil", rarity: "Special", unreleased: true },

  { id: "wick_basic", name: "John Wick", theme: "Basic", rarity: "Mythic", unreleased: true }
];

const storageKey = "cool_fn_sprite_tracker_v1";
const themeOrder = ["All", "Basic", "Gold", "Candy", "Galaxy", "Gem", "Holofoil", "Rift"];
const themeLabels = {
  Candy: "Gummy"
};
const el = {
  controls: document.querySelector(".controls"),
  grid: document.querySelector("#grid"),
  empty: document.querySelector("#empty"),
  spriteToolbar: document.querySelector("#spriteToolbar"),
  collectionsPanel: document.querySelector("#collectionsPanel"),
  collectionsGrid: document.querySelector("#collectionsGrid"),
  collectionCount: document.querySelector("#collectionCount"),
  viewTabs: document.querySelector("#viewTabs"),
  search: document.querySelector("#search"),
  theme: document.querySelector("#theme"),
  statusTabs: document.querySelector("#statusTabs"),
  hideMastered: document.querySelector("#hideMastered"),
  showUnreleased: document.querySelector("#showUnreleased"),
  ownedText: document.querySelector("#ownedText"),
  masteredText: document.querySelector("#masteredText"),
  ownedBar: document.querySelector("#ownedBar"),
  masteredBar: document.querySelector("#masteredBar"),
  resultCount: document.querySelector("#resultCount"),
  copyShare: document.querySelector("#copyShare"),
  exportData: document.querySelector("#exportData"),
  importData: document.querySelector("#importData"),
  importFile: document.querySelector("#importFile"),
  markVisible: document.querySelector("#markVisible"),
  resetAll: document.querySelector("#resetAll")
};

let state = {
  owned: [],
  mastered: [],
  search: "",
  theme: "All",
  status: "all",
  view: "sprites",
  hideMastered: false,
  showUnreleased: false
};

function unique(values) {
  return [...new Set(values)];
}

function loadState() {
  const share = new URLSearchParams(location.search).get("s");
  if (share) {
    try {
      const shared = JSON.parse(atob(share));
      state.owned = unique(shared.o || []);
      state.mastered = unique(shared.m || []).filter(id => state.owned.includes(id));
      return;
    } catch {
      history.replaceState(null, "", location.pathname);
    }
  }

  try {
    state = { ...state, ...JSON.parse(localStorage.getItem(storageKey)) };
    state.owned = unique(state.owned || []);
    state.mastered = unique(state.mastered || []).filter(id => state.owned.includes(id));
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function validSpriteIds(ids) {
  const knownIds = new Set(sprites.map(sprite => sprite.id));
  return unique(Array.isArray(ids) ? ids : []).filter(id => knownIds.has(id));
}

function trackerExportData() {
  return {
    app: "fnsprites-tracker",
    version: 1,
    exportedAt: new Date().toISOString(),
    owned: validSpriteIds(state.owned),
    mastered: validSpriteIds(state.mastered).filter(id => state.owned.includes(id))
  };
}

function importTrackerData(data) {
  const owned = validSpriteIds(data?.owned || data?.o);
  const mastered = validSpriteIds(data?.mastered || data?.m).filter(id => owned.includes(id));
  state.owned = owned;
  state.mastered = mastered;
  saveState();
  render();
}

function spriteImage(id) {
  return `https://staticvacant.github.io/fnsprites/sprites/${id}.png`;
}

function displayTheme(theme) {
  return themeLabels[theme] || theme;
}

function releasedSprites() {
  return sprites.filter(sprite => !sprite.unreleased);
}

function familyKey(sprite) {
  return sprite.id.replace(/_[^_]+$/, "");
}

function familyLabel(items) {
  const basic = items.find(sprite => sprite.theme === "Basic");
  if (basic) return basic.name;
  return items[0].name.replace(/^(Gold|Gummy|Galaxy|Gem|Holofoil|Rift)\s+/i, "");
}

function collectionProgress(items, mode) {
  const doneIds = mode === "owned" ? state.owned : state.mastered;
  const complete = items.filter(sprite => doneIds.includes(sprite.id)).length;
  const missing = items.filter(sprite => !doneIds.includes(sprite.id));
  return {
    complete,
    total: items.length,
    missing,
    finished: items.length > 0 && complete === items.length
  };
}

function collectionGoals() {
  const released = releasedSprites();
  const goals = [];
  const basicSprites = released.filter(sprite => sprite.theme === "Basic");

  goals.push({
    id: "owned-basic",
    type: "Normal Set",
    title: "All Normal Sprites",
    description: "Own every basic sprite.",
    mode: "owned",
    items: basicSprites
  });

  const familyMap = new Map();
  released.forEach(sprite => {
    const key = familyKey(sprite);
    if (!familyMap.has(key)) familyMap.set(key, []);
    familyMap.get(key).push(sprite);
  });

  [...familyMap.values()]
    .map(items => ({ name: familyLabel(items), items }))
    .filter(({ name }) => name !== "Burnt Peanut")
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(({ name, items }) => {
      goals.push({
        id: `family-${name}`,
        type: "Sprite Mastery",
        title: `${name} Master Set`,
        description: "Master the sprite and every released style.",
        mode: "mastered",
        items
      });
    });

  themeOrder
    .filter(theme => theme !== "All")
    .forEach(theme => {
      const items = released.filter(sprite => sprite.theme === theme);
      if (items.length === 0) return;
      goals.push({
        id: `theme-${theme}`,
        type: "Style Mastery",
        title: `${displayTheme(theme)} Style Mastery`,
        description: "Master every released sprite in this style.",
        mode: "mastered",
        items
      });
    });

  return goals.map(goal => ({ ...goal, progress: collectionProgress(goal.items, goal.mode) }));
}

function currentList() {
  const query = state.search.trim().toLowerCase();
  return sprites
    .filter(sprite => state.showUnreleased || !sprite.unreleased)
    .filter(sprite => state.theme === "All" || sprite.theme === state.theme)
    .filter(sprite => !query || `${sprite.name} ${sprite.theme} ${sprite.rarity}`.toLowerCase().includes(query))
    .filter(sprite => {
      const owned = state.owned.includes(sprite.id);
      const mastered = state.mastered.includes(sprite.id);
      if (state.hideMastered && mastered) return false;
      if (state.status === "owned") return owned;
      if (state.status === "missing") return !owned;
      if (state.status === "mastered") return mastered;
      return true;
    })
    .sort((a, b) => themeOrder.indexOf(a.theme) - themeOrder.indexOf(b.theme) || a.name.localeCompare(b.name));
}

function updateProgress() {
  const released = releasedSprites();
  const ownedCount = released.filter(sprite => state.owned.includes(sprite.id)).length;
  const masteredCount = released.filter(sprite => state.mastered.includes(sprite.id)).length;
  const total = released.length;

  el.ownedText.textContent = `${ownedCount} / ${total}`;
  el.masteredText.textContent = `${masteredCount} / ${total}`;
  el.ownedBar.style.width = `${total ? (ownedCount / total) * 100 : 0}%`;
  el.masteredBar.style.width = `${total ? (masteredCount / total) * 100 : 0}%`;
}

function renderCard(sprite) {
  const owned = state.owned.includes(sprite.id);
  const mastered = state.mastered.includes(sprite.id);
  const card = document.createElement("article");
  card.className = ["card", owned ? "owned" : "", mastered ? "mastered" : "", sprite.unreleased ? "unreleased" : ""].join(" ");
  card.dataset.id = sprite.id;
  card.dataset.rarity = sprite.rarity;
  card.innerHTML = `
    <div class="art">
      <span class="badge">${mastered ? "Mastered" : owned ? "Owned" : sprite.unreleased ? "Unreleased" : "Missing"}</span>
      <img src="${spriteImage(sprite.id)}" alt="${sprite.name}" loading="lazy">
      <span class="rarity">${sprite.rarity}</span>
      <button class="master-button" type="button">${mastered ? "Unmaster" : "Master"}</button>
    </div>
    <div class="title">${sprite.name}</div>
  `;

  card.addEventListener("click", () => toggleOwned(sprite.id));
  card.querySelector(".master-button").addEventListener("click", event => {
    event.stopPropagation();
    toggleMastered(sprite.id);
  });
  return card;
}

function renderCollectionCard(goal) {
  const card = document.createElement("article");
  const { progress } = goal;
  const percent = progress.total ? (progress.complete / progress.total) * 100 : 0;
  const missingNames = progress.missing.slice(0, 4).map(sprite => sprite.name).join(", ");
  const extraMissing = Math.max(0, progress.missing.length - 4);
  const missingText = progress.finished
    ? "Complete"
    : `Missing ${missingNames}${extraMissing ? ` +${extraMissing} more` : ""}`;

  card.className = `collection-card ${progress.finished ? "complete" : ""}`;
  card.innerHTML = `
    <div class="collection-head">
      <div class="collection-check" aria-label="${progress.finished ? "Complete" : "Incomplete"}">${progress.finished ? "✓" : ""}</div>
      <div class="collection-title">
        <strong>${goal.title}</strong>
        <span>${goal.type}</span>
      </div>
    </div>
    <div class="collection-progress">
      <div class="collection-progress-row">
        <span>${goal.description}</span>
        <strong>${progress.complete} / ${progress.total}</strong>
      </div>
      <div class="meter"><i style="width: ${percent}%"></i></div>
    </div>
    <div class="collection-missing">${missingText}</div>
  `;
  return card;
}

function renderCollections() {
  const goals = collectionGoals();
  const completeCount = goals.filter(goal => goal.progress.finished).length;
  el.collectionCount.textContent = `${completeCount} / ${goals.length} collections`;
  el.collectionsGrid.replaceChildren(...goals.map(renderCollectionCard));
}

function render() {
  updateProgress();
  const isCollections = state.view === "collections";

  el.spriteToolbar.hidden = isCollections;
  el.grid.hidden = isCollections;
  el.collectionsPanel.hidden = !isCollections;

  if (isCollections) {
    el.grid.replaceChildren();
    el.empty.hidden = true;
    renderCollections();
  } else {
    const list = currentList();
    el.collectionsGrid.replaceChildren();
    el.resultCount.textContent = `${list.length} ${list.length === 1 ? "sprite" : "sprites"}`;
    el.grid.replaceChildren(...list.map(renderCard));
    el.empty.hidden = list.length !== 0;
  }

  el.search.value = state.search;
  el.theme.value = state.theme;
  el.hideMastered.checked = state.hideMastered;
  el.showUnreleased.checked = state.showUnreleased;
  el.controls.classList.toggle("collections-mode", isCollections);
  el.statusTabs.querySelectorAll("button").forEach(button => {
    button.classList.toggle("active", button.dataset.status === state.status);
  });
  el.viewTabs.querySelectorAll("button").forEach(button => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function toggleOwned(id) {
  if (state.owned.includes(id)) {
    state.owned = state.owned.filter(item => item !== id);
    state.mastered = state.mastered.filter(item => item !== id);
  } else {
    state.owned = [...state.owned, id];
  }
  saveState();
  render();
}

function toggleMastered(id) {
  if (!state.owned.includes(id)) state.owned = [...state.owned, id];
  state.mastered = state.mastered.includes(id)
    ? state.mastered.filter(item => item !== id)
    : [...state.mastered, id];
  saveState();
  render();
}

function initControls() {
  el.theme.replaceChildren(...themeOrder.map(theme => new Option(displayTheme(theme), theme)));
  el.viewTabs.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    state.view = button.dataset.view;
    saveState();
    render();
  });
  el.search.addEventListener("input", event => {
    state.search = event.target.value;
    saveState();
    render();
  });
  el.theme.addEventListener("change", event => {
    state.theme = event.target.value;
    saveState();
    render();
  });
  el.statusTabs.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    state.status = button.dataset.status;
    saveState();
    render();
  });
  el.hideMastered.addEventListener("change", event => {
    state.hideMastered = event.target.checked;
    saveState();
    render();
  });
  el.showUnreleased.addEventListener("change", event => {
    state.showUnreleased = event.target.checked;
    saveState();
    render();
  });
  el.markVisible.addEventListener("click", () => {
    state.owned = unique([...state.owned, ...currentList().map(sprite => sprite.id)]);
    saveState();
    render();
  });
  el.resetAll.addEventListener("click", () => {
    if (!confirm("Reset owned and mastered sprites?")) return;
    state.owned = [];
    state.mastered = [];
    saveState();
    render();
  });
  el.copyShare.addEventListener("click", async () => {
    const code = btoa(JSON.stringify({ o: state.owned, m: state.mastered }));
    const url = `${location.origin}${location.pathname}?s=${code}`;
    await navigator.clipboard.writeText(url);
    el.copyShare.textContent = "Copied";
    setTimeout(() => {
      el.copyShare.textContent = "Copy share link";
    }, 1100);
  });
  el.exportData.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(trackerExportData(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "fnsprites-tracker-data.json";
    link.click();
    URL.revokeObjectURL(url);
  });
  el.importData.addEventListener("click", () => {
    el.importFile.click();
  });
  el.importFile.addEventListener("change", async () => {
    const [file] = el.importFile.files;
    el.importFile.value = "";
    if (!file) return;

    try {
      const data = JSON.parse(await file.text());
      importTrackerData(data);
      el.importData.textContent = "Imported";
      setTimeout(() => {
        el.importData.textContent = "Import data";
      }, 1100);
    } catch {
      alert("That import file is not valid tracker data.");
    }
  });
}

loadState();
initControls();
render();
