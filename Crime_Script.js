

const data = {

    "gujarat": {
        "ahmedabad": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
        "surat": { total_crime: "9-10%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
        "rajkot": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "2-3%", stalking: "2-3%" },
        "vadodara": { total_crime: "9-10%", rape: "4-5%", domestic_violence: "6-7%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
        "gandhinagar": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
        "bhavnagar": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
        "navsari": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
        "junagadh": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
        "patan": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
        "mehsana": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
        "surendranagar": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
        "dahod": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
        "bharuch": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
      },
         "maharashtra": {
  "mumbai": { total_crime: "12-14%", rape: "5-6%", domestic_violence: "8-9%", assault: "7-8%", harassment: "6-7%", stalking: "4-5%" },
  "pune": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
  "nagpur": { total_crime: "9-10%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "nashik": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "3-4%", stalking: "2-3%" },
  "aurangabad": { total_crime: "7-8%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "solapur": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
  "thane": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "jalna": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "akola": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "dhule": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "sangli": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "ratnagiri": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},
"haryana": {
  "gurugram": { total_crime: "10-12%", rape: "5-6%", domestic_violence: "7-8%", assault: "6-7%", harassment: "5-6%", stalking: "3-4%" },
  "faridabad": { total_crime: "9-10%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "2-3%" },
  "panipat": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "ambala": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "sonipat": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "hisar": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "karnal": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "rewari": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "jhajjar": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "fatehabad": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "bhiwani": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},
"assam": {
  "guwahati": { total_crime: "12-14%", rape: "5-6%", domestic_violence: "8-9%", assault: "7-8%", harassment: "6-7%", stalking: "4-5%" },
  "dibrugarh": { total_crime: "9-10%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
  "nagaon": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "jorhat": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "3-4%", stalking: "2-3%" },
  "silchar": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "tezpur": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "haflong": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "baksa": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "bongaigaon": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "goalpara": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},
"punjab": {
  "chandigarh": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "7-8%", assault: "6-7%", harassment: "5-6%", stalking: "3-4%" },
  "ludhiana": { total_crime: "9-10%", rape: "3-4%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "2-3%" },
  "amritsar": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "jalandhar": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "patiala": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "bathinda": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "moga": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "faridkot": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "barnala": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "kapurthala": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},

"bihar": {
  "patna": { total_crime: "12-14%", rape: "5-6%", domestic_violence: "8-9%", assault: "7-8%", harassment: "6-7%", stalking: "4-5%" },
  "gaya": { total_crime: "9-10%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
  "bhagalpur": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "darbhanga": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "3-4%", stalking: "2-3%" },
  "muzzafarpur": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "arrah": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "purnea": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "begusarai": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "sitamarhi": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "kishanganj": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "katihar": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},
 "kerala": {
  "thiruvananthapuram": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
  "kochi": { total_crime: "9-10%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "kozhikode": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "3-4%", stalking: "2-3%" },
  "malappuram": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "thrissur": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "kottayam": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "pathanamthitta": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "palakkad": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "ernakulam": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "alappuzha": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},
"odisha": {
  "bhubaneswar": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
  "cuttack": { total_crime: "9-10%", rape: "3-4%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
  "rourkela": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "berhampur": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "koraput": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "sambalpur": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "keonjhar": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "bhadrak": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "angul": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "khurda": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},

"rajasthan": {
  "jaipur": { total_crime: "12-14%", rape: "5-6%", domestic_violence: "8-9%", assault: "7-8%", harassment: "6-7%", stalking: "4-5%" },
  "udaipur": { total_crime: "9-10%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
  "ajmer": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "jodhpur": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "bikaner": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "tonk": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "sikar": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "barmer": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "dholpur": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "churu": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},

            "himachal_pradesh": {
              "shimla": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "5-6%", assault: "3-4%", harassment: "3-4%", stalking: "2-3%" },
              "kangra": { total_crime: "9-10%", rape: "4-5%", domestic_violence: "5-6%", assault: "3-4%", harassment: "3-4%", stalking: "2-3%" },
              "mandi": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "4-5%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
              "solan": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "3-4%", stalking: "2-3%" },
              "kullu": { total_crime: "6-7%", rape: "3-4%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
              "una": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
              "chamba": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "bilaspur": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "sirmaur": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "hamirpur": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "kinnaur": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "0-1%" },
              "lahaul_and_spiti": { total_crime: "1-2%", rape: "0-1%", domestic_violence: "1-2%", assault: "0-1%", harassment: "0-1%", stalking: "0-1%" },
              "dalhousie": { total_crime: "1-2%", rape: "0-1%", domestic_violence: "1-2%", assault: "0-1%", harassment: "0-1%", stalking: "0-1%" },
              "manali": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "palampur": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "dharamshala": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
              "nagrota": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "kangra_town": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "joginder_nagar": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "nurpur": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "paonta_sahib": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "nalagarh": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
              "banjar": { total_crime: "1-2%", rape: "0-1%", domestic_violence: "1-2%", assault: "1-2%", harassment: "0-1%", stalking: "0-1%" },
              "rekong_peo": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "0-1%" },
              "jawala_mukhi": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
              "bilaspur_town": { total_crime: "3-4%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" }
            },

            "uttarakhand": {
  "dehradun": { total_crime: "12-14%", rape: "5-6%", domestic_violence: "7-8%", assault: "6-7%", harassment: "4-5%", stalking: "3-4%" },
  "haridwar": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
  "roorkee": { total_crime: "8-10%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "haldwani": { total_crime: "7-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
  "rudrapur": { total_crime: "6-8%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "2-3%" },
  "nainital": { total_crime: "6-7%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "rishikesh": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "kashipur": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
  "almora": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "pithoragarh": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
  "mussoorie": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "bageshwar": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "pauri": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "tehri": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "uttarkashi": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "chamoli": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "dehradun_cantonment": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "lansdowne": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "badrinath": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "kedarnath": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "gaurikund": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "garhwal": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "narendranagar": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "karnaprayag": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "srinagar_garhwal": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "vishnuprayag": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "narsan": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "tanakpur": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "lohaghat": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "champawat": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},    
    "uttar_pradesh": {
    "lucknow": { total_crime: "15-16%", rape: "6-7%", domestic_violence: "8-9%", assault: "7-8%", harassment: "6-7%", stalking: "3-4%" },
    "kanpur": { total_crime: "13-14%", rape: "5-6%", domestic_violence: "7-8%", assault: "6-7%", harassment: "5-6%", stalking: "3-4%" },
    "ghaziabad": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "5-6%", stalking: "4-5%" },
    "varanasi": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "agra": { total_crime: "9-10%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "2-3%" },
    "prayagraj": { total_crime: "10-11%", rape: "5-6%", domestic_violence: "7-8%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
    "noida": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "4-5%", assault: "4-5%", harassment: "4-5%", stalking: "3-4%" },
    "meerut": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "bareilly": { total_crime: "6-7%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "aligarh": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "jhansi": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "moradabad": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "saharanpur": { total_crime: "3-4%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "rampur": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "sitapur": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "bijnor": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "budaun": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "hardoi": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "kasganj": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "deoria": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "firozabad": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "sultanpur": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "bahraich": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "mau": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "azamgarh": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "gonda": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
  },


  "madhya_pradesh": {
    "bhopal": { total_crime: "12-14%", rape: "5-6%", violence: "8-9%", assault: "6-8%", misbehavior: "5-6%", stalking: "4-5%" },
    "indore": { total_crime: "15-17%", rape: "7-8%", violence: "9-10%", assault: "8-9%", misbehavior: "6-7%", stalking: "5-6%" },
    "gwalior": { total_crime: "8-10%", rape: "4-5%", violence: "5-6%", assault: "4-5%", misbehavior: "3-4%", stalking: "3-4%" },
    "jabalpur": { total_crime: "9-11%", rape: "5-6%", violence: "6-7%", assault: "4-5%", misbehavior: "4-5%", stalking: "3-4%" },
    "ujjain": { total_crime: "6-8%", rape: "2-3%", violence: "4-5%", assault: "3-4%", misbehavior: "3-4%", stalking: "2-3%" },
    "ratlam": { total_crime: "5-6%", rape: "2-3%", violence: "4-5%", assault: "2-3%", misbehavior: "2-3%", stalking: "2-3%" },
    "rewa": { total_crime: "4-5%", rape: "2-3%", violence: "3-4%", assault: "2-3%", misbehavior: "2-3%", stalking: "2%" },
    "morena": { total_crime: "3-4%", rape: "2-3%", violence: "3-4%", assault: "2-3%", misbehavior: "2-3%", stalking: "2%" },
    "sagar": { total_crime: "4-5%", rape: "2-3%", violence: "3-4%", assault: "3-4%", misbehavior: "2-3%", stalking: "2-3%" },
    "satna": { total_crime: "3-4%", rape: "1-2%", violence: "2-3%", assault: "2-3%", misbehavior: "2-3%", stalking: "2%" },
  },

  "west_bengal": {
    "kolkata": { total_crime: "14-16%", rape: "5-6%", domestic_violence: "7-8%", assault: "6-7%", harassment: "5-6%", stalking: "3-4%" },
    "howrah": { total_crime: "12-14%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
    "asansol": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
    "durgapur": { total_crime: "8-10%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "siliguri": { total_crime: "9-11%", rape: "4-5%", domestic_violence: "6-7%", assault: "4-5%", harassment: "4-5%", stalking: "3-4%" },
    "darjeeling": { total_crime: "6-8%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "hooghly": { total_crime: "7-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "3-4%", stalking: "2-3%" },
    "bardhaman": { total_crime: "8-10%", rape: "4-5%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "haldia": { total_crime: "6-7%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "2-3%" },
    "kharagpur": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "3-4%", harassment: "2-3%", stalking: "2-3%" },
    "nabadwip": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "baharampur": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "krishnanagar": { total_crime: "3-4%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "malda": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "jalpaiguri": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "bankura": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "kochbihar": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "midnapore": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "raiganj": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "bishnupur": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "alipurduar": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "bongaon": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "tamluk": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "contai": { total_crime: "1-2%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "darjeeling_town": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "dum_dum": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "kalimpong": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "diamond_harbour": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "rampurhat": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "habra": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "barrackpore": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" }
  },
 
  "telangana": {
    "hyderabad": { total_crime: "15-17%", rape: "6-7%", domestic_violence: "8-9%", assault: "5-6%", harassment: "5-6%", stalking: "4-5%" },
    "warangal": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "4-5%", harassment: "3-4%", stalking: "3-4%" },
    "nizamabad": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "khammam": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "4-5%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "karimnagar": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "medchal": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "mahabubnagar": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "3-4%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "medak": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "3-4%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "suryapet": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "nalgonda": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "jagtial": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "peddapalli": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "rajanna_sircilla": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "wanaparthy": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "narayanpet": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "siddipet": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "hyderabad_urban": { total_crime: "15-17%", rape: "6-7%", domestic_violence: "8-9%", assault: "5-6%", harassment: "5-6%", stalking: "4-5%" },
    "secunderabad": { total_crime: "14-16%", rape: "5-6%", domestic_violence: "7-8%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
    "hyderabad_rural": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "kothagudem": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "khammam_urban": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" }
  },

  "tripura": {
    "agartala": { total_crime: "12-14%", rape: "4-5%", domestic_violence: "6-7%", assault: "5-6%", harassment: "4-5%", stalking: "3-4%" },
    "bishalgarh": { total_crime: "10-12%", rape: "3-4%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "sonamura": { total_crime: "9-10%", rape: "3-4%", domestic_violence: "4-5%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "ujjayanta": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "3-4%", stalking: "1-2%" },
    "teliamura": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "sepaahijala": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "ambassa": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "khowai": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "dhalai": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "north_tripura": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "south_tripura": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "rajkhowa": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "sadar": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "kailashahar": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "panisagar": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "khowai_road": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "barmura": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "belonia": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "lakhyapara": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "manu": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "panchayath": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},

"tamil_nadu": {
    "chennai": { total_crime: "15-17%", rape: "6-7%", domestic_violence: "8-9%", assault: "5-6%", harassment: "5-6%", stalking: "4-5%" },
    "coimbatore": { total_crime: "10-12%", rape: "4-5%", domestic_violence: "6-7%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "madurai": { total_crime: "9-11%", rape: "4-5%", domestic_violence: "5-6%", assault: "4-5%", harassment: "3-4%", stalking: "2-3%" },
    "trichy": { total_crime: "8-9%", rape: "3-4%", domestic_violence: "5-6%", assault: "3-4%", harassment: "3-4%", stalking: "2-3%" },
    "salem": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "tirunelveli": { total_crime: "7-8%", rape: "3-4%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "vellore": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "thoothukudi": { total_crime: "6-7%", rape: "2-3%", domestic_violence: "4-5%", assault: "3-4%", harassment: "2-3%", stalking: "1-2%" },
    "kanyakumari": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "arakkonam": { total_crime: "5-6%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
    "dharmapuri": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "karur": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "3-4%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "tuticorin": { total_crime: "4-5%", rape: "2-3%", domestic_violence: "2-3%", assault: "2-3%", harassment: "1-2%", stalking: "1-2%" },
    "pollachi": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "tindivanam": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "nagapattinam": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "tiruppur": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "ranipet": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "sivagangai": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "virudhunagar": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "madurai_rural": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
    "dindigul": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},
"sikkim": {
  "gangtok": { total_crime: "8-10%", rape: "3-4%", domestic_violence: "4-5%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
  "namchi": { total_crime: "6-8%", rape: "2-3%", domestic_violence: "3-4%", assault: "2-3%", harassment: "2-3%", stalking: "1-2%" },
  "pakyong": { total_crime: "5-7%", rape: "2-3%", domestic_violence: "3-4%", assault: "1-2%", harassment: "2-3%", stalking: "1-2%" },
  "mangan": { total_crime: "5-7%", rape: "2-3%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "yuksom": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "gelling": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "pelling": { total_crime: "4-5%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "soreng": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "singtam": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "rangpo": { total_crime: "3-4%", rape: "1-2%", domestic_violence: "2-3%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "buddhakhola": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "sikkim": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "lamteng": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" },
  "daramdin": { total_crime: "2-3%", rape: "1-2%", domestic_violence: "1-2%", assault: "1-2%", harassment: "1-2%", stalking: "1-2%" }
},          
};
  

document.getElementById("checkButton").addEventListener("click", getCrimeData);


function getCrimeData() {
    const cityInput = document.getElementById("cityInput").value.trim().toLowerCase();
    let cityData = null;

    const dataSources = {
        "uttar_pradesh": data["uttar_pradesh"],
        "madhya_pradesh": data["madhya_pradesh"],
        "sikkim": data["sikkim"],
        "tamil_nadu": data["tamil_nadu"],
        "tripura": data["tripura"],
        "telangana": data["telangana"],
        "west_bengal": data["west_bengal"],
        "uttarakhand": data["uttarakhand"],
        "himachal_pradesh": data["himachal_pradesh"],
        "rajasthan": data["rajasthan"],
        "odisha": data["odisha"],
        "kerala": data["kerala"],
        "bihar": data["bihar"],
        "punjab": data["punjab"],
        "assam": data["assam"],
        "haryana": data["haryana"],
        "maharashtra": data["maharashtra"],
        "gujarat": data["gujarat"]
    };

    for (const [state, cities] of Object.entries(dataSources)) {
        if (cities[cityInput]) {
            cityData = cities[cityInput];
            break; 
        }
    }

    if (cityData) {
        displayData(cityData);
    } else {
        alert("City not found. Please try another city.");
    }
}

function displayData(cityData) {
    const tableBody = document.querySelector("#crimeTable tbody");
    tableBody.innerHTML = "";

    for (const [category, percentage] of Object.entries(cityData)) {
        
        const numericalValue = parseFloat(percentage.split("-")[0]);

        const status = numericalValue > 8 ? "High Risk" :
                       numericalValue > 5 ? "Moderate Risk" : "Low Risk";

        const row = `<tr>
                       <td>${category}</td>
                       <td>${percentage}</td>
                       <td>${status}</td>
                     </tr>`;
        tableBody.innerHTML += row;
    }

    document.getElementById("result").style.display = "block";
}
