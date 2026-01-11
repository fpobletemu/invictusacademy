// ========================================
// INVICTUS BASKETBALL ACADEMY - JAVASCRIPT
// ========================================

// ========================================
// NAVIGATION (NEW DESIGN)
// ========================================
function initNavigationNew() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link-new');
    const navbar = document.querySelector('.navbar-new');

    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Initial check
    handleNavbarScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleNavbarScroll);

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Active link on scroll for same page
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const link = document.querySelector(`.nav-link-new[href*="#${sectionId}"]`);
                
                if (link && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            
            const hashIndex = href.indexOf('#');
            if (hashIndex === -1) return;
            
            const hash = href.substring(hashIndex);
            if (hash === '#') return;
            
            // Check if target is on same page
            const currentPage = window.location.pathname;
            const linkPage = href.substring(0, hashIndex);
            
            if (linkPage === '' || linkPage === currentPage || linkPage === 'index.html') {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ========================================
// NAVIGATION (OLD)
// ========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-new');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (link && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// GALLERY
// ========================================
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
    
    if (!galleryGrid) return;

    // Gallery data
    const galleryItems = [
        {
            image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
            title: 'Entrenamiento Intensivo',
            category: 'training'
        },
        {
            image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=600&fit=crop',
            title: 'Final del Campeonato',
            category: 'games'
        },
        {
            image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop',
            title: 'Sesión de Tiro',
            category: 'training'
        },
        {
            image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=600&fit=crop',
            title: 'Torneo Juvenil',
            category: 'games'
        },
        {
            image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=800&h=600&fit=crop',
            title: 'Ceremonia de Graduación',
            category: 'events'
        },
        {
            image: 'https://images.unsplash.com/photo-1577223625816-7546f22c0b28?w=800&h=600&fit=crop',
            title: 'Práctica de Equipo',
            category: 'training'
        },
        {
            image: 'https://images.unsplash.com/photo-1518063319789-7217e6a0f9c7?w=800&h=600&fit=crop',
            title: 'Partido de Exhibición',
            category: 'games'
        },
        {
            image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=600&fit=crop',
            title: 'Clínica de Básquetbol',
            category: 'events'
        }
    ];

    // Render gallery
    function renderGallery(filter = 'all') {
        galleryGrid.innerHTML = '';
        
        const filteredItems = filter === 'all' 
            ? galleryItems 
            : galleryItems.filter(item => item.category === filter);
        
        filteredItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-category', item.category);
            
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <h3 class="gallery-title">${item.title}</h3>
                    <span class="gallery-category">${getCategoryName(item.category)}</span>
                </div>
            `;
            
            galleryGrid.appendChild(galleryItem);
        });

        // Animation
        const items = galleryGrid.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 50);
            }, index * 50);
        });
    }

    function getCategoryName(category) {
        const names = {
            'training': 'Entrenamientos',
            'games': 'Partidos',
            'events': 'Eventos'
        };
        return names[category] || category;
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            renderGallery(filter);
        });
    });

    // Initial render
    renderGallery();
}

// ========================================
// TESTIMONIALS CAROUSEL
// ========================================
function initTestimonials() {
    const carousel = document.getElementById('testimonialsCarousel');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (!carousel) return;

    const testimonials = [
        {
            image: 'https://i.pravatar.cc/200?img=33',
            text: 'Invictus cambió mi vida. No solo mejoré mi juego, sino que aprendí valores que me sirven todos los días. Los entrenadores son increíbles.',
            author: 'Matías Fernández',
            role: 'Estudiante - Programa Juvenil',
            rating: 5
        },
        {
            image: 'https://i.pravatar.cc/200?img=45',
            text: 'Mi hijo ha crecido tanto en confianza y habilidad desde que se unió a Invictus. El ambiente es profesional pero familiar.',
            author: 'Carolina Morales',
            role: 'Madre de Atleta',
            rating: 5
        },
        {
            image: 'https://i.pravatar.cc/200?img=12',
            text: 'Después de entrenar en Invictus logré una beca universitaria en Estados Unidos. El nivel de preparación es de clase mundial.',
            author: 'Diego Rojas',
            role: 'Ex-alumno - Programa Élite',
            rating: 5
        },
        {
            image: 'https://i.pravatar.cc/200?img=27',
            text: 'Las instalaciones son excelentes y el equipo de entrenadores está siempre dispuesto a ayudarte a mejorar. ¡Totalmente recomendado!',
            author: 'Sofía Vargas',
            role: 'Estudiante - Programa Juvenil',
            rating: 5
        },
        {
            image: 'https://i.pravatar.cc/200?img=68',
            text: 'Invictus no solo enseña básquetbol, enseña disciplina, trabajo en equipo y perseverancia. Mi hijo es mejor persona gracias a ellos.',
            author: 'Roberto Silva',
            role: 'Padre de Atleta',
            rating: 5
        }
    ];

    let currentIndex = 0;

    function renderTestimonials() {
        carousel.innerHTML = testimonials.map((testimonial, index) => `
            <div class="testimonial-card ${index === currentIndex ? 'active' : ''}">
                <div class="testimonial-image">
                    <img src="${testimonial.image}" alt="${testimonial.author}">
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h3 class="testimonial-author">${testimonial.author}</h3>
                <p class="testimonial-role">${testimonial.role}</p>
                <div class="testimonial-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                </div>
            </div>
        `).join('');
    }

    function showTestimonial(index) {
        const cards = carousel.querySelectorAll('.testimonial-card');
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevTestimonial);
        nextBtn.addEventListener('click', nextTestimonial);
    }

    // Auto-advance
    setInterval(nextTestimonial, 6000);

    renderTestimonials();
}

// ========================================
// CONTACT FORM
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate
        if (!data.name || !data.email || !data.phone || !data.age || !data.program) {
            alert('Por favor completa todos los campos obligatorios');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Por favor ingresa un email válido');
            return;
        }

        // Phone validation
        const phoneRegex = /^[0-9+\-\s()]+$/;
        if (!phoneRegex.test(data.phone)) {
            alert('Por favor ingresa un teléfono válido');
            return;
        }

        // Success message
        const btn = form.querySelector('.btn-submit');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
        btn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            form.reset();
            
            // Show success message
            alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
        }, 2000);
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.hasAttribute('required') && !input.value) {
                input.style.borderColor = '#f44336';
            } else {
                input.style.borderColor = '';
            }
        });

        input.addEventListener('input', () => {
            input.style.borderColor = '';
        });
    });
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
function createScrollTopButton() {
    const scrollBtn = document.getElementById('scrollTop');
    
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(`
        .section-header,
        .about-content > *,
        .program-card,
        .coach-card,
        .info-card
    `);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// ========================================
// BLOG FUNCTIONALITY
// ========================================
function initBlog() {
    const postsGrid = document.getElementById('postsGrid');
    const searchInput = document.getElementById('blogSearch');
    const filterBtns = document.querySelectorAll('.blog-filters .filter-btn');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (!postsGrid) return;

    // Blog posts data
    const blogPosts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=600&fit=crop',
            category: 'resultados',
            categoryIcon: 'fas fa-trophy',
            title: 'Victoria Épica en Semifinales',
            excerpt: 'Nuestro equipo juvenil logró una increíble victoria 78-75 en tiempo suplementario contra el equipo líder de la liga.',
            date: '8 Ene 2026',
            author: 'Carlos Mendoza',
            authorImage: 'https://i.pravatar.cc/100?img=12'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
            category: 'noticias',
            categoryIcon: 'fas fa-newspaper',
            title: 'Nuevas Instalaciones Inauguradas',
            excerpt: 'Inauguramos nuestra nueva cancha de entrenamiento con tecnología de punta y vestuarios renovados.',
            date: '5 Ene 2026',
            author: 'María González',
            authorImage: 'https://i.pravatar.cc/100?img=47'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop',
            category: 'consejos',
            categoryIcon: 'fas fa-lightbulb',
            title: '5 Consejos para Mejorar tu Tiro',
            excerpt: 'Aprende los fundamentos esenciales que te ayudarán a mejorar tu porcentaje de acierto en tiros libres y de campo.',
            date: '2 Ene 2026',
            author: 'Roberto Silva',
            authorImage: 'https://i.pravatar.cc/100?img=33'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=600&fit=crop',
            category: 'eventos',
            categoryIcon: 'fas fa-calendar',
            title: 'Torneo de Verano 2026',
            excerpt: 'Se vienen las inscripciones para nuestro tradicional torneo de verano. ¡No te lo pierdas!',
            date: '28 Dic 2025',
            author: 'Carlos Mendoza',
            authorImage: 'https://i.pravatar.cc/100?img=12'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=800&h=600&fit=crop',
            category: 'eventos',
            categoryIcon: 'fas fa-calendar',
            title: 'Ceremonia de Graduación',
            excerpt: 'Celebramos el éxito de nuestros atletas del programa élite que recibieron becas universitarias.',
            date: '25 Dic 2025',
            author: 'María González',
            authorImage: 'https://i.pravatar.cc/100?img=47'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1577223625816-7546f22c0b28?w=800&h=600&fit=crop',
            category: 'consejos',
            categoryIcon: 'fas fa-lightbulb',
            title: 'La Importancia del Trabajo en Equipo',
            excerpt: 'Descubre cómo el básquetbol enseña valores fundamentales que van más allá de la cancha.',
            date: '22 Dic 2025',
            author: 'Roberto Silva',
            authorImage: 'https://i.pravatar.cc/100?img=33'
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1518063319789-7217e6a0f9c7?w=800&h=600&fit=crop',
            category: 'resultados',
            categoryIcon: 'fas fa-trophy',
            title: 'Campeones Regionales Sub-16',
            excerpt: 'Nuestro equipo sub-16 se coronó campeón regional después de una temporada perfecta.',
            date: '20 Dic 2025',
            author: 'Carlos Mendoza',
            authorImage: 'https://i.pravatar.cc/100?img=12'
        },
        {
            id: 8,
            image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=600&fit=crop',
            category: 'noticias',
            categoryIcon: 'fas fa-newspaper',
            title: 'Nuevos Programas de Verano',
            excerpt: 'Anunciamos nuestros programas especiales de verano con clínicas intensivas y campamentos.',
            date: '18 Dic 2025',
            author: 'María González',
            authorImage: 'https://i.pravatar.cc/100?img=47'
        }
    ];

    let filteredPosts = [...blogPosts];
    let currentPage = 1;
    const postsPerPage = 6;

    function renderPosts() {
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const postsToShow = filteredPosts.slice(startIndex, endIndex);

        postsGrid.innerHTML = postsToShow.map(post => `
            <article class="post-card">
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-category">
                            <i class="${post.categoryIcon}"></i>
                            ${getCategoryName(post.category)}
                        </span>
                        <span class="post-date">
                            <i class="far fa-calendar"></i>
                            ${post.date}
                        </span>
                    </div>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-footer">
                        <a href="#" class="read-more">
                            Leer más <i class="fas fa-arrow-right"></i>
                        </a>
                        <div class="post-author">
                            <img src="${post.authorImage}" alt="${post.author}">
                            <span>${post.author}</span>
                        </div>
                    </div>
                </div>
            </article>
        `).join('');

        renderPagination();
    }

    function renderPagination() {
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        const pageNumbers = document.getElementById('pageNumbers');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        if (!pageNumbers) return;

        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderPosts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pageNumbers.appendChild(pageBtn);
        }

        if (prevBtn) {
            prevBtn.disabled = currentPage === 1;
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderPosts();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }

        if (nextBtn) {
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderPosts();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }
    }

    function getCategoryName(category) {
        const names = {
            'noticias': 'Noticias',
            'eventos': 'Eventos',
            'resultados': 'Resultados',
            'consejos': 'Consejos'
        };
        return names[category] || category;
    }

    function filterPosts(category) {
        if (category === 'all') {
            filteredPosts = [...blogPosts];
        } else {
            filteredPosts = blogPosts.filter(post => post.category === category);
        }
        currentPage = 1;
        renderPosts();
    }

    function searchPosts(query) {
        const lowerQuery = query.toLowerCase();
        filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(lowerQuery) ||
            post.excerpt.toLowerCase().includes(lowerQuery) ||
            post.category.toLowerCase().includes(lowerQuery)
        );
        currentPage = 1;
        renderPosts();
    }

    // Filter buttons
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const category = btn.getAttribute('data-category');
                filterPosts(category);
            });
        });
    }

    // Search functionality
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchPosts(e.target.value);
            }, 300);
        });
    }

    // Sidebar category links
    const categoryLinks = document.querySelectorAll('.category-list a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            
            // Update filter buttons
            filterBtns.forEach(btn => {
                if (btn.getAttribute('data-category') === category) {
                    btn.click();
                }
            });
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            if (email) {
                alert(`¡Gracias por suscribirte! Enviaremos las últimas noticias a ${email}`);
                newsletterForm.reset();
            }
        });
    }

    // Initial render
    renderPosts();
}

// ========================================
// INITIALIZE ALL
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigationNew(); // New navbar
    initNavigation(); // Old navbar fallback
    initGallery();
    initTestimonials();
    initContactForm();
    createScrollTopButton();
    initScrollAnimations();
    initBlog();
    initHeroSlider();
    initBlogSlider(); // Blog articles slider
    initProgramsCarousel(); // Programs page carousel

    console.log('🏀 Invictus Basketball Academy - Website loaded successfully!');
});

// ========================================
// HERO SLIDER
// ========================================
// HERO SLIDER
// ========================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    if (slides.length === 0) return;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (n >= slides.length) currentSlide = 0;
        if (n < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    // Auto advance slides
    let sliderTimer = setInterval(nextSlide, slideInterval);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            clearInterval(sliderTimer);
            sliderTimer = setInterval(nextSlide, slideInterval);
        });
    });

    // Pause on hover
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', () => {
            clearInterval(sliderTimer);
        });

        heroSlider.addEventListener('mouseleave', () => {
            sliderTimer = setInterval(nextSlide, slideInterval);
        });
    }
}

// ========================================
// BLOG SLIDER
// ========================================
function initBlogSlider() {
    const slider = document.getElementById('blogSlider');
    const prevBtn = document.getElementById('blogPrevBtn');
    const nextBtn = document.getElementById('blogNextBtn');
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    const slides = slider.querySelectorAll('.blog-slide-card');
    if (slides.length === 0) return;
    
    let currentIndex = 0;
    let slidesToShow = 5; // Default: 5 slides visible
    
    function updateSlidesToShow() {
        const width = window.innerWidth;
        if (width <= 480) {
            slidesToShow = 1;
        } else if (width <= 768) {
            slidesToShow = 2;
        } else if (width <= 1024) {
            slidesToShow = 4;
        } else {
            slidesToShow = 5;
        }
    }
    
    function updateSlider() {
        updateSlidesToShow();
        const slideWidth = (slider.parentElement.offsetWidth - 120) / slidesToShow; // Subtract padding
        const gap = 20;
        const translateX = -(currentIndex * (slideWidth + gap));
        slider.style.transform = `translateX(${translateX}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        // Loop back to start when reaching the end
        if (currentIndex >= slides.length - slidesToShow + 1) {
            currentIndex = 0;
        }
        updateSlider();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        // Loop to end when going before the start
        if (currentIndex < 0) {
            currentIndex = Math.max(0, slides.length - slidesToShow);
        }
        updateSlider();
    });
    
    // Update on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            currentIndex = Math.min(currentIndex, Math.max(0, slides.length - slidesToShow));
            updateSlider();
        }, 250);
    });
    
    // Initial update
    updateSlider();
}

// ========================================
// PROGRAMS CAROUSEL
// ========================================
function initProgramsCarousel() {
    const carousel = document.getElementById('programsCarousel');
    const prevBtn = document.getElementById('programsPrevBtn');
    const nextBtn = document.getElementById('programsNextBtn');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    const cards = carousel.querySelectorAll('.program-carousel-card');
    if (cards.length === 0) return;
    
    let currentIndex = 0;
    let cardsToShow = 4; // Default: 4 cards visible
    
    function updateCardsToShow() {
        const width = window.innerWidth;
        if (width <= 480) {
            cardsToShow = 1;
        } else if (width <= 768) {
            cardsToShow = 2;
        } else if (width <= 1024) {
            cardsToShow = 3;
        } else {
            cardsToShow = 4;
        }
    }
    
    function updateCarousel() {
        updateCardsToShow();
        const cardWidth = (carousel.parentElement.offsetWidth - 160) / cardsToShow;
        const gap = 20;
        const translateX = -(currentIndex * (cardWidth + gap));
        carousel.style.transform = `translateX(${translateX}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= cards.length - cardsToShow + 1) {
            currentIndex = 0;
        }
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = Math.max(0, cards.length - cardsToShow);
        }
        updateCarousel();
    });
    
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            currentIndex = Math.min(currentIndex, Math.max(0, cards.length - cardsToShow));
            updateCarousel();
        }, 250);
    });
    
    updateCarousel();
}
