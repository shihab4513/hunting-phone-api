
const loadPhone = async () => {
    try {
        const url = 'https://openapi.programming-hero.com/api/phones?search=iphone';
        const res = await fetch(url);
        const data = await res.json();
        const phones = data.data;
        console.log(phones);
    } catch (error) {
        console.error('data load error ', error);
    }
}

loadPhone();
