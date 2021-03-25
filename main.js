const hamburgerMenu = document.querySelector('#hamMenu');
  const closeIcon = document.querySelector('#close');
  const mobileMenu = document.querySelector('.mobile-menu');
  function handleOpenMenu() {
    //   console.log('click', mobileMenu);
    mobileMenu.classList.add("MenuOpen");

  }

  function handleCloseMenu() {
    mobileMenu.classList.remove("MenuOpen");
  }
  hamburgerMenu.addEventListener('click', handleOpenMenu);
  closeIcon.addEventListener('click', handleCloseMenu);