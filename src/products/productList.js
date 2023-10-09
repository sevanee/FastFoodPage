const datas = [
    {
      id:1,
      image: 'https://mcdonalds.az/images/c3810fe9a08f596796758778288d4346.png',
      title:'Burger',
      name: 'Beefcakes Burgers',
      description: '100% beef patty, melted cheddar cheese, fresh onions, cucumber, tomato, fresh Iceberg lettuce and special sauce on a caramelized bun with sesame.',
      price: '56$',
      color: 'Brown',
      size: 'Large,Medium',
      weight: '200gr',
      team_image:'https://templates.envytheme.com/handout/default/assets/img/team/1.png',
      team_name:'Arnold Russel',
      team_pos:'Chief Guru'
      
    },
    {
        id:2,
      image: 'https://mcdonalds.az/images/41f4b61d6b03de45443abbb89a2e4422.png',
      title:'Burger',
      name: 'Bugout Burgers',
      description: 'Fried, crispy chicken fillet served on a caramelized bun, with fresh Iceberg lettuce, special sauce, tomato and sliced cucumber.',
      price: '19$',
      color: 'Yellow',
      size: 'Small,Medium',
      weight: '210gr',
      team_image:'https://templates.envytheme.com/handout/default/assets/img/team/2.png',
      team_name:'Mitchel Smith',
      team_pos:'Chief Instructor'
    },
    {
        id:3,
      image: 'https://mcdonalds.az/images/03b40005e5a59f4a669df3fdc5086e23.png',
      title:'Burger',
      name: 'Crazy Burger',
      description: 'Fried, breaded crispy fish fillet served on a bun, with fresh Iceberg lettuce, special sauce and sliced tomato.',
      price: '23$',
      color: 'Yellow',
      size: 'Small,Medium',
      weight: '114gr',
      team_image:'https://templates.envytheme.com/handout/default/assets/img/team/3.png',
      team_name:'Nicholas Barnett',
      team_pos:'Executive Chef'
    },
    {
        id:4,
      image: 'https://mcdonalds.az/images/e92f948e50dc9a1212f777b717c22376.png',
      title:'Burger',
      name: 'The Crispy Bun',
      description: 'Burger made of a 100% pure beef patty, onions, pickles and just the right amount of mustard and ketchup wrapped in a caramelized bun.',
      price: '20$',
      color: 'Brown',
      size: 'Medium',
      weight: '110gr',
      team_image:'https://templates.envytheme.com/handout/default/assets/img/team/2.png',
      team_name:'Minnesota Twins',
      team_pos:'General Manager'
    },
    {
        id:5,
      image: 'https://mcdonalds.az/images/afa4b44cdad58e8e48e825e682dd5bae.png',
      title:'Burger',
      name: 'Chicken Fresh',
      description: 'Fried, crispy chicken fillet served on a caramelized bun, with fresh Iceberg lettuce, special sauce, tomato and sliced cucumber.',
      price: '15$',
      color: 'Brown',
      size: 'Small',
      weight: '200gr',
      team_image:'https://templates.envytheme.com/handout/default/assets/img/team/1.png',
      team_name:'Arnold Russel',
      team_pos:'Chief Instructor'
    },
    {
        id:6,
      image: 'https://mcdonalds.az/images/36e04d7fca426a5e7a4ad922a0041f8e.png',
      title:'Burger',
      name: 'Beef Fresh',
      description: '100% beef patty, melted cheddar cheese, fresh onions, cucumber, tomato, fresh Iceberg lettuce and special sauce on a caramelized bun with sesame.',
      price: '18$',
      color: 'Yellow',
      size: 'Medium',
      weight: '220gr',
      
    },
    {
        id:7,
      image: 'https://mcdonalds.az/images/3fc7ffafe2014a470c7c048ed9bf89af.png',
      title:'Chicken Pcs',
      name: 'Chicken Nuggets 4pcs.',
      description: 'Deep-fired chicken fillet. ',
      price: '13$',
      color: 'Orange',
      size: 'Small',
      weight: '200gr',
      
    },
    {
        id:8,
      image: 'https://mcdonalds.az/images/22d094911c5c728c5a8a3f819fb48a14.png',
      title:'Chicken Pcs',
      name: 'Chicken Nuggets 6pcs.',
      description: 'Deep-fired chicken fillet. ',
      price: '18$',
      color: 'Orange',
      size: 'Medium',
      weight: '230gr',
      
    },
    {
        id:9,
      image: 'https://mcdonalds.az/images/1a24b33b4b26488cfd2ef379475976cb.png',
      title:'Chicken Pcs',
      name: 'Chicken Nuggets 9pcs.',
      description: 'Deep-fired chicken fillet. ',
      price: '20$',
      color: 'Orange',
      size: 'Large',
      weight: '260gr',
      
    },
    {
        id:10,
      image: 'https://mcdonalds.az/images/28969e815c2869a1b1b5601c3d63a656.png',
      title:'Chicken Pcs',
      name: 'Chicken Bites 10pcs.',
      description: 'Deep-fired spicy chicken fillet. ',
      price: '25$',
      color: 'Orange',
      size: 'Standard',
      weight: '300gr',
      
    },
    {
        id:11,
      image: 'https://mcdonalds.az/images/ef6ed48922ff9d705304228004281b41.png',
      title:'Chicken Pcs',
      name: 'Shrimps 4pcs.',
      description: 'Deep-fried, crispy shrimps. Served with 1000 island sauce.  ',
      price: '30$',
      color: 'Yellow',
      size: 'Small',
      weight: '200gr',
      
    },
    {
        id:12,
      image: 'https://mcdonalds.az/images/bb89b4fb7e08f86297ae7a879d211212.png',
      title:'Chicken Pcs',
      name: 'Shrimps 6pcs.',
      description: 'Deep-fried, crispy shrimps. Served with 1000 island sauce.  ',
      price: '33$',
      color: 'Yellow',
      size: 'Medium',
      weight: '240gr',
      
    },
    {
        id:13,
      image: 'https://mcdonalds.az/images/b0b6ccead20733ccb9178e401b31f3a2.png',
      title:'Beverage',
      name: 'Coca-Cola S',
      description: 'Refreshing beverage. ',
      price: '2$',
      color: 'Black',
      size: 'Small',
      weight:'none'
    },
    {
        id:14,
      image: 'https://mcdonalds.az/images/b0b6ccead20733ccb9178e401b31f3a2.png',
      title:'Beverage',
      name: 'Coca-Cola M',
      description: 'Refreshing beverage. ',
      price: '3$',
      color: 'Black',
      size: 'Medium',
      weight:'none'
    },
    {
        id:15,
      image: 'https://mcdonalds.az/images/b0b6ccead20733ccb9178e401b31f3a2.png',
      title:'Beverage',
      name: 'Coca-Cola L',
      description: 'Refreshing beverage. ',
      price: '4$',
      color: 'Black',
      size: 'Large',
      weight:'none'
    },
    {
        id:16,
      image: 'https://mcdonalds.az/images/6dd022fdbe849eca517163d9f28c9b3d.png',
      title:'Beverage',
      name: 'Fanta S',
      description: 'Refreshing beverage. ',
      price: '2$',
      color: 'Orange',
      size: 'Small',
      weight:'none'
    },
    {
        id:17,
      image: 'https://mcdonalds.az/images/6dd022fdbe849eca517163d9f28c9b3d.png',
      title:'Beverage',
      name: 'Fanta M',
      description: 'Refreshing beverage. ',
      price: '3$',
      color: 'Orange',
      size: 'Medium',
      weight:'none'
    },
    {
        id:18,
      image: 'https://mcdonalds.az/images/6dd022fdbe849eca517163d9f28c9b3d.png',
      title:'Beverage',
      name: 'Fanta L',
      description: 'Refreshing beverage. ',
      price: '4$',
      color: 'Orange',
      size: 'Large',
      weight:'none'
    },
    {
        id:19,
      image: 'https://mcdonalds.az/images/4a2de9ff7e4216dc7c55d703659f0dcc.png',
      title:'Beverage',
      name: 'Sprite S',
      description: 'Refreshing beverage. ',
      price: '2$',
      color: 'Transparent',
      size: 'Small',
      weight:'none'
    },
    {
        id:20,
      image: 'https://mcdonalds.az/images/4a2de9ff7e4216dc7c55d703659f0dcc.png',
      title:'Beverage',
      name: 'Sprite M',
      description: 'Refreshing beverage. ',
      price: '3$',
      color: 'Transparent',
      size: 'Small',
      weight:'none'
    },
    {
        id:21,
      image: 'https://mcdonalds.az/images/4a2de9ff7e4216dc7c55d703659f0dcc.png',
      title:'Beverage',
      name: 'Sprite L',
      description: 'Refreshing beverage. ',
      price: '4$',
      color: 'Transparent',
      size: 'Small',
      weight:'none'
    },
    {
        id:22,
      image: 'https://mcdonalds.az/images/2f8c934a12188e1759ab227f27bfb9b0.png',
      title:'Beverage',
      name: ' Cappy Juice',
      description: 'Natural fruit juice. ',
      price: '1$',
      color: 'Colored',
      size: 'Standard',
      weight:'94gr'
    },
    {
        id:23,
      image: 'https://png.monster/wp-content/uploads/2022/07/png.monster-31.png',
      title:'Coffee',
      name: ' Latte',
      description: 'Fresh, preheated milk and coffee Espresso.',
      price: '5$',
      color: 'Brown',
      size: 'Standard',
      weight:'300ml'
    },
    {
        id:24,
      image: 'https://www.pngkit.com/png/detail/127-1277245_piccolo-espresso-coffee-cups-with-coffee-png.png',
      title:'Coffee',
      name: ' Double Espresso',
      description: 'Coffee drink, obtained by passing hot water under pressure through a filter with ground coffee without additives. ',
      price: '3$',
      color: 'Brown',
      size: 'Standard',
      weight:'100ml'
    },
    {
        id:25,
      image: 'https://www.pngkit.com/png/detail/127-1277245_piccolo-espresso-coffee-cups-with-coffee-png.png',
      title:'Coffee',
      name: ' Coppuccino',
      description: 'Delicious combination of Espresso and fresh, preheated foamed milk.  ',
      price: '6$',
      color: 'Brown',
      size: 'Standard',
      weight:'300ml'
    },
    {
        id:26,
      image: 'https://www.pngkit.com/png/detail/127-1277245_piccolo-espresso-coffee-cups-with-coffee-png.png',
      title:'Tea',
      name: 'Black Tea',
      description: 'Black Tea  ',
      price: '2$',
      color: 'Black',
      size: 'Standard',
      weight:'300ml'
    },
    {
        id:27,
      image: 'https://static.vecteezy.com/system/resources/previews/013/442/145/original/crispy-and-delicious-french-fries-free-png.png',
      title:'Snack',
      name: 'French Fries S',
      description: 'Delicious, deep-fried and slightly salted potato sticks. ',
      price: '6$',
      color: 'Yellow',
      size: 'Small',
      weight:'70gr'
    },
    {
        id:28,
      image: 'https://static.vecteezy.com/system/resources/previews/013/442/145/original/crispy-and-delicious-french-fries-free-png.png',
      title:'Snack',
      name: 'French Fries M',
      description: 'Delicious, deep-fried and slightly salted potato sticks. ',
      price: '7$',
      color: 'Yellow',
      size: 'Medium',
      weight:'120gr'
    },
    {
        id:29,
      image: 'https://static.vecteezy.com/system/resources/previews/013/442/145/original/crispy-and-delicious-french-fries-free-png.png',
      title:'Snack',
      name: 'French Fries L',
      description: 'Delicious, deep-fried and slightly salted potato sticks. ',
      price: '8$',
      color: 'Yellow',
      size: 'Large',
      weight:'200gr'
    },
    {
        id:30,
      image: 'https://www.pngkit.com/png/detail/38-381021_potato-wedges-6-wedge.png',
      title:'Wedges',
      name: 'Wedges S',
      description: 'Delicious, deep-fried and flavored potato slices. ',
      price: '3$',
      color: 'Brown',
      size: 'Small',
      weight:'80gr'
    },
    {
        id:31,
      image: 'https://www.pngkit.com/png/detail/38-381021_potato-wedges-6-wedge.png',
      title:'Wedges',
      name: 'Wedges M',
      description: 'Delicious, deep-fried and flavored potato slices.',
      price: '4$',
      color: 'Brown',
      size: 'Medium',
      weight:'130gr'
    }

]