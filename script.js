
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

  // text width 

  const text = document.getElementById('scrollText');
  const edutext = document.getElementById('educationText');
  const sktext = document.getElementById('skillText');
  const prtext = document.getElementById('projectText');
  const conttext = document.getElementById('contactText');
  // duplicate text for the ::after content
  text.setAttribute('data-text', text.textContent);
  edutext.setAttribute('data-text',edutext.textContent);
  sktext.setAttribute('data-text',sktext.textContent);
  prtext.setAttribute('data-text',prtext.textContent);
  conttext.setAttribute('data-text',conttext.textContent);


  let lastScroll = window.scrollY;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const diff = scrollTop - lastScroll;

    // use the scroll amount to alter the gradient width
    const after = text.querySelector(':after') || text; // fallback
    const eduafter = edutext.querySelector(':after') || edutext;
    const skafter = sktext.querySelector(':after') || sktext;
    const prafter = sktext.querySelector(':after') || prtext;
    const contafter = sktext.querySelector(':after') || prtext;
    
    const current = parseFloat(text.style.getPropertyValue('--band') || 10);
    const currentEdu = parseFloat(edutext.style.getPropertyValue('--band') || 10);
    const currentsk = parseFloat(sktext.style.getPropertyValue('--band') || 10);
  

    let band = current + diff * 0.02;
    band = Math.max(5, Math.min(20, band));

    text.style.setProperty('--band', band);
    edutext.style.setProperty('--band', band);
    sktext.style.setProperty('--band',band);
    prtext.style.setProperty('--band', band)
    conttext.style.setProperty('--band', band);
    // adjust gradient dynamically
    text.style.setProperty, edutext.style.setProperty,sktext.style.setProperty,prtext.style.setProperty,conttext.style.setProperty(
      '--grad',
      `linear-gradient(to right, transparent 35%, #4ecdc4 calc(45% - ${band}px), #4ecdc4 calc(55% + ${band}px), transparent 65%)`
    );

    lastScroll = scrollTop;
  });


  // about section image effect 

  const img_head = document.getElementById('img_head');
  const img_section = document.getElementById('about');

  img_section.addEventListener('mousemove', (e) => {
    const rect = img_section.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2; // head pivot point

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const percentX = dx / (rect.width/2);
    const percentY = dy / (rect.height / 2);

    const rotateY = -percentX * 40;
    const rotateX = percentY * 25;

    img_head.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      `;
  });

  img_section.addEventListener('mouseleave', () => {
  img_head.style.transform = `
    rotateX(0deg)
    rotateY(0deg)`
  });
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
    c.innerHTML=`<img class="project_img" src="${p.img}" alt="${p.title}"/><h3>${p.title}</h3><p>${p.desc}</p><a href="${p.url}" class="view-btn" target="_blank">View Project</a>`;
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
