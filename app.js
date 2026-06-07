/**
 * 🐾 PetData — Application Logic & State Engine
 */

// --- Initial Default Database State ---
const DEFAULT_PETS_DB = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Oyen",
    species: "Kucing Domestik (Tabby)",
    gender: "Jantan",
    dob: "2024-05-10",
    chipNumber: "MY-985-121-0123",
    chipColor: "Oren / Merah",
    physical: "Jingga Belang Halus, Mata Hijau",
    avatar: "🐱",
    weightLog: [
      { date: "2026-01-05", weight: 4.1 },
      { date: "2026-02-10", weight: 4.3 },
      { date: "2026-03-15", weight: 4.4 },
      { date: "2026-04-20", weight: 4.6 },
      { date: "2026-05-25", weight: 4.8 },
      { date: "2026-06-05", weight: 4.9 }
    ],
    foodHistory: [
      { date: "2026-06-07", type: "dry", brand: "Orijen Cat & Kitten" },
      { date: "2026-06-06", type: "wet", brand: "Royal Canin Instinctive" },
      { date: "2026-06-05", type: "raw", brand: "Dada Ayam Mentah (BARF)" }
    ],
    vaccines: [
      { name: "Feline FVRCP (Tricat)", date: "2026-01-10", dueDate: "2027-01-10", status: "green" },
      { name: "Rabies Immunization", date: "2025-08-15", dueDate: "2026-08-15", status: "yellow" },
      { name: "Feline Leukemia Virus (FeLV)", date: "2025-04-10", dueDate: "2026-04-10", status: "red" }
    ],
    treatments: [
      { type: "Ubat Cacing (Deworm)", date: "2026-05-10", dueDate: "2026-08-10", product: "Drontal Cat" },
      { type: "Kutu & Hama (Flea/Tick)", date: "2026-05-20", dueDate: "2026-06-20", product: "Frontline Plus" }
    ],
    travelHistory: [
      { country: "Singapore", entryDate: "2026-03-01", exitDate: "2026-03-05", certId: "SG-EXP-901B", status: "green", quarantine: "Pelepasan Kastam & Kesihatan Tanpa Kuarantin", flag: "🇸🇬" },
      { country: "Thailand", entryDate: "2026-05-12", exitDate: "2026-05-18", certId: "TH-EXP-440C", status: "yellow", quarantine: "Kuarantin 1 Hari di Sempadan Bukit Kayu Hitam", flag: "🇹🇭" }
    ],
    certificates: [
      { id: "PD-REG-88C15A", type: "Pendaftaran", name: "Sijil Pendaftaran Haiwan", issueDate: "2024-06-01", expiryDate: "Kekal", status: "Active" },
      { id: "PD-HLT-992F1A", type: "Kesihatan", name: "Sijil Kesihatan DVS", issueDate: "2026-05-10", expiryDate: "2026-07-10", status: "Active" },
      { id: "PD-OWN-110D2C", type: "Pemilikan", name: "Sijil Hak Milik Kripto", issueDate: "2024-06-01", expiryDate: "Kekal", status: "Active" }
    ],
    transfers: [
      { date: "2024-06-01", from: "DVS Vet Registry", to: "Engku Helmy", status: "Selesai" }
    ],
    nfc: {
      active: true,
      uid: "NTAG215_90A45F3C28"
    }
  },
  {
    id: "3a2c4e12-8822-4a0b-923f-557e1a3b4c90",
    name: "Luna",
    species: "Siberian Husky (Anjing)",
    gender: "Betina",
    dob: "2024-11-20",
    chipNumber: "MY-985-121-8899",
    chipColor: "Perak / Kelabu",
    physical: "Hitam Putih Kelabu, Mata Biru Kristal",
    avatar: "🐶",
    weightLog: [
      { date: "2026-01-15", weight: 20.5 },
      { date: "2026-02-20", weight: 21.2 },
      { date: "2026-03-25", weight: 22.0 },
      { date: "2026-04-28", weight: 22.8 },
      { date: "2026-05-30", weight: 23.5 },
      { date: "2026-06-06", weight: 23.9 }
    ],
    foodHistory: [
      { date: "2026-06-07", type: "raw", brand: "Daging Lembu BARF Premium" },
      { date: "2026-06-05", type: "dry", brand: "Acana Wild Prairie Dog" },
      { date: "2026-06-04", type: "supplement", brand: "Salmon Oil Omega 3" }
    ],
    vaccines: [
      { name: "Canine DHPP", date: "2026-02-15", dueDate: "2027-02-15", status: "green" },
      { name: "Rabies Vaccine (LHD)", date: "2026-02-15", dueDate: "2027-02-15", status: "green" }
    ],
    treatments: [
      { type: "Ubat Cacing (Deworm)", date: "2026-04-12", dueDate: "2026-07-12", product: "Milbemax Dog" },
      { type: "Kutu & Jantung (Heartworm)", date: "2026-05-02", dueDate: "2026-06-02", product: "Nexgard Spectra" }
    ],
    travelHistory: [
      { country: "United Kingdom", entryDate: "2025-12-10", exitDate: "2026-01-05", certId: "UK-EXP-202X", status: "green", quarantine: "Lepas Saringan Kesihatan DEFRA UK", flag: "🇬🇧" }
    ],
    certificates: [
      { id: "PD-REG-77D22B", type: "Pendaftaran", name: "Sijil Pendaftaran Anjing", issueDate: "2025-01-10", expiryDate: "Kekal", status: "Active" },
      { id: "PD-OWN-553C1A", type: "Pemilikan", name: "Sijil Hak Milik Kripto", issueDate: "2025-01-10", expiryDate: "Kekal", status: "Active" }
    ],
    transfers: [
      { date: "2025-01-10", from: "Breeder Husky MY", to: "Engku Helmy", status: "Selesai" }
    ],
    nfc: {
      active: false,
      uid: "NTAG213_55F2201CBB"
    }
  }
];

// Clinic list data
const CLINICS_DB = [
  { id: "clinic-1", name: "Klinik Veterinar Kerajaan Daerah Petaling" },
  { id: "clinic-2", name: "Jabatan Perkhidmatan Veterinar Negeri Selangor (Shah Alam)" },
  { id: "clinic-3", name: "Klinik Veterinar Kerajaan Wilayah Persekutuan (Cheras)" },
  { id: "clinic-4", name: "Klinik Veterinar Kerajaan Daerah Klang" }
];

// Appointments Storage State
let appointmentsDb = JSON.parse(localStorage.getItem('petdata_appointments')) || [
  {
    id: "apt-1092",
    petName: "Oyen",
    service: "Vaksinasi & Imunisasi",
    clinic: "Klinik Veterinar Kerajaan Daerah Petaling",
    date: "2026-06-18",
    time: "10:30 AM",
    status: "Confirmed"
  }
];

// Setup state
let petsList = JSON.parse(localStorage.getItem('petdata_pets')) || DEFAULT_PETS_DB;
let activePetId = localStorage.getItem('petdata_active_id') || petsList[0].id;

// --- App Initialization & Event Hookups ---
document.addEventListener('DOMContentLoaded', () => {
  // PWA Service Worker registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log("PetData Service Worker Registered"))
      .catch((err) => console.warn("Service Worker failed:", err));
  }

  initTheme();
  setupNavigation();
  setupPetSwitcher();
  setupFormsAndModals();
  setupAppointmentCalendar();
  setupTransferWizard();
  
  // Initial render calls
  renderActivePetDetails();
  renderAppointments();
});

// --- Theme Handler ---
function initTheme() {
  const savedTheme = localStorage.getItem('petdata_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const themeToggle = document.getElementById('theme-toggle-btn');
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('petdata_theme', newTheme);
    showToast(`Tukar ke Mod ${newTheme === 'light' ? 'Cerah' : 'Gelap'}`, 'info');
  });
}

// --- Navigation Tabs ---
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const pageTitle = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');
  
  const headerMeta = {
    dashboard: { title: "Ringkasan Dashboard", subtitle: "Semua maklumat kesihatan dan kemajuan semasa haiwan kesayangan anda." },
    profile: { title: "Profil & Sejarah Fizikal", subtitle: "Kemaskini maklumat asas, baka, cip elektronik, dan rekod tumbesaran." },
    travel: { title: "Sejarah Perjalanan (Passport)", subtitle: "Rekod sempadan perjalanan rasmi haiwan melalui integrasi Vets Passport API." },
    certificates: { title: "Vault Sijil Veterinar", subtitle: "Semak status pengesahan QR rasmi bagi sijil kesihatan dan pendaftaran haiwan." },
    appointments: { title: "Slot Temujanji Klinik", subtitle: "Daftar slot rawatan dengan klinik veterinar DVS secara digital." },
    'transfer-nfc': { title: "Sijil Pemindahan & Kolar NFC", subtitle: "Uruskan pindah milik kriptografi dan tetapan kolar pengesan NFC IoT." }
  };

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');
      
      navItems.forEach(n => n.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      
      item.classList.add('active');
      const activePane = document.getElementById(`tab-${targetTab}`);
      if (activePane) activePane.classList.add('active');
      
      // Update header titles
      const meta = headerMeta[targetTab];
      if (meta) {
        pageTitle.textContent = meta.title;
        pageSubtitle.textContent = meta.subtitle;
      }
      
      // Render components matching current view
      if (targetTab === 'dashboard') {
        renderWeightChart();
      } else if (targetTab === 'profile') {
        renderProfileWeightTable();
      }
    });
  });
}

// --- Dynamic Pet Profile Switching ---
function setupPetSwitcher() {
  const trigger = document.getElementById('pet-switcher-trigger');
  const dropdown = document.getElementById('pet-switcher-dd');
  
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });
  
  document.addEventListener('click', () => {
    dropdown.classList.remove('show');
  });

  renderPetSwitcherMenu();
}

function renderPetSwitcherMenu() {
  const dropdown = document.getElementById('pet-switcher-dd');
  // Keep the add new button
  const addBtn = document.getElementById('add-pet-trigger');
  
  // Remove other dropdown-items first
  const existingItems = dropdown.querySelectorAll('.dropdown-item');
  existingItems.forEach(item => item.remove());
  
  petsList.forEach(pet => {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.innerHTML = `
      <div class="dropdown-item-info">
        <div class="pet-avatar-mini">${pet.avatar}</div>
        <div>
          <div class="dropdown-item-name">${pet.name}</div>
          <div class="dropdown-item-breed">${pet.species}</div>
        </div>
      </div>
      ${pet.id === activePetId ? '<span>✓</span>' : ''}
    `;
    
    item.addEventListener('click', () => {
      activePetId = pet.id;
      localStorage.setItem('petdata_active_id', activePetId);
      
      renderPetSwitcherMenu();
      renderActivePetDetails();
      
      showToast(`Mengaktifkan profil: ${pet.name}`, 'success');
      
      // Refresh current view graphs
      renderWeightChart();
      renderProfileWeightTable();
    });
    
    dropdown.insertBefore(item, addBtn);
  });
}

// Get currently active pet object helper
function getActivePet() {
  return petsList.find(p => p.id === activePetId) || petsList[0];
}

// Render dynamic elements for active pet
function renderActivePetDetails() {
  const pet = getActivePet();
  if (!pet) return;

  // Update Mini Swapper Header UI
  document.getElementById('current-pet-name').textContent = pet.name;
  document.getElementById('current-pet-avatar').textContent = pet.avatar;
  
  // Dashboard Overview values
  document.getElementById('dash-weight-value').textContent = getLatestWeight(pet);
  document.getElementById('dash-chip-value').textContent = pet.chipNumber || 'Tiada';
  
  // Vaccine indicator
  const vacStatusDiv = document.getElementById('dash-vaccine-status');
  const worstStatus = getVaccineOverallStatus(pet);
  if (worstStatus === 'red') {
    vacStatusDiv.innerHTML = '<span class="badge badge-red">Tamat Tempoh</span>';
  } else if (worstStatus === 'yellow') {
    vacStatusDiv.innerHTML = '<span class="badge badge-yellow">Perlu Vaksin Segera</span>';
  } else {
    vacStatusDiv.innerHTML = '<span class="badge badge-green">Up to Date</span>';
  }

  // Dashboard Large Details card
  const largeAvatar = document.getElementById('dash-pet-avatar');
  largeAvatar.textContent = pet.avatar;
  document.getElementById('dash-pet-gender-icon').textContent = pet.gender === 'Jantan' ? '♂️' : '♀️';
  document.getElementById('dash-pet-name').textContent = pet.name;
  document.getElementById('dash-pet-breed').textContent = pet.species;
  document.getElementById('dash-pet-uuid').textContent = `ID: ${pet.id.substring(0,8)}...`;
  document.getElementById('dash-pet-dob').textContent = formatDate(pet.dob);
  document.getElementById('dash-pet-colors').textContent = pet.physical || 'Kelabu Jingga';

  // Load food logs
  renderFoodLogs(pet);

  // Load SVG graphs
  renderWeightChart();

  // Populate Edit Form in Profile Tab
  document.getElementById('prof-pet-name').value = pet.name;
  document.getElementById('prof-pet-species').value = pet.species;
  document.getElementById('prof-pet-gender').value = pet.gender;
  document.getElementById('prof-pet-dob').value = pet.dob;
  document.getElementById('prof-pet-chip-no').value = pet.chipNumber || '';
  document.getElementById('prof-pet-chip-color').value = pet.chipColor || '';
  document.getElementById('prof-pet-physical').value = pet.physical || '';
  
  // Travel Timeline Tab
  renderTravelTimeline(pet);

  // Certificates Vault Tab
  renderCertificates(pet);

  // NFC Tab UI update
  const nfcToggleBtn = document.getElementById('btn-toggle-nfc');
  const nfcPulse = document.getElementById('nfc-pulse-indicator');
  const nfcStatusText = document.getElementById('nfc-status-text');
  const nfcUidDisplay = document.getElementById('nfc-uid-display');
  
  if (pet.nfc && pet.nfc.active) {
    nfcToggleBtn.textContent = 'Matikan NFC';
    nfcPulse.style.display = 'inline-flex';
    nfcStatusText.textContent = 'Collar NFC Aktif';
    nfcUidDisplay.value = pet.nfc.uid;
  } else {
    nfcToggleBtn.textContent = 'Aktifkan NFC';
    nfcPulse.style.display = 'none';
    nfcStatusText.textContent = 'Collar NFC Dimatikan';
    nfcUidDisplay.value = 'TIDAK AKTIF';
  }

  // Audit transfer log
  renderTransferHistoryTable(pet);
}

function getLatestWeight(pet) {
  if (pet.weightLog && pet.weightLog.length > 0) {
    return pet.weightLog[pet.weightLog.length - 1].weight;
  }
  return '--';
}

function getVaccineOverallStatus(pet) {
  if (!pet.vaccines || pet.vaccines.length === 0) return 'red';
  let statuses = pet.vaccines.map(v => v.status);
  if (statuses.includes('red')) return 'red';
  if (statuses.includes('yellow')) return 'yellow';
  return 'green';
}

// Render food logs inside widget
function renderFoodLogs(pet) {
  const container = document.getElementById('dash-food-logs-container');
  container.innerHTML = '';
  
  if (!pet.foodHistory || pet.foodHistory.length === 0) {
    container.innerHTML = '<div style="text-align: center; font-size: 13px; color: var(--text-muted); margin-top: 20px;">Tiada log makanan direkodkan</div>';
    return;
  }
  
  pet.foodHistory.forEach(log => {
    const item = document.createElement('div');
    item.className = 'food-log-item';
    
    let icon = '🍲';
    if (log.type === 'dry') icon = '🟤';
    if (log.type === 'wet') icon = '🥫';
    if (log.type === 'raw') icon = '🥩';
    if (log.type === 'supplement') icon = '💊';

    item.innerHTML = `
      <span class="food-log-icon">${icon}</span>
      <div class="food-log-info">
        <span class="food-type-badge food-type-${log.type}">${log.type}</span>
        <span class="food-log-brand">${log.brand}</span>
      </div>
      <span class="food-log-date">${formatDate(log.date)}</span>
    `;
    container.appendChild(item);
  });
}

// Render dynamic custom SVG Line Chart
function renderWeightChart() {
  const holder = document.getElementById('weight-chart-holder');
  if (!holder) return;

  const pet = getActivePet();
  const logs = pet.weightLog || [];
  
  if (logs.length === 0) {
    holder.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding-top: 80px;">Tiada data berat badan terkini.</div>';
    return;
  }

  // Find container dimensions
  const width = holder.clientWidth || 600;
  const height = holder.clientHeight || 220;
  
  const paddingLeft = 50;
  const paddingRight = 30;
  const paddingTop = 30;
  const paddingBottom = 40;
  
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;
  
  // Find weight ranges
  const weights = logs.map(l => l.weight);
  const minW = Math.min(...weights) * 0.9;
  const maxW = Math.max(...weights) * 1.1;
  const wRange = maxW - minW || 1;
  
  // Build coordinates mapping
  const points = logs.map((log, index) => {
    const x = paddingLeft + (index / (logs.length - 1 || 1)) * chartWidth;
    const y = paddingTop + chartHeight - ((log.weight - minW) / wRange) * chartHeight;
    return { x, y, weight: log.weight, date: log.date };
  });

  // Build SVG path
  let pathD = '';
  let areaD = '';
  
  if (points.length > 0) {
    pathD = `M ${points[0].x} ${points[0].y}`;
    areaD = `M ${points[0].x} ${height - paddingBottom} L ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      pathD += ` L ${points[i].x} ${points[i].y}`;
      areaD += ` L ${points[i].x} ${points[i].y}`;
    }
    
    areaD += ` L ${points[points.length - 1].x} ${height - paddingBottom} Z`;
  }

  // Draw grid helperlines
  let gridLines = '';
  const numGridLines = 4;
  for (let i = 0; i <= numGridLines; i++) {
    const wVal = minW + (i / numGridLines) * wRange;
    const y = paddingTop + chartHeight - (i / numGridLines) * chartHeight;
    
    // Grid line
    gridLines += `<line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" class="chart-grid-line" />`;
    // Weight scale text
    gridLines += `<text x="${paddingLeft - 10}" y="${y + 4}" fill="var(--text-muted)" font-size="10" text-anchor="end">${wVal.toFixed(1)}</text>`;
  }

  // Draw date labels
  let dateLabels = '';
  points.forEach((pt, index) => {
    // Only display first, middle, last to prevent overlap on mobile
    if (index === 0 || index === points.length - 1 || index === Math.floor(points.length / 2)) {
      const dateStr = formatDateShort(pt.date);
      dateLabels += `<text x="${pt.x}" y="${height - 15}" class="chart-label-text">${dateStr}</text>`;
    }
  });

  // Build point circles
  let circlePoints = '';
  points.forEach((pt, i) => {
    circlePoints += `
      <circle cx="${pt.x}" cy="${pt.y}" r="5" class="chart-point" data-weight="${pt.weight}" data-date="${pt.date}">
        <title>${pt.weight} kg (${formatDate(pt.date)})</title>
      </circle>
    `;
  });

  // Put everything together
  holder.innerHTML = `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="var(--primary)" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      
      <!-- Grid -->
      ${gridLines}
      
      <!-- Area Shadow -->
      <path d="${areaD}" class="chart-area" />
      
      <!-- Trend Line -->
      <path d="${pathD}" class="chart-line" />
      
      <!-- Date Labels -->
      ${dateLabels}
      
      <!-- Points -->
      ${circlePoints}
    </svg>
  `;

  // Attach dynamic info triggers to circles
  const chartPoints = holder.querySelectorAll('.chart-point');
  chartPoints.forEach(pt => {
    pt.addEventListener('click', () => {
      const wt = pt.getAttribute('data-weight');
      const dt = pt.getAttribute('data-date');
      showToast(`Log: ${wt} kg pada ${formatDate(dt)}`, 'info');
    });
  });
}

// Render weight history logs inside profile table
function renderProfileWeightTable() {
  const pet = getActivePet();
  const tbody = document.getElementById('profile-weight-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  const logs = [...(pet.weightLog || [])].reverse(); // Show newest first

  if (logs.length === 0) {
    tbody.innerHTML = '<tr><td colspan="2" style="text-align: center; color: var(--text-muted);">Tiada sejarah log berat</td></tr>';
    return;
  }

  logs.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${formatDate(log.date)}</td>
      <td><strong>${log.weight.toFixed(1)} kg</strong></td>
    `;
    tbody.appendChild(row);
  });
}

// --- Travel Passport History Module ---
function renderTravelTimeline(pet) {
  const container = document.getElementById('travel-timeline');
  if (!container) return;

  container.innerHTML = '';
  
  if (!pet.travelHistory || pet.travelHistory.length === 0) {
    container.innerHTML = '<div class="glass-card" style="text-align: center; padding: 40px; color: var(--text-muted);">Tiada rekod perjalanan luar negara yang berdaftar dengan API Vet Passport.</div>';
    return;
  }

  pet.travelHistory.forEach(trip => {
    const item = document.createElement('div');
    item.className = `timeline-item status-${trip.status}`;
    item.innerHTML = `
      <div class="timeline-badge">${trip.flag}</div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3 class="timeline-title">Terbang Ke / Dari: ${trip.country}</h3>
          <span class="timeline-date">${formatDate(trip.entryDate)} - ${formatDate(trip.exitDate)}</span>
        </div>
        <p class="timeline-desc"><strong>Status Kuarantin:</strong> ${trip.quarantine}</p>
        <div class="timeline-details">
          <span>ID Sijil Pelepasan: <strong>${trip.certId}</strong></span>
          <span>•</span>
          <span>Kementerian: <strong>Jabatan Perkhidmatan Veterinar (DVS)</strong></span>
          <span>•</span>
          <span>Pegawai Pengesah: <strong>Dr. F. Ahmad (MVR 9812)</strong></span>
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

// --- Certificates Vault Module ---
function renderCertificates(pet) {
  const container = document.getElementById('certs-container');
  if (!container) return;

  container.innerHTML = '';
  
  if (!pet.certificates || pet.certificates.length === 0) {
    container.innerHTML = '<div class="glass-card" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Tiada sijil rasmi yang didaftarkan bagi haiwan ini.</div>';
    return;
  }

  pet.certificates.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'glass-card cert-card';
    
    // Status colors
    const isExpired = cert.expiryDate !== 'Kekal' && new Date(cert.expiryDate) < new Date();
    const statusText = isExpired ? 'Expired' : cert.status;
    const badgeClass = isExpired ? 'badge-red' : 'badge-green';

    card.innerHTML = `
      <div class="cert-header">
        <div>
          <span class="cert-type">${cert.type}</span>
          <h3 class="cert-name">${cert.name}</h3>
        </div>
        <span class="cert-status badge ${badgeClass}">${statusText}</span>
      </div>
      
      <div class="cert-meta">
        <div>Dikeluar: <strong>${formatDate(cert.issueDate)}</strong></div>
        <div>Tamat Tempoh: <strong>${cert.expiryDate === 'Kekal' ? 'Kekal' : formatDate(cert.expiryDate)}</strong></div>
      </div>
      
      <div class="cert-footer">
        <span class="cert-id">${cert.id}</span>
        <div class="cert-btn-group">
          <button class="btn-icon btn-view-cert" data-cert-id="${cert.id}" title="Papar & Print Sijil">👁️</button>
          <button class="btn-icon btn-verify-qr" data-cert-id="${cert.id}" title="Sahkan QR API">🔗</button>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });

  // Attach button triggers
  container.querySelectorAll('.btn-view-cert').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-cert-id');
      openCertificateViewer(id);
    });
  });

  container.querySelectorAll('.btn-verify-qr').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-cert-id');
      verifyCertificateWithAPI(id);
    });
  });
}

function openCertificateViewer(certId) {
  const pet = getActivePet();
  const cert = pet.certificates.find(c => c.id === certId);
  if (!cert) return;

  document.getElementById('cert-viewer-title').textContent = cert.name;
  document.getElementById('cert-title-internal').textContent = cert.name.toUpperCase();
  document.getElementById('cert-id-internal').textContent = `SIJIL ID: ${cert.id}`;
  document.getElementById('cert-pet-name-internal').textContent = pet.name;
  document.getElementById('cert-breed-internal').textContent = pet.species;
  document.getElementById('cert-gender-dob-internal').textContent = `${pet.gender} • DOB: ${formatDate(pet.dob)}`;
  document.getElementById('cert-chip-internal').textContent = pet.chipNumber || 'TIADA';
  document.getElementById('cert-issue-date').textContent = formatDate(cert.issueDate);
  document.getElementById('cert-expiry-date').textContent = cert.expiryDate === 'Kekal' ? 'Kekal' : formatDate(cert.expiryDate);

  // Set active printed class
  const modal = document.getElementById('modal-cert-viewer');
  modal.classList.add('show');
}

function verifyCertificateWithAPI(certId) {
  showToast(`Saringan API: Memeriksa integriti kripto bagi ${certId}...`, 'info');
  
  setTimeout(() => {
    showToast(`Disahkan! Sijil ${certId} didapati sah di dalam pangkalan data Vet Registry API Kerajaan Malaysia (SHA-256 Padan).`, 'success');
  }, 1200);
}

// --- Appointment Booking Module ---
let activeSelectedDate = '2026-06-18'; // Mock initial select
let activeSelectedTime = '';

function setupAppointmentCalendar() {
  const grid = document.getElementById('cal-grid-days');
  const monthLabel = document.getElementById('cal-month-year');
  if (!grid) return;

  // Render June 2026 (June 1st is Monday)
  monthLabel.textContent = "Jun 2026";
  grid.innerHTML = '';

  const dayLabels = ['ISN', 'SEL', 'RAB', 'KHA', 'JUM', 'SAB', 'AHA'];
  dayLabels.forEach(lbl => {
    const node = document.createElement('div');
    node.className = 'calendar-day-label';
    node.textContent = lbl;
    grid.appendChild(node);
  });

  // Empty padding days for June 1st (Monday = 0 blank days)
  const daysInMonth = 30;
  
  for (let i = 1; i <= daysInMonth; i++) {
    const dayNode = document.createElement('div');
    dayNode.className = 'calendar-day';
    dayNode.textContent = i;
    
    const dateStr = `2026-06-${i.toString().padStart(2, '0')}`;
    
    // Weekend locking mock (Sundays disabled)
    const dayOfWeek = (i + 0) % 7; // Monday 1st
    if (dayOfWeek === 0) {
      dayNode.classList.add('disabled');
    }
    
    if (dateStr === activeSelectedDate) {
      dayNode.classList.add('active');
    }

    dayNode.addEventListener('click', () => {
      document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
      dayNode.classList.add('active');
      activeSelectedDate = dateStr;
      
      // Load slots matching this date
      renderTimeSlots(dateStr);
    });

    grid.appendChild(dayNode);
  }

  // Load initial slots
  renderTimeSlots(activeSelectedDate);
}

function renderTimeSlots(date) {
  const container = document.getElementById('slots-time-container');
  if (!container) return;

  container.innerHTML = '';
  activeSelectedTime = '';

  const slots = [
    { time: "09:00 AM", booked: false },
    { time: "10:00 AM", booked: true },
    { time: "10:30 AM", booked: true },
    { time: "11:30 AM", booked: false },
    { time: "02:00 PM", booked: false },
    { time: "03:00 PM", booked: false },
    { time: "04:00 PM", booked: true }
  ];

  slots.forEach(slot => {
    const node = document.createElement('div');
    node.className = `slot-item ${slot.booked ? 'booked' : ''}`;
    node.textContent = slot.time;
    
    if (!slot.booked) {
      node.addEventListener('click', () => {
        document.querySelectorAll('.slot-item').forEach(s => s.classList.remove('active'));
        node.classList.add('active');
        activeSelectedTime = slot.time;
      });
    }

    container.appendChild(node);
  });
}

function renderAppointments() {
  const list = document.getElementById('upcoming-appointments-list');
  if (!list) return;

  list.innerHTML = '';
  
  if (appointmentsDb.length === 0) {
    list.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px; font-size: 13px;">Tiada temujanji dijadualkan</div>';
    return;
  }

  appointmentsDb.forEach(apt => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.style.padding = '16px';
    
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        <div>
          <h4 style="font-size: 14px; font-weight: 700;">${apt.service}</h4>
          <span style="font-size: 11px; color: var(--primary); font-weight: 600;">Untuk: ${apt.petName}</span>
        </div>
        <span class="badge ${apt.status === 'Confirmed' ? 'badge-green' : 'badge-yellow'}">${apt.status}</span>
      </div>
      <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.4;">🏢 ${apt.clinic}</p>
      
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); margin-top: 12px; padding-top: 10px; font-size: 12px;">
        <strong>📅 ${formatDate(apt.date)} @ ${apt.time}</strong>
        <button class="chart-btn btn-cancel-apt" data-apt-id="${apt.id}" style="padding: 2px 6px; background: var(--danger-bg); color: var(--danger); border-color: transparent;">Batal</button>
      </div>
    `;
    
    card.querySelector('.btn-cancel-apt').addEventListener('click', () => {
      cancelAppointment(apt.id);
    });

    list.appendChild(card);
  });
}

function cancelAppointment(id) {
  appointmentsDb = appointmentsDb.filter(apt => apt.id !== id);
  localStorage.setItem('petdata_appointments', JSON.stringify(appointmentsDb));
  renderAppointments();
  showToast("Temujanji berjaya dibatalkan", "warning");
}

// --- Ownership Transfer Wizard Module ---
let currentTransferStep = 1;
let transferData = {};

function setupTransferWizard() {
  const initForm = document.getElementById('transfer-initiate-form');
  const pinForm = document.getElementById('transfer-pin-form');
  
  if (initForm) {
    initForm.addEventListener('submit', (e) => {
      e.preventDefault();
      transferData.ic = document.getElementById('trans-owner-ic').value;
      transferData.email = document.getElementById('trans-owner-email').value;
      transferData.reason = document.getElementById('trans-reason').value;
      
      showToast("Verifikasi IC berjaya ditemui via MyGovID", "success");
      setTransferStep(2);
    });
  }

  if (pinForm) {
    pinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pin = document.getElementById('trans-pin-input').value;
      
      if (pin.length === 6) {
        completeOwnershipTransfer();
      } else {
        showToast("Sila masukkan PIN 6-digit yang sah", "danger");
      }
    });
  }

  document.getElementById('btn-cancel-transfer').addEventListener('click', () => {
    setTransferStep(1);
    document.getElementById('trans-pin-input').value = '';
  });

  document.getElementById('btn-reset-transfer').addEventListener('click', () => {
    setTransferStep(1);
    initForm.reset();
    document.getElementById('trans-pin-input').value = '';
  });
}

function setTransferStep(step) {
  currentTransferStep = step;
  
  // Toggle displays
  document.getElementById('transfer-step-1-content').style.display = step === 1 ? 'block' : 'none';
  document.getElementById('transfer-step-2-content').style.display = step === 2 ? 'block' : 'none';
  document.getElementById('transfer-step-3-content').style.display = step === 3 ? 'block' : 'none';
  
  // Update wizard visual nodes
  document.getElementById('step-node-1').className = `step-node ${step > 1 ? 'completed' : 'active'}`;
  document.getElementById('step-node-2').className = `step-node ${step === 2 ? 'active' : (step > 2 ? 'completed' : '')}`;
  document.getElementById('step-node-3').className = `step-node ${step === 3 ? 'active' : ''}`;
}

function completeOwnershipTransfer() {
  const pet = getActivePet();
  
  // Add entry to history log
  const newTransfer = {
    date: new Date().toISOString().split('T')[0],
    from: "Engku Helmy",
    to: `${transferData.email} (${transferData.ic.substring(0,6)}...)`,
    status: "Selesai"
  };

  pet.transfers.push(newTransfer);
  
  // Save updated state
  localStorage.setItem('petdata_pets', JSON.stringify(petsList));
  
  // Update view logs
  renderTransferHistoryTable(pet);
  
  setTransferStep(3);
  showToast("Hak milik haiwan dipindah milik!", "success");
}

function renderTransferHistoryTable(pet) {
  const tbody = document.getElementById('transfer-history-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  
  if (!pet.transfers || pet.transfers.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">Tiada log sejarah pindahan</td></tr>';
    return;
  }

  // Reverse list to show newest first
  [...pet.transfers].reverse().forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${formatDate(log.date)}</td>
      <td>${log.from}</td>
      <td>${log.to}</td>
      <td><span class="badge badge-green">${log.status}</span></td>
    `;
    tbody.appendChild(row);
  });
}

// --- Forms & Modals Integration ---
function setupFormsAndModals() {
  // Modal toggle links
  setupModalToggler('add-pet-trigger', 'modal-add-pet');
  setupModalToggler('add-pet-dd-btn', 'modal-add-pet');
  setupModalToggler('add-weight-log-btn', 'tab-profile', true); // Switches tab instead
  setupModalToggler('add-food-log-btn', 'modal-food-log');
  
  // Profile Update Form
  document.getElementById('pet-info-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pet = getActivePet();
    
    pet.name = document.getElementById('prof-pet-name').value;
    pet.species = document.getElementById('prof-pet-species').value;
    pet.gender = document.getElementById('prof-pet-gender').value;
    pet.dob = document.getElementById('prof-pet-dob').value;
    pet.chipNumber = document.getElementById('prof-pet-chip-no').value;
    pet.chipColor = document.getElementById('prof-pet-chip-color').value;
    pet.physical = document.getElementById('prof-pet-physical').value;
    
    localStorage.setItem('petdata_pets', JSON.stringify(petsList));
    renderActivePetDetails();
    renderPetSwitcherMenu();
    
    showToast("Profil haiwan berjaya dikemaskini!", "success");
  });

  // Manual Profile Weight Add Form
  document.getElementById('weight-manual-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pet = getActivePet();
    const weightVal = parseFloat(document.getElementById('weight-input-kg').value);
    
    if (weightVal > 0) {
      pet.weightLog.push({
        date: new Date().toISOString().split('T')[0],
        weight: weightVal
      });
      
      localStorage.setItem('petdata_pets', JSON.stringify(petsList));
      
      document.getElementById('weight-manual-form').reset();
      renderActivePetDetails();
      renderProfileWeightTable();
      showToast(`Berat baharu ${weightVal} kg dicatatkan`, "success");
    }
  });

  // Food log submit
  document.getElementById('add-food-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pet = getActivePet();
    const type = document.getElementById('food-type').value;
    const brand = document.getElementById('food-brand').value;

    pet.foodHistory.unshift({
      date: new Date().toISOString().split('T')[0],
      type,
      brand
    });

    localStorage.setItem('petdata_pets', JSON.stringify(petsList));
    
    closeModal('modal-food-log');
    document.getElementById('add-food-form').reset();
    renderActivePetDetails();
    showToast("Log pemakanan berjaya ditambah!", "success");
  });

  // Register New Pet Form
  document.getElementById('add-pet-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('add-pet-name').value;
    const species = document.getElementById('add-pet-species').value;
    const gender = document.getElementById('add-pet-gender').value;
    const dob = document.getElementById('add-pet-dob').value;
    const initialWeight = parseFloat(document.getElementById('add-pet-weight').value);
    
    // Generate simple UUID mock
    const newId = 'pd-' + Math.random().toString(36).substr(2, 9) + '-' + Math.random().toString(36).substr(2, 9);
    
    const newPet = {
      id: newId,
      name,
      species,
      gender,
      dob,
      chipNumber: `MY-985-${Math.floor(100 + Math.random()*900)}-${Math.floor(1000 + Math.random()*9000)}`,
      chipColor: "Belum Didaftar",
      physical: "Sila Kemaskini Ciri Fizikal",
      avatar: species.toLowerCase().includes('dog') || species.toLowerCase().includes('anjing') ? '🐶' : '🐱',
      weightLog: [{
        date: new Date().toISOString().split('T')[0],
        weight: initialWeight
      }],
      foodHistory: [],
      vaccines: [
        { name: "Core Feline / Canine Vacc", date: new Date().toISOString().split('T')[0], dueDate: new Date(Date.now() + 365*24*60*60*1000).toISOString().split('T')[0], status: "green" }
      ],
      treatments: [],
      travelHistory: [],
      certificates: [
        { id: `PD-REG-${Math.random().toString(36).substr(2, 6).toUpperCase()}`, type: "Pendaftaran", name: "Sijil Pendaftaran Awam", issueDate: new Date().toISOString().split('T')[0], expiryDate: "Kekal", status: "Active" }
      ],
      transfers: [
        { date: new Date().toISOString().split('T')[0], from: "DVS Vet Registry", to: "Engku Helmy", status: "Selesai" }
      ],
      nfc: {
        active: false,
        uid: "NTAG_" + Math.random().toString(36).substr(2, 8).toUpperCase()
      }
    };

    petsList.push(newPet);
    activePetId = newId;
    
    // Save state
    localStorage.setItem('petdata_pets', JSON.stringify(petsList));
    localStorage.setItem('petdata_active_id', activePetId);
    
    closeModal('modal-add-pet');
    document.getElementById('add-pet-form').reset();
    
    renderPetSwitcherMenu();
    renderActivePetDetails();
    
    showToast(`Profil ${name} berjaya didaftarkan!`, "success");
  });

  // Appointment Form Submit
  document.getElementById('appointment-booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const service = document.getElementById('apt-service').value;
    const clinic = document.getElementById('apt-clinic').value;
    const pet = getActivePet();

    if (!activeSelectedTime) {
      showToast("Sila pilih slot masa temujanji", "danger");
      return;
    }

    const newApt = {
      id: `apt-${Math.floor(1000 + Math.random() * 9000)}`,
      petName: pet.name,
      service,
      clinic,
      date: activeSelectedDate,
      time: activeSelectedTime,
      status: "Confirmed"
    };

    appointmentsDb.push(newApt);
    localStorage.setItem('petdata_appointments', JSON.stringify(appointmentsDb));
    
    renderAppointments();
    setupAppointmentCalendar(); // Redraws calendar states
    
    showToast("Temujanji berjaya dijadualkan!", "success");
  });

  // NFC Collar toggle btn
  document.getElementById('btn-toggle-nfc').addEventListener('click', () => {
    const pet = getActivePet();
    pet.nfc.active = !pet.nfc.active;
    
    localStorage.setItem('petdata_pets', JSON.stringify(petsList));
    renderActivePetDetails();
    
    showToast(`Collar NFC ${pet.nfc.active ? 'diaktifkan' : 'dimatikan'}!`, pet.nfc.active ? 'success' : 'warning');
  });

  // NFC ID edit click
  document.getElementById('btn-re-register-nfc').addEventListener('click', () => {
    const pet = getActivePet();
    const newUid = prompt("Masukkan UID NFC Tag baharu:", pet.nfc.uid);
    if (newUid) {
      pet.nfc.uid = newUid;
      localStorage.setItem('petdata_pets', JSON.stringify(petsList));
      renderActivePetDetails();
      showToast("NFC Tag UID dikemaskini!", "success");
    }
  });

  // Public Profile Scanner mockup
  document.getElementById('btn-preview-public-profile').addEventListener('click', () => {
    const pet = getActivePet();
    
    // Set content in preview modal
    document.getElementById('pub-avatar').textContent = pet.avatar;
    document.getElementById('pub-pet-name').textContent = pet.name;
    document.getElementById('pub-breed').textContent = pet.species;
    document.getElementById('pub-colors').textContent = pet.physical;
    document.getElementById('pub-chip').textContent = pet.chipNumber || 'TIADA';
    
    // Toggle modal
    document.getElementById('modal-public-profile').classList.add('show');
  });

  // Report Lost Pet click inside preview modal
  document.getElementById('btn-report-found').addEventListener('click', () => {
    const pet = getActivePet();
    showToast(`Isyarat SOS Kolar NFC: Lokasi telefon pengimbas telah dikirimkan kepada telefon pemilik ${pet.name}!`, "warning");
    closeModal('modal-public-profile');
  });

  // Request Certificate
  document.getElementById('request-cert-btn').addEventListener('click', () => {
    const pet = getActivePet();
    const type = prompt("Pohon Sijil Baru (Pendaftaran / Kesihatan / Sterilisasi / Pelepasan):");
    if (type) {
      const title = `Sijil ${type} Rasmi`;
      const newCert = {
        id: `PD-${type.substring(0,3).toUpperCase()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        type,
        name: title,
        issueDate: new Date().toISOString().split('T')[0],
        expiryDate: type.toLowerCase() === 'kesihatan' ? new Date(Date.now() + 60*24*60*60*1000).toISOString().split('T')[0] : 'Kekal',
        status: 'Pending Vet Approval'
      };

      pet.certificates.push(newCert);
      localStorage.setItem('petdata_pets', JSON.stringify(petsList));
      renderCertificates(pet);
      showToast("Permohonan sijil berjaya dihantar ke klinik veterinar DVS!", "success");
    }
  });

  // Print button click
  document.getElementById('btn-print-certificate').addEventListener('click', () => {
    window.print();
  });
}

function setupModalToggler(triggerId, modalId, isTabSwitch = false) {
  const trigger = document.getElementById(triggerId);
  const modal = document.getElementById(modalId);
  
  if (trigger && modal) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (isTabSwitch) {
        // Switch to profile tab
        document.getElementById('nav-profile').click();
      } else {
        modal.classList.add('show');
      }
    });
  }

  // Find close elements inside modal
  const modalDiv = document.getElementById(modalId);
  if (modalDiv) {
    const closeBtns = modalDiv.querySelectorAll('.modal-close, .modal-footer button:not(.btn-primary)');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        closeModal(modalId);
      });
    });
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('show');
}

// --- Toast alert generator ---
function showToast(message, type = 'success') {
  const holder = document.getElementById('toast-holder');
  if (!holder) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '🔔';
  if (type === 'success') icon = '✅';
  if (type === 'warning') icon = '⚠️';
  if (type === 'danger') icon = '❌';
  if (type === 'info') icon = 'ℹ️';

  toast.innerHTML = `
    <span>${icon}</span>
    <span>${message}</span>
  `;

  holder.appendChild(toast);

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.style.animation = 'fade-out 0.4s ease forwards';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

// --- Format Helpers ---
function formatDate(dateStr) {
  if (!dateStr) return '--';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`; // Convert yyyy-mm-dd to dd/mm/yyyy
  }
  return dateStr;
}

function formatDateShort(dateStr) {
  if (!dateStr) return '--';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const months = ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'];
    const mIdx = parseInt(parts[1]) - 1;
    return `${parts[2]} ${months[mIdx]}`; // Cth: 25 Mei
  }
  return dateStr;
}
