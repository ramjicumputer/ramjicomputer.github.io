// Font Size Switcher
function changeFontSize(size) {
    const sizes = {
        'small': '12px',
        'medium': '14px',
        'large': '16px'
    };

    document.querySelectorAll('.font-size-btn').forEach(btn =>
        btn.classList.remove('active'));

    event.target.classList.add('active');
    document.documentElement.style.fontSize = sizes[size];
}

// Enquiry Form Toggle
function toggleEnquiryForm() {
    const form = document.getElementById('enquiryForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

// Close enquiry form when clicking outside
document.addEventListener('click', function(event) {
    const enquiryForm = document.querySelector('.enquiry-form');
    if (!enquiryForm.contains(event.target)) {
        document.getElementById('enquiryForm').style.display = 'none';
    }
});

// Pause slider on hover
const slider = document.querySelector('.slider-container');
slider.addEventListener('mouseenter', () => {
    slider.querySelector('.slides').style.animationPlayState = 'paused';
});
slider.addEventListener('mouseleave', () => {
    slider.querySelector('.slides').style.animationPlayState = 'running';
});

// Initialize medium font size
document.querySelector(`.font-size-btn:nth-child(2)`).classList.add('active');

function showNoticeTab(tabId) {
    // Hide all
    document.querySelectorAll('.notice-content').forEach(div => div.style.display = 'none');
    document.querySelectorAll('.notice-tab').forEach(btn => btn.classList.remove('active'));

    // Show selected
    document.getElementById(tabId).style.display = 'block';
    event.target.classList.add('active');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
