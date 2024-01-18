const apiKey = "aollIRdSdbmA14pSPOt02vx4L4QWO53w";
const apiUrl = 'https://url-link-shortener.p.rapidapi.com/v1/links/new';
const formInput = document.querySelector("#form-input");
const shortenBtn = document.getElementById("form-btn");

async function shortenUrl(originalUrl) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'url-link-shortener.p.rapidapi.com',
            },
            body: JSON.stringify({
                originalUrl: originalUrl,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to shorten URL');
        }

        const data = await response.json();
        console.log(data);
        // Handle the shortened URL data here
    } catch (error) {
        console.error('Error:', error.message);
        // Handle error gracefully, show user-friendly message, etc.
    }
}

shortenBtn.addEventListener('click', () => {
    shortenUrl(formInput.value);
});
