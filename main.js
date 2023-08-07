const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.json");

const main = async () => {
  const id1 = await contenedor.save({ title: "Arroz", price: 75.66 });
  const id2 = await contenedor.save({ title: "Fideos", price: 57.75 });
  const id3 = await contenedor.save({ title: "Arvejas", price: 100 });

  console.log(id1, id2, id3); // 1, 2, 3

  const object2 = await contenedor.getById(2);
  console.log(object2); // { title: 'Fideos', price: 57.75, id: 2 }

  await contenedor.deleteById(2);

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);
  /**
     * [
        { title: 'Arroz', price: 75.66, id: 1 },
        { title: 'Arvejas', price: 100, id: 3 }
        ]
    */

  //await contenedor.deleteAll();
};

main();
