
let districts = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
];
let districtHqs = [
    "Eureka",
    "Redding",
    "Marysville",
    "Oakland",
    "San Luis Obispo",
    "Fresno",
    "Sacramento",
    "San Bernardino",
    "Bishop",
    "Stockton",
    "Los Angeles",
    "Santa Ana",
];
let districtHqAddresses = [
    "1656 Union Street, Eureka, CA 95501",
    "1657 Riverside Drive, Redding, CA 96001",
    "703 B Street, Marysville, CA 95901",
    "111 Grand Avenue, Oakland, CA 94612",
    "50 Higuera Street, San Luis Obispo, CA 93401",
    "1352 West Olive Avenue, Fresno, CA 93728",
    "703 B Street, Marysville, CA 95901",
    "464 West 4th Street, San Bernardino, CA 92401",
    "500 South Main Street, Bishop, CA 93514",
    "1976 East Dr. Martin Luther King Jr. Blvd, Stockton, CA 95205",
    "100 South Main Street, Los Angeles, CA 90012",
    "1750 East 4th Street, Santa Ana, CA 92705",
];
let districtHqPhoneNumbers = [
    "(707) 445-6600",
    "(530) 225-3426",
    "(530) 741-4481",
    "(510) 450-3821",
    "(805) 549-3261",
    "(559) 488-1500",
    "(916) 445-8994",
    "(909) 383-1366",
    "(760) 872-0601",
    "(209) 948-7930",
    "(213) 897-0322",
    "(714) 558-4400",
];
const districtsCenter = [
    [40.745005, -123.869522],
    [40.745005, -123.869522],
    [38.581572, -121.494400],
    [37.995388, -122.068669],
    [35.282752, -120.659616],
    [36.757788, -119.772366],
    [34.052235, -118.243683],
    [34.108345, -117.289765],
    [37.165395, -119.449479],
    [37.957702, -121.290780],
    [32.715736, -117.161087],
    [33.745472, -117.867653]
]

let districtNames = [
    "Northwest",
    "Northeast",
    "North Central",
    "Bay Area",
    "Central Coast",
    "South Central",
    "LA/Ventura",
    "San Bernardino/Riverside",
    "Eastern Sierra",
    "Central",
    "San Diego/Imperial",
    "Orange County",
];


let counties = [
    "Alameda",
    "Alpine",
    "Amador",
    "Butte",
    "Calaveras",
    "Contra Costa",
    "Colusa",
    "Del Norte",
    "El Dorado",
    "Fresno",
    "Glenn",
    "Humboldt",
    "Imperial",
    "Inyo",
    "Kern",
    "Kings",
    "Los Angeles",
    "Lake",
    "Lassen",
    "Madera",
    "Mendocino",
    "Merced",
    "Mono",
    "Modoc",
    "Monterey",
    "Mariposa",
    "Marin",
    "Napa",
    "Nevada",
    "Orange",
    "Placer",
    "Plumas",
    "Riverside",
    "Sacramento",
    "Santa Barbara",
    "San Bernardino",
    "San Benito",
    "Santa Clara",
    "Santa Cruz",
    "San Diego",
    "San Francisco",
    "Shasta",
    "Sierra",
    "Siskiyou",
    "San Joaquin",
    "San Luis Obispo",
    "San Mateo",
    "Solano",
    "Sonoma",
    "Stanislaus",
    "Sutter",
    "Tehama",
    "Trinity",
    "Tulare",
    "Tuolumne",
    "Ventura",
    "Yolo",
    "Yuba",
]





let countyDistricts = [
    4,
    10,
    10,
    3,
    10,
    4,
    3,
    1,
    3,
    6,
    3,
    1,
    11,
    9,
    6,
    6,
    7,
    1,
    2,
    6,
    1,
    10,
    9,
    2,
    5,
    10,
    4,
    4,
    3,
    12,
    3,
    2,
    8,
    3,
    5,
    8,
    5,
    4,
    5,
    11,
    4,
    2,
    3,
    2,
    10,
    5,
    4,
    4,
    4,
    10,
    3,
    2,
    2,
    6,
    10,
    7,
    3,
    3,
]
let routes = ["SR-1", "SR-2", "SR-3", "SR-4", "I-5", "US-6", "I-8", "SR-9", "I-10", "SR-12", "SR-13", "SR-14", "I-15", "SR-16", "SR-17", "SR-18", "SR-19", "SR-20", "SR-22", "SR-23", "SR-24", "SR-25", "SR-26", "SR-27", "SR-28", "SR-29", "SR-30", "SR-32", "SR-33", "SR-34", "SR-35", "SR-36", "SR-37", "SR-38", "SR-39", "I-40", "SR-41", "SR-43", "SR-44", "SR-45", "SR-46", "SR-47", "SR-48", "SR-49", "US-50", "SR-51", "SR-52", "SR-53", "SR-54", "SR-55", "SR-56", "SR-57", "SR-58", "SR-59", "SR-60", "SR-61", "SR-62", "SR-63", "SR-65", "SR-66", "SR-67", "SR-68", "SR-70", "SR-71", "SR-72", "SR-73", "SR-74", "SR-75", "SR-76", "SR-77", "SR-78", "SR-79", "I-80", "SR-82", "SR-83", "SR-84", "SR-85", "SR-86", "SR-87", "SR-88", "SR-89", "SR-90", "SR-91", "SR-92", "SR-94", "US-95", "SR-96", "US-97", "SR-98", "SR-99", "US-101", "SR-103", "SR-104", "I-105", "SR-107", "SR-108", "SR-109", "I-110", "SR-111", "SR-112", "SR-113", "SR-114", "SR-115", "SR-116", "SR-117", "SR-118", "SR-119", "SR-120", "SR-121", "SR-123", "SR-124", "SR-125", "SR-126", "SR-127", "SR-128", "SR-129", "SR-130", "SR-131", "SR-132", "SR-133", "SR-134", "SR-135", "SR-136", "SR-137", "SR-138", "SR-139", "SR-140", "SR-141", "SR-142", "SR-144", "SR-145", "SR-146", "SR-147", "SR-148", "SR-149", "SR-150", "SR-151", "SR-152", "SR-153", "SR-154", "SR-155", "SR-156", "SR-158", "SR-159", "SR-160", "SR-161", "SR-162", "SR-163", "SR-164", "SR-165", "SR-166", "SR-167", "SR-168", "SR-169", "SR-170", "SR-172", "SR-173", "SR-174", "SR-175", "SR-177", "SR-178", "SR-180", "SR-181", "SR-182", "SR-183", "SR-184", "SR-185", "SR-186", "SR-187", "SR-188", "SR-189", "SR-190", "SR-191", "SR-192", "SR-193", "SR-195", "SR-197", "SR-198", "US-199", "SR-200", "SR-201", "SR-202", "SR-203", "SR-204", "I-205", "SR-207", "SR-209", "I-210", "SR-211", "SR-213", "I-215", "SR-216", "SR-217", "SR-218", "SR-219", "SR-220", "SR-221", "SR-222", "SR-223", "SR-224", "SR-225", "SR-227", "SR-229", "SR-236", "SR-237", "SR-238", "SR-241", "SR-242", "SR-243", "SR-244", "SR-245", "SR-246", "SR-247", "SR-252", "SR-253", "SR-254", "SR-255", "SR-259", "SR-260", "SR-262", "SR-263", "SR-265", "SR-266", "SR-267", "SR-269", "SR-270", "SR-271", "SR-273", "SR-274", "SR-275", "I-280", "SR-281", "SR-282", "SR-283", "SR-284", "SR-299", "SR-330", "SR-371", "I-380", "US-395", "I-405", "I-505", "I-580", "I-605", "I-680", "I-710", "I-780", "I-805", "I-880", "SR-905", "I-980"]

const choicesArray = [
    {
        title: "Highway Cameras",
        description: "The location and status of each Caltrans camera located on the State Highway Network.",
        link: "cameras",
        available: true,
        item: "cameras"
    },
    {
        title: "Changeable Message Signs",
        description: "All Roadway message signs (511, Traffic Status, Amber Alerts) located on the State Highway Network.",
        link: "cms",
        available: true,
        item: "signs"
    },
    {
        title: "Chain Control Signs",
        description: "The location and status of each Caltrans' chain control point located on the State Highway Network.",
        link: "chain-control",
        available: true,
        item: "signs"
    },
    {
        title: "Roadside Weather Information",
        description: "150 weather sensors in rural areas and roads with reoccurring weather.",
        link: "weather",
        available: true,
        item: 'weather'
    },

    {
        title: "Lane Closures",
        description: "All approved closures planned for the next 7 days, plus all current lane, ramp, and road closures.",
        link: "lane-closures",
        available: false,
        item: "closures"
    },
    {
        title: "Travel Times",
        description: "Caltrans travel time segments located on selected routes within the State Highway Network.",
        link: "/",
        available: false
    }
]


const featureArrayMaker = () => {
    let JSONList = [];
    for (let i = 0; i < counties.length; i++) {
        let countyObj = {};

        countyObj["county"] = counties[i];
        countyObj["district"] = countyDistricts[i];
        countyObj["features"] = [];
        if ([1, 2, 3, 6, 7, 8, 9, 10, 11].includes(countyDistricts[i])) {
            countyObj["features"].push("chainControl");
        }
        if ([1, 2, 3, 6, 7, 8, 9, 10, 11].includes(countyDistricts[i])) {
            countyObj["features"].push("cms");
        }
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(countyDistricts[i])) {
            countyObj["features"].push("lcs");
        }
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(countyDistricts[i])) {
            countyObj["features"].push("cctv");
        }
        if ([3, 8, 11, 12].includes(countyDistricts[i])) {
            countyObj["features"].push("travelTimes");
        }
        if ([2, 3, 6, 8, 9, 10].includes(countyDistricts[i])) {
            countyObj["features"].push("weather");
        }

        JSONList.push(countyObj);
    }

    return JSONList
}

const districtArrayMaker = () => {
    let JSONList = [];
    for (let i = 0; i < districts.length; i++) {
        let countyObj = {};
            countyDistricts.forEach((district, index) => {
                if (district - 1 === i) {
                    countyObj["counties"] += `${counties[index]}, `
                }
            })

        countyObj["name"] = districtNames[i];
        countyObj["features"] = [];
        if ([1, 2, 3, 6, 7, 8, 9, 10, 11].includes(i + 1)) {
            countyObj["features"].push("chainControl");
        }
        if ([1, 2, 3, 6, 7, 8, 9, 10, 11].includes(i + 1)) {
            countyObj["features"].push("cms");
        }
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(i + 1)) {
            countyObj["features"].push("lcs");
        }
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(i + 1)) {
            countyObj["features"].push("cctv");
        }
        if ([3, 8, 11, 12].includes(i + 1)) {
            countyObj["features"].push("travelTimes");
        }
        if ([2, 3, 6, 8, 9, 10].includes(i + 1)) {
            countyObj["features"].push("weather");
        }

        JSONList.push(countyObj);
    }



    return JSONList
}

const featureArray = [
    {
        "county": "Alameda",
        "district": 4,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Alpine",
        "district": 10,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Amador",
        "district": 10,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Butte",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Calaveras",
        "district": 10,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Contra Costa",
        "district": 4,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Colusa",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Del Norte",
        "district": 1,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "El Dorado",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Fresno",
        "district": 6,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Glenn",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Humboldt",
        "district": 1,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Imperial",
        "district": 11,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes"
        ]
    },
    {
        "county": "Inyo",
        "district": 9,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Kern",
        "district": 6,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Kings",
        "district": 6,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Los Angeles",
        "district": 7,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Lake",
        "district": 1,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Lassen",
        "district": 2,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Madera",
        "district": 6,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Mendocino",
        "district": 1,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Merced",
        "district": 10,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Mono",
        "district": 9,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Modoc",
        "district": 2,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Monterey",
        "district": 5,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Mariposa",
        "district": 10,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Marin",
        "district": 4,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Napa",
        "district": 4,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Nevada",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Orange",
        "district": 12,
        "features": [
            "lcs",
            "cctv",
            "travelTimes"
        ]
    },
    {
        "county": "Placer",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Plumas",
        "district": 2,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Riverside",
        "district": 8,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Sacramento",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Santa Barbara",
        "district": 5,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "San Bernardino",
        "district": 8,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "San Benito",
        "district": 5,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Santa Clara",
        "district": 4,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Santa Cruz",
        "district": 5,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "San Diego",
        "district": 11,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes"
        ]
    },
    {
        "county": "San Francisco",
        "district": 4,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Shasta",
        "district": 2,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Sierra",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Siskiyou",
        "district": 2,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "San Joaquin",
        "district": 10,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "San Luis Obispo",
        "district": 5,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "San Mateo",
        "district": 4,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Solano",
        "district": 4,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Sonoma",
        "district": 4,
        "features": [
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Stanislaus",
        "district": 10,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Sutter",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Tehama",
        "district": 2,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Trinity",
        "district": 2,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Tulare",
        "district": 6,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Tuolumne",
        "district": 10,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "weather"
        ]
    },
    {
        "county": "Ventura",
        "district": 7,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv"
        ]
    },
    {
        "county": "Yolo",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    },
    {
        "county": "Yuba",
        "district": 3,
        "features": [
            "chainControl",
            "cms",
            "lcs",
            "cctv",
            "travelTimes",
            "weather"
        ]
    }
]



export {districts, counties, countyDistricts, routes, choicesArray, featureArray, districtNames, districtHqs, districtHqAddresses, districtsCenter, districtArrayMaker, districtHqPhoneNumbers}
