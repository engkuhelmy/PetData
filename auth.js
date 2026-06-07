/**
 * 🔐 PetData Auth Module — Shared Role-Based Access Control
 * Stores session in sessionStorage. All dashboards must call requireAuth().
 */

// --- Mock User Database ---
const USERS_DB = [
  { id: "SA001", username: "superadmin", password: "admin123", role: "superadmin", name: "Dato' Seri Azlan Hamid", email: "superadmin@dvs.gov.my", avatar: "DA", clinic: null, area: null },
  { id: "AD001", username: "admin",       password: "admin123", role: "admin",      name: "Puan Norhaida Malik",   email: "admin@dvs.gov.my",      avatar: "NM", clinic: null, area: null },
  { id: "OW001", username: "owner",       password: "pet123",   role: "user",       name: "Engku Helmy",           email: "engkuhelmy@gmail.com",  avatar: "EH", clinic: null, area: null },
  { id: "VT001", username: "drfauzi",     password: "vet123",   role: "vet",        name: "Dr. Fauzi Ahmad",       email: "drfauzi@klinikvet.gov.my", avatar: "FA", clinic: "Klinik Veterinar Kerajaan Daerah Petaling", area: null },
  { id: "NS001", username: "nurse1",      password: "nurse123", role: "nurse",      name: "Jururawat Aida Zulkifli", email: "aida@klinikvet.gov.my", avatar: "AZ", clinic: "Klinik Veterinar Kerajaan Daerah Petaling", area: null },
  { id: "PB001", username: "pbtpetaling", password: "pbt123",  role: "pbt",        name: "En. Razif Othman",      email: "razif@pbt.gov.my",      avatar: "RO", clinic: null, area: "Daerah Petaling, Selangor" }
];

// Role metadata for UI rendering
const ROLE_META = {
  superadmin: { label: "Super Administrator",       color: "hsl(38, 92%, 50%)",  bg: "rgba(245, 158, 11, 0.1)", icon: "👑", dashboard: "admin.html" },
  admin:      { label: "Platform Administrator",    color: "hsl(217, 91%, 60%)", bg: "rgba(59, 130, 246, 0.1)", icon: "🛡️", dashboard: "admin.html" },
  user:       { label: "Pemilik Haiwan (Pet Owner)", color: "hsl(262, 83%, 60%)", bg: "rgba(139, 92, 246, 0.1)", icon: "🐾", dashboard: "index.html" },
  vet:        { label: "Doktor Veterinar",           color: "hsl(172, 66%, 50%)", bg: "rgba(20, 184, 166, 0.1)", icon: "🩺", dashboard: "vets.html" },
  nurse:      { label: "Jururawat Berdaftar",        color: "hsl(172, 66%, 50%)", bg: "rgba(20, 184, 166, 0.1)", icon: "💊", dashboard: "vets.html" },
  pbt:        { label: "Pihak Berkuasa Tempatan",    color: "hsl(25, 95%, 53%)",  bg: "rgba(249, 115, 22, 0.1)", icon: "🏛️", dashboard: "pbt.html" }
};

/**
 * Attempt login. Returns user object or null.
 */
function authLogin(username, password) {
  const user = USERS_DB.find(u => u.username === username && u.password === password);
  if (user) {
    const sessionUser = { ...user };
    delete sessionUser.password; // Never store password in session
    sessionStorage.setItem('petdata_session', JSON.stringify(sessionUser));
    return sessionUser;
  }
  return null;
}

/**
 * Get currently logged in user from session.
 */
function getSessionUser() {
  const raw = sessionStorage.getItem('petdata_session');
  return raw ? JSON.parse(raw) : null;
}

/**
 * Logout — clear session and redirect to login page.
 */
function authLogout() {
  sessionStorage.removeItem('petdata_session');
  window.location.href = 'login.html';
}

/**
 * Guard a page to only allow specific roles.
 * Call at top of each dashboard page's DOMContentLoaded.
 * @param {string[]} allowedRoles - Array of allowed role IDs
 */
function requireAuth(allowedRoles) {
  const user = getSessionUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Wrong role — redirect to their correct dashboard
    const meta = ROLE_META[user.role];
    if (meta) {
      window.location.href = meta.dashboard;
    } else {
      window.location.href = 'login.html';
    }
    return null;
  }
  return user;
}

/**
 * Inject a standard logout + user badge into any dashboard's header.
 * Expects elements with IDs: user-name-display, user-avatar-display, logout-btn
 */
function injectAuthHeader(user) {
  const nameEl = document.getElementById('user-name-display');
  const avatarEl = document.getElementById('user-avatar-display');
  const logoutBtn = document.getElementById('logout-btn');
  const roleEl = document.getElementById('user-role-display');

  if (nameEl) nameEl.textContent = user.name;
  if (avatarEl) avatarEl.textContent = user.avatar;
  if (roleEl) {
    const meta = ROLE_META[user.role];
    roleEl.textContent = meta ? meta.label : user.role;
    roleEl.style.color = meta ? meta.color : 'var(--text-secondary)';
  }
  if (logoutBtn) {
    logoutBtn.addEventListener('click', authLogout);
  }
}

// Expose to global scope
window.authLogin = authLogin;
window.authLogout = authLogout;
window.getSessionUser = getSessionUser;
window.requireAuth = requireAuth;
window.injectAuthHeader = injectAuthHeader;
window.ROLE_META = ROLE_META;

// --- Global Theme Handler for all dashboards ---
function initGlobalTheme() {
  const savedTheme = localStorage.getItem('petdata_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle-btn');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('petdata_theme', newTheme);
      });
    }
  });
}
initGlobalTheme();
