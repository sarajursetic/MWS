
    const uceniciLink = document.querySelector('#active-link');
    const dropdown = document.querySelector('.open-ucenici');

    let locked = false;

    // --- FUNKCIJE ---
    function showDropdown() {
        dropdown.style.display = 'flex';  // prvo prikaži
        requestAnimationFrame(() => {
            dropdown.classList.add('show'); // pa animiraj
        });
    }

    function hideDropdown() {
        dropdown.classList.remove('show');
        // nakon animacije sakriti display
        setTimeout(() => {
            if (!dropdown.classList.contains('show')) {
                dropdown.style.display = 'none';
            }
        }, 1000); // trajanje animacije = 1s
    }

    // --- HOVER ---
    uceniciLink.addEventListener('mouseenter', () => {
        if (!locked) showDropdown();
    });

    dropdown.addEventListener('mouseenter', () => {
        if (!locked) showDropdown();
    });

    uceniciLink.addEventListener('mouseleave', () => {
        if (!locked) hideDropdown();
    });

    dropdown.addEventListener('mouseleave', () => {
        if (!locked) hideDropdown();
    });

    // --- KLIK ---
    uceniciLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        locked = !locked;

        if (locked) {
            showDropdown();
        } else {
            hideDropdown();
        }
    });

    // --- KLIK IZVAN PROZORA ---
    document.addEventListener('click', (e) => {
        const inside = uceniciLink.contains(e.target) || dropdown.contains(e.target);

        if (!inside) {
            locked = false;
            hideDropdown();
        }
    });
