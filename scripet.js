document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('#cart-items li');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.forEach(item => {
        const price = parseFloat(item.dataset.price);
        const quantityElement = item.querySelector('.quantity');
        const likeButton = item.querySelector('.like-btn');
        let quantity = parseInt(quantityElement.textContent);

        item.querySelector('.increase').addEventListener('click', () => {
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });

        item.querySelector('.decrease').addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });

        item.querySelector('.remove').addEventListener('click', () => {
            item.remove();
            updateTotal();
        });

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
            if (likeButton.classList.contains('liked')) {
                likeButton.textContent = '💖'; // Changer en cœur plein
            } else {
                likeButton.textContent = '❤️'; // Changer en cœur vide
            }
        });

        function updateTotal() {
            let total = 0;
            cartItems.forEach(item => {
                const price = parseFloat(item.dataset.price);
                const quantity = parseInt(item.querySelector('.quantity').textContent);
                total += price * quantity;
            });
            totalPriceElement.textContent = total.toFixed(2) + '€';
        }
    });
});
