// variables
const productsDOM = document.querySelector(".products-center");

// cart
let cart = [];

// buttons
let buttonsDOM = [];

// getting the products
class Products {
  async getProducts() {
    try {
      // adding the path to the products page
      let result = await fetch("../products.json"); // added semi colon
      let data = await result.json();

      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// display products
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += ` 
    		<!-- single product -->
			<article class="product">
				<div class="img-container">
					<img 
					src=${product.image} 
					alt="Product image" 
					class="product-img">
					<button class="bag-btn" data-id=${product.id}>
					<i class="fas fa-shopping-cart"></i> 
					add to cart
					</button>
				</div>
				<h3>${product.title}</h3>
				<h4>₹${product.price}</h4>
			</article>
    		`;
    });

    productsDOM.innerHTML = result;
  }
}

const products = [
  {
    category: "Jewellery",
    items: [
      {
        description: "something something",
        image: "images/jewellery/1.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/10.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/11.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/12.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/13.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/14.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/15.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/16.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/17.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/18.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/19.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/2.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/20.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/21.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/22.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/23.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/24.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/25.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/26.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/27.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/28.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/29.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/3.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/30.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/31.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/32.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/33.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/34.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/35.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/36.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/37.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/38.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/39.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/4.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/40.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/41.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/42.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/43.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/44.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/45.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/46.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/47.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/48.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/49.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/5.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/50.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/51.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/52.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/53.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/6.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/7.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/8.jpg",
        name: "ABC",
        price: 1,
      },
      {
        description: "something something",
        image: "images/jewellery/9.jpg",
        name: "ABC",
        price: 1,
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const productsSection = document.querySelector(".products");

  const modal = document.createElement('div');
  modal.classList.add('modal', 'hidden');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay', 'hidden');
  document.body.appendChild(overlay);

  function showProductDetails(product) {
    modalContent.innerHTML = `
      <div>
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <h3>${product.name}</h3>
        <h4>₹${product.price}</h4>
        <p>${product.description}</p>
        <button class="close-modal-btn banner-btn">Close</button>
      </div>
    `;
    modal.classList.add('show');
    overlay.classList.add('show');
  }

  function hideModal() {
    modal.classList.remove('show');
    overlay.classList.remove('show');
  }

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-modal-btn') || e.target === modal) {
      hideModal();
    }
  });

  overlay.addEventListener('click', hideModal);

  products.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.textContent = category.category;
    categoryDiv.appendChild(categoryTitle);

    const productsCenter = document.createElement("div");
    productsCenter.classList.add("products-center");

    category.items.forEach((item) => {
      const productArticle = document.createElement("article");
      productArticle.classList.add("product");

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("img-container");

      const productImg = document.createElement("img");
      productImg.src = item.image;
      productImg.alt = item.name;
      productImg.classList.add("product-img");

      imgContainer.appendChild(productImg);
      productArticle.appendChild(imgContainer);

      const productName = document.createElement("h3");
      productName.textContent = item.name;
      productArticle.appendChild(productName);

      const productPrice = document.createElement("h4");
      productPrice.textContent = `₹${item.price}`;
      productArticle.appendChild(productPrice);

      productArticle.addEventListener("click", () => {
        showProductDetails(item);
      });

      productsCenter.appendChild(productArticle);
    });

    categoryDiv.appendChild(productsCenter);
    productsSection.appendChild(categoryDiv);
  });
});
