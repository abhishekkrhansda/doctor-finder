

const doctors = require('../Test/testDoctor'); // Import your doctors data

const getAllUniqueCities = () => {
    const cities = doctors.map(doctor => doctor.city);
    return [...new Set(cities)];
};

module.exports=getAllUniqueCities;
