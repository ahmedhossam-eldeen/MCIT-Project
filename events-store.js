const EventsStore = {
    KEY: 'mcit_events',

    getAll() {
        try {
            return JSON.parse(localStorage.getItem(this.KEY)) || [];
        } catch (e) {
            return [];
        }
    },

    getByType(type) {
        return this.getAll().filter((ev) => ev.type === type);
    },

    add(ev) {
        const list = this.getAll();
        list.push({ id: Date.now().toString(), ...ev });
        localStorage.setItem(this.KEY, JSON.stringify(list));
    },

    remove(id) {
        const list = this.getAll().filter((ev) => ev.id !== id);
        localStorage.setItem(this.KEY, JSON.stringify(list));
    },

    // يحوّل الصورة لنص ويصغّرها عشان localStorage مساحته صغيرة
    fileToDataURL(file, maxSize = 800) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width * scale;
                    canvas.height = img.height * scale;
                    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL('image/jpeg', 0.8));
                };
                img.onerror = reject;
                img.src = reader.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    },

    // يعرض الأحداث في أي صفحة
    render(container, events, emptyText = 'No events yet') {
        container.innerHTML = '';

        if (events.length === 0) {
            const p = document.createElement('p');
            p.className = 'empty';
            p.textContent = emptyText;
            container.appendChild(p);
            return;
        }

        events.forEach((ev) => {
            const card = document.createElement('article');
            card.className = 'event-card';

            const img = document.createElement('img');
            img.src = ev.image;
            img.alt = ev.name;

            const title = document.createElement('h3');
            title.textContent = ev.name;

            const caption = document.createElement('p');
            caption.textContent = ev.caption;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(caption);
            container.appendChild(card);
        });
    }
};