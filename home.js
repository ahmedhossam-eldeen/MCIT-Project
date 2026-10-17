EventsStore.render(
    document.getElementById('currentContainer'),
    EventsStore.getByType('current'),
    'No current events yet'
);

EventsStore.render(
    document.getElementById('upcomingContainer'),
    EventsStore.getByType('upcoming'),
    'No upcoming events yet'
);