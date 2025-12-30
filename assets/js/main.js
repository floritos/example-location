
// URL par défaut (fallback) si besoin – peut être votre page générale de réservation Beds24
const BEDS24_WIDGET_URL = "https://VOTRE_URL_WIDGET_BEDS24_GENERALE";

(function(){
  // Ouvre la modal avec l'iframe
  function openModal(url){
    const modal = document.getElementById('bookingModal');
    const frame = document.getElementById('bookingFrame');
    frame.src = url || BEDS24_WIDGET_URL;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }

  // Ferme la modal
  function closeModal(){
    const modal = document.getElementById('bookingModal');
    const frame = document.getElementById('bookingFrame');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    frame.src = ""; // reset pour arrêter le chargement
  }

  // Gestion click sur les boutons "Réserver"
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-widget]');
    if(btn){
      const url = btn.getAttribute('data-widget');
      openModal(url);
    }
    if(e.target.matches('.modal__close') || e.target.matches('.modal__backdrop')){
      closeModal();
    }
  });

  // Échappement via ESC
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      const modal = document.getElementById('bookingModal');
      if(modal && modal.classList.contains('show')) closeModal();
    }
  });
})();
