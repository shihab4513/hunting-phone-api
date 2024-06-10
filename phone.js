
const loadPhone = async (searchText) => {
    try {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
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
    // Step 1 get access to id
    const phoneContainer = document.getElementById('phone-container');
    //  Clear phone container cards before adding new cards
    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container');
    // display show all button if there is more than 12 phone
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    // if you want to just show 12 phone
    phones = phones.slice(0, 12)



    phones.forEach(phone => {
        // console.log(phone);


        // second step create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card  bg-gray-100 shadow-xl p-4`;
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
    });
    // hide loading spinner
    toggleLoadingSpinner(false);
}
// handle search button
const handleSearch = () => {
    toggleLoadingSpinner(true);
    // access search field with id
    const searchField = document.getElementById('search-field');
    // access the info from search field
    const searchText = searchField.value;
    loadPhone(searchText);

}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}
// loadPhone();
