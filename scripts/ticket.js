// console.log('connected');

let seatSecleted = 1;
let totalPrice = 0;
const ticket = document.querySelectorAll('.tickets');
// console.log(ticket);

for (const element of ticket) {
  //   console.log(element);
  element.addEventListener('click', function () {
    // console.log('clicked');

    // get the seat number
    element.classList.add('bg-green-500');

    const seatName = element.querySelector('h5').innerText;
    // console.log(seatName.innerText);
    const clases = 'Economoy';
    const price = 550;

    const titleContainer = document.getElementById('title-container');
    const seatNumber = document.getElementById('seat-number');
    seatNumber.innerText = seatSecleted;

    let availableSeat = document.getElementById('available-seat');
    let availableseatText = parseInt(availableSeat.innerText);
    availableSeat.innerText = availableseatText - 1;
    // availableSeat = availableseatText;
    // console.log(availableseatText);

    const p = document.createElement('p');
    p.innerText =
      seatSecleted + '.  ' + seatName + '       ' + clases + ['     '] + price;
    titleContainer.appendChild(p);
    seatSecleted++;

    // calculate price  Couple 20
    totalPrice += price;
    document.getElementById('total-price').innerText = totalPrice;
  });
}

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
  if (seatSecleted > 0) {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    const main = document.getElementById('main');
    main.classList.add('hidden');
    const header = document.getElementById('header');
    header.classList.add('hidden');
  }
});
