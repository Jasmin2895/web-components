// Listen to clicks on all drop downs
document.querySelectorAll('.dropdown')
  .forEach(el => el.addEventListener('click', handleClick))

function handleClick(e) {
    // Prevent <a> links from changing the page
    e.preventDefault();

    const classList = e.currentTarget.classList

  // Check if the dropdown is currently open
  const isOpen = classList.contains('dropdown_open')
  if (isOpen) {
    classList.remove('dropdown_open')
  } else {
    classList.add('dropdown_open')
  }

}