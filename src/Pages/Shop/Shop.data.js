const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imgUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        //   imgUrl: "/images/shop-img/hats/brown-brim.png",
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imgUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        //   imgUrl: "/images/shop-img/hats/blue-beanie.png",
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imgUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        //   imgUrl: "/images/shop-img/hats/brown-cowboy.png",
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imgUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        //   imgUrl: "/images/shop-img/hats/grey-brim.png",
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imgUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        //   imgUrl: "/images/shop-img/hats/green-beanie.png",
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imgUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        //   imgUrl: "/images/shop-img/hats/palm-tree-cap.png",
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imgUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        //   imgUrl: "/images/shop-img/hats/red-beanie.png",
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imgUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        //   imgUrl: "/images/shop-img/hats/wolf-cap.png",
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imgUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        //   imgUrl: "/images/shop-img/hats/blue-snapback.png",
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imgUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        //   imgUrl: "/images/shop-img/sneakers/adidas-nmd.png", 
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imgUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        //   imgUrl: "/images/shop-img/sneakers/yeezy.png",
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imgUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        //   imgUrl: "/images/shop-img/sneakers/black-converse.png",
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imgUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        //   imgUrl: "/images/shop-img/sneakers/white-nike-high-tops.png",
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imgUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        //   imgUrl: "/images/shop-img/sneakers/nikes-red.png",
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imgUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        //   imgUrl: "/images/shop-img/sneakers/nike-brown.png",
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imgUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        //   imgUrl: "/images/shop-img/sneakers/nike-funky.png",
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imgUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        //   imgUrl: "/images/shop-img/sneakers/timberlands.png",
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imgUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        //   imgUrl: "/images/shop-img/jackets/black-shearling.png",
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imgUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        //   imgUrl: "/images/shop-img/jackets/blue-jean-jacket.png",
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imgUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        //   imgUrl: "/images/shop-img/jackets/grey-jean-jacket.png",
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imgUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        //   imgUrl: "/images/shop-img/jackets/brown-shearling.png",
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imgUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        //   imgUrl: "/images/shop-img/jackets/brown-trench.png",
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imgUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        //   imgUrl: "/images/shop-img/womens/blue-tank.png",
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imgUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        //   imgUrl: "/images/shop-img/womens/floral-blouse.png",
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imgUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        //   imgUrl: "/images/shop-img/womens/floral-skirt.png",
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imgUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        //   imgUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imgUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        //   imgUrl: "/images/shop-img/womens/striped-sweater.png",
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imgUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        //   imgUrl: "/images/shop-img/womens/yellow-track-suit.png",
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imgUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        //   imgUrl: "/images/shop-img/womens/white-vest.png",
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imgUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        //   imgUrl: "/images/shop-img/mens/camo-vest.png",
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imgUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        //   imgUrl: "/images/shop-img/mens/floral-shirt.png",
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imgUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        //   imgUrl: "/images/shop-img/mens/long-sleeve.png",
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imgUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        //   imgUrl: "/images/shop-img/mens/pink-shirt.png",
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imgUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        //   imgUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imgUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        //   imgUrl: "/images/shop-img/mens/polka-dot-shirt.png",
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;  