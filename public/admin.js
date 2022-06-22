async function admin() {

const bookListResponce = await fetch('http://localhost:3001/listBooks');
const bookList = await bookListResponce.json();

const ul = document.createElement('ul');

bookList.forEach(book => {
    const li = document.createElement('li')
    li.textContent = book.title;

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = book.quantity;
    li.append(textInput)

    const button = document.createElement('input');
    button.type = 'button';
    button.value = 'Save;'
    button.addEventListener('click', async ()=> {
        await fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: textInput.value
            }),
        });
    });
    li.append(button);
    ul.append(li);

});

const root = document.querySelector('#root');
root.append(ul);

}
// Your Code Here
admin();