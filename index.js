const storageHandler = (prop) => {
  if (localStorage.getItem(prop)) {
    const storedItem = localStorage.getItem(prop);
    try {
      const parsedItem = JSON.parse(localStorage.getItem(prop));
      if (typeof parsedItem === "object") {
        const parsedItem = JSON.parse(storedItem);
        return parsedItem
      }
    } catch (err) {
        return storedItem
    }
  }
};

module.exports = storageHandler