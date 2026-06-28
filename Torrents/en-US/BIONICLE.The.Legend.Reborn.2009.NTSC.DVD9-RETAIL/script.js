const canvas = document.getElementById('bionicleCanvas');
const ctx = canvas.getContext('2d');

// Set actual buffer resolution dynamically
function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Global Variables
const particles = [];
const particleCount = 75;
const mouse = { x: null, y: null, radius: 80 };

window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});

window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

// Particle Class - Yellow/Gold/Green energy themes inspired by the Ignika (Mask of Life)
class EnergyParticle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2.5 + 1;
        this.speedX = (Math.random() - 0.5) * 1.2;
        this.speedY = (Math.random() - 0.5) * 1.2;
        // Bionicle 2009 theme colors: Golds, yellows, and Bara Magna sand hints
        const colors = ['#ffd700', '#ffa500', '#e5c158', '#88cc44', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off canvas bounds
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse interaction logic (pushing particles away)
        if (mouse.x !== null && mouse.y !== null) {
            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                let force = (mouse.radius - distance) / mouse.radius;
                let dirX = dx / distance;
                let dirY = dy / distance;
                this.x += dirX * force * 4;
                this.y += dirY * force * 4;
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset blur for performance
    }
}

// Generate Constellation Network
function init() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new EnergyParticle());
    }
}

function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 70) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(229, 193, 88, ${1 - distance / 70})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

// Draw Title Text directly onto the canvas layer
function drawCanvasOverlay() {
    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = 'rgba(255, 215, 0, 0.85)';
    ctx.fillText("MATA NUI ONLINE STATUS: REBOOTING...", 20, 40);

    ctx.font = '11px monospace';
    ctx.fillStyle = 'rgba(136, 204, 68, 0.7)';
    ctx.fillText("Target: Bara Magna // Artifact: Mask of Life", 20, 60);
}

// Main Animation Loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw subtle digital scanning lines background
    ctx.fillStyle = 'rgba(5, 11, 20, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    
    connectParticles();
    drawCanvasOverlay();
    requestAnimationFrame(animate);
}

// Run
init();
animate();