    const followers = document.getElementById('followers');
    const img = document.querySelector('.img img');
    const name = document.getElementById('name');
    const form = document.querySelector('form');
    let card = document.querySelector('.card');
    const reset = document.getElementById('reset');
    
    card.style.display = 'none';
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let user = document.getElementById('user');
        console.log(user);
        const xhr = new XMLHttpRequest();
        const requestUrl = `https://api.github.com/users/${user.value}`;
        xhr.open('GET', requestUrl);
        xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4 && xhr.status === 200) {
            card.style.display = 'block';
            const data = JSON.parse(this.responseText);
            console.log(data);
            console.log(data.followers);
            followers.textContent = data.followers;
            img.src = data.avatar_url;
            name.textContent = data.name;
        }
    }
        xhr.send();
        user.value = '';
    })
    reset.addEventListener('click', () => {
        card.style.display = 'none';
    })
