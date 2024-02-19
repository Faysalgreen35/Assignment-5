let seatSelected = 0;
let totalPrice = 0;
const ticket = document.querySelectorAll('.tickets');

for (const element of ticket) {
  element.addEventListener('click', function () {
    // Check if the user has already selected 4 seats
    if (seatSelected >= 4) {
      return; // If yes, do nothing
    }

    // Check if the seat is already selected
    if (element.classList.contains('bg-green-500')) {
      // If it's already selected, do nothing
      return;
    }

    // Add the selected class
    element.classList.add('bg-green-500');

    const seatName = element.querySelector('h5').innerText;
    const clases = 'Economy';
    const price = 550;

    const titleContainer = document.getElementById('title-container');
    const seatNumber = document.getElementById('seat-number');
    seatNumber.innerText = seatSelected + 1;

    let availableSeat = document.getElementById('available-seat');
    let availableseatText = parseInt(availableSeat.innerText);
    availableSeat.innerText = availableseatText - 1;

    const p = document.createElement('p');
    p.innerText =
      seatSelected +
      1 +
      '.  ' +
      seatName +
      '       ' +
      clases +
      '     ' +
      price;
    titleContainer.appendChild(p);

    // Increment the selected seat count
    seatSelected++;

    // Calculate total price
    totalPrice += price;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('grand-total').innerText = totalPrice;
  });
}

// -----------------------------------
const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function () {
  // get the value from input
  const couponElement = document.getElementById('input-field').value;
  const couponCode = couponElement.split(' ').join('').toUpperCase();

  if (totalPrice >= 2200) {
    if (couponCode === 'NEW15') {
      const discountAmoount = totalPrice * 0.15;

      console.log(discountAmoount);

      //   grand total calculate
      const grandtoTal = document.getElementById('grand-total');
      grandtoTal.innerText = totalPrice - discountAmoount;

      // Hide apply button and input field
      btn.style.display = 'none';
      document.getElementById('input-field').style.display = 'none';
    } else if (couponCode === 'COUPLE20') {
      const discountAmoount = totalPrice * 0.2;

      //   grand total calculate
      const grandtoTal = document.getElementById('grand-total');
      grandtoTal.innerText = totalPrice - discountAmoount;
      console.log(discountAmoount);

      // Hide apply button and input field
      btn.style.display = 'none';
      document.getElementById('input-field').style.display = 'none';
    } else {
      alert('invalid coupon');
    }
  } else {
    alert('please at least 4 ticket choose for discount');
  }
});

const next = document.getElementById('next-btn');
next.addEventListener('click', function () {
  const totalPrice = document.getElementById('total-price').innerText;
  console.log(totalPrice);

  if (totalPrice > 0) {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    const main = document.getElementById('main');
    main.classList.add('hidden');
    const header = document.getElementById('header');
    header.classList.add('hidden');
  } else {
    alert('please select atleast a seat');
  }
});

const modal = document.getElementById('modal');
modal.addEventListener('click', function () {
  modal.classList.add('hidden');
  const main = document.getElementById('main');
  main.classList.remove('hidden');
  const header = document.getElementById('header');
  header.classList.remove('hidden');
});
