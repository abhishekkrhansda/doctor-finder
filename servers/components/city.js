const Doctor = require('../Schema/doctor');

const getAllUniqueCities = async () => {
    const doctors = await Doctor.find().select('city -_id');
    const cities = doctors.map(doctor => doctor.city);
    return [...new Set(cities)];
};

module.exports = getAllUniqueCities;
