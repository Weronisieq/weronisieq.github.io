var PRODUCTS = [
    { id: 1, img: './Assets/jacket1.jpg', name: 'Miss World', price: 29.99 },
    { id: 2, img: './Assets/jacket4.jpg', name: 'Rose On Fire', price: 42.99 },
    { id: 3, img: './Assets/jacket3.jpg', name: 'LH Tape Puff', price: 44.99 }
]

var Product = function(product) {

    this.id = product.id
    this.img = product.img
    this.name = product.name
    this.price = product.price

}

Product.prototype.generateView = function() {

    return $.parseHTML(`<div class="product" draggable="true" data-product-id="${this.id}">
        <img class="product--image" draggable="false" src="${this.img}">
        <div class="product--description">
            <h2 class="product--title">${this.name}</h2>
            <p class="product--price">${this.price}</p>
        </div>
    </div>`)

}

var Cart = function() {

    this.products = []

}

Cart.prototype.isEmpty = function() {

    return this.products.length === 0

}

Cart.prototype.findItem = function(id) {

    for(var i = 0; i < this.products.length; i++)
        if (this.products[i].id == id)
            return this.products[i]

    return null

}

Cart.prototype.addItem = function(product) {

    if (!this.findItem(product.id))
        this.products.push(Object.assign(product, { ammount: 1}))
    
    else
        this.addAmmount(product.id, 1)

}

Cart.prototype.addAmmount = function(id, ammount) {

    this.products.forEach(function(product){
        if(product.id == id) product.ammount += ammount
    })

}

Cart.prototype.generateView = function() {

    var ammount = this.products.reduce(function(curr, prev){
        return prev.ammount + curr
    }, 0)

    var status = ammount ? `<p class="cart--status">${ammount}</p>` : ''

    return $.parseHTML(`<div class="cart" droppable="true">
        <div class="cart--icon"></div>
        ${status}
    </div>`)

}

var Recipie = function(cart) {

    this.cart = cart

}

Recipie.prototype._generateEntry = function(product) {

    return `<li class="recipie--entry">
        <p class="repcipie--entry--title">${product.name}</p>
        <p class="recipie--entry--ammount">${product.ammount}</p>
        <p class="recipie--entry--price">${parseFloat(product.price * product.ammount).toFixed(2)}$</p>
    </li>`

}

Recipie.prototype._generateSummary = function() {

    var total = this.cart.products.reduce(function(curr, prev){
        return (prev.price * prev.ammount) + curr
    }, 0)

    return `<li class="recipie--summary">
        <p class="recipie--summary--total">${total}$</p>
    </li>`

}

Recipie.prototype.generateView = function() {

    var self = this

    var recipie = this.cart.products.reduce(function(curr, prev){
        return curr + self._generateEntry(prev)
    }, '') + this._generateSummary()

    return $.parseHTML(`<ul class="recipie">
        ${recipie}
    </ul>`)

}

var app = {

    containers: {
        header: 'header',
        products: '.products',
        product: 'product',
        cart: 'cart',
        recipie: 'recipie'
    },
    products: [],
    cart: null,
    recipie: null,

    events: {
        
        drag: function(event) {

            event.dataTransfer.setData('product-id', event.target.getAttribute('data-product-id'))

        },

        drop: function(event) {

            event.preventDefault()
            var data = event.dataTransfer.getData('product-id')

            if(!app.cart.findItem(data))
                app.cart.addItem(app.products.filter(function(product){
                    return product.id == data
                })[0])

            else
                app.cart.addAmmount(data, 1)
            
            app.events.update()

        },

        allowDrop: function(event) {

            event.preventDefault()

        },

        toggle: function() {
            
            if ($(app.containers.header).has(`.${app.containers.recipie}`).length > 0)
                $(`.${app.containers.recipie}`).remove()

            else if (!app.cart.isEmpty())
                $(app.containers.header).append(app.recipie.generateView())

        },

        update: function() {

            $(`.${app.containers.cart}`).remove()
            $(app.containers.header).append(app.cart.generateView())

            if($(app.containers.header).has(`.${app.containers.recipie}`).length > 0) {
                $(`.${app.containers.recipie}`).remove()
                $(app.containers.header).append(app.recipie.generateView())
            }

            app.events.init()

        },

        init: function() {

            Array.from(document.getElementsByClassName(app.containers.product))
                .forEach(function(element) {
                    element.addEventListener('dragstart', app.events.drag)
                })
                
            Array.from(document.getElementsByClassName(app.containers.cart))
                .forEach(function(element){
                    element.addEventListener('dragover', app.events.allowDrop)
                    element.addEventListener('drop', app.events.drop)
                })
            
            Array.from(document.getElementsByClassName(app.containers.recipie))
                .forEach(function(element){
                    element.addEventListener('dragover', app.events.allowDrop)
                    element.addEventListener('drop', app.events.drop)
                })

            Array.from(document.getElementsByClassName(app.containers.cart))
                .forEach(function(element){
                    element.addEventListener('click', app.events.toggle)
                })

        }

    },

    init: function() {

        app.cart = new Cart()
        app.recipie = new Recipie(app.cart)

        PRODUCTS.forEach(function(product) {
            app.products.push(new Product(product))
        })

        app.products.forEach(function(product){
            $(app.containers.products).append(product.generateView())
        })

        app.events.update()
        app.events.init()

    }

}

$(document).ready(function(){

    app.init()

})
function slideMenu() {
                $("nav > ul > li").slideToggle(500);
            }