const doctors=[
    
        
          {
            "name": "Dr. John Smith",
            "phone_number": "+1-234-567-8901",
            "experience": 15,
            "degree": "MBBS, MD",
            "opening_slot_time": "09:00 AM",
            "closing_slot_time": "05:00 PM",
            "type_of_doctor": "Cardiologist",
            "city": "Mumbai"
          },
          {
            "name": "Dr. Priya Mehta",
            "phone_number": "+1-234-567-8902",
            "experience": 10,
            "degree": "MBBS, MS",
            "opening_slot_time": "10:00 AM",
            "closing_slot_time": "06:00 PM",
            "type_of_doctor": "Orthopedic",
            "city": "Delhi"
          },
          {
            "name": "Dr. Ayesha Khan",
            "phone_number": "+1-234-567-8903",
            "experience": 8,
            "degree": "MBBS, DGO",
            "opening_slot_time": "11:00 AM",
            "closing_slot_time": "07:00 PM",
            "type_of_doctor": "Gynecologist",
            "city": "Bangalore"
          },
          {
            "name": "Dr. Arjun Rao",
            "phone_number": "+1-234-567-8904",
            "experience": 12,
            "degree": "MBBS, MD",
            "opening_slot_time": "08:00 AM",
            "closing_slot_time": "04:00 PM",
            "type_of_doctor": "Dermatologist",
            "city": "Chennai"
          },
          {
            "name": "Dr. Sameer Patel",
            "phone_number": "+1-234-567-8905",
            "experience": 5,
            "degree": "MBBS",
            "opening_slot_time": "09:30 AM",
            "closing_slot_time": "05:30 PM",
            "type_of_doctor": "General Physician",
            "city": "Kolkata"
          },
          {
            "name": "Dr. Rina Das",
            "phone_number": "+1-234-567-8906",
            "experience": 7,
            "degree": "BDS",
            "opening_slot_time": "10:00 AM",
            "closing_slot_time": "06:00 PM",
            "type_of_doctor": "Dentist",
            "city": "Hyderabad"
          },
          {
            "name": "Dr. Vinay Sharma",
            "phone_number": "+1-234-567-8907",
            "experience": 20,
            "degree": "MBBS, DM",
            "opening_slot_time": "07:00 AM",
            "closing_slot_time": "03:00 PM",
            "type_of_doctor": "Neurologist",
            "city": "Ahmedabad"
          },
          {
            "name": "Dr. Anita Desai",
            "phone_number": "+1-234-567-8908",
            "experience": 18,
            "degree": "MBBS, MS",
            "opening_slot_time": "09:00 AM",
            "closing_slot_time": "05:00 PM",
            "type_of_doctor": "Ophthalmologist",
            "city": "Pune"
          },
          {
            "name": "Dr. Rajesh Kapoor",
            "phone_number": "+1-234-567-8909",
            "experience": 11,
            "degree": "MBBS, MD",
            "opening_slot_time": "11:00 AM",
            "closing_slot_time": "07:00 PM",
            "type_of_doctor": "Gastroenterologist",
            "city": "Surat"
          },
          {
            "name": "Dr. Meera Singh",
            "phone_number": "+1-234-567-8910",
            "experience": 6,
            "degree": "MBBS",
            "opening_slot_time": "10:00 AM",
            "closing_slot_time": "06:00 PM",
            "type_of_doctor": "Pediatrician",
            "city": "Jaipur"
          },
          {
            "name": "Dr. Ramesh Nair",
            "phone_number": "+1-234-567-8911",
            "experience": 9,
            "degree": "MBBS, MD",
            "opening_slot_time": "09:00 AM",
            "closing_slot_time": "05:00 PM",
            "type_of_doctor": "Oncologist",
            "city": "Bhopal"
          },
          {
            "name": "Dr. Sangeeta Roy",
            "phone_number": "+1-234-567-8912",
            "experience": 14,
            "degree": "MBBS, MS",
            "opening_slot_time": "08:00 AM",
            "closing_slot_time": "04:00 PM",
            "type_of_doctor": "ENT Specialist",
            "city": "Lucknow"
          },
          {
            "name": "Dr. Vikram Khanna",
            "phone_number": "+1-234-567-8913",
            "experience": 13,
            "degree": "MBBS, MD",
            "opening_slot_time": "09:30 AM",
            "closing_slot_time": "05:30 PM",
            "type_of_doctor": "Pulmonologist",
            "city": "Patna"
          },
          {
            "name": "Dr. Neha Sharma",
            "phone_number": "+1-234-567-8914",
            "experience": 17,
            "degree": "MBBS, MS",
            "opening_slot_time": "07:30 AM",
            "closing_slot_time": "03:30 PM",
            "type_of_doctor": "Orthopedic",
            "city": "Kanpur"
          },
          {
            "name": "Dr. Alok Verma",
            "phone_number": "+1-234-567-8915",
            "experience": 10,
            "degree": "MBBS, MD",
            "opening_slot_time": "08:30 AM",
            "closing_slot_time": "04:30 PM",
            "type_of_doctor": "Dermatologist",
            "city": "Nagpur"
          },
          {
            "name": "Dr. Priya Gupta",
            "phone_number": "+1-234-567-8916",
            "experience": 4,
            "degree": "BAMS",
            "opening_slot_time": "11:00 AM",
            "closing_slot_time": "07:00 PM",
            "type_of_doctor": "Ayurvedic",
            "city": "Visakhapatnam"
          },
          {
            "name": "Dr. Rajiv Kumar",
            "phone_number": "+1-234-567-8917",
            "experience": 8,
            "degree": "BHMS",
            "opening_slot_time": "09:00 AM",
            "closing_slot_time": "05:00 PM",
            "type_of_doctor": "Homeopathic",
            "city": "Indore"
          },
          {
            "name": "Dr. Sunita Rao",
            "phone_number": "+1-234-567-8918",
            "experience": 16,
            "degree": "MBBS, MD",
            "opening_slot_time": "07:00 AM",
            "closing_slot_time": "03:00 PM",
            "type_of_doctor": "Psychiatrist",
            "city": "Coimbatore"
          },
          {
            "name": "Dr. Anil Thakur",
            "phone_number": "+1-234-567-8919",
            "experience": 12,
            "degree": "MBBS, MD",
            "opening_slot_time": "10:00 AM",
            "closing_slot_time": "06:00 PM",
            "type_of_doctor": "Endocrinologist",
            "city": "Chandigarh"
          },
          {
            "name": "Dr. Pooja Sinha",
            "phone_number": "+1-234-567-8920",
            "experience": 9,
            "degree": "MBBS",
            "opening_slot_time": "09:00 AM",
            "closing_slot_time": "05:00 PM",
            "type_of_doctor": "General Physician",
            "city": "Agra"
          }
      
]


function getDoctorsByCity(city) {
    return doctors.filter(doctor => doctor.city.toLowerCase() === city.toLowerCase());
  }
module.exports={getDoctorsByCity};