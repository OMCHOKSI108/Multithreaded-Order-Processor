document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    const orderList = document.getElementById('orderList');
    const orderItem = document.createElement('li');
    const totalPrice = itemQuantity * itemPrice;

    orderItem.textContent = `Item: ${itemName}, Quantity: ${itemQuantity}, Total Price: ${totalPrice.toFixed(2)} units`;
    orderList.appendChild(orderItem);

    // Clear form fields after submission
    document.getElementById('orderForm').reset();
});
