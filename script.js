import ScrollReveal from 'scrollreveal';


// Dark & Light Mode On Off
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
var themeToggleDarkIcon2 = document.getElementById('theme-toggle-dark-icon2');
var themeToggleLightIcon2 = document.getElementById('theme-toggle-light-icon2');
// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleLightIcon2.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleDarkIcon2.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');
var themeToggleBtn2 = document.getElementById('theme-toggle2');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
}),

themeToggleBtn2.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon2.classList.toggle('hidden');
    themeToggleLightIcon2.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


const sr = ScrollReveal({
    origin:'bottom',
    distance: '60px',
    duration:3000,
    delay:600
})

const element = document.getElementById('banner-name');

sr.reveal(element,{
    origin:'top'
})

sr.reveal(element);


console.log('test from scriptjs')