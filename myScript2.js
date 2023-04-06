function getBarcode(){
    const barcode = window.location.search.replace('?input_value=', '');
    console.log(barcode);
    return barcode
}

getBarcode()

async function getData(barcode) {
    const url = "https://world.openfoodfacts.org/api/v0/product/"+barcode+".json";
    const response = await fetch(url);
    const jsonData = await response.json();
    const picUrl = jsonData.product.image_url;
    document.querySelector('img').src = picUrl;
    console.log(response.data);
    const additives = jsonData.product.additices_original_tags;
    const allergens = jsonData.product.allergens_from_ingredients;
    const brand = jsonData.product.brand_owner;
    const code = jsonData.product.code;
    const generic_name = jsonData.product.generic_name;
    const nutriment = jsonData.product.nutriments;
    const nutriscore = jsonData.product.nutriscore_grade;
    document.getElementById('additives').innerHTML = additives;
    document.getElementById('allergens').innerHTML = allergens;
    document.getElementById('brand').innerHTML = brand;
    document.getElementById('code').innerHTML = code;
    document.getElementById('generic_name').innerHTML = generic_name;
    document.getElementById('nutriment').innerHTML = nutriment;
    document.getElementById('nutriscore').innerHTML = nutriscore;
    }

const barcode = getBarcode()
getData(barcode)