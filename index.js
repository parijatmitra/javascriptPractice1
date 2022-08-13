console.log('Hi');


// let myBtn = document.querySelector('.myBtn');
// let content = document.querySelector('.content');
// let data1;
// function getData(){
//     url = 'https://api.github.com/users';
//     fetch(url).then((response) => {
//        return response.json();

//     }).then((data) => {
//         console.log(data);

//     }).catch(() => {

//     })
//Go Champ Parijat Mitra
// }

// function postData(){
//     url = 'https://jsonplaceholder.typicode.com/posts';
//     data1 = {
//         "userId": 1455667,
//         "id": 62,
//         "title": "beatae enim quia vel",
//         "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio"
//       };
//     params = {
//         method: 'post', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data1)
//     }
//     fetch(url, params).then((response) => {
//        return response.json();
//     }).then((data) => {
//         console.log(data);
//     }).catch(() => {

//     })
// }

// postData();

// // data1.forEach(element => {
// //     console.log(element.login)
// // });





// let a = 'Parijat Mita';
// a = undefined;
// if(a !== undefined){
//     throw new Error('This is not undefined');
// } else {
//     console.log('Unidefined')
// }
// try {
//    function1();
// } catch (error) {
//     console.log(error);
//     console.error(error.message);
// } finally {
//     console.log('Go')
// }
let url = 'https://api.github.com/users';
let printArea = document.querySelector('#content');
console.log(printArea);
let fetchBtn = document.querySelector('#fetch');
let clearBtn = document.querySelector('#myBtn');
let spinner = document.querySelector('#spin');
console.log(spinner);
fetchBtn.addEventListener('click', () => {
    takeData();
})

let showTitleArray = [];
clearBtn.addEventListener('click', () => {
    spinner.style.display = "block";
    printArea.innerHTML = ``;
    showTitleArray = [];
    localStorage.removeItem('title');
    setTimeout(() => {
        spinner.style.display = "none";
    }, 500);
   
})

showTitle();

function takeData() {
    spinner.style.display = "block";
    fetch(url).then((response) => {
        
        return response.json();
    }).then((data) => {
        populateData(data);
       
    }).catch((error) => {
        console.log(error);
    })
    setTimeout(() => {
        spinner.style.display = "none";
    }, 1000);
}

function showTitle() {
    let data1 = localStorage.getItem('title');
    if (!data1) {
        showTitleArray = [];
    } else {
        showTitleArray = JSON.parse(data1);
    }
    if(showTitleArray.length > 0){
    let html = `<ul class="list-group">`;
    showTitleArray.forEach(element => {
        html += `<li class="list-group-item">${element.login}</li>`
    });
    html += `</ul>`
    printArea.innerHTML = html;
}
}

function populateData(data) {
    if (!data) {
        return;
    }

    localStorage.setItem('title', JSON.stringify(data));
    showTitle();
}





