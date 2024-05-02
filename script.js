function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('scrollToExperience').addEventListener('click', function() {
  // Get the position of the target section
  const experienceSection = document.getElementById('experience');
  const position = experienceSection.offsetTop;

  // Smooth scroll to the target position
  window.scrollTo({
      top: position,
      behavior: 'smooth'
  });
});


document.getElementById('scrollToProjects').addEventListener('click', function() {
  // Get the position of the target section
  const experienceSection = document.getElementById('projects');
  const position = experienceSection.offsetTop;

  // Smooth scroll to the target position
  window.scrollTo({
      top: position,
      behavior: 'smooth'
  });
});
