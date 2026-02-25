document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taskForm');
    const submitBtn = document.querySelector('.btn-submit');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Saving...';
        submitBtn.style.opacity = '0.7';

        setTimeout(() => {
            alert('Task Added Successfully! ✅');
            
            form.reset();
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = '1';
        }, 1000);
    });
});


function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger-menu');
    const overlay = document.querySelector('.overlay');
    
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        const hamburger = document.querySelector('.hamburger-menu');
        const overlay = document.querySelector('.overlay');
        
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

