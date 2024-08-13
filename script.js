document.addEventListener("DOMContentLoaded", function() {
    const categorySelect = document.getElementById("categorySelect");
    const itemTableBody = document.getElementById("itemTableBody");
    const existingCategories = document.getElementById("existingCategories");

    const data = [
        {
          "Item ID": 3497,
          "Name": "BAG GROCERY PAPER 20#",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 6792,
          "Name": "BAG GROCERY PAPER 57#",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3381,
          "Name": "BAG 1LB WHITE W/WINDOW",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 4638,
          "Name": "BAG GROCERY PLSTC T-SHIRT",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3299,
          "Name": "BAG KRAFT WINDOW 6.5",
          "Unit Size": "",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 7552,
          "Name": "PICNIC PACK HVY WT BLACK",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3634,
          "Name": "FLATWARE CUTLEREASE KNIFE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3635,
          "Name": "FLATWARE CUTLEREASE FORK",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3636,
          "Name": "FLATWARE CUTLEREASE SPOON",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3253,
          "Name": "STIRRER WOODEN WRAPPED 7.5",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 1665,
          "Name": "STRAW PLSTC JUMBO 7.75",
          "Unit Size": "BOX",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 1570,
          "Name": "NAPKIN MORNAP 13X12 NAT",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 4782,
          "Name": "GLOVE VINYL PF LG",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 1220,
          "Name": "GLOVE VINYL PF MED",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 1395,
          "Name": "GLOVE VINYL PF XL",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3189,
          "Name": "SLEEVE BURN CUT RESISTANT",
          "Unit Size": "EACH",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3288,
          "Name": "HB BOX 6.5\"X6.5\"X2.25\" COMPOSTABLE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3327,
          "Name": "BOWL SOUP 12OZ COMPOST",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3328,
          "Name": "LID FOR 12& 16 OZ SOUP BOLW COMPOST",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 1779,
          "Name": "BOX HINGED LID 1 CMP 6X6X2 COMPOSTABLE",
          "Unit Size": "EACH",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 4129,
          "Name": "CNTR HINGED 5X5 PLSTC CLEAR (S/O)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3659,
          "Name": "CNTR KRAFT BAKEABLE 10 OZ (S/O)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3347,
          "Name": "HUB BOWL REC 32OZ COMPOST",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3348,
          "Name": "HUB LID DOME 32&48 OZ REC BOWL",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 4969,
          "Name": "CUP PLSTC SOUFFLE 2 OZ (HOT)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 890,
          "Name": "CUP 16 OZ CLEAR PET (SMOOTHIE)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 4972,
          "Name": "CUP PLSTC SOUFFLE 4 OZ (HOT)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 3221,
          "Name": "CUP PAPER CONE 6 OZ",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 4970,
          "Name": "LID PLSTC SOUFFLE 2 OZ (HOT)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 4973,
          "Name": "LID PLSTC SOUFFLE 4 OZ (HOT)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING"
        },
        {
          "Item ID": 4552,
          "Name": "NUT PIGNOLI PINE NUTS",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 404,
          "Name": "SUGAR GRANULATED",
          "Unit Size": "BAG",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4892,
          "Name": "PC SWTNR ARTFCL SPLENDA",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 6,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 407,
          "Name": "PC SWTNR ARTFCL EQUAL",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 2276,
          "Name": "PEPPERS JALAPEN SLCD",
          "Unit Size": "GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 99,
          "Name": "PICKLE DILL CHIPS THIN",
          "Unit Size": "GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 193,
          "Name": "PC JELLY GRAPE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 200,
          "Name": "PC JELLY - STRAWBERRY JAM",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 205,
          "Name": "PC NUTELLA",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 496,
          "Name": "PC PEANUT BUTTER",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 427,
          "Name": "FLOUR ALL PURPOSE",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4622,
          "Name": "FLOUR RICE WHIT",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 421,
          "Name": "CORNSTARCH",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 3505,
          "Name": "SUGAR BROWN LT 1LB",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 62,
          "Name": "GRAIN RICE CONVERTED LONG",
          "Unit Size": "BOX",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 399,
          "Name": "HONEY WHIT CLOVER",
          "Unit Size": "BTL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1392,
          "Name": "VEG BEANS REFRIED",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 350,
          "Name": "VEG TOMATO DICED IN JUICE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 348,
          "Name": "VEG TOMATO PUREE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 347,
          "Name": "VEG TOMATO PASTE",
          "Unit Size": "C",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4227,
          "Name": "CHILES GREEN DICED",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1817,
          "Name": "VEG BEANS BLACK",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 314,
          "Name": "VEG BEANS RED KIDNEY",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 330,
          "Name": "VEG PEAS CHICK",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 120,
          "Name": "VINEGAR CIDER",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 663,
          "Name": "VINEGAR RED WINE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4876,
          "Name": "VINEGAR BALSAMIC 5LTR",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1247,
          "Name": "VINEGAR RICE UNSEASONED",
          "Unit Size": "QT",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 211,
          "Name": "PASTA MACARONI ELBOW",
          "Unit Size": "BOX",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4114,
          "Name": "OIL OLIVE PURE",
          "Unit Size": "GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 87,
          "Name": "DRESS MAYONNAISE GAL (DBL EGG)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4763,
          "Name": "SAUCE CATSUP DISPENSER PACK",
          "Unit Size": "BAG",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 244,
          "Name": "DRESS MAYONNAISE DISP PACK",
          "Unit Size": "1.5GL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1474,
          "Name": "SAUCE HONEY MUSTARD DISP PACK",
          "Unit Size": "1.5G",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 6398,
          "Name": "FRANKS RED HOT - DISPENSER PACK",
          "Unit Size": "CS",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 2214,
          "Name": "SAUCE CATSUP",
          "Unit Size": "3/GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1390,
          "Name": "OLIVE SLCD BLACK",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 18,
          "Name": "SAUCE FISH",
          "Unit Size": "BTL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4071,
          "Name": "SAUCE HOT",
          "Unit Size": "GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 57,
          "Name": "SAUCE CHILI SRIRACHA",
          "Unit Size": "BTL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 113,
          "Name": "SAUCE SOY",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 2459,
          "Name": "SAUCE MUSTARD DIJON",
          "Unit Size": "BTL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 117,
          "Name": "SAUCE TABASCO",
          "Unit Size": "BTL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 118,
          "Name": "SAUCE WORCESTERSHIRE",
          "Unit Size": "GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 108,
          "Name": "SAUCE CHEESE CHEDDAR",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 443,
          "Name": "OIL VEG CANOLA",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 2213,
          "Name": "OIL COATING PAN AEROSOL",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4826,
          "Name": "OLILVE PITTED CALAMATA",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 3515,
          "Name": "CHIPS TORTILLA WHITE TRIANGLE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 134,
          "Name": "CROUTONS SEASONED",
          "Unit Size": "BOX",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 98,
          "Name": "PEPPERS PEPPERONCINI HOT WHL GREEN",
          "Unit Size": "GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 298,
          "Name": "SPICE SALT COOKING",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1643,
          "Name": "SPICE - KOSHER SALT",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1271,
          "Name": "SPICE PEPPER BLACK CRACKED",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 275,
          "Name": "SPICE MUSTARD DRY",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1145,
          "Name": "SPICE THYME LEAVES",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 284,
          "Name": "SPICE PEPPERCORN BLCK WHL",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 285,
          "Name": "SPICE BLACK PEPPER GROUND",
          "Unit Size": "5LB CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 288,
          "Name": "SPICE PEPPER WHITE GROUND",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 287,
          "Name": "SPICE PEPPER RED CRUSHED",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 286,
          "Name": "SPICE PEPPER CAYENNE",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1444,
          "Name": "SPICE PAPRIKA SMOKED",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 282,
          "Name": "SPICE PAPRIKA GROUND",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 280,
          "Name": "SPICE OREGANO WHOLE",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4712,
          "Name": "SPICE ONION POWDER",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 259,
          "Name": "SPICE GARLIC POWDER",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 256,
          "Name": "SPICE CUMIN SEED GROUND",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1334,
          "Name": "SPICE CORIANDER GROUND",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 250,
          "Name": "SPICE CHILI POWDER DARK",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4387,
          "Name": "SPICE BAY LEAVES WHL",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 241,
          "Name": "SPICE BASIL LEAVES",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1900,
          "Name": "QUINOA",
          "Unit Size": "BAG",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 3147,
          "Name": "PASTE GOCHUJANG",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4003,
          "Name": "SESAME OIL",
          "Unit Size": "GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1626,
          "Name": "MIRIN",
          "Unit Size": "BTL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4675,
          "Name": "MISO",
          "Unit Size": "PKG",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1223,
          "Name": "TAHINI PASTE",
          "Unit Size": "JAR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1396,
          "Name": "ROASTED RED PEPPERS",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 93,
          "Name": "SAUCE MUSTARD YELLO",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4086,
          "Name": "DRY RANCH MIX - HIDDEN VALLEY",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 2568,
          "Name": "SAUCE BBQ",
          "Unit Size": "GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 208,
          "Name": "PINEAPPLE JUICE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 262,
          "Name": "GINGER POWDER",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 238,
          "Name": "ALLSPICE GROUND",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 276,
          "Name": "NUTMEG",
          "Unit Size": "CNTR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 4386,
          "Name": "CINNAMON BULK",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 1422,
          "Name": "BANANA PEPPERS",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "DRY STORAGE - FOOD"
        },
        {
          "Item ID": 419,
          "Name": "VEGAN BURGER MEAT IMPOSSIBLE (20LB/CS)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 2260,
          "Name": "TURKEY BREAST RAW BNLS",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 4219,
          "Name": "DELI TURKEY BRST SLICED",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 584,
          "Name": "PORK BUTT BNLS",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 701,
          "Name": "DELI PORK HAM SMKD BNLS FC",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 709,
          "Name": "CHIX WHIT/DARK DICED FC",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 3373,
          "Name": "CHIX HALAL THIGH BNLS SKNLS",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 4995,
          "Name": "CHIX BRST NAT FILET SKNLS GF 4OZ (15LB/CS)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 614,
          "Name": "BEEF STK FLANK",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": "",
          "Name": "HTL CHIX BRST NAT FILET SKNLS 6OZ",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 4589,
          "Name": "PORK SAUSAGE PATTY FC 2OZ",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 697,
          "Name": "PORK BACON SLCD LAYOUT 18-22 CT",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 2926,
          "Name": "DELI PEPPERONI SLCD",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 714,
          "Name": "CHIX BRST TENDER BRD",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 713,
          "Name": "CHIX BRST FILET BRD 4OZ",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 3605,
          "Name": "BEEF STK SANDWICH 5 OZ",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 554,
          "Name": "CHIX BRST FILET BRD SLIDER",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER (MEATS)"
        },
        {
          "Item ID": 4354,
          "Name": "WRAP TORTILLA WHIT",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 501,
          "Name": "VEG FZN CORN WHL KERNEL YELLOW (20LB/CASE)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 4692,
          "Name": "SAUCE PESTO",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 3295,
          "Name": "ROLL SUB WHIT THAW & SERVE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 390,
          "Name": "ROLL POTATO",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 4832,
          "Name": "PASTA FZN SHT REG 4OZ",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 1045,
          "Name": "PASTA - SPAETZLE / RIVELS (S/0)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 1455,
          "Name": "GUACOMOLE FZN MILD",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 313,
          "Name": "CIABATTA ROLL 3.20Z",
          "Unit Size": "40/CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 4921,
          "Name": "NAAN BREAD TANDOORI",
          "Unit Size": "48/CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 4511,
          "Name": "BEV BASE FZN SMOOTHIE STRAWB/BAN",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 4548,
          "Name": "BEV BASE FZN SMOOTHIE MANGO",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 4540,
          "Name": "BEV BASE FZN SMOOTHIE CARIB",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 4533,
          "Name": "BEV BASE FZN SMOOTHIE BERRY",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 511,
          "Name": "VEG FZN POT F/F/ PATTY (HASHBROWN)",
          "Unit Size": "120CS",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 3552,
          "Name": "BAGEL - WHOLE WHEAT",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 3599,
          "Name": "BAGEL - PLAIN",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 3571,
          "Name": "BAGEL - EVERYTHING",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 3522,
          "Name": "BAGEL - CINN RAISIN",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 3585,
          "Name": "BAGEL - BLUEBERRY",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 2151,
          "Name": "BKY CS COOKIE CCHIP 3.125",
          "Unit Size": "36/CS",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 2881,
          "Name": "BKY CS PACK BROOKIE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 1192,
          "Name": "BISCUIT BUTTERMILK LG FZN",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 2040,
          "Name": "BKY CS ICED BROWN",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 582,
          "Name": "JUICE LIME FROZEN",
          "Unit Size": "QT",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN FREEZER"
        },
        {
          "Item ID": 1568,
          "Name": "TIKKA PASTE",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 10,
          "Name": "CHEESE PANEER (USSO)",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 1941,
          "Name": "PICKLE KOSHER DILL SPEAR",
          "Unit Size": "PAIL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 1486,
          "Name": "CHEESE SWISS SLCD",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 2283,
          "Name": "CHEESE ROMANO GRATED IMPROTED",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 984,
          "Name": "CHEESE PROV SLCD",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 4798,
          "Name": "CHEESE PIZZA BLND PROV-MOZZ",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 1302,
          "Name": "CHEESE PEPPER JACK SLCD",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 328,
          "Name": "CHEESE PARM SHRD",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 578,
          "Name": "CHEESE FETA",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 464,
          "Name": "CHEESE DOMESTIC GRATED",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 4940,
          "Name": "CHEESE CHEDDAR SHRD",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 457,
          "Name": "CHEESE CHEDDAR COLORED",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 3719,
          "Name": "CHEESE AMERICAN SHARP WHITE",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 21,
          "Name": "CHEESE CHED WHIT/JACK SHRD",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 4042,
          "Name": "CHEESE BLEU CRUMBLED",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 456,
          "Name": "CHEESE AMER YEL SLCD 160CT",
          "Unit Size": "LB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 926,
          "Name": "SOUP BASE GF VEG GOLDEN",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 631,
          "Name": "BASE CHIPOTLE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 231,
          "Name": "BASE CHIX GF",
          "Unit Size": "6/CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 1526,
          "Name": "EGG LIQUID WHL",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 469,
          "Name": "EGG FRESH",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 576,
          "Name": "CRM WHIPPING LT AEROSOL",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 168,
          "Name": "CHEESE MOZZ FRESH SLCD 10Z NO BRINE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 4021,
          "Name": "HARD BOILED EGGS (WHL PLD COOKED)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 1400,
          "Name": "GREEK YOGURT 0% FAT",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "WALK-IN"
        },
        {
          "Item ID": 4801,
          "Name": "SAF-CHECK WITH QUAT TEST STRIP",
          "Unit Size": "EACH",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 3026,
          "Name": "TOWEL CWC BLUE STRIPE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 971,
          "Name": "REGISTER TAPE MICROS SYSTEM",
          "Unit Size": "EACH",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 6328,
          "Name": "REGISTER TAPE STICKY",
          "Unit Size": "EACH",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 2344,
          "Name": "CLNR ALCOHOL SWAB",
          "Unit Size": "BOX",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 7781,
          "Name": "DAYDOTS \"USE FIRST",
          "Unit Size": "ROLL/500",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 2929,
          "Name": "DAYDOTS MON 2\" BLUE",
          "Unit Size": "ROLL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 2930,
          "Name": "DAYDOTS TUE 2\" YEL",
          "Unit Size": "ROLL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 2931,
          "Name": "DAYDOTS WED 2\" RED",
          "Unit Size": "ROLL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 2935,
          "Name": "DAYDOTS THUR 2\" BRN",
          "Unit Size": "ROLL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 2936,
          "Name": "DAYDOTS FRI 2\" GREEN",
          "Unit Size": "ROLL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 3424,
          "Name": "LABEL PSU EATS",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4311,
          "Name": "CLNR ALTO SHM SCALE FREE",
          "Unit Size": "JAR",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 3245,
          "Name": "SAFTY BAG OPENER",
          "Unit Size": "EACH",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 3021,
          "Name": "TOWEL QUAT SANITIZING",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 3852,
          "Name": "CLNR - DAWN DISH LIQUID",
          "Unit Size": "TUB",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 1320,
          "Name": "CLNR KEATING KLENSER",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 3265,
          "Name": "CLNR SOLID POWER XL",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 3846,
          "Name": "CLNR ECL SCOUT 2-2 GAL",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 1018,
          "Name": "CLNR ECL LIME AWAY DELIMING",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 1015,
          "Name": "CLNR ECL GREASE CUTTER PLUS",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4281,
          "Name": "CLNR APEX RINSE ADDITIVE",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4724,
          "Name": "CLNR ALTO SHM SPRAY-COMBITHRM",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4584,
          "Name": "CLNR ECL PATHWAYS DRAIN (S/O)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4272,
          "Name": "CLNR TURBO CHEF OVEN CLEANER (S/O)",
          "Unit Size": "CASE",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 3170,
          "Name": "PAD SCOURING PURPLE",
          "Unit Size": "BOX",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4025,
          "Name": "CLNR STEAM WAND SCHAERER",
          "Unit Size": "BOTTL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4004,
          "Name": "CLNR ALTO SHM COMBICLN CTPTAB",
          "Unit Size": "BKT5",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4593,
          "Name": "CLNR ECL PEROXIDE MULTI-SURFACE DIS",
          "Unit Size": "2GAL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4534,
          "Name": "CLNR ECL OASIS QUAT SANITIZER",
          "Unit Size": "2.5GL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        },
        {
          "Item ID": 4495,
          "Name": "CLNR ECL OASIS FLOOR AMMONIATED",
          "Unit Size": "2.5GL",
          "PAR": 0,
          "Order Quantity": 0,
          "Category": "SUPPLIES"
        }
      ];

    // Get unique categories from data
    const categories = [...new Set(data.map(item => item.Category))];

    // Populate categories in dropdown
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    // Function to populate items table based on selected category
    function populateTable(category) {
        itemTableBody.innerHTML = "";
        const filteredData = data.filter(item => item.Category === category);
        filteredData.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item["Item ID"]}</td>
                <td>${item.Name}</td>
                <td>${item["Unit Size"]}</td>
                <td>
                    <input type="number" value="${item["Order Quantity"]}" min="0" class="form-control" data-id="${item["Item ID"]}">
                </td>
            `;
            itemTableBody.appendChild(row);
        });
    }

    // Event listener for category selection
    categorySelect.addEventListener("change", function() {
        populateTable(this.value);
    });

    // Initialize with the first category
    if (categories.length > 0) {
        categorySelect.value = categories[0];
        populateTable(categories[0]);
    }

    // Populate existing categories list (for Manage Categories tab)
    categories.forEach(category => {
        const div = document.createElement("div");
        div.textContent = category;
        existingCategories.appendChild(div);
    });
});
