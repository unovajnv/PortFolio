export function initCursorEffect() {
  let timeout: number;
  
  document.addEventListener('mousemove', (e) => {
    // Update global cursor position
    document.body.style.setProperty('--mouse-x', `${(e.clientX / window.innerWidth) * 100}%`);
    document.body.style.setProperty('--mouse-y', `${(e.clientY / window.innerHeight) * 100}%`);
    
    // Update section-specific cursor position
    const target = e.target as HTMLElement;
    const section = target?.closest('section');
    if (section instanceof HTMLElement) {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      section.style.setProperty('--section-mouse-x', `${x}%`);
      section.style.setProperty('--section-mouse-y', `${y}%`);
    }
    
    // Add active class to body for intensity
    document.body.classList.add('cursor-active');
    
    // Remove active class after mouse stops moving
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      document.body.classList.remove('cursor-active');
    }, 300);
  });
  
  // Handle touch events for mobile
  document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    document.body.style.setProperty('--mouse-x', `${(touch.clientX / window.innerWidth) * 100}%`);
    document.body.style.setProperty('--mouse-y', `${(touch.clientY / window.innerHeight) * 100}%`);
  });
}