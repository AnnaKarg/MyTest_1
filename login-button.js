document.addEventListener("DOMContentLoaded", () => {
    const dropbtn = document.querySelector('.dropbtn');
    const panel = document.getElementById('loginPanel');

    dropbtn.addEventListener('click', () => {
        panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    });

    document.getElementById('loginBtn').addEventListener('click', () => {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if(email && password){
            alert(`Σύνδεση με Email: ${email}`);
        } else {
            alert('Συμπλήρωσε και τα δύο πεδία!');
        }
    });

    document.getElementById('createBtn').addEventListener('click', () => {
        alert('Μεταβαίνεις στη δημιουργία νέου λογαριασμού.');
    });
});
