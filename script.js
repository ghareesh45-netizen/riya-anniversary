// Main JavaScript for Anniversary Project

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize loading animation
    showLoading();

    // Initialize all components after resources are loaded
    window.addEventListener('load', () => {
        hideLoading();
        initializeAnimations();
        initializeGallery();
        initializeTimeline();
        initializeMusicPlayer();
    });
});

// Loading Animation
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.remove(), 500);
    }
}

// Scroll Animations
function initializeAnimations() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideUp 1s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));
}

// Gallery Management
function initializeGallery() {
    const galleries = document.querySelectorAll('.gallery');
    
    galleries.forEach(gallery => {
        gallery.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) {
                openLightbox(item);
            }
        });
    });
}

function openLightbox(item) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const content = item.cloneNode(true);
    content.style.transform = 'none';
    
    lightbox.appendChild(content);
    lightbox.addEventListener('click', () => {
        lightbox.style.opacity = '0';
        setTimeout(() => lightbox.remove(), 300);
    });

    document.body.appendChild(lightbox);
    setTimeout(() => lightbox.style.opacity = '1', 10);
}

// Timeline Animation
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    timelineItems.forEach(item => observer.observe(item));
}

// Music Player
function initializeMusicPlayer() {
    const player = document.querySelector('.music-player');
    if (!player) return;

    // Add custom controls if needed
    const controls = document.createElement('div');
    controls.className = 'player-controls';
    controls.innerHTML = `
        <button class="play-btn">▶️</button>
        <button class="pause-btn" style="display: none;">⏸️</button>
        <button class="next-btn">⏭️</button>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
    `;

    player.appendChild(controls);

    // Initialize audio functionality
    setupAudioControls(player);
}

function setupAudioControls(player) {
    const playBtn = player.querySelector('.play-btn');
    const pauseBtn = player.querySelector('.pause-btn');
    const nextBtn = player.querySelector('.next-btn');
    const progress = player.querySelector('.progress');

    // Add click handlers
    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
        // Add your play logic here
    });

    pauseBtn.addEventListener('click', () => {
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-block';
        // Add your pause logic here
    });

    nextBtn.addEventListener('click', () => {
        // Add your next track logic here
    });
}

// Heart Animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '❤️';
    
    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    
    document.body.appendChild(heart);
    
    // Remove after animation
    heart.addEventListener('animationend', () => heart.remove());
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add dynamic date to footer
const footer = document.querySelector('footer');
if (footer) {
    const date = new Date();
    const dateElement = document.createElement('p');
    dateElement.textContent = `${date.getFullYear()}`;
    footer.appendChild(dateElement);
}
