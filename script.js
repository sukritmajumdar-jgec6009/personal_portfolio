// ==========================================
// PRELOADER & INITIALIZATION
// ==========================================
function initPortfolio() {
    const animationDuration = 2500; 

    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const mainContent = document.getElementById('main-content');
        const body = document.body;

        if(preloader) preloader.classList.add('fade-out');
        if(mainContent) mainContent.classList.add('visible');
        body.classList.remove('loading');

        initializeCustomCursorEffects();
        initializeMagneticNav();
        initMobileMenu(); 
        initBatcomputerInteractions();
        initCardTiltEffect(); 

        setTimeout(startTypewriter, 500);

    }, animationDuration);
}

if (document.readyState === 'complete') {
    initPortfolio();
} else {
    window.addEventListener('load', initPortfolio);
}

// ==========================================
// MOBILE HAMBURGER MENU LOGIC
// ==========================================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// ==========================================
// 3D CARD TILT & BEND EFFECT
// ==========================================
function initCardTiltEffect() {
    const statCards = document.querySelectorAll('.stat-card');
    
    if (window.innerWidth > 768) {
        statCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s ease-out, box-shadow 0.4s ease, border-color 0.4s ease';
            });

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; 
                const y = e.clientY - rect.top;  
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = -((y - centerY) / centerY) * 12; 
                const rotateY = ((x - centerX) / centerX) * 12;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transition = 'transform 0.5s ease-out, box-shadow 0.4s ease, border-color 0.4s ease';
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
            });
        });
    }
}

// ==========================================
// MAGNETIC NAVBAR LINKS
// ==========================================
function initializeMagneticNav() {
    const magneticLinks = document.querySelectorAll('.magnetic-link');
    
    if (window.innerWidth > 768) {
        magneticLinks.forEach(link => {
            link.addEventListener('mousemove', (e) => {
                const rect = link.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translate(0px, 0px)';
            });
        });
    }
}

// ==========================================
// HERO TYPEWRITER EFFECT 
// ==========================================
function startTypewriter() {
    const text = "Translating complex algorithmic chaos into optimized, scalable software.";
    const textElement = document.getElementById('typewriter-text');
    if (!textElement) return;

    textElement.textContent = ""; 
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 45); 
        }
    }
    type();
}

// ==========================================
// WAYNE_OS BATCOMPUTER LOGIC 
// ==========================================
let terminalState = 0; 

function startTerminalPrompt() {
    if (terminalState !== 0) return;
    terminalState = 1;

    const terminalTextContainer = document.getElementById('batcomputer-text');
    if (!terminalTextContainer) return;

    terminalTextContainer.innerHTML = ''; 
    
    const promptText = "> Want to know me?";
    let currentParagraph = document.createElement('p');
    currentParagraph.className = 'glitch-text';
    terminalTextContainer.appendChild(currentParagraph);

    let charIndex = 0;
    
    function typePrompt() {
        if (charIndex < promptText.length) {
            currentParagraph.textContent += promptText.charAt(charIndex);
            charIndex++;
            setTimeout(typePrompt, 40); 
        } else {
            setTimeout(() => {
                const enterInstruction = document.createElement('p');
                enterInstruction.className = 'glitch-text pulse-text';
                enterInstruction.style.marginTop = '20px';
                enterInstruction.innerHTML = "> [ PRESS ENTER TO DECRYPT ]";
                terminalTextContainer.appendChild(enterInstruction);
            }, 300);
        }
    }
    typePrompt();
}

function startFullTerminalTyping() {
    if (terminalState !== 1) return;
    terminalState = 2; // Locked in typing state

    const terminalTextContainer = document.getElementById('batcomputer-text');
    terminalTextContainer.innerHTML = ''; 

    // --- STEP 1: BOOT SEQUENCE ---
    const bootLines = [
        "> [ INITIATING WAYNE_OS SECURE UPLINK... ]",
        "> [ ENCRYPTION KEY VALIDATED ]",
        "> [ DECRYPTING ARCHIVE_DATA... 100% ]",
        "> ACCESS GRANTED."
    ];

    let bootLineIndex = 0;

    function typeBootSequence() {
        if (bootLineIndex < bootLines.length) {
            let currentParagraph = document.createElement('p');
            currentParagraph.className = 'glitch-text';
            currentParagraph.style.color = 'var(--wayne-gold)'; 
            terminalTextContainer.appendChild(currentParagraph);
            
            let text = bootLines[bootLineIndex];
            let charIdx = 0;

            function typeChar() {
                if (charIdx < text.length) {
                    currentParagraph.textContent += text.charAt(charIdx);
                    charIdx++;
                    setTimeout(typeChar, 10); 
                } else {
                    bootLineIndex++;
                    setTimeout(typeBootSequence, 200); 
                }
            }
            typeChar();
        } else {
            setTimeout(() => {
                terminalTextContainer.innerHTML = ''; 
                typeActualBio();
            }, 800);
        }
    }

    // --- STEP 2: ACTUAL BIO TYPING ---
    const textLines = [
        "> I am an engineering undergraduate in Information Technology branch at Jalpaiguri Government Engineering College (JGEC), specializing in algorithmic warfare and robust software architecture. I don't just write code; I engineer resilient systems designed to withstand edge cases and chaos.",
        "> My foundation is built on absolute precision, forged through conquering over 1,500 complex algorithmic challenges. Currently, I am translating this raw computational logic into scalable, real-world applications—transitioning from deep Data Structures & Algorithms in C++ to building AI-driven solutions and automated trading protocols in Python.",
        "> My objective is strictly defined: eliminate inefficiencies, optimize performance, and deploy software that executes flawlessly."
    ];

    function typeActualBio() {
        let lineIndex = 0;
        let charIndex = 0;
        let currentParagraph = document.createElement('p');
        currentParagraph.className = 'glitch-text';
        terminalTextContainer.appendChild(currentParagraph);

        function typeTerminal() {
            if (lineIndex < textLines.length) {
                if (charIndex < textLines[lineIndex].length) {
                    currentParagraph.textContent += textLines[lineIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeTerminal, 12); 
                } else {
                    lineIndex++;
                    charIndex = 0;
                    if (lineIndex < textLines.length) {
                        currentParagraph = document.createElement('p');
                        currentParagraph.className = 'glitch-text';
                        terminalTextContainer.appendChild(currentParagraph);
                        setTimeout(typeTerminal, 250); 
                    } else {
                        terminalState = 3; 
                        
                        // --- STEP 3: RESET OPTION ADDED HERE ---
                        setTimeout(() => {
                            const resetOption = document.createElement('p');
                            resetOption.className = 'glitch-text reset-text pulse-text';
                            resetOption.style.marginTop = '20px';
                            resetOption.innerHTML = "> [ CLICK HERE TO REBOOT SYSTEM ]";
                            
                            resetOption.addEventListener('click', (e) => {
                                e.stopPropagation(); 
                                terminalState = 0; 
                                startTerminalPrompt(); 
                            });
                            
                            terminalTextContainer.appendChild(resetOption);
                        }, 600);
                    }
                }
            }
        }
        typeTerminal();
    }

    typeBootSequence();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && terminalState === 1) {
        startFullTerminalTyping();
    }
});

function initBatcomputerInteractions() {
    const terminalBody = document.getElementById('batcomputer-screen');
    const terminalContentWrapper = document.getElementById('batcomputer-text');
    
    if (!terminalBody || !terminalContentWrapper) return;

    // Background Click Glitch Effect
    terminalBody.addEventListener('click', () => {
        if (terminalState === 1) {
            startFullTerminalTyping(); 
        } 
        else if (terminalState === 3) {
            terminalContentWrapper.classList.remove('manual-glitch');
            void terminalContentWrapper.offsetWidth; 
            terminalContentWrapper.classList.add('manual-glitch');
            
            setTimeout(() => {
                terminalContentWrapper.classList.remove('manual-glitch');
            }, 400); 
        }
    });

    // Top Window Buttons Logic
    const terminalButtons = document.querySelectorAll('.terminal-buttons span');
    terminalButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            terminalBody.style.opacity = '0';
            
            setTimeout(() => {
                terminalBody.style.opacity = '1';
                
                
                if(btn.classList.contains('close-btn')) {
                    terminalState = 0;
                    startTerminalPrompt();
                }
            }, 300);
        });
    });
}

// ==========================================
// MAIN SITE INTERACTIONS (Custom Cursor)
// ==========================================
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

function initializeCustomCursorEffects() {
    const clickableElements = document.querySelectorAll('#main-content a, #main-content .btn, .h-timeline-content, .floating-tab, .stat-card, .profile-icon, .tab-link, .terminal-buttons span, #batcomputer-screen, .hamburger, .reset-text');

    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (cursor) {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.backgroundColor = 'rgba(242, 169, 0, 0.1)';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            if (cursor) {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.backgroundColor = 'transparent';
            }
        });
    });
}

// ==========================================
// SMOOTH SCROLLING NAVIGATION
// ==========================================
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==========================================
// STEALTH REVEAL EFFECT 
// ==========================================
const hiddenElements = document.querySelectorAll('.h-timeline-item, .floating-tab, .stat-card, .section-title, .batcomputer-terminal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); 
            
            if(entry.target.classList.contains('batcomputer-terminal')) {
                setTimeout(startTerminalPrompt, 400); 
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" 
});

hiddenElements.forEach((el) => observer.observe(el));

// ==========================================
// BATMOBILE VIDEO & MOVEMENT SYNC LOGIC
// ==========================================
const batVid = document.getElementById('bat-vid');
const batWrapper = document.getElementById('bat-wrapper');

if (batVid && batWrapper) {
    
    batWrapper.addEventListener('animationiteration', () => {
        if(batVid.readyState >= 1) {
            batVid.currentTime = 0;
        }
    });
}