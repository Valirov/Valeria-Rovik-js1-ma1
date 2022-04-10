
// Question 1. 

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


const cat = {
    complain() {
        console.log("Meow!");
    }
};

cat.complain();



// Question 2. 

const heading = document.querySelector("h3");
heading.innerText = 'Updated Heading';


// Question 3. 

heading.style.fontSize = "2rem";


// Question 4. 

heading.classList.add = "subheading";


// Question 5. 

var paragraphs = document.querySelectorAll("p");

for (var i = 0; i < paragraphs.length; i++)

document.querySelectorAll("p").forEach(paragraphs => paragraphs.style.color = "red");



// Question 6. 

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>NEW PARAGRAPH</p>";

resultsContainer.style.backgroundColor = "yellow";



// Question 7. 

function logCatNames(list) {
    for (var i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

logCatNames(cats);


// Question 8. 

function createCats(cats) {
    const catContainer = document.querySelector(".cat-container");

    for (var i = 0; i < cats.length; i++) {
        const singleCat = document.createElement("div");
        let catName = cat.name; 
        let catAge = cats.age ? cats.age : "Age unknown";
        singleCat.innerHTML = `
        <h5>Cat name: ${catName}</h5>
        <p>Cat age: ${catAge}</p>`;

        catContainer.innerHTML = catContainer.innerHTML += singleCat;
    }
}

createCats(cats);

// I don't know what's wrong, i tried. Happy Easter!
