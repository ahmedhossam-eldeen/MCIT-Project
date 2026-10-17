const container = document.getElementById('eventsContainer');

function loadEvents() {
    const events = EventsStore.getAll();
    container.innerHTML = '';

    if (events.length === 0) {
        const p = document.createElement('p');
        p.className = 'empty';
        p.textContent = 'No events yet';
        container.appendChild(p);
        return;
    }

    events.forEach((ev) => {
        const card = document.createElement('article');
        card.className = 'event-card';

        const img = document.createElement('img');
        img.src = ev.image;
        img.alt = ev.name;

        const badge = document.createElement('span');
        badge.className = 'badge ' + ev.type;
        badge.textContent = ev.type === 'current' ? 'Current' : 'Upcoming';

        const title = document.createElement('h3');
        title.textContent = ev.name;

        const caption = document.createElement('p');
        caption.textContent = ev.caption;

        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'delete-btn';
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => {
            if (!confirm('متأكد إنك عايز تحذف الحدث ده؟ هيتشال من كل الصفحات.')) return;
            EventsStore.remove(ev.id);
            loadEvents();
        });

        card.appendChild(img);
        card.appendChild(badge);
        card.appendChild(title);
        card.appendChild(caption);
        card.appendChild(delBtn);
        container.appendChild(card);
    });
}

loadEvents();