let imgBaseUrl = 'https://raw.githubusercontent.com/tagmiller/static/master/img/js-shop/'
const brand = [
    'Mango People T-shirt',  'Mango People T-shirt',  'Mango People T-shirt',  'Mango People T-shirt',
    'Mango People T-shirt',  'Mango People T-shirt',  'Mango People T-shirt',  'Mango People T-shirt'];

const price = [
    '52.00', '52.00', '52.00', '52.00', '52.00', '52.00', '52.00', '52.00'];


function createCatalog() {
    let arr = [];
    brand.forEach((brand, index) => {
        let id = 'Item_' + index;
        let img = imgBaseUrl + `fi-${index + 1}.png`;
        arr.push(createItem(img, brand[index], price[index], id))
    });
    return arr
}

function createItem(img, brand, price, _id) {
    return {img, brand, price, _id}
}

let catalog = {
    catalog: [],
    container: null,
    _init() {
        this.container = document.querySelector('#product_boxes');
        this.catalog = createCatalog();
        this._render()
    },
    _render() {
        let html= '';
        this.catalog.forEach(us => {
            html+= `
             <div class="product">
                  <a href="#"><img class="product__img" src="${us.img} alt="photo product"/></a>
                  <div class="product__content">
                    <div class="product__name">${us.brand} </div>
                    <p class="product__price"><span>$</span>${us.price}  </p>
                  </div>
                  <a href="#" class="product__add">Add to Cart</a>
        </div>
            
            `
        })
        this.container.innerHTML
    }
}