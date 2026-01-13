 const loginbtn = document.getElementById('login-btn');
    loginbtn.addEventListener('click', () => {
        window.location.href = "login.html";
    });
    const memeFinder = document.getElementById('meme-finder');
    memeFinder.addEventListener('click', () => {
        window.location.href = "meme-generator/meme.html";
    });
    const randomJoke = document.getElementById('randomJoke');
    randomJoke.addEventListener('click', () => {
        window.location.href = "Joke finder/jokefetch.html";
    });

    const lovecal = document.getElementById('love-cal');
    lovecal.addEventListener('click', () => {
        window.location.href = "love-calculator/love-cal.html";
    });

    const pickupline = document.getElementById('pickup-line');
    pickupline.addEventListener('click', () => {
        window.location.href = "pickupline/pickup.html";
    });

    const dowrycal = document.getElementById('dowry-cal');
    
    // Create Warning Modal dynamically
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <h2 class="modal-title">⚠️ Social Awareness</h2>
            <p class="modal-text">Dowry is a social evil and a punishable offense. This calculator is purely for <strong>entertainment and satire</strong>. We strictly condemn the practice of dowry.</p>
            <button id="dowry-continue-btn" class="modal-btn">OK and Continue</button>
        </div>
    `;
    document.body.appendChild(modal);

    const continueBtn = document.getElementById('dowry-continue-btn');

    dowrycal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
    });

    continueBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        window.location.href = "dowry-cal/dowry.html";
    });