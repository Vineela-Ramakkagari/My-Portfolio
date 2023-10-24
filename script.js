document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior (jumping to the anchor)
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#education"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior (jumping to the anchor)
    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#skills"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior (jumping to the anchor)
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior (jumping to the anchor)
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#achievements"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior (jumping to the anchor)
    document.getElementById('achievements').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior (jumping to the anchor)
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

