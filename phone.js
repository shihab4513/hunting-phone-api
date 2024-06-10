
const loadPhone = async (searchText, isShowAll) => {
    try {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        const phones = data.data;
        // console.log(phones);
        displayPhones(phones, isShowAll);
    } catch (error) {
        console.error('data load error ', error);
    }
}

const displayPhones = (phones, isShowAll) => {
    //    console.log(phones);
    // Step 1 get access to id
    const phoneContainer = document.getElementById('phone-container');
    //  Clear phone container cards before adding new cards
    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container');
    // display show all button if there is more than 12 phone and isShowAll is false..      if isShowAll is true then all will be shown and show all button will be removed
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    // if you want to just show 12 phone if  isShowAll is false
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }




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
                        <div class="card-actions justify-center">
                            <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
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
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    // access search field with id
    const searchField = document.getElementById('search-field');
    // access the info from search field
    const searchText = searchField.value;
    loadPhone(searchText, isShowAll);

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

// handle show all 
const handleShowAll = () => {
    handleSearch(true);
};
//handle show details

const handleShowDetails = async (id) => {

    // load individual phone data
    // const url = ;
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data);
    const phone = data.data;
    showPhoneDetails(phone);
}

const showPhoneDetails = (phone) => {
    // display the modal
    console.log(phone);
    const phoneName = document.getElementById('showDetails-phone-name');
    phoneName.innerText = phone.name;
    const showDetailsContainer = document.getElementById('show-details-container');
    showDetailsContainer.innerHTML = `
            <img src="${phone.image}" alt="" srcset="">    
            <p class="text-[1.25rem] font-normal text-[#706F6F]"><span class="font-semibold text-[#403F3F]">Storage : </span>${phone?.mainFeatures?.storage}  </p>
            <p class="text-[1.25rem] font-normal text-[#706F6F]"><span class="font-semibold text-[#403F3F]">Display Size : </span>${phone?.mainFeatures?.displaySize}  </p>
             <p class="text-[1.25rem] font-normal text-[#706F6F]"><span class="font-semibold text-[#403F3F]">Chipset : </span>${phone?.mainFeatures?.chipSet}  </p>
              <p class="text-[1.25rem] font-normal text-[#706F6F]"><span class="font-semibold text-[#403F3F]">Memory : </span>${phone?.mainFeatures?.memory}  </p>
               <p class="text-[1.25rem] font-normal text-[#706F6F]"><span class="font-semibold text-[#403F3F]">Slug : </span>${phone?.slug}  </p>
                <p class="text-[1.25rem] font-normal text-[#706F6F]"><span class="font-semibold text-[#403F3F]">Release data : </span>${phone?.releaseDate}  </p>
                 <p class="text-[1.25rem] font-normal text-[#706F6F]"><span class="font-semibold text-[#403F3F]">Brand : </span>${phone?.brand}  </p>
                
                   <p class="text-[1.25rem] font-normal text-[#706F6F]"><span class="font-semibold text-[#403F3F]">GPS : </span>${phone?.others?.GPS}  </p>
    `;


    show_details_modal.showModal();

}

// loadPhone();



































