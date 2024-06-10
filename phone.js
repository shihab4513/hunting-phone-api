
const loadPhone = async () => {
    try {
        const url = 'https://openapi.programming-hero.com/api/phones?search=iphone';
        const res = await fetch(url);
        const data = await res.json();
        const phones = data.data;
        // console.log(phones);
        displayPhones(phones);
    } catch (error) {
        console.error('data load error ', error);
    }
}

const displayPhones = phones => {
    //    console.log(phones);
    // each phone will be printed with below code
    phones.forEach(phone => {
        // console.log(phone);
        // Step 1 get access to id
        const phoneContainer = document.getElementById('phone-container');

        // second step create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;
        // step 3 : set innerHTML
        phoneCard.innerHTML = `
         <figure><img src="${phone.image}"
                            alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        
        `;
        // step 4 : append Child
        phoneContainer.appendChild(phoneCard);
    })
}

loadPhone();
