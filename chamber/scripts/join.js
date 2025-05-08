document.getElementById("timestamp").value = new Date().toISOString();

document.querySelectorAll('#membershipCards a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const modalId = e.target.getAttribute('href').substring(1);
    document.getElementById(modalId).showModal();
  });
});