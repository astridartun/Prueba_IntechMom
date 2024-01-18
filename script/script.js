    const result = document.getElementById('result');
    const filter = document.getElementById('filter');
    const listItems = [];

    getData();

    filter.addEventListener('input', () => filterData(filter.value))

    async function getData() {
        const res = await fetch('https://randomuser.me/api?results=30')
        const { results } = await res.json()

        // Limpiar resultado
        result.innerHTML = ''

        results.forEach(friend => {
            const li = document.createElement('li')

            listItems.push(li)

            li.innerHTML = `
                <img src="${friend.picture.large}" alt="${friend.name.first}">
                <div class="friend-info">
                <h4>${friend.name.first} ${friend.name.last}</h4>
                <p>${friend.gender}</p>
                <p>${friend.phone}</p>
                <p>${friend.email}</p>
                <p>${friend.location.city} ${friend.location.country}</p>
                </div>
            `

            result.appendChild(li)
        });
    }

    function filterData(searchTerm) {
        listItems.forEach(item => {
            const friendInfo = item.querySelector('.friend-info');
            const friendName = friendInfo.querySelector('h4').innerText.toLowerCase();
            const friendLocation = friendInfo.querySelector('p').innerText.toLowerCase();

            if (friendName.includes(searchTerm.toLowerCase()) || friendLocation.includes(searchTerm.toLowerCase())) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });

    // Obtener referencias a los elementos del DOM
const botonMostrarModal = document.getElementById('mostrarModal');
const modal = document.getElementById('miModal');

// Asociar evento de clic al botón para mostrar el modal
botonMostrarModal.addEventListener('click', mostrarModal);

// Función para mostrar el modal
function mostrarModal() {
  modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
  modal.style.display = 'none';
}

}


  

