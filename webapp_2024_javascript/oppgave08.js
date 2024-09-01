{
  "basic_info"[
    ({
      isbn: "123456789",
      title: "Typical book",
      category: "Crime",
    },
    {
      isbn: "456789123",
      title: "Cool book",
      category: "Crime",
    },
    {
      isbn: "678912345",
      title: "Interesting book",
      category: "Fantasy",
    })
  ],
    "retail_info"[
      ({
        isbn: "123456789",
        price: "150kr",
      },
      {
        isbn: "456789123",
        price: "200kr",
      },
      {
        isbn: "678912345",
        price: "129kr",
      })
    ];
}

function calculatePrice({ isbn, category }) {
  if (isbn === isbn && catergory === "Crime") {
    let total_price = 0;
    total_price += price;
    return `Prisen til ${isbn} i kategorien ${category} er på ${total_price}`;
  }
}

calculatePrice();
