document.addEventListener("DOMContentLoaded", function() {
  const locationSelect = document.getElementById("LocationSelect");
  const categorySelect = document.getElementById("categorySelect");
  const areaSelect = document.getElementById("AreaSelect");
  const itemTableBody = document.getElementById("itemTableBody");
  const existingCategories = document.getElementById("existingCategories");
  const startNewSessionButton = document.getElementById("startNewSession");
  const finishAndSendButton = document.getElementById("finishAndSend");

  const data = [
    {
      "Item ID": 3497,
      "Name": "BAG GROCERY PAPER 20#",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 6792,
      "Name": "BAG GROCERY PAPER 57#",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3381,
      "Name": "BAG 1LB WHITE W/WINDOW",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4638,
      "Name": "BAG GROCERY PLSTC T-SHIRT",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3299,
      "Name": "BAG KRAFT WINDOW 6.5",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 7552,
      "Name": "PICNIC PACK HVY WT BLACK",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3634,
      "Name": "FLATWARE CUTLEREASE KNIFE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3635,
      "Name": "FLATWARE CUTLEREASE FORK",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3636,
      "Name": "FLATWARE CUTLEREASE SPOON",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3253,
      "Name": "STIRRER WOODEN WRAPPED 7.5",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1665,
      "Name": "STRAW PLSTC JUMBO 7.75",
      "Unit Size": "BOX",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1570,
      "Name": "NAPKIN MORNAP 13X12 NAT",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4782,
      "Name": "GLOVE VINYL PF LG",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1220,
      "Name": "GLOVE VINYL PF MED",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1395,
      "Name": "GLOVE VINYL PF XL",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3189,
      "Name": "SLEEVE BURN CUT RESISTANT",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3288,
      "Name": "HB BOX 6.5\"X6.5\"X2.25\" COMPOSTABLE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3327,
      "Name": "BOWL SOUP 12OZ COMPOST",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3328,
      "Name": "LID FOR 12& 16 OZ SOUP BOLW COMPOST",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1779,
      "Name": "BOX HINGED LID 1 CMP 6X6X2 COMPOSTABLE",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4129,
      "Name": "CNTR HINGED 5X5 PLSTC CLEAR (S/O)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3659,
      "Name": "CNTR KRAFT BAKEABLE 10 OZ (S/O)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3347,
      "Name": "HUB BOWL REC 32OZ COMPOST",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3348,
      "Name": "HUB LID DOME 32&48 OZ REC BOWL",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4969,
      "Name": "CUP PLSTC SOUFFLE 2 OZ (HOT)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": "0890",
      "Name": "CUP 16 OZ CLEAR PET (SMOOTHIE)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4972,
      "Name": "CUP PLSTC SOUFFLE 4 OZ (HOT)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3221,
      "Name": "CUP PAPER CONE 6 OZ",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4970,
      "Name": "LID PLSTC SOUFFLE 2 OZ (HOT)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4973,
      "Name": "LID PLSTC SOUFFLE 4 OZ (HOT)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - PAPER & PACKAGING",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4552,
      "Name": "NUT PIGNOLI PINE NUTS",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": "0404",
      "Name": "SUGAR GRANULATED",
      "Unit Size": "BAG",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4892,
      "Name": "PC SWTNR ARTFCL SPLENDA",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 6,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 407,
      "Name": "PC SWTNR ARTFCL EQUAL",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2276,
      "Name": "PEPPERS JALAPEN SLCD",
      "Unit Size": "GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 99,
      "Name": "PICKLE DILL CHIPS THIN",
      "Unit Size": "GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 193,
      "Name": "PC JELLY GRAPE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 200,
      "Name": "PC JELLY - STRAWBERRY JAM",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 205,
      "Name": "PC NUTELLA",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 496,
      "Name": "PC PEANUT BUTTER",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 427,
      "Name": "FLOUR ALL PURPOSE",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4622,
      "Name": "FLOUR RICE WHIT",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 421,
      "Name": "CORNSTARCH",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3505,
      "Name": "SUGAR BROWN LT 1LB",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 62,
      "Name": "GRAIN RICE CONVERTED LONG",
      "Unit Size": "BOX",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 399,
      "Name": "HONEY WHIT CLOVER",
      "Unit Size": "BTL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1392,
      "Name": "VEG BEANS REFRIED",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 350,
      "Name": "VEG TOMATO DICED IN JUICE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 348,
      "Name": "VEG TOMATO PUREE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 347,
      "Name": "VEG TOMATO PASTE",
      "Unit Size": "C",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4227,
      "Name": "CHILES GREEN DICED",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1817,
      "Name": "VEG BEANS BLACK",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 314,
      "Name": "VEG BEANS RED KIDNEY",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 330,
      "Name": "VEG PEAS CHICK",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 120,
      "Name": "VINEGAR CIDER",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 663,
      "Name": "VINEGAR RED WINE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4876,
      "Name": "VINEGAR BALSAMIC 5LTR",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1247,
      "Name": "VINEGAR RICE UNSEASONED",
      "Unit Size": "QT",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 211,
      "Name": "PASTA MACARONI ELBOW",
      "Unit Size": "BOX",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4114,
      "Name": "OIL OLIVE PURE",
      "Unit Size": "GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 87,
      "Name": "DRESS MAYONNAISE GAL (DBL EGG)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4763,
      "Name": "SAUCE CATSUP DISPENSER PACK",
      "Unit Size": "BAG",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 244,
      "Name": "DRESS MAYONNAISE DISP PACK",
      "Unit Size": "1.5GL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1474,
      "Name": "SAUCE HONEY MUSTARD DISP PACK",
      "Unit Size": "1.5G",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 6398,
      "Name": "FRANKS RED HOT - DISPENSER PACK",
      "Unit Size": "CS",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2214,
      "Name": "SAUCE CATSUP",
      "Unit Size": "3/GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1390,
      "Name": "OLIVE SLCD BLACK",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 18,
      "Name": "SAUCE FISH",
      "Unit Size": "BTL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4071,
      "Name": "SAUCE HOT",
      "Unit Size": "GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 57,
      "Name": "SAUCE CHILI SRIRACHA",
      "Unit Size": "BTL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 113,
      "Name": "SAUCE SOY",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2459,
      "Name": "SAUCE MUSTARD DIJON",
      "Unit Size": "BTL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 117,
      "Name": "SAUCE TABASCO",
      "Unit Size": "BTL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 118,
      "Name": "SAUCE WORCESTERSHIRE",
      "Unit Size": "GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 108,
      "Name": "SAUCE CHEESE CHEDDAR",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 443,
      "Name": "OIL VEG CANOLA",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2213,
      "Name": "OIL COATING PAN AEROSOL",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4826,
      "Name": "OLILVE PITTED CALAMATA",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3515,
      "Name": "CHIPS TORTILLA WHITE TRIANGLE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 134,
      "Name": "CROUTONS SEASONED",
      "Unit Size": "BOX",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 98,
      "Name": "PEPPERS PEPPERONCINI HOT WHL GREEN",
      "Unit Size": "GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 298,
      "Name": "SPICE SALT COOKING",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1643,
      "Name": "SPICE - KOSHER SALT",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1271,
      "Name": "SPICE PEPPER BLACK CRACKED",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 275,
      "Name": "SPICE MUSTARD DRY",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1145,
      "Name": "SPICE THYME LEAVES",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 284,
      "Name": "SPICE PEPPERCORN BLCK WHL",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 285,
      "Name": "SPICE BLACK PEPPER GROUND",
      "Unit Size": "5LB CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 288,
      "Name": "SPICE PEPPER WHITE GROUND",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 287,
      "Name": "SPICE PEPPER RED CRUSHED",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 286,
      "Name": "SPICE PEPPER CAYENNE",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1444,
      "Name": "SPICE PAPRIKA SMOKED",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 282,
      "Name": "SPICE PAPRIKA GROUND",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 280,
      "Name": "SPICE OREGANO WHOLE",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4712,
      "Name": "SPICE ONION POWDER",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 259,
      "Name": "SPICE GARLIC POWDER",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 256,
      "Name": "SPICE CUMIN SEED GROUND",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1334,
      "Name": "SPICE CORIANDER GROUND",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 250,
      "Name": "SPICE CHILI POWDER DARK",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4387,
      "Name": "SPICE BAY LEAVES WHL",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 241,
      "Name": "SPICE BASIL LEAVES",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1900,
      "Name": "QUINOA",
      "Unit Size": "BAG",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3147,
      "Name": "PASTE GOCHUJANG",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4003,
      "Name": "SESAME OIL",
      "Unit Size": "GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1626,
      "Name": "MIRIN",
      "Unit Size": "BTL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4675,
      "Name": "MISO",
      "Unit Size": "PKG",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1223,
      "Name": "TAHINI PASTE",
      "Unit Size": "JAR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1396,
      "Name": "ROASTED RED PEPPERS",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 93,
      "Name": "SAUCE MUSTARD YELLO",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4086,
      "Name": "DRY RANCH MIX - HIDDEN VALLEY",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2568,
      "Name": "SAUCE BBQ",
      "Unit Size": "GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 208,
      "Name": "PINEAPPLE JUICE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 262,
      "Name": "GINGER POWDER",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 238,
      "Name": "ALLSPICE GROUND",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 276,
      "Name": "NUTMEG",
      "Unit Size": "CNTR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4386,
      "Name": "CINNAMON BULK",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1422,
      "Name": "BANANA PEPPERS",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "DRY STORAGE - FOOD",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 419,
      "Name": "VEGAN BURGER MEAT IMPOSSIBLE (20LB/CS)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2260,
      "Name": "TURKEY BREAST RAW BNLS",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4219,
      "Name": "DELI TURKEY BRST SLICED",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 584,
      "Name": "PORK BUTT BNLS",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 701,
      "Name": "DELI PORK HAM SMKD BNLS FC",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 709,
      "Name": "CHIX WHIT/DARK DICED FC",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3373,
      "Name": "CHIX HALAL THIGH BNLS SKNLS",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4995,
      "Name": "CHIX BRST NAT FILET SKNLS GF 4OZ (15LB/CS)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 614,
      "Name": "BEEF STK FLANK",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": "",
      "Name": "HTL CHIX BRST NAT FILET SKNLS 6OZ",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4589,
      "Name": "PORK SAUSAGE PATTY FC 2OZ",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 697,
      "Name": "PORK BACON SLCD LAYOUT 18-22 CT",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2926,
      "Name": "DELI PEPPERONI SLCD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 714,
      "Name": "CHIX BRST TENDER BRD",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 713,
      "Name": "CHIX BRST FILET BRD 4OZ",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3605,
      "Name": "BEEF STK SANDWICH 5 OZ",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 554,
      "Name": "CHIX BRST FILET BRD SLIDER",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (MEATS)",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4354,
      "Name": "WRAP TORTILLA WHIT",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 501,
      "Name": "VEG FZN CORN WHL KERNEL YELLOW (20LB/CASE)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4692,
      "Name": "SAUCE PESTO",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3295,
      "Name": "ROLL SUB WHIT THAW & SERVE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 390,
      "Name": "ROLL POTATO",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4832,
      "Name": "PASTA FZN SHT REG 4OZ",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1045,
      "Name": "PASTA - SPAETZLE / RIVELS (S/0)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1455,
      "Name": "GUACOMOLE FZN MILD",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 313,
      "Name": "CIABATTA ROLL 3.20Z",
      "Unit Size": "40/CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4921,
      "Name": "NAAN BREAD TANDOORI",
      "Unit Size": "48/CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4511,
      "Name": "BEV BASE FZN SMOOTHIE STRAWB/BAN",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4548,
      "Name": "BEV BASE FZN SMOOTHIE MANGO",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4540,
      "Name": "BEV BASE FZN SMOOTHIE CARIB",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4533,
      "Name": "BEV BASE FZN SMOOTHIE BERRY",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 511,
      "Name": "VEG FZN POT F/F/ PATTY (HASHBROWN)",
      "Unit Size": "120CS",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3552,
      "Name": "BAGEL - WHOLE WHEAT",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3599,
      "Name": "BAGEL - PLAIN",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3571,
      "Name": "BAGEL - EVERYTHING",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3522,
      "Name": "BAGEL - CINN RAISIN",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3585,
      "Name": "BAGEL - BLUEBERRY",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2151,
      "Name": "BKY CS COOKIE CCHIP 3.125",
      "Unit Size": "36/CS",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2881,
      "Name": "BKY CS PACK BROOKIE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1192,
      "Name": "BISCUIT BUTTERMILK LG FZN",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2040,
      "Name": "BKY CS ICED BROWN",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 582,
      "Name": "JUICE LIME FROZEN",
      "Unit Size": "QT",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1568,
      "Name": "TIKKA PASTE",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 10,
      "Name": "CHEESE PANEER (USSO)",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1941,
      "Name": "PICKLE KOSHER DILL SPEAR",
      "Unit Size": "PAIL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1486,
      "Name": "CHEESE SWISS SLCD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2283,
      "Name": "CHEESE ROMANO GRATED IMPROTED",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 984,
      "Name": "CHEESE PROV SLCD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4798,
      "Name": "CHEESE PIZZA BLND PROV-MOZZ",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1302,
      "Name": "CHEESE PEPPER JACK SLCD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 328,
      "Name": "CHEESE PARM SHRD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 578,
      "Name": "CHEESE FETA",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 464,
      "Name": "CHEESE DOMESTIC GRATED",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4940,
      "Name": "CHEESE CHEDDAR SHRD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 457,
      "Name": "CHEESE CHEDDAR COLORED",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3719,
      "Name": "CHEESE AMERICAN SHARP WHITE",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 21,
      "Name": "CHEESE CHED WHIT/JACK SHRD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4042,
      "Name": "CHEESE BLEU CRUMBLED",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 456,
      "Name": "CHEESE AMER YEL SLCD 160CT",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 926,
      "Name": "SOUP BASE GF VEG GOLDEN",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 631,
      "Name": "BASE CHIPOTLE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 231,
      "Name": "BASE CHIX GF",
      "Unit Size": "6/CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1526,
      "Name": "EGG LIQUID WHL",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 469,
      "Name": "EGG FRESH",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 576,
      "Name": "CRM WHIPPING LT AEROSOL",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 168,
      "Name": "CHEESE MOZZ FRESH SLCD 10Z NO BRINE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4021,
      "Name": "HARD BOILED EGGS (WHL PLD COOKED)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1400,
      "Name": "GREEK YOGURT 0% FAT",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4801,
      "Name": "SAF-CHECK WITH QUAT TEST STRIP",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3026,
      "Name": "TOWEL CWC BLUE STRIPE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 971,
      "Name": "REGISTER TAPE MICROS SYSTEM",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 6328,
      "Name": "REGISTER TAPE STICKY",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2344,
      "Name": "CLNR ALCOHOL SWAB",
      "Unit Size": "BOX",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 7781,
      "Name": "DAYDOTS \"USE FIRST",
      "Unit Size": "ROLL/500",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2929,
      "Name": "DAYDOTS MON 2\" BLUE",
      "Unit Size": "ROLL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2930,
      "Name": "DAYDOTS TUE 2\" YEL",
      "Unit Size": "ROLL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2931,
      "Name": "DAYDOTS WED 2\" RED",
      "Unit Size": "ROLL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2935,
      "Name": "DAYDOTS THUR 2\" BRN",
      "Unit Size": "ROLL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 2936,
      "Name": "DAYDOTS FRI 2\" GREEN",
      "Unit Size": "ROLL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3424,
      "Name": "LABEL PSU EATS",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4311,
      "Name": "CLNR ALTO SHM SCALE FREE",
      "Unit Size": "JAR",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3245,
      "Name": "SAFTY BAG OPENER",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3021,
      "Name": "TOWEL QUAT SANITIZING",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3852,
      "Name": "CLNR - DAWN DISH LIQUID",
      "Unit Size": "TUB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1320,
      "Name": "CLNR KEATING KLENSER",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3265,
      "Name": "CLNR SOLID POWER XL",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3846,
      "Name": "CLNR ECL SCOUT 2-2 GAL",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1018,
      "Name": "CLNR ECL LIME AWAY DELIMING",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 1015,
      "Name": "CLNR ECL GREASE CUTTER PLUS",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4281,
      "Name": "CLNR APEX RINSE ADDITIVE",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4724,
      "Name": "CLNR ALTO SHM SPRAY-COMBITHRM",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4584,
      "Name": "CLNR ECL PATHWAYS DRAIN (S/O)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4272,
      "Name": "CLNR TURBO CHEF OVEN CLEANER (S/O)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 3170,
      "Name": "PAD SCOURING PURPLE",
      "Unit Size": "BOX",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4025,
      "Name": "CLNR STEAM WAND SCHAERER",
      "Unit Size": "BOTTL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4004,
      "Name": "CLNR ALTO SHM COMBICLN CTPTAB",
      "Unit Size": "BKT5",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4593,
      "Name": "CLNR ECL PEROXIDE MULTI-SURFACE DIS",
      "Unit Size": "2GAL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4534,
      "Name": "CLNR ECL OASIS QUAT SANITIZER",
      "Unit Size": "2.5GL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": 4495,
      "Name": "CLNR ECL OASIS FLOOR AMMONIATED",
      "Unit Size": "2.5GL",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SUPPLIES",
      "Location": "Outpost",
      "Area": "Outpost Main Order"
    },
    {
      "Item ID": "0683",
      "Name": "PRD VEG CUCUMBER ENGLISH",
      "Unit Size": "PAK6",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0789",
      "Name": "PRD VP BROCCOLI LG FLORETS",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0807",
      "Name": "PRD VP CELERY DICED 1/4",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0812",
      "Name": "PRD VP LETTUCE SHRD RIVER RANCH",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1219,
      "Name": "PRD VP ONION RED DICED 1/4",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 2806,
      "Name": "PRD VP ONION RED SLCD 1/4",
      "Unit Size": "5/LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0638",
      "Name": "PRD VP ONION RED SLCD 1/8",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0815",
      "Name": "PRD VP ONION WHIT DICED 1/4",
      "Unit Size": "5/LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0816",
      "Name": "PRD VP ONION WHIT SLCD 1/4",
      "Unit Size": "5/LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0817",
      "Name": "PRD VP ONION WHIT SLCD 1/8",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 4061,
      "Name": "PRD VP PEPPER GREEN SLCD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 3892,
      "Name": "PRD VP POT REDSKIN DICED 3/4",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0988",
      "Name": "PRD VP ROMAINE CHPD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 3582,
      "Name": "PRD VP SALAD MIX SPRING (3LB/CS)",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0634",
      "Name": "PRD VP TOMATO DICED",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1087,
      "Name": "PRD VP TOMATO SLCD 6X6 1/4",
      "Unit Size": "10 LB/CS",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0651",
      "Name": "LEMONS 90 CT",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0827",
      "Name": "ONIONS, GREEN",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0870",
      "Name": "GREEN PEPPERS",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0846",
      "Name": "GOLD DELICIOUS APPLES (100 CT)",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0952",
      "Name": "SAGE",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1365,
      "Name": "MINT",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0799",
      "Name": "CARROT MATCH STICKS",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE (FRESH CUT)",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 3538,
      "Name": "PRD FRU APPL GALA 125 CT",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1343,
      "Name": "PRD FRU LIME 48CT",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0857",
      "Name": "PRD FRU ORANGE 88CT",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 4874,
      "Name": "PRD HERB BASIL",
      "Unit Size": 1,
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 4748,
      "Name": "PRD HERB CILANTRO",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0828",
      "Name": "PRD HERB PARSLEY",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1276,
      "Name": "PRD HERB THYME",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0825",
      "Name": "PRD VEG CUCUMBER LG",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 4597,
      "Name": "PRD VEG GARLIC PLD",
      "Unit Size": "5/LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0872",
      "Name": "PRD VEG ONION RED (25 LB)",
      "Unit Size": "BAG",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0840",
      "Name": "PRD VEG ONION SPANISH",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1629,
      "Name": "PRD VEG PEPPER JALAPENO",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1177,
      "Name": "PRD VEG PEPPER POBLANO GREEN",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0869",
      "Name": "PRD VEG POT RED \"A",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 4026,
      "Name": "PRD VEG POT RED \"B",
      "Unit Size": "BAG",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1366,
      "Name": "PRD VEG SHALLOT",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1198,
      "Name": "PRD VEG SHALLOT PLD",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": "0833",
      "Name": "PRD VEG TOMATO 6X6",
      "Unit Size": "CASE",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 1388,
      "Name": "PRD VEG TOMATO GRAPE",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 4318,
      "Name": "PRD VEG TOMATO ROMA",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN PRODUCE",
      "Location": "Outpost",
      "Area": "PRODUCE"
    },
    {
      "Item ID": 2262,
      "Name": "BKY BREAD BAGUETTE",
      "Unit Size": "LOAF",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2293,
      "Name": "BKY BREAD ARTISAN MULTIGRAIN 5/8",
      "Unit Size": "LOAF",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2500,
      "Name": "SOURDOUGH LOAF",
      "Unit Size": "LOAF",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": "0704",
      "Name": "PANNINI BREAD",
      "Unit Size": "LOAF",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2395,
      "Name": "BKY A CROISSANT HAM/CHS",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2542,
      "Name": "BKY A CROISSANT PL LG",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2948,
      "Name": "CROISSANT - EVERYTHING BAGEL",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2649,
      "Name": "CROISSANT - CHOCOLATE",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2961,
      "Name": "BKY A DOUNT CHOC ICE",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2026,
      "Name": "BKY A DONUT CINN SUG",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2526,
      "Name": "BKY A DONUT RSD GLAZED",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2854,
      "Name": "BKY A DONUT VAN ICE",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2098,
      "Name": "BKY A MUFFIN BANANA",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2097,
      "Name": "BKY A MUFFIN BLUEBERRY",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2728,
      "Name": "BKY A MUFFIN PBJ",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2724,
      "Name": "BKY A MUFFIN CHOC CHIP",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2358,
      "Name": "BKY CINN SWL LOAF",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2601,
      "Name": "BKY PUMPKIN LOAF",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2475,
      "Name": "BKY ZUCCHINI LOAF",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2789,
      "Name": "BKY BANANA CHIP LOAF",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2433,
      "Name": "IND BUNDT - LEMON POPPY",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2413,
      "Name": "BKY Z INDIV CHSCAKE BLUEBERRY",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2318,
      "Name": "BKY Z SCONE BLUEBERRY",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2439,
      "Name": "BKY BISCUIT CHEDDAR BACON",
      "Unit Size": "DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2067,
      "Name": "BKY STICKY 2.66 OZ PECAN",
      "Unit Size": "DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2029,
      "Name": "BKY STICKY 2.66 OZ PL",
      "Unit Size": "DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2687,
      "Name": "BKY A ROLL 2.66 OZ CINN",
      "Unit Size": "DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2977,
      "Name": "BKY Z HAZELNUT HAND TART",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2346,
      "Name": "BKY BREAD PULL ORANGE GLZ",
      "Unit Size": "12 CUT LOAF",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER (BAKERY)",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2778,
      "Name": "AUG/SEPT: ONION POPPY DANISH",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: DESSERT",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2834,
      "Name": "OCT:  PUMPKIN WHITE CHOC CHIP SCONE",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: DESSERT",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2864,
      "Name": "NOV: HAM & CHEESE DANISH",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: DESSERT",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2177,
      "Name": "DEC: RASPBERRY FILLED DONUT W/ GANACHE",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: DESSERT",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2352,
      "Name": "JAN: LARGE VANILLA CREAM PUFF",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: DESSERT",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2860,
      "Name": "FEB: SUNDRIED TOMATO & FETA DANISH",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: DESSERT",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2164,
      "Name": "MARCH: COUNTRY BACON BRIOCHE",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: DESSERT",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2887,
      "Name": "APRIL/MAY: PINK LEMONADE MUFFIN",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: DESSERT",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2888,
      "Name": "AUG/SEPT: UPSIDE DOWN APRICOT CUPCAKE",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: MUFFIN/SCONE",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2497,
      "Name": "OCT: PUMPKIN WHOOPIE PIE",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: MUFFIN/SCONE",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2903,
      "Name": "NOV: CHAI APPLE BUNDT CAKE",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: MUFFIN/SCONE",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2200,
      "Name": "DEC: WHITE CHOC PEPPERMINT CHEESECAKE",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: MUFFIN/SCONE",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2801,
      "Name": "JAN: LINZER TART",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: MUFFIN/SCONE",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2391,
      "Name": "FEB: CHERRY LEMON BISCOTTI",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: MUFFIN/SCONE",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2226,
      "Name": "MARCH: GRASSHOPPER FUDGE CAKE",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: MUFFIN/SCONE",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2696,
      "Name": "APRIL/MAY: OLIVE OIL CAKE W/ LEMON & FIG",
      "Unit Size": "1/2 DZ",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SPECIALS: MUFFIN/SCONE",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2551,
      "Name": "CARROT CAKE",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CAKES / DESSERTS",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2578,
      "Name": "CHOCOLATE MOUSSE CAKE",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CAKES / DESSERTS",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2679,
      "Name": "CHOCOLATE PB CRUNCH CAKE",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CAKES / DESSERTS",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2756,
      "Name": "RED VELVET CAKE",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CAKES / DESSERTS",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": 2132,
      "Name": "WHOOPIE PIE BL/WH",
      "Unit Size": "DOZEN",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CAKES / DESSERTS",
      "Location": "Outpost",
      "Area": "Bakery"
    },
    {
      "Item ID": "0751",
      "Name": "MILK HALF&HALF QUART",
      "Unit Size": "QT",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": 1362,
      "Name": "CRM WHIPPING HEAVY QT",
      "Unit Size": "QT",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": "0466",
      "Name": "CHEESE RICOTTA 10 LB",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": 4007,
      "Name": "CHEESE CRM STRAW 5LB",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": 2985,
      "Name": "CHEESE CRM HONEY 5LB",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": 4471,
      "Name": "CHEESE CRM BLUEBERRY 5 LB",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": "0753",
      "Name": "CHEESE CRM 10LB",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": 4223,
      "Name": "BUTTER CRMRY UNSALTED 36-1#",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": "0942",
      "Name": "MILK 1/2 GAL BUTTER",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": 1541,
      "Name": "MILK 1/2 GAL 2%",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": "0923",
      "Name": "MILK 1/2 GAL SKIM",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": "0752",
      "Name": "SOUR CREAM REAL 5 QUART",
      "Unit Size": "5 QT",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {
      "Item ID": 3502,
      "Name": "MILK 1/2 GAL WHL",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN (CREAMERY)",
      "Location": "Outpost",
      "Area": "Dairy"
    },
    {      "Item ID": 5601,
      "Name": "CHEERIOS - CUP",
      "Unit Size": "60/CS",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5569,
      "Name": "FROSTED FLAKES - CUP",
      "Unit Size": "6/PK",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5678,
      "Name": "FROSTED FLAKES 13.5 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5045,
      "Name": "FROOT LOOPS 10 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7737,
      "Name": "CORN POPS 10 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5290,
      "Name": "SPECIAL K FRUIT & YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7762,
      "Name": "SPECIAL K RED BERRIES",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5334,
      "Name": "MINI WHEATS 18 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7686,
      "Name": "BEAR NAKED GRANOLA - ALMOND",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7614,
      "Name": "BEAR NAKED GRANOLA - THREE BERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7535,
      "Name": "BEAR NAKED GRANOLA - CINNAMON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5686,
      "Name": "QUAKER OATS CUP - APPLE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5650,
      "Name": "KODIAK CUP - BROWN SUGAR",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5822,
      "Name": "KODIAK CUP - MAPLE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5695,
      "Name": "KODIAK CUP - DARK CHOCOLATE MUFFIN",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5608,
      "Name": "KODIAK CUP - CH. FUDGE BROWNIE CUP",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6316,
      "Name": "NUTRIGRAIN BAR GP - STRAWBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6315,
      "Name": "NUTRIGRAIN BAR GP - APPLE CINNAMON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7961,
      "Name": "POP TARTS - STRAWBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7962,
      "Name": "POP TARTS - BROWN SUGAR CINNAMON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7857,
      "Name": "POP TARTS - BLUEBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7991,
      "Name": "POP TARTS - SMORES",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4199,
      "Name": "CHEETOS MAC/CH BOLD CUP",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5744,
      "Name": "MEIJI - CHOCOLATE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5741,
      "Name": "MEIJI - STRAWBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5750,
      "Name": "MEIJI - VANILLA",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5731,
      "Name": "MEIJI - CHOCOROOMS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7916,
      "Name": "TWIX KING SIZE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7902,
      "Name": "SNICKERS SINGLE 1.88 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 50072,
      "Name": "TWIX - CARAMEL SINGLE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5081,
      "Name": "CARMEX CHERRY 2 CT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5100,
      "Name": "CARMEX ORIG STICK 2 CT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5156,
      "Name": "SCUNCI",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5061,
      "Name": "TOOTHBRUSH",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5101,
      "Name": "DENTEK FLOSSERS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5145,
      "Name": "DUCT TAPE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7701,
      "Name": "PRINGLES - ORIGINAL 5.2 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7736,
      "Name": "PRINGLES - BBQ 5.5OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7756,
      "Name": "PRINGLES - SALT & VINEGAR 5.5 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 39,
      "Name": "PRINGLES - SOUR CREAM 5.5 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6270,
      "Name": "PRINGLES - SCORCHIN CHEDDAR 5.6 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6294,
      "Name": "PRINGLES - SCORCHIN BBQ 5.6 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5728,
      "Name": "J. LINK TERIYAKI 1.5 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7692,
      "Name": "PRINGLES - ORIGINAL 2.38 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5383,
      "Name": "PRINGLES - BBQ 2.5 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5225,
      "Name": "PRINGLES - PIZZA 2.5 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5336,
      "Name": "REAL SNACK - JALAPENO",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5326,
      "Name": "REAL SNACK - TURKEY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4870,
      "Name": "J. LINK - KIPPERED ORIGINAL",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5273,
      "Name": "J. LINK - KIPPERED PEPPE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4853,
      "Name": "POP TARTS S/S - BLUEBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5324,
      "Name": "POP TARTS S/S - CHERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7999,
      "Name": "POP TARTS S/S - SMORES",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4857,
      "Name": "POP TARTS S/S - STRAWBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7728,
      "Name": "BOLT PROBAR - RASPBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7731,
      "Name": "BOLT PROBAR - STRAWBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5187,
      "Name": "RXBAR PNUT BUTTER",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6316,
      "Name": "NUTRIGRAIN - STRAWBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6319,
      "Name": "NUTRIGRAIN - APPLE CINNAMON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5059,
      "Name": "DESSERT PARTAKE - CHOCOLATE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5206,
      "Name": "STACY GARLIC PARM",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5022,
      "Name": "EMERGEN C 30 CT - ORANGE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5074,
      "Name": "EMERGEN C 30 CT - PINK LEMONADE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6272,
      "Name": "QTIP - PURSE PACK 36 CT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6274,
      "Name": "QTIP - 12 CT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5679,
      "Name": "AXE SOLID PHOENIX",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6641,
      "Name": "DEGREE WOMEN BLACK/WHITE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 50381,
      "Name": "SECRET WD SOLID",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5886,
      "Name": "CANTU MOISTURE SHAMPOO",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6620,
      "Name": "SUAVE - CONDITIONER COCONUT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6615,
      "Name": "SUAVE - SHAMPOO COCONUT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6618,
      "Name": "SUAVE - SHAMPOO STRAWBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5215,
      "Name": "TRES SHAMPOO PURE DAMAGE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5214,
      "Name": "TRES CONDITIONER",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6244,
      "Name": "SUAVE MENS OCEAN CHARGE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5550,
      "Name": "DOVE HAND SANITIZER",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7752,
      "Name": "SUAVE HAND LOTION 3 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "GROCERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3085,
      "Name": "MILK ORGANIC CHOC 8 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3226,
      "Name": "MILK ORGANIC PLAIN 8 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5752,
      "Name": "OATMILK ORIG 11 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7055,
      "Name": "OATMILK CHOCOLATE 11 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4038,
      "Name": "SOY MILK CHOCOLATE 32 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1381,
      "Name": "SOY MILK ORIGINAL 32 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4053,
      "Name": "SOY MILK VANILLA 32 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1682,
      "Name": "SILK ORIGINAL ALMOND MILK 32 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1676,
      "Name": "SILK VANILLA ALMOND MILK 32 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1675,
      "Name": "ALMOND MILK 10 OZ CHOCOLATE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1673,
      "Name": "ALMOND MILK 10 OZ VANILLA UNSWEET",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5932,
      "Name": "SABRA HUMMUS 10 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5272,
      "Name": "CHOBANI - PEACH DRINK",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5835,
      "Name": "CHOBANI - BERRIES DRINK",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5838,
      "Name": "CHOBANI - STRAW/BANANA DRINK",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1471,
      "Name": "CHOBANI - BLUEBERRY YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1281,
      "Name": "CHOBANI - VANILLA YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1282,
      "Name": "CHOBANI - PEACH YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5212,
      "Name": "CHOBANI - STRAW CHEESECAKE  FLIP YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6984,
      "Name": "CHOBANI - COOKIES & CREAM  FLIP YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6413,
      "Name": "BAR PERFECT - PEANUT BUTTER",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5221,
      "Name": "BAR PERFECT - MILK CHOC PB",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6412,
      "Name": "BAR PERFECT - DARK CHOC PB",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7789,
      "Name": "SABRA AVOCADO TOAST",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5715,
      "Name": "OIKOS TRIPLE ZERO VANILLA YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5723,
      "Name": "OIKOS TRIPLE STRAWBERRY YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5726,
      "Name": "OIKOS VANILLA YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5718,
      "Name": "OIKOS PLAIN YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5712,
      "Name": "OIKOS BLUEBERRY YOGURT",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN COOLER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5532,
      "Name": "JD BACON BOWL",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5396,
      "Name": "JD BKFST BOWL - MEAT LOVERS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5441,
      "Name": "ALPHA CHIK/N NUGGETS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5042,
      "Name": "ALPHA CHIK'N NUGGETS SIZZLIN",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5461,
      "Name": "ALPHA POT PIE BUFFALO CHICKEN",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5460,
      "Name": "ALPHA BURRITO PHILLY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5090,
      "Name": "ALPHA BURRITO CHICKEN FAJITA",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7572,
      "Name": "DELI EX - BUFFLO CHIX WRAP",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7573,
      "Name": "DELI EX - CHIX CAESAR WRAP",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 5043,
      "Name": "DELI EX - ITAL SPICY HAM PEP PROVO",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7570,
      "Name": "DELI EX - ITALIAN SUB",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3594,
      "Name": "INNOVASIAN - POT STICKER CHICKEN",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3589,
      "Name": "INNOVASIAN - POT STICKER PORK",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3596,
      "Name": "INNOVASIAN - SHUMAI PORK",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "WALK-IN FREEZER",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54188,
      "Name": "YOG STRAWBERRY & GRANOLA",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54177,
      "Name": "SNACK PROTEIN POWER PACK",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54175,
      "Name": "SNACK FRUIT & CHEESE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54180,
      "Name": "SNACK CRUDITE & RANCH",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54178,
      "Name": "SNACK CHIX HUMMUS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54181,
      "Name": "SNACK CHEESE & GRAPES",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54176,
      "Name": "SNACK BEST FRIENDS BOX",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54158,
      "Name": "SAND TURKEY & CHEDDAR",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54157,
      "Name": "SAND TOMATO & MOZZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54160,
      "Name": "SAND ITALIAN STALLION",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54155,
      "Name": "SAND ITALIAN COMBO",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54154,
      "Name": "SAND HONEY TURKEY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54153,
      "Name": "SAND GRILLED CHIX & CHEDDAR",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54150,
      "Name": "SAND ASIAGO TURKEY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54151,
      "Name": "SAND CHIX BACON CLUB",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54173,
      "Name": "SALAD GREEK",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54172,
      "Name": "SALAD GARDEN",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54171,
      "Name": "SALAD COBB",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54170,
      "Name": "SALAD CHIX CAESAR",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54169,
      "Name": "SALAD CHEF",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54183,
      "Name": "FRUIT RED GRAPES",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54184,
      "Name": "FRUIT PINEAPPLE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54187,
      "Name": "FRUIT MIXED",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54186,
      "Name": "FRUIT MIXED BERRIES",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54182,
      "Name": "FRUIT CANTALOUPE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54195,
      "Name": "ENTRÉE CHIX PARMESAN",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54193,
      "Name": "DESSERT DIRT PUDDING",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 54192,
      "Name": "DESSERT CANNOLI DIPPER",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "SALADS & SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7610,
      "Name": "CREAM CHEESE 8 OZ",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3502,
      "Name": "WHOLE MILK 1/2G",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1521,
      "Name": "CHOCOLATE MILK 1/2G",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4417,
      "Name": "WHOLE MILK - CHUG",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4419,
      "Name": "CHOCOLATE MILK - CHUG",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1573,
      "Name": "ORANGE JUICE - 1/2G",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1589,
      "Name": "ORANGE JUICE - CHUG",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1384,
      "Name": "LEMONADE - 1/2G",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1758,
      "Name": "LEMONADE - CHUG",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1006,
      "Name": "ICED TEA - 1/2G",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1641,
      "Name": "ICED TEA - CHUG",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3321,
      "Name": "ICED TEA PEACH - CHUG",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1678,
      "Name": "ICED TEA GREEN - CHUG",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3320,
      "Name": "ICED TEA RASPBERRY - CHUG",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4842,
      "Name": "PROTEIN SHAKE - CHOCOLATE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4846,
      "Name": "PROTEIN SHAKE - STRAWBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 52427,
      "Name": "TUMBLER",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - DAIRY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1683,
      "Name": "DEATH BY CHOCOLATE 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4365,
      "Name": "BUTTER PECAN 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3081,
      "Name": "ALUMNI SWIRL 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4383,
      "Name": "GREEN MINT CHIP 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3180,
      "Name": "KEENY BEANY 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4403,
      "Name": "CHOCOLATE 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4385,
      "Name": "CH. CHIP COOKIE DOUGH 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4399,
      "Name": "COOKIES & CREAM 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1685,
      "Name": "STRAWBERRY 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3182,
      "Name": "WPSU COFFEE BREAK 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4402,
      "Name": "PEACHY PATERNO 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1684,
      "Name": "COCONUT CHIP 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4404,
      "Name": "VANILLA 1/2 GALLON",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 52073,
      "Name": "PB CUP PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4651,
      "Name": "THON PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7745,
      "Name": "MINT CHIP PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 52023,
      "Name": "HAPPY HAPPY JOY JOY PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7744,
      "Name": "PB SWIRL PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3957,
      "Name": "PEACHY PATERNO PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3950,
      "Name": "DEATH BY CHOCOLATE PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 52092,
      "Name": "MONKEY BUSINESS PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7742,
      "Name": "STRAWBERRY PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 52080,
      "Name": "SCHOLARS CHIP PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 52252,
      "Name": "BJC JAMS PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3916,
      "Name": "CH. CHIP COOKIE DOUGH PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3930,
      "Name": "COOKIES & CREAM PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4937,
      "Name": "CHOCOLATE PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3947,
      "Name": "ALUMNI SWIRL PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 7740,
      "Name": "WPSX COFFEE PINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "CREAMERY - ICE CREAM",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6195,
      "Name": "VANILLA",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "ICE CREAM SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 6192,
      "Name": "CHOCOLATE",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "ICE CREAM SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": "",
      "Name": "STRAWBERRY",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "ICE CREAM SANDWICHES",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 2151,
      "Name": "GIANT CHOC CHIP COOKIE (WH)",
      "Unit Size": "36/CS",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "BAKERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 2881,
      "Name": "BROOKIE (WH)",
      "Unit Size": "40/CS",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "BAKERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 2040,
      "Name": "CHOC ICED BROWNIE (WH)",
      "Unit Size": "40/CS",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "BAKERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 2455,
      "Name": "SMALL COOKIE TIN (WH)",
      "Unit Size": "12/CS",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "BAKERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 2633,
      "Name": "7\" VAN CELEBRATION CAKE (BKY)",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "BAKERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 2634,
      "Name": "7\" CHOC CELEBRATION CAKE (BKY)",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "BAKERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 2649,
      "Name": "CLASSIC COOKIE BOX - 6 EA BROWNIE, BROOKIE, CH CHIP COOKIE, PAW PRINTS",
      "Unit Size": "",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "BAKERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 2922,
      "Name": "BAKERY TUMBLER/PRO BAR PACKAGE",
      "Unit Size": "EACH",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "BAKERY",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4204,
      "Name": "DELI SALAMI CALABRESE",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "PSML",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4217,
      "Name": "DELI  SALAMI COFFEE STOUT",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "PSML",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 1901,
      "Name": "DELI SALAMI DI ROSA",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "PSML",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 3290,
      "Name": "DELI SALAMI GENOA",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "PSML",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4367,
      "Name": "DELI SALAMI TRUFFLE",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "PSML",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    {
      "Item ID": 4391,
      "Name": "DELI SALAMI FINOCCHIONA",
      "Unit Size": "LB",
      "PAR": 0,
      "Order Quantity": 0,
      "Category": "PSML",
      "Location": "Provisions",
      "Area": "Warehouse"
    },
    
  ];

  const cacheKey = "orderChanges";
  let changes = JSON.parse(localStorage.getItem(cacheKey)) || {};
  let currentFilteredData = []; // To store currently displayed items
  
  // Function to populate categories based on selected Area
  function populateCategories(area) {
      console.log(`Populating categories for area: ${area}`);
      const filteredData = data.filter(item => item.Area === area);
      currentFilteredData = filteredData; // Store current data for search functionality
      console.log(filteredData); // Debug log
      const categories = [...new Set(filteredData.map(item => item.Category))];
  
      categorySelect.innerHTML = '';
      categories.forEach(category => {
          const option = document.createElement("option");
          option.value = category;
          option.textContent = category;
          categorySelect.appendChild(option);
      });
  
      // Populate items for the first category by default
      if (categories.length > 0) {
          categorySelect.value = categories[0];
          populateTable(categories[0], area);
      }
  
      // Populate existing categories list (for Manage Categories tab)
      existingCategories.innerHTML = '';
      categories.forEach(category => {
          const div = document.createElement("div");
          div.textContent = category;
          existingCategories.appendChild(div);
      });
  }
  
  // Function to populate Areas based on selected Location
  function populateAreas(location) {
      console.log(`Populating areas for location: ${location}`);
      const filteredData = data.filter(item => item.Location === location);
      console.log(filteredData); // Debug log
      const areas = [...new Set(filteredData.map(item => item.Area))];
  
      areaSelect.innerHTML = '';
      areas.forEach(area => {
          const option = document.createElement("option");
          option.value = area;
          option.textContent = area;
          areaSelect.appendChild(option);
      });
  
      // Populate categories for the first area by default
      if (areas.length > 0) {
          areaSelect.value = areas[0];
          populateCategories(areas[0]);
      }
  }
  
  // Function to populate items table based on selected category and Area
  function populateTable(category, area) {
      console.log(`Populating table for category: ${category}, area: ${area}`);
      itemTableBody.innerHTML = "";
      const filteredData = data.filter(item => item.Category === category && item.Area === area);
      currentFilteredData = filteredData; // Store current data for search functionality
      console.log(filteredData); // Debug log
      renderItems(filteredData);
  }
  
  // Function to render items
  function renderItems(items) {
      itemTableBody.innerHTML = ''; // Clear existing rows
      items.forEach(item => {
          const row = document.createElement("tr");
          const cachedQuantity = changes[item["Item ID"]] || item["Order Quantity"];
          row.innerHTML = `
              <td>${item["Item ID"]}</td>
              <td>${item.Name}</td>
              <td>${item["Unit Size"]}</td>
              <td>
                  <div class="quantity-control">
                      <button class="quantity-down">-</button>
                      <input type="number" value="${cachedQuantity}" min="0" class="form-control" data-id="${item["Item ID"]}">
                      <button class="quantity-up">+</button>
                  </div>
              </td>
          `;
          itemTableBody.appendChild(row);
      });
  
      // Add event listeners to quantity buttons
      document.querySelectorAll("#itemTableBody .quantity-up").forEach(button => {
          button.addEventListener("click", function() {
              const input = this.parentElement.querySelector('input');
              input.value = parseInt(input.value) + 1;
              updateQuantity(input);
          });
      });
  
      document.querySelectorAll("#itemTableBody .quantity-down").forEach(button => {
          button.addEventListener("click", function() {
              const input = this.parentElement.querySelector('input');
              if (parseInt(input.value) > 0) {
                  input.value = parseInt(input.value) - 1;
                  updateQuantity(input);
              }
          });
      });
  
      // Add event listeners to inputs
      document.querySelectorAll("#itemTableBody input").forEach(input => {
          input.addEventListener("change", function() {
              updateQuantity(this);
          });
      });
  }
  
  function updateQuantity(input) {
      const itemId = input.getAttribute("data-id");
      changes[itemId] = parseInt(input.value, 10);
      localStorage.setItem(cacheKey, JSON.stringify(changes));
  }
  
  // Event listener for Location selection
  locationSelect.addEventListener("change", function() {
      populateAreas(this.value);
  });
  
  // Event listener for Area selection
  areaSelect.addEventListener("change", function() {
      populateCategories(this.value);
  });
  
  // Event listener for category selection
  categorySelect.addEventListener("change", function() {
      const area = areaSelect.value;
      populateTable(this.value, area);
  });
  
  // Event listener for Search Input
  document.getElementById('searchInput').addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const filteredItems = currentFilteredData.filter(item =>
          item["Item ID"].toString().includes(searchTerm) || item.Name.toLowerCase().includes(searchTerm)
      );
      renderItems(filteredItems);
  });
  
  // Event listener for finishing and sending the order
  finishAndSendButton.addEventListener("click", function() {
      const itemsToOrder = Object.keys(changes).map(itemId => {
          return data.find(item => item["Item ID"] == itemId && changes[itemId] > 0);
      }).filter(item => item);
  
      if (itemsToOrder.length > 0) {
          // Implement the logic to handle this data as required
          alert('Order ready to be sent: ' + JSON.stringify(itemsToOrder));
          changes = {};
          localStorage.removeItem(cacheKey);
      } else {
          alert('No items to order.');
      }
  });
  
  // Initialize with the first Location
  populateAreas(locationSelect.value);
  });  
