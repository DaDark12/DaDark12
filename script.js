// lightweight particle engine with parallax on mouse
(() => {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d', { alpha: true });
  let DPR = Math.max(1, window.devicePixelRatio || 1);
  let width = 0, height = 0;
  const settings = {
    count: 80,
    baseSize: 1.2,
    color1: [255,30,60], // bright red
    color2: [255,110,120], // softer
    speed: 0.2,
    parallax: 0.03,
    drift: 0.15
  };

  const rand = (a,b) => Math.random()*(b-a)+a;
  let mouse = {x:0,y:0};

  function resize(){
    DPR = Math.max(1, window.devicePixelRatio || 1);
    width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    canvas.width = Math.floor(width * DPR);
    canvas.height = Math.floor(height * DPR);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(DPR,0,0,DPR,0,0);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

  // particle model
  function Particle(){
    this.reset();
  }
  Particle.prototype.reset = function(){
    this.x = rand(0, width);
    this.y = rand(0, height);
    this.z = rand(0.2,1);
    this.size = rand(0.8, 3.2) * settings.baseSize * this.z;
    this.vx = rand(-settings.drift, settings.drift);
    this.vy = rand(-settings.speed, settings.speed);
    this.phase = rand(0, Math.PI*2);
    this.colorMix = Math.random();
  };
  Particle.prototype.update = function(dt){
    this.x += this.vx * dt;
    this.y += (this.vy + Math.sin(this.phase + dt*0.002)) * dt*0.5;
    this.phase += 0.01;
    // respawn edges
    if(this.x < -20 || this.x > width+20 || this.y < -40 || this.y > height+40){
      this.reset();
      this.y = -10;
    }
  };
  Particle.prototype.draw = function(ctx){
    // parallax offset from mouse
    const parx = (mouse.x - width*0.5) * (settings.parallax * (1 - this.z));
    const pary = (mouse.y - height*0.5) * (settings.parallax * (1 - this.z));
    const x = this.x + parx * 0.02;
    const y = this.y + pary * 0.02;

    const mix = this.colorMix;
    const r = Math.round(settings.color1[0]*mix + settings.color2[0]*(1-mix));
    const g = Math.round(settings.color1[1]*mix + settings.color2[1]*(1-mix));
    const b = Math.round(settings.color1[2]*mix + settings.color2[2]*(1-mix));
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size*6);
    gradient.addColorStop(0, `rgba(${r},${g},${b},${0.95*this.z})`);
    gradient.addColorStop(0.2, `rgba(${r},${g},${b},${0.22*this.z})`);
    gradient.addColorStop(1, `rgba(0,0,0,0)`);
    ctx.fillStyle = gradient;
    ctx.arc(x, y, this.size*3, 0, Math.PI*2);
    ctx.fill();
  };

  // create particles
  let particles = [];
  function initParticles(){
    particles = [];
    for(let i=0;i<settings.count;i++) particles.push(new Particle());
  }

  // animation loop
  let last = performance.now();
  function loop(now){
    const dt = (now - last);
    last = now;
    ctx.clearRect(0,0,width,height);

    // subtle vignette
    ctx.fillStyle = `rgba(0,0,0,0.15)`;
    ctx.fillRect(0,0,width,height);

    // draw faint floating shards (random s)
    for(let p of particles){
      p.update(dt*0.06);
      p.draw(ctx);
    }
    requestAnimationFrame(loop);
  }

  // init
  resize();
  initParticles();
  requestAnimationFrame(loop);

})();
