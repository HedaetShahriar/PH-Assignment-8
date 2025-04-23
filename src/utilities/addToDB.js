const getStoredAppointments = () => {
    const storedAppointments = localStorage.getItem('appointmentList');
    if (storedAppointments) {
        const storedData = JSON.parse(storedAppointments);
        return storedData;
    } else {
        return [];
    }
};

const addToDB = (id) => {
    const storedAppointments = getStoredAppointments();
    if (storedAppointments.includes(id)) {
        return true;
    } else {
        storedAppointments.push(id);
        localStorage.setItem('appointmentList', JSON.stringify(storedAppointments));
        return false;
    }
};

const removeFromDB = (id) => {
    const storedAppointments = getStoredAppointments();
    const ConvertedIDs = storedAppointments.map(appointment => parseInt(appointment));
    if (!ConvertedIDs.includes(id)) {
        return;
    }
    ConvertedIDs.splice(ConvertedIDs.indexOf(id), 1);
    localStorage.setItem('appointmentList', JSON.stringify(ConvertedIDs));
};

export { addToDB, getStoredAppointments, removeFromDB };
