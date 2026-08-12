  // ---------- TASK 1: Product Cards ----------
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const box = document.querySelector("#cards");

      data.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h3>${p.title}</h3>
          <img src="${p.image}" width="120">
          <p>Price: $${p.price}</p>
          <p>Category: ${p.category}</p>
          <p>Rating: ${p.rating.rate}</p>
        `;

        box.append(card);
      });
    });


  // ---------- TASK 2: Description (50 chars) ----------
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const box = document.querySelector("#desc");

      data.forEach(p => {
        const shortDesc = p.description.slice(0, 50);

        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
          <p>Title: ${p.title}</p>
          <p>Description: ${shortDesc}...</p>
          <p>Price: $${p.price}</p>
        `;

        box.append(div);
      });
    });


  // ---------- TASK 3: Product List ----------
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector(".api");

      data.forEach(p => {
        const item = document.createElement("div");

        item.innerHTML = `
          <p>Product: ${p.title}</p>
          <p>Price: $${p.price}</p>
          <p>Category: ${p.category}</p>
          <img src="${p.image}" width="100">
        `;

        container.append(item);
      });
    });


  // ---------- TASK 4: Image Gallery ----------
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const gallery = document.querySelector("#gallery");

      data.forEach(p => {
        const img = document.createElement("img");
        img.src = p.image;
        img.width = 90;
        img.style.margin = "5px";

        gallery.append(img);
      });
    });


  // ---------- TASK 5: Category Display ----------
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const box = document.querySelector("#catBox");

      data.forEach(p => {
        const div = document.createElement("div");

        div.innerHTML = `
          <p>Title: ${p.title}</p>
          <p>Category: ${p.category}</p>
          <p>Price: $${p.price}</p>
        `;

        box.append(div);
      });
    });


  // ---------- TASK 6: Product Details Card ----------
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const box = document.querySelector("#details");

      data.forEach(c => {
        const card = document.createElement("div");

        card.innerHTML = `
          -----------------------------
          <h3>${c.title}</h3>
          <img src="${c.image}" width="100"><br>
          <p>Description: ${c.description}</p>
          <p>Category: ${c.category}</p>
          <p>Price: $${c.price}</p>
          <p>Rating: ${c.rating.rate}</p>
          -----------------------------
        `;

        box.append(card);
      });
    });


  // ---------- TASK 7: Rating Details ----------
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const box = document.querySelector("#ratings");

      data.forEach(c => {
        const div = document.createElement("div");

        div.innerHTML = `
          <p>Product: ${c.title}</p>
          <p>Rating: ${c.rating.rate}</p>
          <p>Reviews: ${c.rating.count}</p>
        `;

        box.append(div);
      });
    });


  // ---------- TASK 8: First 20 Characters ----------
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const box = document.querySelector("#short");

      data.forEach(p => {
        const cut = p.description.slice(0, 20);

        const div = document.createElement("div");
        div.innerHTML = `
          <p>Title: ${p.title}</p>
          <p>Description: ${cut}...</p>
        `;

        box.append(div);
      });
    });


  // ---------- TASK 9: Buy Button ----------
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const box = document.querySelector("#btnCard");

      data.forEach(p => {
        const card = document.createElement("div");

        card.innerHTML = `
          <h4>${p.title}</h4>
          <button>Buy for $${p.price}</button>
        `;

        box.append(card);
      });
    });


  // ---------- TASK 10: Complete Product Card ----------
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector("#products");

      data.forEach(c => {
        const card = document.createElement("div");

        card.innerHTML = `
          --------------------------------
          <img src="${c.image}" width="120"><br>
          <h3>Title: ${c.title}</h3>
          <p>Category: ${c.category}</p>
          <p>Description: ${c.description}</p>
          <p>Price: $${c.price}</p>
          <p>Rating: ${c.rating.rate}</p>
          <p>Reviews: ${c.rating.count}</p>
          <button>Buy Now</button>
          --------------------------------
        `;

        container.append(card);
      });
    });
