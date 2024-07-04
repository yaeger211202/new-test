document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        genre: document.getElementById('genre').value,
        isbn: document.getElementById('isbn').value,
        publishedYear: document.getElementById('publishedYear').value,
        copiesAvailable: document.getElementById('copiesAvailable').value
    };

    console.log('Submitting book:', book); // Log the book data

    fetch('/add-book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success message
        console.log('Response from server:', data); // Log server response
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors
    });
});


document.getElementById('member-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const member = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value
    };

    console.log('Submitting member:', member); // Log the member data

    fetch('/register-member', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(member)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        alert(data); // Show success message
        console.log('Response from server:', data); // Log server response
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors
    });
});
