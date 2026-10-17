// ---------- عداد الأحداث ----------
const currentCount = document.getElementById('currentCount');
const upcomingCount = document.getElementById('upcomingCount');

currentCount.textContent = EventsStore.getByType('current').length;
upcomingCount.textContent = EventsStore.getByType('upcoming').length;


