// Step 1: Define an asynchronous function to fetch and display data
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK (status 200–299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert response to JSON
        const users = await response.json();

        // Step 5: Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create a <ul> to hold user names
        const userList = document.createElement('ul');

        // Step 7: Loop through users and create <li> for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 10: Run function when DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
