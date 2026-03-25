document.addEventListener('DOMContentLoaded', () => {
    
    //---------------------------------------------------------
    // 1. CHÈN DỮ LIỆU CƠ BẢN (HERO, PROFILE, FOOTER)
    //---------------------------------------------------------
    
    // Hàm cắm text vào Node an toàn
    const fillText = (selector, text) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    };
    const fillHref = (selector, link) => {
        const els = document.querySelectorAll(selector);
        els.forEach(el => {
            el.href = link;
        });
    };

    // Điền text Hero
    fillText('.hero-eyebrow', `Sẵn sàng cơ hội mới  ·  ${CV_DATA.profile.location.split(',')[0]}`);
    fillText('#hero h1', CV_DATA.profile.name);
    fillText('.hero-sub', CV_DATA.profile.title);
    fillText('.hero-intro', CV_DATA.heroIntro);

    // Điền Contact / Links
    fillHref('.link-phone', `tel:${CV_DATA.profile.phone.replace(/\s+/g, '')}`);
    fillHref('.link-email', `mailto:${CV_DATA.profile.email}`);
    fillHref('.link-facebook', `https://${CV_DATA.profile.facebook}`);
    
    document.querySelectorAll('.val-loc').forEach(el => el.textContent = CV_DATA.profile.location);
    document.querySelectorAll('.val-phone').forEach(el => el.textContent = CV_DATA.profile.phone);
    document.querySelectorAll('.val-email').forEach(el => el.textContent = CV_DATA.profile.email);
    document.querySelectorAll('.val-facebook').forEach(el => el.textContent = CV_DATA.profile.facebook);

    // Contact block
    fillText('.ct-name', CV_DATA.profile.name);
    fillText('.ct-sub', `${CV_DATA.profile.title.split('—')[0].trim()}  ·  ${CV_DATA.profile.location}`);
    fillText('.ct-line', CV_DATA.profile.tagline);
    fillText('.ft-bar span:first-child', `© ${CV_DATA.footer.year} ${CV_DATA.footer.copyrightName}`);
    fillText('.ft-bar span:last-child', `${CV_DATA.profile.title.split('—')[0].trim()} · ${CV_DATA.profile.location.split(',')[0]}`);

    // Giới thiệu
    const aboutContainer = document.querySelector('.about-body');
    if (aboutContainer) {
        aboutContainer.innerHTML = CV_DATA.aboutParagraphs.map(p => `<p>${p}</p>`).join('');
    }


    //---------------------------------------------------------
    // 2. CHÈN KỸ NĂNG (SKILLS)
    //---------------------------------------------------------
    const skillsContainer = document.querySelector('.skills-list');
    if (skillsContainer) {
        skillsContainer.innerHTML = CV_DATA.skills.map(sk => `
            <div class="sk-row">
                <span class="sk-label">${sk.label}</span>
                <div class="sk-tags">
                    ${sk.tags.map(tag => `<span class="sk-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    
    //---------------------------------------------------------
    // 3. CHÈN KINH NGHIỆM (EXPERIENCE)
    //---------------------------------------------------------
    const expContainer = document.querySelector('#experience-wrapper');
    if (expContainer) {
        expContainer.innerHTML = CV_DATA.experience.map(exp => `
            <div class="exp-card">
                <div class="exp-header">
                    <div>
                        <div class="exp-role">${exp.role}</div>
                        <div class="exp-co">${exp.company}</div>
                    </div>
                    <div class="exp-when">${exp.period}<br>${exp.duration}</div>
                </div>
                <div class="exp-domains">
                    ${exp.domains.map(d => `<span class="d-tag">${d}</span>`).join('')}
                </div>
                <ul class="exp-list">
                    ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }


    //---------------------------------------------------------
    // 4. CHÈN DỰ ÁN (PROJECTS)
    //---------------------------------------------------------
    const projContainer = document.querySelector('.proj-grid');
    if (projContainer) {
        projContainer.innerHTML = CV_DATA.projects.map(p => {
            return `
            <div class="proj-card">
                <div class="proj-head">
                    <div class="proj-name">${p.name}</div>
                    <span class="proj-cat">${p.category}</span>
                </div>
                <p class="proj-desc">${p.desc}</p>
                <div class="proj-meta">
                    <div class="pm-row"><span class="pm-k">Vai trò</span><span class="pm-v">${p.role}</span></div>
                    <div class="pm-row"><span class="pm-k">Đóng góp</span><span class="pm-v">${p.contribution}</span></div>
                    <div class="pm-row"><span class="pm-k">Kết quả</span><span class="pm-v">${p.result}</span></div>
                </div>
                <div class="proj-foot">
                    <a href="${p.playLink}" target="_blank" rel="noopener noreferrer" class="proj-play">Google Play ↗</a>
                </div>
            </div>`;
        }).join('');
    }


    //---------------------------------------------------------
    // 5. CHÈN HỌC VẤN (EDUCATION)
    //---------------------------------------------------------
    const eduContainer = document.querySelector('#education-wrapper');
    if (eduContainer) {
        eduContainer.innerHTML = CV_DATA.education.map(edu => `
            <div class="edu-row">
                <div class="edu-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
                        <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
                    </svg>
                </div>
                <div>
                    <div class="edu-school">${edu.school}</div>
                    <div class="edu-detail">${edu.status}</div>
                </div>
            </div>
        `).join('');
    }


    //---------------------------------------------------------
    // 6. ANIMATION HOẶC INTERACTION CHO TRANG
    //---------------------------------------------------------
    
    // Sticky header
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });

    // Mobile nav toggle
    const toggle = document.getElementById('navToggle');
    const mob = document.getElementById('navMobile');

    if(toggle && mob) {
        toggle.addEventListener('click', () => {
            const open = mob.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
        });
        document.querySelectorAll('.nav-m-link').forEach(l => {
            l.addEventListener('click', () => {
                mob.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Mở menu');
            });
        });
    }

});
