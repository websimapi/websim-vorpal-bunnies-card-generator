export function showToast(message, isError = false) {
  const toast = document.createElement('div');
  toast.className = `toast ${isError ? 'error' : 'success'}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remove after animation
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

export function getTypeIcon(type) {
  const icons = {
    'Mystic': `<svg viewBox="0 0 512 512">
      <path fill="currentColor" d="M256 32l-192 96v256l192 96 192-96V128L256 32zm160 320l-160 80-160-80V160l160-80 160 80v192z"/>
      <path fill="currentColor" d="M256 128l-96 48v96l96 48 96-48v-96l-96-48zm64 128l-64 32-64-32v-64l64-32 64 32v64z"/>
    </svg>`,
    
    'Trickster': `<svg viewBox="0 0 512 512">
      <path fill="currentColor" d="M256 32c-123.7 0-224 100.3-224 224s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 400c-97.2 0-176-78.8-176-176S158.8 80 256 80s176 78.8 176 176-78.8 176-176 176z"/>
    </svg>`,
    
    'Warrior': `<svg viewBox="0 0 512 512">
      <path fill="currentColor" d="M256 32L32 96v320l224 64 224-64V96L256 32zm160 320H96V160l160-48 160 48v192z"/>
    </svg>`,
    
    'Scholar': `<svg viewBox="0 0 512 512">
      <path fill="currentColor" d="M256 32l-192 96v256l192 96 192-96V128L256 32zm160 320l-160 80-160-80V160l160-80 160 80v192z"/>
    </svg>`,
    
    'Jester': `<svg viewBox="0 0 512 512">
      <path fill="currentColor" d="M256 32c-123.7 0-224 100.3-224 224s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 400c-97.2 0-176-78.8-176-176S158.8 80 256 80s176 78.8 176 176-78.8 176-176 176z"/>
    </svg>`,
    
    'Guardian': `<svg viewBox="0 0 512 512">
      <path fill="currentColor" d="M256 32l-192 96v256l192 96 192-96V128L256 32zm160 320l-160 80-160-80V160l160-80 160 80v192z"/>
    </svg>`,
    
    // Add more type icons as needed...
  };
  
  return icons[type] || `<svg viewBox="0 0 512 512"><path fill="currentColor" d="M256 96c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S344.4 96 256 96z"/></svg>`;
}

export function getTypeColor(type) {
  const colors = {
    'mystic': '#9B6BFF',
    'trickster': '#FF9B6B',
    'warrior': '#FF6B6B',
    'scholar': '#6B9BFF',
    'jester': '#FF6BFF',
    'guardian': '#6BFF9B',
    // Add more type colors as needed...
  };
  
  return colors[type.toLowerCase()] || '#999999';
}