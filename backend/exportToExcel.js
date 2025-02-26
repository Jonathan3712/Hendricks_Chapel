const MongoClient = require('mongodb').MongoClient;
const XLSX = require('xlsx');
require('dotenv').config();

const uri = process.env.MONGO_URI;

async function exportToExcel() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('yourDatabaseName');
    const collection = database.collection('yourCollectionName');

    const data = await collection.find({}).toArray();
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    XLSX.writeFile(workbook, 'output.xlsx');
    console.log('Data exported to output.xlsx');
  } catch (error) {
    console.error('Error exporting data:', error);
  } finally {
    await client.close();
  }
}

exportToExcel();