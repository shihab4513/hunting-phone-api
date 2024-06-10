const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];
console.log(dreamGirl[0].sokina.contactInfo[1].instagram);

// Can you get the phones that doesn't cost 500 ? Which one is correct?

const phones = [
    { name: "sony", price: 500 },
    { name: "apple", price: 700 },
    { name: "sony", price: 700 },
];
const x = phones.filter((phone) => phone.price != 500);
console.log(x);
// we can filter object as well
const scores = { Alice: 85, Bob: 92, Carol: 78 };
const passedScores = Object.keys(scores).filter(name => scores[name] >= 80);
console.log(passedScores);
// Result: ["Alice", "Bob"]
