mapboxgl.accessToken = 'pk.eyJ1Ijoia2FrYXJzdWhhaWwiLCJhIjoiY2tpaWxsa205MjhjbDJ5cGVhaWRkaWI1MCJ9.9wW7P75jPB9RE7xLfdZEaA';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([-2.24, 53.48]); // Default location if geolocation fails
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
    });

    // Add map controls
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "bottom-right");

    // Add directions control
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });
    map.addControl(directions, "top-left");

    // Crime location data
    const crimeData = [
        { state_name: "Madhya Pradesh", city: "Bhopal", crime_location: "Habibganj Railway Station", crime: "Theft and Street Crime", coordinates: [77.4482, 23.2599] },
    { state_name: "Madhya Pradesh", city: "Bhopal", crime_location: "Koh-e-Fiza Road", crime: "Drug-related Crimes", coordinates: [77.4872, 23.2132] },
    { state_name: "Madhya Pradesh", city: "Indore", crime_location: "Rajwada Market", crime: "Pickpocketing and Theft", coordinates: [75.8661, 22.7196] },
    { state_name: "Madhya Pradesh", city: "Indore", crime_location: "Sarwate Bus Stand", crime: "Robbery", coordinates: [75.8503, 22.7178] },
    { state_name: "Madhya Pradesh", city: "Gwalior", crime_location: "Madhav Rao Scindia Bus Stand", crime: "Snatching", coordinates: [78.1642, 26.2183] },
    { state_name: "Madhya Pradesh", city: "Jabalpur", crime_location: "Gorakhpur Market", crime: "Mugging", coordinates: [79.935, 23.1815] }, // New city
    { state_name: "Maharashtra", city: "Mumbai", crime_location: "Crawford Market", crime: "Pickpocketing", coordinates: [72.8347, 18.9381] },
    { state_name: "Maharashtra", city: "Mumbai", crime_location: "Andheri Railway Station", crime: "Theft", coordinates: [72.8400, 19.1192] },
    { state_name: "Maharashtra", city: "Pune", crime_location: "Deccan Gymkhana", crime: "Robbery", coordinates: [73.8478, 18.5203] },
    { state_name: "Maharashtra", city: "Pune", crime_location: "Swargate Bus Stand", crime: "Mugging", coordinates: [73.8594, 18.5071] },
    { state_name: "Maharashtra", city: "Nagpur", crime_location: "Sitabuldi Market", crime: "Street Crime", coordinates: [79.0831, 21.1458] },

    { state_name: "Uttar Pradesh", city: "Lucknow", crime_location: "Charbagh Railway Station", crime: "Theft", coordinates: [80.9462, 26.8560] },
    { state_name: "Uttar Pradesh", city: "Lucknow", crime_location: "Aminabad Market", crime: "Street Crime", coordinates: [80.9433, 26.8370] },
    { state_name: "Uttar Pradesh", city: "Kanpur", crime_location: "Bada Chauraha", crime: "Robbery and Mugging", coordinates: [80.3460, 26.4489] },
    { state_name: "Uttar Pradesh", city: "Kanpur", crime_location: "Railway Road", crime: "Snatching", coordinates: [80.3498, 26.4469] },
    { state_name: "Uttar Pradesh", city: "Varanasi", crime_location: "Godowlia Market", crime: "Pickpocketing", coordinates: [82.9739, 25.2820] },

    { state_name: "Delhi", city: "Delhi", crime_location: "Connaught Place", crime: "Palika Bazaar", crime: "Pickpocketing and Theft", coordinates: [77.2185, 28.6305] },
    { state_name: "Delhi", city: "Chandni Chowk", crime_location: "Chawri Bazaar", crime: "Snatching and Theft", coordinates: [77.2289, 28.6556] },
    { state_name: "Delhi", city: "Karol Bagh", crime_location: "Ajmal Khan Road", crime: "Robbery", coordinates: [77.1885, 28.6507] },

    { state_name: "Rajasthan", city: "Jaipur", crime_location: "Sindhi Camp Bus Stand", crime: "Theft and Robbery", coordinates: [75.7986, 26.9210] },
    { state_name: "Rajasthan", city: "Jaipur", crime_location: "Bapu Bazaar", crime: "Pickpocketing", coordinates: [75.7919, 26.9172] },
    { state_name: "Rajasthan", city: "Udaipur", crime_location: "Fateh Sagar Lake", crime: "Mugging", coordinates: [73.7079, 24.5931] },

    { state_name: "Karnataka", city: "Bengaluru", crime_location: "Majestic Bus Stand", crime: "Theft and Snatching", coordinates: [77.5733, 12.9731] },
    { state_name: "Karnataka", city: "Bengaluru", crime_location: "KR Market", crime: "Pickpocketing", coordinates: [77.5759, 12.9651] },
    { state_name: "Karnataka", city: "Mysuru", crime_location: "Devaraja Market", crime: "Theft", coordinates: [76.6530, 12.2958] },
    { state_name: "Karnataka", city: "Mysuru", crime_location: "Chamundipuram", crime: "Mugging", coordinates: [76.6504, 12.3046] },
    { state_name: "Karnataka", city: "Mangalore", crime_location: "Central Market", crime: "Street Crime", coordinates: [74.8421, 12.8745] },

    { state_name: "Tamil Nadu", city: "Chennai", crime_location: "Parry's Corner", crime: "Theft", coordinates: [80.2773, 13.0846] },
    { state_name: "Tamil Nadu", city: "Chennai", crime_location: "T Nagar", crime: "Pickpocketing and Robbery", coordinates: [80.2265, 13.0428] },
    { state_name: "Tamil Nadu", city: "Coimbatore", crime_location: "Gandhipuram Bus Stand", crime: "Mugging", coordinates: [76.9471, 11.0168] },
    { state_name: "Tamil Nadu", city: "Coimbatore", crime_location: "RS Puram", crime: "Theft", coordinates: [76.9581, 11.0231] },
    { state_name: "Tamil Nadu", city: "Madurai", crime_location: "Meenakshi Temple", crime: "Pickpocketing", coordinates: [78.1198, 9.9197] },

    { state_name: "West Bengal", city: "Kolkata", crime_location: "Sealdah Railway Station", crime: "Theft and Pickpocketing", coordinates: [88.3643, 22.5769] },
    { state_name: "West Bengal", city: "Kolkata", crime_location: "New Market", crime: "Robbery", coordinates: [88.3645, 22.5742] },
    { state_name: "West Bengal", city: "Siliguri", crime_location: "Hill Cart Road", crime: "Theft and Snatching", coordinates: [88.4240, 26.7271] },
    { state_name: "West Bengal", city: "Siliguri", crime_location: "Darjeeling More", crime: "Robbery", coordinates: [88.4312, 26.7286] },
    { state_name: "West Bengal", city: "Asansol", crime_location: "Burnpur Road", crime: "Mugging", coordinates: [86.9932, 23.6839] },
        { state_name: "Gujarat", city: "Ahmedabad", crime_location: "Manek Chowk", crime: "Pickpocketing", coordinates: [72.5784, 23.0339] },
        { state_name: "Gujarat", city: "Ahmedabad", crime_location: "Kalupur Railway Station", crime: "Theft", coordinates: [72.6402, 23.0192] },
        { state_name: "Gujarat", city: "Surat", crime_location: "Sarthana Nature Park", crime: "Mugging", coordinates: [72.8454, 21.1844] },
        { state_name: "Gujarat", city: "Surat", crime_location: "Textile Market", crime: "Robbery", coordinates: [72.8272, 21.1702] },
        { state_name: "Bihar", city: "Patna", crime_location: "Patna Junction", crime: "Theft and Street Crime", coordinates: [85.1240, 25.6103] },
        { state_name: "Bihar", city: "Patna", crime_location: "Gandhi Maidan", crime: "Robbery", coordinates: [85.1414, 25.6132] },
        { state_name: "Bihar", city: "Gaya", crime_location: "Gaya Junction", crime: "Theft and Snatching", coordinates: [84.9864, 24.7952] },
        { state_name: "Bihar", city: "Gaya", crime_location: "Bodh Gaya", crime: "Mugging", coordinates: [84.9914, 24.6964] },
        { state_name: "Punjab", city: "Ludhiana", crime_location: "Clock Tower Market", crime: "Theft and Snatching", coordinates: [75.8485, 30.9010] },
        { state_name: "Punjab", city: "Ludhiana", crime_location: "Railway Station", crime: "Pickpocketing", coordinates: [75.8431, 30.8971] },
        { state_name: "Punjab", city: "Amritsar", crime_location: "Hall Bazaar", crime: "Theft and Mugging", coordinates: [74.9482, 31.6205] },
        { state_name: "Punjab", city: "Amritsar", crime_location: "Golden Temple Entrance", crime: "Robbery", coordinates: [74.8822, 31.6202] },
        { state_name: "Haryana", city: "Gurugram", crime_location: "Cyber City", crime: "Robbery and Mugging", coordinates: [77.0845, 28.4668] },
        { state_name: "Haryana", city: "Gurugram", crime_location: "Sikanderpur Metro Station", crime: "Snatching", coordinates: [77.0890, 28.4696] },
        { state_name: "Haryana", city: "Faridabad", crime_location: "Sector 15 Market", crime: "Theft", coordinates: [77.3146, 28.4081] },
        { state_name: "Haryana", city: "Faridabad", crime_location: "Badkhal Lake", crime: "Street Crime", coordinates: [77.3024, 28.4103] },
        { state_name: "Telangana", city: "Hyderabad", crime_location: "Abids", crime: "Theft and Robbery", coordinates: [78.4778, 17.3850] },
        { state_name: "Telangana", city: "Hyderabad", crime_location: "Charminar", crime: "Street Crime", coordinates: [78.4744, 17.3616] },
        { state_name: "Telangana", city: "Warangal", crime_location: "Kazipet", crime: "Mugging", coordinates: [79.5945, 17.9785] },
        { state_name: "Telangana", city: "Warangal", crime_location: "Warangal Fort", crime: "Theft", coordinates: [79.5939, 17.9787] },
        { state_name: "Uttarakhand", city: "Dehradun", crime_location: "Paltan Bazaar", crime: "Pickpocketing", coordinates: [78.4474, 30.3165] },
        { state_name: "Uttarakhand", city: "Dehradun", crime_location: "Mahatma Gandhi Park", crime: "Theft", coordinates: [78.4505, 30.3180] },
        { state_name: "Uttarakhand", city: "Haridwar", crime_location: "Har Ki Pauri", crime: "Robbery", coordinates: [78.1642, 29.9442] },
        { state_name: "Uttarakhand", city: "Haridwar", crime_location: "Mansa Devi Temple", crime: "Street Crime", coordinates: [78.1674, 29.9492] },
        { state_name: "Assam", city: "Guwahati", crime_location: "Paltan Bazaar", crime: "Theft and Snatching", coordinates: [91.5818, 26.1584] },
        { state_name: "Assam", city: "Guwahati", crime_location: "Bhangagarh", crime: "Robbery", coordinates: [91.5985, 26.1374] },
        { state_name: "Assam", city: "Dibrugarh", crime_location: "Dibrugarh Railway Station", crime: "Pickpocketing", coordinates: [94.6280, 27.4859] },
        { state_name: "Assam", city: "Dibrugarh", crime_location: "Garamur", crime: "Street Crime", coordinates: [94.6154, 27.4756] },
        { state_name: "Odisha", city: "Bhubaneswar", crime_location: "Lingaraj Temple", crime: "Pickpocketing", coordinates: [85.8358, 20.2302] },
        { state_name: "Odisha", city: "Bhubaneswar", crime_location: "Khandagiri Caves", crime: "Theft", coordinates: [85.8213, 20.2523] },
        { state_name: "Odisha", city: "Cuttack", crime_location: "Cuttack Railway Station", crime: "Robbery", coordinates: [85.8315, 20.4620] },
        { state_name: "Odisha", city: "Cuttack", crime_location: "Badambadi", crime: "Street Crime", coordinates: [85.8283, 20.4578] },
        { state_name: "Himachal Pradesh", city: "Shimla", crime_location: "Mall Road", crime: "Theft", coordinates: [77.1666, 31.1048] },
        { state_name: "Himachal Pradesh", city: "Shimla", crime_location: "The Ridge", crime: "Pickpocketing", coordinates: [77.1678, 31.1040] },
        { state_name: "Himachal Pradesh", city: "Dharamshala", crime_location: "McLeod Ganj", crime: "Robbery", coordinates: [76.3242, 32.2219] },
        { state_name: "Himachal Pradesh", city: "Dharamshala", crime_location: "Dharamkot", crime: "Street Crime", coordinates: [76.3236, 32.2236] },
        { state_name: "Chhattisgarh", city: "Raipur", crime_location: "Raipur Railway Station", crime: "Theft", coordinates: [81.6340, 21.2515] },
        { state_name: "Chhattisgarh", city: "Raipur", crime_location: "Dhamtari Road", crime: "Robbery", coordinates: [81.6356, 21.2570] },
        { state_name: "Chhattisgarh", city: "Bilaspur", crime_location: "Bilaspur Railway Station", crime: "Pickpocketing", coordinates: [82.1488, 22.0781] },
        { state_name: "Chhattisgarh", city: "Bilaspur", crime_location: "Sadar Bazar", crime: "Street Crime", coordinates: [82.1453, 22.0806] },
        { state_name: "Mizoram", city: "Aizawl", crime_location: "Aizawl Sadar", crime: "Theft", coordinates: [92.7272, 23.1645] },
        { state_name: "Mizoram", city: "Aizawl", crime_location: "Chawnpui", crime: "Robbery", coordinates: [92.7390, 23.1604] },
        { state_name: "Nagaland", city: "Kohima", crime_location: "Kohima Town", crime: "Street Crime", coordinates: [94.1125, 25.6743] },
        { state_name: "Nagaland", city: "Kohima", crime_location: "Kohima War Cemetery", crime: "Theft", coordinates: [94.1152, 25.6867] },
        { state_name: "Arunachal Pradesh", city: "Itanagar", crime_location: "Itanagar Capital Complex", crime: "Theft", coordinates: [78.1642, 27.1006] },
        { state_name: "Arunachal Pradesh", city: "Itanagar", crime_location: "IG Park", crime: "Pickpocketing", coordinates: [78.1743, 27.1137] },
        { state_name: "Manipur", city: "Imphal", crime_location: "Imphal Palace", crime: "Robbery", coordinates: [93.9443, 24.8172] },
        { state_name: "Manipur", city: "Imphal", crime_location: "Khoyathong", crime: "Street Crime", coordinates: [93.9340, 24.8185] },
        { state_name: "Tripura", city: "Agartala", crime_location: "Agartala Railway Station", crime: "Theft", coordinates: [91.2867, 23.8455] },
        { state_name: "Tripura", city: "Agartala", crime_location: "City Centre", crime: "Pickpocketing", coordinates: [91.2836, 23.8341] },
        { state_name: "Sikkim", city: "Gangtok", crime_location: "MG Marg", crime: "Theft", coordinates: [88.6135, 27.3289] },
        { state_name: "Sikkim", city: "Gangtok", crime_location: "Enchey Monastery", crime: "Robbery", coordinates: [88.6100, 27.3221] },
        { state_name: "Jammu and Kashmir", city: "Srinagar", crime_location: "Dal Lake", crime: "Theft", coordinates: [74.8808, 34.0908] },
        { state_name: "Jammu and Kashmir", city: "Srinagar", crime_location: "Lal Chowk", crime: "Pickpocketing", coordinates: [74.8774, 34.0902] },
        { state_name: "Uttarakhand", city: "Rudraprayag", crime_location: "Rudraprayag Town", crime: "Theft", coordinates: [78.9478, 30.3219] },
        { state_name: "Uttarakhand", city: "Rudraprayag", crime_location: "Kedarnath Temple", crime: "Street Crime", coordinates: [79.0635, 30.7331] },
        { state_name: "Puducherry", city: "Puducherry", crime_location: "Promenade Beach", crime: "Theft", coordinates: [79.8264, 11.9331] },
        { state_name: "Puducherry", city: "Puducherry", crime_location: "Auroville", crime: "Street Crime", coordinates: [79.8052, 11.9751] },
        { state_name: "Lakshadweep", city: "Kavaratti", crime_location: "Kavaratti Beach", crime: "Theft", coordinates: [72.6292, 10.5691] },
        { state_name: "Lakshadweep", city: "Kavaratti", crime_location: "Kavaratti Harbour", crime: "Robbery", coordinates: [72.6280, 10.5660] },
        { state_name: "Manipur", city: "Imphal", crime_location: "Khoyathong", crime: "Street Crime", coordinates: [93.9452, 24.8136] },
        { state_name: "Tripura", city: "Agartala", crime_location: "Agartala Railway Station", crime: "Theft", coordinates: [91.2865, 23.8438] },
        { state_name: "Tripura", city: "Agartala", crime_location: "Ujjayanta Palace", crime: "Robbery", coordinates: [91.2870, 23.8462] },
        { state_name: "Sikkim", city: "Gangtok", crime_location: "MG Marg", crime: "Pickpocketing", coordinates: [88.6130, 27.3304] },
        { state_name: "Sikkim", city: "Gangtok", crime_location: "Enchey Monastery", crime: "Street Crime", coordinates: [88.6185, 27.3308] },
        { state_name: "Goa", city: "Panaji", crime_location: "Miramar Beach", crime: "Theft", coordinates: [73.7529, 15.5524] },
        { state_name: "Goa", city: "Margao", crime_location: "Margao Railway Station", crime: "Robbery", coordinates: [73.9215, 15.2993] },
        { state_name: "Jammu and Kashmir", city: "Srinagar", crime_location: "Dal Lake", crime: "Theft", coordinates: [74.8652, 34.0828] },
        { state_name: "Jammu and Kashmir", city: "Srinagar", crime_location: "Lal Chowk", crime: "Pickpocketing", coordinates: [74.8532, 34.0902] },
        { state_name: "Ladakh", city: "Leh", crime_location: "Leh Palace", crime: "Robbery", coordinates: [77.5869, 34.1646] },
        { state_name: "Ladakh", city: "Leh", crime_location: "Pangong Lake", crime: "Street Crime", coordinates: [78.9194, 33.7583] },
        { state_name: "Andaman and Nicobar Islands", city: "Port Blair", crime_location: "Cellular Jail", crime: "Theft", coordinates: [92.7264, 11.6233] },
        { state_name: "Andaman and Nicobar Islands", city: "Port Blair", crime_location: "Aberdeen Bazar", crime: "Robbery", coordinates: [92.7241, 11.6177] },
        { state_name: "Dadra and Nagar Haveli and Daman and Diu", city: "Daman", crime_location: "Devka Beach", crime: "Pickpocketing", coordinates: [72.8313, 20.3972] },
        { state_name: "Dadra and Nagar Haveli and Daman and Diu", city: "Diu", crime_location: "Nagoa Beach", crime: "Street Crime", coordinates: [70.9887, 20.7154] },
    ];

    // Loop through crime data and add markers
    crimeData.forEach(function(crime) {
        const marker = new mapboxgl.Marker()
            .setLngLat(crime.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`
                <h3>${crime.crime_location}</h3>
                <p>${crime.crime}</p>
                <p><strong>City:</strong> ${crime.city}</p>
                <p><strong>State:</strong> ${crime.state_name}</p>
            `)) // Popup with crime details
            .addTo(map);
    });
}