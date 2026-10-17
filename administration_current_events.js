const form = document.getElementById('eventForm');
const msg = document.getElementById('msg');

function showMessage(text, type) {
    msg.textContent = text;
    msg.className = type;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const file = document.getElementById('image').files[0];
        const image = await EventsStore.fileToDataURL(file);

        EventsStore.add({
            type: 'current',   // بيظهر في Home وفي Events.html
            name: document.getElementById('name').value.trim(),
            caption: document.getElementById('caption').value.trim(),
            image: image
        });

        showMessage('Done');
        form.reset();
    } catch (err) {
        showMessage('Failed');
    }
});