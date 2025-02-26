import pymongo
import pandas as pd

client = pymongo.MongoClient('your_mongo_uri')
db = client['yourDatabaseName']
collection = db['yourCollectionName']

data = pd.DataFrame(list(collection.find()))
data.to_excel('output.xlsx', index=False)

print('Data exported to output.xlsx')
db.yourCollectionName.find().pretty()