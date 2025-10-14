
document.addEventListener('DOMContentLoaded',()=>{

  const body=document.body;
  const themeToggle=document.getElementById('themeToggle');
  const nav=document.getElementById('navMenu');
  const menuToggle=document.getElementById('menuToggle');

  // Theme toggle
  if(localStorage.getItem('theme')==='light'){
    body.classList.add('theme-light');
    themeToggle.textContent='☀️';
  }
  themeToggle.addEventListener('click',()=>{
    if(body.classList.contains('theme-light')){
      body.classList.remove('theme-light');
      themeToggle.textContent='🌙';
      localStorage.setItem('theme','dark');
    }
    else{
      body.classList.add('theme-light');
      themeToggle.textContent='☀️';
      localStorage.setItem('theme','light');
    }
  });

  // Hamburger menu toggle
  menuToggle.addEventListener('click',()=>{
    nav.classList.toggle('active');
    menuToggle.textContent=nav.classList.contains('active') ? '☰' : '✕' ;
  });

  // Close nav when clicking link
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('active');
    menuToggle.textContent='☰';
  }));

  // Projects injection
  const projects=[
    {title:'Weather Web Application',
      desc:'FRONTEND APPLICATION',
      img:'images/WhatsApp Image 2025-09-26 at 23.40.08_3b9180f9.jpg',
      url:'https://sinnu2004.github.io/Weather/'
    },
    {title:'To Do List',
      desc:'Responsive storefront design',
      img:'images/WhatsApp Image 2025-09-26 at 23.40.08_3b9180f9.jpg',
      url:'https://example.com/project2'
    },
    {title:'Myntra Clone',
      desc:'HTML CSS BASED',
      img:'images/WhatsApp Image 2025-09-26 at 23.40.08_3b9180f9.jpg',
      url:'https://sinnu2004.github.io/Myntra-s-clone/'
    }
  ];
  const grid=document.getElementById('projectsGrid');
  projects.forEach(p=>{
    const c=document.createElement('div');
    c.className='project-card reveal';
    c.innerHTML=`<img src="${p.img}" alt="${p.title}"/><h3>${p.title}</h3><p>${p.desc}</p><a href="${p.url}" class="view-btn" target="_blank">View Project</a>`;
    grid.appendChild(c);
  });

  // Reveal on scroll
  const reveals=document.querySelectorAll('.reveal');
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity=1;
        e.target.style.transform='translateY(0)';
        obs.unobserve(e.target);
      }
    });
  },{threshold:.1});
  reveals.forEach(r=>obs.observe(r));

  // Parallax effect
  const orbit=document.querySelector('.orbit img');
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;
    orbit.style.transform=`translateY(${y*0.1}px)`;
  });
});
