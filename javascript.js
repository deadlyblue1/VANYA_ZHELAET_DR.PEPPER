let cat = document.getElementById('vanya')

vanya.style.position = 'fixed';


document.onmousemove = (event) => {
    vanya.style.left = event.clientX - 75 + 'px';
    vanya.style.top = event.clientY - 75 + 'px';
}

vanya.onmouseover = () => alert('A YA VANYA LIUFA')