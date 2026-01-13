function processFunc() {

    const maleName = document.getElementById("male_name").value.trim();
    const femaleName = document.getElementById("female_name").value.trim();
    const maleDob = document.getElementById("male_dob").value;
    const femaleDob = document.getElementById("female_dob").value;

    const warning = document.getElementById("warning");
    const result = document.getElementById("result");
    const shareBtn = document.getElementById("shareBtn");

    // RESET
    warning.style.display = "none";
    warning.innerText = "";
    result.innerText = "Love Percentage:";
    if (shareBtn) shareBtn.style.display = "none";

    // ✅ VALIDATION (THIS IS THE KEY)
    if (maleName === "" || femaleName === "" || maleDob === "" || femaleDob === "") {
        warning.innerText = "⚠️ Please fill all data";
        warning.style.display = "block";
        return; // ❌ STOP calculation
    }

    // ---- ORIGINAL LOGIC CONTINUES ----

    const now = new Date();
    const currentYear = now.getFullYear();

    const maleDateObj = new Date(maleDob);
    const femaleDateObj = new Date(femaleDob);

    const ageMale = currentYear - maleDateObj.getFullYear();
    const ageFemale = currentYear - femaleDateObj.getFullYear();

    const dobMale = `${maleDateObj.getDate()}-${maleDateObj.getMonth()+1}-${maleDateObj.getFullYear()}`;
    const dobFemale = `${femaleDateObj.getDate()}-${femaleDateObj.getMonth()+1}-${femaleDateObj.getFullYear()}`;

    const concatName = maleName.toLowerCase() + femaleName.toLowerCase();
    const concatDob = dobFemale + dobMale;

    const listName = [...concatName].map(c => c.charCodeAt(0) - 96).filter(n => n > 0);
    const listDob = [...concatDob].map(c => parseInt(c)).filter(n => !isNaN(n));

    const total = listName.reduce((a,b)=>a+b,0) + listDob.reduce((a,b)=>a+b,0);

    const randomFactor = Math.floor(Math.random() * 100) + 1;
    
    // Fix: Use a formula that guarantees a positive number between 0-100
    const lovePercentage = (total + randomFactor + Math.floor((ageMale + ageFemale) / 2)) % 101;

    result.innerText = `Love Percentage: ${lovePercentage.toFixed(2)}% ❤️`;

    // Share Logic
    if (shareBtn) {
        shareBtn.style.display = "block";
        shareBtn.onclick = async () => {
            const text = `I checked love compatibility between ${maleName} and ${femaleName} on Fun.com! Result: ${lovePercentage.toFixed(2)}% ❤️`;
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Love Calculator Result',
                        text: text,
                        url: window.location.href
                    });
                } catch (err) { console.error('Share failed:', err); }
            } else {
                navigator.clipboard.writeText(`${text} ${window.location.href}`).then(() => alert("Result copied to clipboard!"));
            }
        };
    }
}
