let userProfileMenu = document.getElementById('userProfileMenu');

function toggleMenu()
{
  userProfileMenu.classList.toggle('profile-menu');
}

let sideActivity = document.getElementById('sidebarActivity');
let moreLink = document.getElementById('showMoreLink');

function toggleActivity()
{
  sideActivity.classList.toggle('open-activity');
  if(sideActivity.classList.contains('open-activity'))
  {
    moreLink.innerHTML = 'Show less <b>-</b>';
  }
  else
  {
    moreLink.innerHTML =  'show more <b>+</b>'
  }
}

