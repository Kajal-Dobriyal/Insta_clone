const tabs = document.querySelectorAll('.tab');
const sections = {
  posts: document.getElementById('posts'),
  reels: document.getElementById('reels'),
  tagged: document.getElementById('tagged')
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('border-b-2', 'border-black'));
    tab.classList.add('border-b-2', 'border-black');

    Object.keys(sections).forEach(key => sections[key].classList.add('hidden'));
    sections[tab.dataset.tab].classList.remove('hidden');
  });
});
