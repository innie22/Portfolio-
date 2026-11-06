/**
 * Minimalist Coming Soon - Micro-Interactions & Polish
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Gentle Ambient Glow Mouse Follower (Subtle Parallax)
  const ambientGlow = document.querySelector('.ambient-glow');
  
  if (ambientGlow && window.matchMedia('(pointer: fine)').matches) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
      // Offset from center (-30px to +30px range for subtle grace)
      const { innerWidth, innerHeight } = window;
      targetX = ((e.clientX / innerWidth) - 0.5) * 60;
      targetY = ((e.clientY / innerHeight) - 0.5) * 40;
    }, { passive: true });

    const render = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      ambientGlow.style.transform = `translate(calc(-50% + ${currentX.toFixed(2)}px), ${currentY.toFixed(2)}px)`;
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }

  // 2. Email Copy with Elegant Toast Notification
  const emailLink = document.getElementById('emailLink');
  const toast = document.getElementById('toastNotification');
  let toastTimer = null;

  if (emailLink && toast) {
    emailLink.addEventListener('click', (e) => {
      const email = 'contact@yennhi.design';
      
      // Copy to clipboard if API is available
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email copied to clipboard');
        }).catch(() => {
          // Fallback to mailto link navigation if copy blocked
        });
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('active');

    if (toastTimer) clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove('active');
    }, 2800);
  }
});
