const onSearch = () => {
    const input = document.querySelector('#search');
    const filter = input.value.toUpperCase();

    const list = document.querySelector('#list');

    list.forEach((el) => {
        const text = el.textContent .toUpperCase();
        el.style.display = text.includes(filter) ? '' : 'none';
    });
};