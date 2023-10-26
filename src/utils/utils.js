/**
   * @description A function to navigate to corresponding section based on menu click.
   * @param {Event} e
   */
export const onSectionMenuClick = (e) => {
    document.querySelectorAll(`#${e.target.innerText.toLowerCase()}`)[0].scrollIntoView({behavior: 'smooth'});
  }
  