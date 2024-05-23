const { Firestore } = require("@google-cloud/firestore");

async function getData() {
    const db = new Firestore();

    const predict = db.collection("predictions");
    const fetch = await predict.get();
    const data = [];
    fetch.forEach((doc) => {
        const currentData = {
            id: doc.id,
            history: doc.data()
        }
        data.push(currentData);
    });
    return data;
}

module.exports = getData;