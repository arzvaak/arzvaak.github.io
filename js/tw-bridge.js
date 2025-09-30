// Early preflight: enforce dark background ASAP to prevent white flash
try {
  document.documentElement.style.backgroundColor = 'var(--bg-primary, #111827)';
  if (document.body) {
    document.body.style.backgroundColor = 'var(--bg-primary, #111827)';
  }
} catch (e) {}

(function () {
  function addClasses(el, cls) {
    if (!el) return;
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
  }
  function addToAll(selector, cls) {
    document.querySelectorAll(selector).forEach(el => addClasses(el, cls));
  }
  function once() {
    // Base
    addClasses(document.body, 'bg-dark-primary text-text-primary');
    addClasses(document.body, 'min-h-screen');
    try {
      // Force a safe dark background on first paint to avoid white flashes.
      document.documentElement.style.backgroundColor = 'var(--bg-primary, #111827)';
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.backgroundColor = 'var(--bg-primary, #111827)';
      // Remove any gradient backgrounds that may be set by legacy CSS.
      document.body.style.backgroundImage = 'none';
    } catch (e) {}

    // Add preconnect hints to speed up external resources
    try {
      var head = document.head || document.getElementsByTagName('head')[0];
      var ensure = function(href, crossorigin){
        if ([...head.querySelectorAll('link[rel="preconnect"]').values()].some(function(l){return l.href.indexOf(href) !== -1;})) return;
        var l = document.createElement('link');
        l.rel = 'preconnect';
        l.href = href;
        if (crossorigin) l.crossOrigin = 'anonymous';
        head.appendChild(l);
      };
      ensure('https://fonts.googleapis.com');
      ensure('https://fonts.gstatic.com', true);
      ensure('https://cdn.tailwindcss.com');
    } catch (e) {}

    // Provide CSS variable fallbacks for legacy styles that use var(--*)
    try {
      var root = document.documentElement;
      var vars = {
        '--bg-primary': '#111827',
        '--bg-secondary': '#1f2937',
        '--text-primary': '#f9fafb',
        '--text-secondary': '#d1d5db',
        '--border-color': '#374151',
        '--primary-color': '#3b82f6',
      };
      Object.keys(vars).forEach(function(k){
        if (getComputedStyle(root).getPropertyValue(k).trim() === '') {
          root.style.setProperty(k, vars[k]);
        }
      });
    } catch (e) {}

    // Micro scheduler for non-critical work
    var schedule = function (fn) {
      try { if (window.requestIdleCallback) return requestIdleCallback(fn, { timeout: 500 }); } catch (e) {}
      return setTimeout(fn, 0);
    };

    // Navbar: normalize existing semantic navbar helpers if present
    addToAll('.navbar', 'fixed top-0 w-full bg-dark-secondary shadow-md border-b border-dark-border z-50');
    addToAll('.nav-container', 'max-w-7xl mx-auto px-5 flex justify-between items-center h-16');
    addToAll('.nav-logo a', 'text-primary font-semibold no-underline');
    addToAll('.nav-menu', 'hidden md:flex items-center gap-8');
    addToAll('.nav-link', 'text-text-primary font-medium hover:text-primary transition-colors no-underline');
    addToAll('.nav-toggle', 'md:hidden flex flex-col cursor-pointer');
    addToAll('.bar', 'w-6 h-0.5 bg-text-primary my-0.5 transition-all');

    // Inject a consistent navbar if none exists
    try {
      var existingNav = document.querySelector('nav');
      if (!existingNav) {
        var navHTML = ''+
          '<nav class="fixed top-0 w-full bg-dark-secondary shadow-md border-b border-dark-border z-50">'+
          '  <div class="max-w-7xl mx-auto px-5 flex justify-between items-center h-16">'+
          '    <div class="text-2xl font-semibold">'+
          '      <a href="/index.html" class="text-primary no-underline">📚 IITM Notes</a>'+
          '    </div>'+
          '    <div id="navMenu" class="hidden md:flex items-center gap-8">'+
          '      <a href="/index.html" class="text-text-primary font-medium hover:text-primary transition-colors no-underline">Home</a>'+
          '      <a href="/index.html#qualifier" class="text-text-primary font-medium hover:text-primary transition-colors no-underline">Qualifier Subjects</a>'+
          '      <a href="/terms/qualifier/maths-for-ds.html" class="text-text-primary font-medium hover:text-primary transition-colors no-underline">Math for DS</a>'+
          '      <a href="/terms/qualifier/stats-for-ds.html" class="text-text-primary font-medium hover:text-primary transition-colors no-underline">Stats for DS</a>'+
          '      <a href="/terms/qualifier/english.html" class="text-text-primary font-medium hover:text-primary transition-colors no-underline">English 1</a>'+
          '      <a href="/terms/qualifier/computational-thinking.html" class="text-text-primary font-medium hover:text-primary transition-colors no-underline">Computational Thinking</a>'+
          '    </div>'+
          '    <div id="navToggle" class="md:hidden flex flex-col cursor-pointer" aria-label="Menu" role="button" tabindex="0">'+
          '      <span class="w-6 h-0.5 bg-text-primary my-0.5 transition-all"></span>'+
          '      <span class="w-6 h-0.5 bg-text-primary my-0.5 transition-all"></span>'+
          '      <span class="w-6 h-0.5 bg-text-primary my-0.5 transition-all"></span>'+
          '    </div>'+
          '  </div>'+
          '</nav>';
        document.body.insertAdjacentHTML('afterbegin', navHTML);

        // Add minimal top spacing if first content block lacks it
        try {
          var firstBlock = Array.from(document.body.children).find(function(el){
            return el && el.tagName !== 'NAV' && el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE';
          });
          if (firstBlock) {
            var cs = getComputedStyle(firstBlock);
            var currentTop = (parseFloat(cs.marginTop) || 0) + (parseFloat(cs.paddingTop) || 0);
            if (currentTop < 64) {
              firstBlock.style.marginTop = '80px';
            }
          }
        } catch (e) {}
      }

      // Hook up mobile toggle if present
      var navToggle = document.getElementById('navToggle');
      var navMenu = document.getElementById('navMenu');
      if (navToggle && navMenu) {
        var toggle = function(){ navMenu.classList.toggle('hidden'); };
        navToggle.addEventListener('click', toggle);
        navToggle.addEventListener('keydown', function(ev){
          if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggle(); }
        });
      }
    } catch (e) {}

    // Notes/Topic shells
    addToAll('.notes-container', 'max-w-5xl mx-auto px-5 pt-28 pb-16');
  addToAll('.notes-header', 'mb-8');
  addToAll('.notes-content', 'bg-dark-secondary rounded-3xl p-6 md:p-8 border border-dark-border shadow-lg leading-relaxed space-y-6');
  addToAll('.notes-header h1', 'tracking-tight');
    addToAll('.clean-content', 'bg-dark-secondary rounded-3xl p-6 md:p-8 border border-dark-border shadow-lg');
  // Breadcrumbs common
  addToAll('.breadcrumb a', 'text-text-secondary hover:text-primary');

    // Topic progress header
  addToAll('.topic-progress-header', 'bg-dark-secondary rounded-2xl p-4 md:p-6 border border-dark-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6');
    addToAll('.topic-breadcrumb a', 'text-text-secondary hover:text-primary');
  addToAll('.progress-track', 'w-64 h-2 bg-dark-primary rounded-full overflow-hidden');
  addToAll('.progress-bar', 'w-64 h-2 bg-dark-primary rounded-full overflow-hidden');
    addToAll('.progress-fill', 'h-full bg-primary rounded-full');
    // Map legacy width classes (percentage variants) to inline widths
    var widthMap = { 'w-8': '8%', 'w-10': '10%', 'w-20': '20%', 'w-25': '25%', 'w-30': '30%', 'w-50': '50%', 'w-75': '75%', 'w-80': '80%', 'w-100': '100%' };
    // Apply width mapping for all elements with these classes
    document.querySelectorAll('.progress-fill, .w-8, .w-10, .w-20, .w-25, .w-30, .w-50, .w-75, .w-80, .w-100').forEach(function(el){
      Object.keys(widthMap).forEach(function(k){
        if (el.classList.contains(k)) {
          el.style.width = widthMap[k];
        }
      });
    });
    addToAll('.progress-label', 'text-xs text-text-secondary ml-2');
  addToAll('.progress-text', 'text-xs text-text-secondary mt-2');

    // Meta badges (non-critical)
    schedule(function(){
      addToAll('.topic-meta', 'flex flex-wrap gap-2 mt-2');
      addToAll('.topic-badge, .difficulty-badge, .time-badge, .week-badge, .subject-badge, .date-badge', 'bg-dark-primary text-text-primary px-3 py-1 rounded-full text-xs border border-dark-border');
    });

    // Common content boxes
  addToAll('.learning-objectives, .definition-box, .example-box, .warning-box, .historical-box, .important-note, .critical-note, .notation-box, .motivation-box, .examples-showcase', 'bg-dark-secondary text-text-primary border border-dark-border rounded-xl p-5 my-5');
  addToAll('.learning-objectives h2, .definition-box h3, .example-box h3, .warning-box h3, .important-note h4, .critical-note h4', 'text-lg font-semibold mb-2');
  addToAll('.learning-objectives ul', 'space-y-2');
  // Tint boxes subtly
  addToAll('.definition-box, .notation-box', 'border-l-4 border-l-blue-500 border-blue-500/30');
  addToAll('.example-box', 'border-l-4 border-l-emerald-500 border-emerald-500/30');
  addToAll('.warning-box', 'border-l-4 border-l-amber-500 border-amber-500/30');
  addToAll('.critical-note', 'border-l-4 border-l-rose-500 border-rose-500/30');

    // Grids and cards (non-critical)
    schedule(function(){
      addToAll('.concept-grid', 'grid grid-cols-1 md:grid-cols-2 gap-4');
      addToAll('.operations-grid', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4');
      addToAll('.properties-list', 'grid grid-cols-1 md:grid-cols-2 gap-4');
      addToAll('.examples-grid', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4');
      addToAll('.concept-card, .property-item, .operation-card, .example-item, .characteristic-card', 'bg-dark-primary/60 border border-dark-border rounded-xl p-4 transition hover:-translate-y-0.5 hover:shadow-xl hover:border-primary/40');
    });

  // Notes overview layout (Maths Week 1) (non-critical)
  schedule(function(){
    addToAll('.notes-header .container', 'max-w-7xl mx-auto px-5 pt-24 pb-6');
    addToAll('.notes-header h1', 'text-3xl font-bold mb-2');
    addToAll('.notes-subtitle', 'text-text-secondary');
    addToAll('.notes-layout', 'grid grid-cols-1 md:grid-cols-4 gap-6');
    addToAll('.toc', 'md:col-span-1 bg-dark-primary/60 border border-dark-border rounded-xl p-4 h-max sticky top-24');
    addToAll('.notes-main', 'md:col-span-3 space-y-6');
    addToAll('.note, .callout, .math-box, .relation-table, .definition, .example, .theorem, .proof', 'bg-dark-secondary border border-dark-border rounded-xl p-5');
  });

  // Stats for DS specific structures (non-critical)
  schedule(function(){
    addToAll('.two-column-grid', 'grid grid-cols-1 md:grid-cols-2 gap-4');
    addToAll('.formula-grid', 'grid grid-cols-1 md:grid-cols-3 gap-4');
    addToAll('.formula-card, .data-type-card, .problem-card', 'bg-dark-primary/60 border border-dark-border rounded-xl p-4');
    addToAll('.concept-tree', 'bg-dark-primary/40 border border-dark-border rounded-xl p-4');
    addToAll('.tree-structure', 'mt-2');
    addToAll('.tree-level-1, .tree-level-2, .tree-level-3', 'space-y-3');
    addToAll('.example', 'text-xs text-text-secondary');
    addToAll('.practice-section', 'mt-6');
    addToAll('.toggle-solution', 'mt-3 inline-flex items-center justify-center px-4 py-2 rounded-full border border-dark-border bg-dark-primary text-text-primary hover:bg-dark-border transition');
    addToAll('.solution', 'mt-3');
  });

    // Number line (non-critical)
    schedule(function(){
      addToAll('.number-line', 'bg-dark-primary border border-dark-border rounded-xl p-4 mt-4');
      addToAll('.line-segment', 'flex justify-between text-sm');
      addToAll('.line-labels .label, .label', 'text-xs text-text-secondary');
      addToAll('.number-line .number', 'inline-flex items-center justify-center min-w-6 px-2 py-1 rounded-full text-xs font-medium border border-dark-border');
      addToAll('.number-line .number.negative', 'bg-rose-500/20 text-rose-300 border-rose-500/30');
      addToAll('.number-line .number.zero', 'bg-gray-500/20 text-gray-300 border-gray-500/30');
      addToAll('.number-line .number.positive', 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30');
    });

    // Topics overview legacy page (non-critical)
    schedule(function(){
      addToAll('.topics-overview-page', 'bg-dark-primary text-text-primary min-h-screen');
      addToAll('.topics-overview-page .container', 'max-w-7xl mx-auto px-5 pt-24 pb-16');
      addToAll('.section-title', 'text-4xl font-bold mb-2');
      addToAll('.section-subtitle', 'text-text-secondary mb-8');
      addToAll('.topics-overview-grid', 'grid grid-cols-1 md:grid-cols-2 gap-6');
      addToAll('.topic-overview-card', 'bg-dark-secondary rounded-2xl p-6 border border-dark-border hover:border-blue-500/50 transition');
      // Scope topic number badge styling to overview cards only to avoid clashing with topic pages
      addToAll('.topic-overview-card .topic-number, .topics-overview-page .topic-number', 'w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3');
      addToAll('.topic-content h3', 'text-xl font-semibold mb-2');
      addToAll('.topic-content p', 'text-sm text-text-secondary mb-3');
      addToAll('.topic-concepts', 'flex flex-wrap gap-2 my-3');
      addToAll('.concept-tag', 'bg-dark-primary text-text-primary border border-dark-border rounded-full text-xs px-3 py-1');
      addToAll('.topic-link', 'text-primary hover:text-blue-400');
      addToAll('.overview-actions', 'mt-10');
      addToAll('.action-buttons', 'flex flex-wrap gap-4');
      addToAll('.action-btn', 'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border');

      document.querySelectorAll('.action-btn.primary').forEach(el => addClasses(el, 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-transparent'));
      document.querySelectorAll('.action-btn.secondary').forEach(el => addClasses(el, 'bg-dark-primary text-text-primary border-dark-border hover:bg-dark-border'));
    });

    // Quiz pages (non-critical)
    schedule(function(){
      addToAll('.quiz-container', 'bg-dark-secondary rounded-3xl p-6 md:p-8 border border-dark-border shadow-lg');
      addToAll('.question-card', 'bg-dark-primary/60 border border-dark-border rounded-xl p-4 my-4');
      addToAll('.quiz-actions', 'flex flex-wrap gap-3 mt-6');
      addToAll('.btn, .quiz-btn', 'inline-flex items-center gap-2 px-5 py-3 rounded-full border');
      addToAll('.btn.primary, .quiz-btn.primary', 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-transparent');
      addToAll('.btn.secondary, .quiz-btn.secondary', 'bg-dark-primary text-text-primary border-dark-border hover:bg-dark-border');
      addToAll('.quiz-controls', 'flex items-center gap-3 mt-4');
      addToAll('.quiz-header .container', 'max-w-7xl mx-auto px-5 pt-24 pb-6');
      addToAll('.quiz-subtitle', 'text-text-secondary');
      addToAll('.progress-stats', 'grid grid-cols-2 md:grid-cols-4 gap-4 mt-4');
      addToAll('.stat-box', 'bg-dark-secondary border border-dark-border rounded-xl p-4 text-center');
      addToAll('.stat-number', 'text-2xl font-bold');
      addToAll('.stat-label', 'text-xs text-text-secondary');
      addToAll('.filter-controls', 'flex items-center gap-3 bg-dark-primary/60 border border-dark-border rounded-xl p-3 mb-4');
      addToAll('.quiz-layout', 'grid grid-cols-1 lg:grid-cols-4 gap-6');
      addToAll('.quiz-sidebar', 'lg:col-span-1 bg-dark-primary/60 border border-dark-border rounded-xl p-4');
      addToAll('.quiz-main', 'lg:col-span-3');
      addToAll('.question-grid', 'grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2');
      addToAll('.quiz-modal', 'fixed inset-0 bg-black/60 hidden items-center justify-center p-4');
      addToAll('.quiz-modal:not(.hidden)', 'flex');
      addToAll('.modal-content', 'bg-dark-secondary rounded-2xl border border-dark-border p-6 max-w-2xl w-full');
      addToAll('.modal-footer', 'flex justify-end gap-3 pt-4 border-t border-dark-border mt-4');
    });

  // Footer navigation buttons on notes pages
  addToAll('.navigation-buttons, .nav-buttons', 'flex items-center justify-between mt-8');
    addToAll('.nav-btn', 'inline-flex items-center gap-2 px-5 py-3 rounded-full border');
    addToAll('.nav-btn.prev', 'bg-dark-primary text-text-primary border-dark-border hover:bg-dark-border');
    addToAll('.nav-btn.next', 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-transparent');
  addToAll('.quiz-badge', 'bg-dark-primary text-text-primary px-3 py-1 rounded-full text-xs border border-dark-border');
  addToAll('.focus-toggle', 'inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-primary text-text-primary hover:bg-dark-border transition mb-4');

  // Enhance learning objective bullets with an icon (non-critical)
  schedule(function(){
    try {
      document.querySelectorAll('.learning-objectives li').forEach(function(li){
        if (!li.dataset.enhanced) {
          li.dataset.enhanced = '1';
          addClasses(li, 'flex items-start gap-3 bg-dark-primary/40 border border-dark-border rounded-lg px-3 py-2');
          var icon = document.createElement('span');
          icon.textContent = '✓';
          addClasses(icon, 'text-emerald-400 mt-0.5');
          li.prepend(icon);
        }
      });
    } catch (e) {}
  });

  // Legacy topic pages (topic4–10) layout polish (non-critical)
  schedule(function(){
    addToAll('body > .container', 'max-w-5xl mx-auto px-5 pt-24 pb-16');
    addToAll('.topic-header', 'bg-dark-secondary rounded-3xl p-6 md:p-8 border border-dark-border text-center shadow-lg');
    addToAll('.topic-header h1', 'text-3xl font-bold mb-3');
    addToAll('.content-section', 'bg-dark-secondary rounded-2xl p-6 border border-dark-border shadow mb-6');
    addToAll('.practice-problems', 'bg-dark-secondary border border-dark-border rounded-2xl p-6');
    addToAll('.problem', 'bg-dark-primary/60 border border-dark-border rounded-xl p-4 my-4');
    addToAll('.interactive-demo, .code-block', 'bg-dark-primary/60 border border-dark-border rounded-xl p-4 my-4');
    addToAll('.objectives-list', 'list-none p-0');
    addToAll('.objectives-list li', 'bg-dark-secondary text-text-primary my-2 px-4 py-3 rounded-lg border-l-4 border-l-emerald-500 relative');
    addToAll('.venn-diagram', 'bg-dark-primary/60 border border-dark-border rounded-xl p-4 my-4 font-mono text-sm overflow-x-auto');
    addToAll('.set-notation', 'inline-block bg-dark-primary/60 text-text-primary px-3 py-2 rounded-lg m-1 font-mono font-bold border border-emerald-500');
    addToAll('.navigation', 'flex items-center justify-between mt-8 gap-4');
    addToAll('.nav-button', 'inline-flex items-center gap-2 px-5 py-3 rounded-full border');
    addToAll('.nav-button', 'bg-dark-primary text-text-primary border-dark-border hover:bg-dark-border transition');
  });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', once);
  } else {
    once();
  }
})();
