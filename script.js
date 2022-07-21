//FUNCTIONALITY
// class Item {
// 	constructor(name, price, category) {
// 		this.name = name;
// 		this.image = `img/${name}.png`;
// 		this.price = price;
// 		this.category = category;
// 	}
// }

// const stockList = [];
// const stockItemList = [];

// const stockItem = (obj) => {
// const { name, image, price } = obj;
// const one = `<div class="main__layout"><img src='${image}' alt="#" class="main__img" /></div><div class="main__add">add cart</div><div class="main__name">${name}</div>
// <div class="main__price">₦${price}.00</div>`;
// 	stockList.push(one);
// };

// const saveToStore = (obj) => {
// 	stockItemList.push(obj);
// };

// //Create a UI
// const addToUI = () => {
// 	const ui = document.querySelector(".main");
// 	ui.innerHTML = "";

// 	for (let i = 0; i < stockList.length; i++) {
// 		const element = stockList[i];
// 		const e = document.createElement("div");
// 		e.className = "main__item";
// 		e.innerHTML = element;

// 		ui.appendChild(e);
// 	}
// };

// const app = () => {
// 	//Create an object
// 	const item1 = new Item("spaghetti", 125, "others");
// 	const item2 = new Item("wine", 25, "drinks");
// 	const item3 = new Item("pastry", 100, "baking");
// 	const item4 = new Item("vegetables", 100, "others");
// 	const item5 = new Item("vegetables", 100, "others");

// 	//Save to store
// 	saveToStore(item1);
// 	saveToStore(item2);
// 	saveToStore(item3);
// 	saveToStore(item4);
// 	saveToStore(item5);

// 	//Stock the items
// 	stockItem(item1);
// 	stockItem(item2);
// 	stockItem(item3);
// 	stockItem(item4);
// 	stockItem(item5);

// 	//Adding to UI
// 	addToUI();
// };

// const display = (list) => {
// 	for (let i = 0; i < list.length; i++) {
// 		let filterItem = list[i];

// 		stockItem(filterItem);
// 	}
// 	addToUI();
// };

// const search = () => {
// 	//Emptied the stock list
// 	stockList.length = 0;
// 	let searchList = [];
// 	console.log(stockItemList);
// 	for (let i = 0; i < stockItemList.length; i++) {
// 		//Getting the text input from the search bar
// 		let input = document.querySelector(".search__input");
// 		let el = stockItemList[i].name;
// 		let value = input.value;

// 		if (value === el) {
// 			searchList.push(stockItemList[i]);
// 		}
// 	}
// 	console.log(searchList);
// 	display(searchList);
// 	searchList = [];
// 	console.log(searchList);
// };

// const main = () => {
// 	app();

// 	//search
// 	let icon = document.querySelector(".fa-magnifying-glass");
// 	icon.addEventListener("click", () => {
// 		search();
// 	});

// 	//Category filter
// 	let dropdown = document.querySelector(".nav__item--dropdown");

// 	dropdown.addEventListener("change", () => {
// 		stockList.length = 0;
// 		let text = dropdown.options[dropdown.selectedIndex].text;
// 		let categoryList = [];

// 		for (let i = 0; i < stockItemList.length; i++) {
// 			let list = stockItemList[i].category;

// 			if (text.toLowerCase() === list) {
// 				categoryList.push(stockItemList[i]);
// 			}
// 		}
// 		display(categoryList);
// 	});
// };
// main();

// //CART FUNCTIONALITY
// class Cart {
// 	constructor(name, price, quantity) {
// 		this.name = name;
// 		this.image = `img/${name}.png`;
// 		this.price = price;
// 		this.quantity = quantity;
// 		this.total = quantity * price;
// 	}
// }

// let add = document.querySelectorAll(".main__add");
// let cart = document.querySelector(".cart");
// let badge = document.querySelector(".cart__badge");
// let menu = document.querySelector(".cart__menu");
// // let count = 0;

// //Displaying and hiding the cart menu
// const cartDisplay = () => {
// 	cart.addEventListener("click", () => {
// 		//Cart menu display
// 		let display = menu.style.display;

// 		if (display == "block") {
// 			menu.style.display = "none";
// 		} else {
// 			if (badge.innerText < 1) {
// 				menu.style.display = "none";
// 			} else {
// 				menu.style.display = "block";
// 			}
// 		}

// 		//Displaying the cart badge
// 		let popup = badge.style.display;
// 		if (popup == "block") {
// 			badge.style.display = "none";
// 		} else {
// 			badge.style.display = "block";
// 		}
// 	});
// };

// cartDisplay();

// //Stocking the cart Item
// const cartList = [];
// const cartItem = (obj) => {
// 	const { name, image, price, quantity, total } = obj;
// 	const one = `<img src= '${image}' class="cart__image"><div class="cart__counter"><button class="cart__control decrement">-</button><span class="cart__root">${quantity}</span><button class="cart__control increment">+</button></div><div class="cart__price">₦${price}.00</div><div class="cart__sum">₦${total}.00</div><i class="fa-solid fa-xmark"></i><div class="cart__name">${name}</div>`;

// 	cartList.push(one);
// };

// //Adding Item to the cart
// const addToCart = () => {
// 	for (let i of add) {
// 		i.addEventListener("click", () => {
// 			let match = false;
// 			let v = i.parentElement;

// 			let price = v.lastChild.textContent;
// 			let newPrice = parseInt(price.replace("₦", ""));
// 			let name = i.nextElementSibling.textContent;

// 			let cart1 = new Cart(name, newPrice, 1);

// 			//Go through cart list using for loop
// 			let list = document.querySelectorAll(".cart__list");
// 			if (list.length > 0) {
// 				for (let i of list) {
// 					let cartName = i.querySelector(".cart__name").innerText;
// 					let cartRoot = parseInt(i.querySelector(".cart__root").innerText);

// 					if (cartName.match(cart1.name)) {
// 						match = true;
// 						cartRoot += 1;
// 						// console.log(cartRoot);
// 					} else {
// 						match = false;
// 					}
// 				}
// 			}
// 			if (match) {
// 				let root = document.querySelectorAll(".cart__root");

// 				for (let i of root) {
// 					let itemID = i.parentElement.parentElement.lastChild.innerText;

// 					if (itemID.match(cart1.name)) {
// 						i.innerText = parseInt(i.innerText) + 1;
// 					}
// 				}
// 			} else {
// 				badge.style.display = "block";
// 				badge.innerText = parseInt(badge.innerText) + 1;
// 				cartItem(cart1);

// 				addToCartUI();
// 			}

// 			let increase = document.querySelectorAll(".increment");
// 			let decrease = document.querySelectorAll(".decrement");

// 			control(decrease);
// 			control(increase);

// 			deleteFromCartUI();
// 		});
// 	}
// };
// addToCart();

// //Adding item to cart UI
// const addToCartUI = () => {
// 	let ui = document.querySelector(".cart__empty");
// 	let accumulator = 0;
// 	ui.innerHTML = "";
// 	// console.log(ui);

// 	for (let i of cartList) {
// 		let li = document.createElement("li");
// 		// console.log(li);

// 		li.className = "cart__list";
// 		li.innerHTML = i;

// 		ui.appendChild(li);

// 		let checkout = parseInt(
// 			li.lastChild.previousElementSibling.innerText.replace("₦", "")
// 		);

// 		accumulator += checkout;
// 	}

// 	//Accumulating checkout total
// 	let cartTotal = document.querySelector(".cart__total");
// 	cartTotal.innerText = `(₦${accumulator}.00)`;
// };

// //controlling the quantity counter
// const control = (arr) => {
// 	for (let i of arr) {
// 		let e = i.nextElementSibling;
// 		// console.log(e);

// 		let root = e === null ? i.previousElementSibling : i.nextElementSibling;

// 		let accumulator = 0;
// 		i.addEventListener("click", () => {
// 			if (e === null) {
// 				root.innerText = parseInt(root.innerHTML) + 1;
// 				console.log(root.innerText);
// 				let price =
// 					root.parentElement.parentElement.lastChild.previousElementSibling
// 						.previousElementSibling;
// 				console.log(price);

// 				let realPrice = parseInt(price.innerText.replace("₦", ""));

// 				let total = parseInt(
// 					root.parentElement.parentElement.lastChild.previousElementSibling.previousElementSibling.innerText.replace(
// 						"₦",
// 						""
// 					)
// 				);

// 				let sum =
// 					root.parentElement.parentElement.lastChild.previousElementSibling
// 						.previousElementSibling;
// 				sum.innerText = `₦${root.innerText * realPrice}.00`;

// 				accumulator = realPrice + total;
// 				// console.log(accumulator);
// 			} else {
// 				let d = parseInt(root.innerHTML);
// 				if (d > 1) {
// 					root.innerText = d - 1;
// 					let price =
// 						root.parentElement.parentElement.lastChild.previousElementSibling
// 							.previousElementSibling;
// 					let realPrice = parseInt(price.innerText.replace("₦", ""));

// 					let total = parseInt(
// 						root.parentElement.parentElement.lastChild.previousElementSibling.innerText.replace(
// 							"₦",
// 							""
// 						)
// 					);

// 					accumulator = total - realPrice;
// 					// console.log(accumulator);

// 					let sum =
// 						root.parentElement.parentElement.lastChild.previousElementSibling;
// 					sum.innerText = `₦${root.innerText * realPrice}.00`;
// 				}
// 			}
// 			let cartTotal = document.querySelector(".cart__total");
// 			cartTotal.innerText = `(₦${accumulator}.00)`;
// 		});
// 	}
// };

// const deleteFromCartUI = () => {
// 	let deleteItem = document.querySelectorAll(".fa-xmark");

// 	for (let i of deleteItem) {
// 		let r = i.parentElement;
// 		let ul = r.parentElement;

// 		i.addEventListener("click", () => {
// 			badge.style.display = "block";
// 			badge.innerText = parseInt(badge.innerText) - 1;
// 			cartList.length = 0;
// 			ul.removeChild(r);
// 			let items = document.querySelectorAll(".cart__list");
// 			for (let i of items) {
// 				cartList.push(`${i.innerHTML}`);
// 			}
// 		});
// 	}
// };

const format = (num, decimal = "", check = "") => {
	decimal = decimal === "" ? 0 : 2;
	return num !== null
		? check !== ""
			? num.toFixed(decimal).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
			: parseInt(num)
					.toFixed(decimal)
					.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
		: 0;
};

// ----------------------- //
//UI
class UI {
	constructor(cartBadge, stockMenu, search, cartMenu = "") {
		this.cartBadge = cartBadge;
		this.stockMenu = stockMenu;
		this.search = search;
		this.cartMenu = cartMenu;
	}

	addStockToUI(stock) {
		this.stockMenu.innerHTML = "";
		for (let s of stock.stockList) {
			const { name, image, price } = s;
			const element = `<div class="main__layout"><img src='${image}' alt="#" class="main__img" /></div><div class="main__add">add cart</div><div class="main__name">${name}</div>
			<div class="main__price">₦${format(price, 2)}</div>`;
			const e = document.createElement("div");
			e.className = "main__item";
			e.innerHTML = element;
			this.stockMenu.appendChild(e);
		}
	}

	addCartToUI(cart) {
		this.cartMenu.list.innerHTML = "";
		for (let c of cart.cartList) {
			const { name, price, quantity, image, total } = c;
			const element = `<img src= '${image}' class="cart__image"><div class="cart__counter"><button class="cart__control decrement">-</button><span class="cart__root">${quantity}</span><button class="cart__control increment">+</button></div><div class="cart__price">₦${format(
				price,
				2
			)}</div><div class="cart__sum">₦${format(
				total,
				2
			)}</div><i class="fa-solid fa-xmark"></i><div class="cart__name">${name}</div>`;
			const list = document.createElement("li");
			list.className = "cart__list";
			list.innerHTML = element;
			this.cartMenu.list.appendChild(list);
		}
	}

	deleteCartItem(target) {
		let list = target.parentElement;
		this.cartMenu.list.removeChild(list);
	}

	addCheckoutToUI(sum) {
		this.cartMenu.checkout.innerText = `(₦${format(sum, 2)})`;
	}

	increment(target) {
		let root = target.previousElementSibling.innerText;
		root = parseInt(root) + 1;
		console.log(root);
	}
}

//Stock Item
class StockItem {
	constructor(name, price, quantity, category) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.image = `img/${name}.png`;
		this.category = category;
	}
}

//Stock
class Stock {
	constructor() {
		this.stockList = [];
	}

	addItem(stockItem) {
		this.stockList.push(stockItem);
	}
	deleteItem() {}
	updateItem() {}
}

//Cart
class Cart {
	constructor() {
		this.cartList = [];
		this.checkout = 0;
	}

	addItem(item) {
		for (let i of this.cartList) {
			if (i.name === item.name) {
				i.quantity += 1;
				i.total = i.quantity * i.price;
				return null;
			}
		}
		this.cartList.push(item);
	}
	deleteItem(item) {
		for (let i of this.cartList) {
			if (i.name === item) {
				this.cartList.splice(this.cartList.indexOf(i), 1);
			}
		}
	}
	updateItem(item, action) {
		for (let i of this.cartList) {
			if (i.name === item) {
				if (action === "+") {
					i.quantity += 1;
					i.total = i.quantity * i.price;
				} else {
					if (i.quantity > 1) {
						i.quantity -= 1;
						i.total = i.quantity * i.price;
					}
				}
			}
		}
	}
	checkoutSum() {
		this.checkout = 0;
		for (let i of this.cartList) {
			this.checkout += i.total;
		}
		return this.checkout;
	}
}

//Cart Item
class CartItem {
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.total = price * quantity;
		this.image = `img/${name}.png`;
	}
}

//cart Menu
class CartMenu {
	constructor(menu) {
		this.menu = menu;
		this.list = [];
		this.checkout = "$(0.00)";
	}
}

const mainApp = () => {
	let badge = document.querySelector(".cart__badge");
	let main = document.querySelector(".main");
	let search = document.querySelector(".search__input");
	let cart_menu = document.querySelector(".cart__menu");

	let cartMenu = new CartMenu(cart_menu);

	//Class objects
	let ui = new UI(badge, main, search, cartMenu);
	let stock = new Stock();
	let cart = new Cart();

	let stockItem1 = new StockItem("wine", 400, 1, "drinks");
	let stockItem2 = new StockItem("pastry", 100, 1, "bakery");
	let stockItem3 = new StockItem("cleaning", 50, 1, "cleaning");
	let stockItem4 = new StockItem("stationery", 100, 1, "stationery");
	let stockItem5 = new StockItem("vegetables", 200, 1, "groceries");
	let stockItem6 = new StockItem("spaghetti", 125, 1, "others");
	let stockItem7 = new StockItem("pots", 300, 1, "others");
	let stockItem8 = new StockItem("frozen", 150, 1, "frozens");
	let stockItem9 = new StockItem("snacks", 300, 1, "others");
	let stockItem10 = new StockItem("baking", 150, 1, "bakery");

	stock.addItem(stockItem1);
	stock.addItem(stockItem2);
	stock.addItem(stockItem3);
	stock.addItem(stockItem4);
	stock.addItem(stockItem5);
	stock.addItem(stockItem6);
	stock.addItem(stockItem7);
	stock.addItem(stockItem8);
	stock.addItem(stockItem9);
	stock.addItem(stockItem10);
	ui.addStockToUI(stock);

	// Actions
	let searchIcon = document.querySelector(".fa-magnifying-glass");
	let dropdown = document.querySelector(".nav__item--dropdown");
	let addToCartList = document.querySelectorAll(".main__add");
	let cartIcon = document.querySelector(".cart");

	//Search Icon Action
	searchIcon.addEventListener("click", () => {
		let filterStock = new Stock();
		for (let s of stock.stockList) {
			if (s.name === ui.search.value) {
				filterStock.addItem(s);
			}
		}
		ui.addStockToUI(filterStock);
	});

	//Category
	dropdown.addEventListener("change", () => {
		let text = dropdown.options[dropdown.selectedIndex].text;
		let filterStock = new Stock();
		for (let i of stock.stockList) {
			if (i.category === text.toLowerCase()) {
				filterStock.addItem(i);
			}
		}
		ui.addStockToUI(filterStock);
	});

	//Adding Item to cart
	for (let add of addToCartList) {
		add.addEventListener("click", () => {
			let cartList = document.querySelector(".cart__empty");
			let checkout = document.querySelector(".cart__checkout");
			cartMenu.list = cartList;
			cartMenu.checkout = checkout;

			let badge = ui.cartBadge;
			badge.style.display = "block";

			//Creating cart object
			let v = add.parentElement;
			let price = v.lastChild.textContent;
			let newPrice = parseInt(price.replace("₦", ""));
			let name = v.lastChild.previousElementSibling.textContent;
			let cartItem = new CartItem(name, newPrice, 1);

			cart.addItem(cartItem);
			badge.innerText = cart.cartList.length;
			let sum = cart.checkoutSum();
			ui.addCheckoutToUI(sum);
			ui.addCartToUI(cart);
		});
	}

	//increment and decrement control
	const control = (target, action) => {
		let name = target.parentElement.parentElement.lastChild.innerText;
		let cartList = document.querySelector(".cart__empty");
		let checkout = document.querySelector(".cart__checkout");
		cartMenu.list = cartList;
		cartMenu.checkout = checkout;

		cart.updateItem(name, action);
		let sum = cart.checkoutSum();
		ui.addCheckoutToUI(sum);
		ui.addCartToUI(cart);
	};
	let newList = document.querySelector(".cart__empty");
	newList.addEventListener("click", (e) => {
		let target = e.target;

		//Deleting Item From Cart UI
		switch (target.className) {
			case "fa-solid fa-xmark":
				let name = target.nextElementSibling.innerText;

				cart.deleteItem(name);
				ui.deleteCartItem(target);
				let badge = ui.cartBadge;
				badge.innerText = cart.cartList.length;
				let sum = cart.checkoutSum();
				ui.addCheckoutToUI(sum);

				break;

			case "cart__control increment":
				control(target, "+");

				break;

			case "cart__control decrement":
				control(target, "-");
				break;
			default:
				console.log("");
				break;
		}
	});

	//clicking cart icon
	cartIcon.addEventListener("click", () => {
		//Cart menu display
		let display = ui.cartMenu.menu.style.display;
		if (display === "block") {
			ui.cartMenu.menu.style.display = "none";
		} else {
			if (badge.innerText < 1) {
				ui.cartMenu.menu.style.display = "none";
			} else {
				ui.cartMenu.menu.style.display = "block";
			}
		}

		//Cart  badge display
		let popup = badge.style.display;
		if (popup == "none") {
			badge.style.display = "block";
		} else {
			badge.style.display = "none";
		}
	});
};
mainApp();
