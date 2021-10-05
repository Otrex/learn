const fauna = require('faunadb')
const q = require('faunadb').query
const secret = "fnAETaNHsXAAQCmMy88HA5PNzn3gsFl00eOYz2kQ"
const domain = "db.us.fauna.com"
const client = new fauna.Client({ secret, domain })

const getCollections = async (connection) => (await connection.query(q.Paginate(q.Collections()))).data
const createCollection = async (connection, options) => await connection.query(q.CreateCollection(options))
const deleteCollection = async (connection, name) => await connection.query(q.Delete(q.Collection(name)))
const getCollection = async (connection, name) => await connection.query(q.Get(q.Collection(name)))
const createDocument = async (connection, collectionName, data) => await connection.query(q.Create(q.Collection(collectionName), {data}))
const getDocument = async (connection, collectionName, refNumber) => await connection.query(q.Get(q.Ref(q.Collection(collectionName), refNumber)))
const createIndex = async (connection, collectionName, IndexName, fields) => await connection.query(q.CreateIndex({ name: IndexName, source: q.Collection(collectionName), terms: { field: fields } }))
const getDocuments = async (connection, collectionName, refNumber) => (await connection.query((q.Paginate(q.Documents(q.Collection(collectionName)))))).data
const extractData = async (connection, gottenDocs) => await connection.query(q.Map(gottenDocs, q.Lambda(data => q.Get(data))))

const getDocs = async = async (connection, collectionName) => await connection.query(q.Map(q.Paginate(q.Documents(q.Collection(collectionName))), q.Lambda(data => q.Get(data))))

const main = (async () => {
  // const key = await createIndex(client, 'besty', 'keyu', ['keys']);
  // const data = await client.query(q.Paginate(q.Join(q.Match(q.Index('link'), '23'), q.Index('keyu'))))
  let newx = await getDocuments(client, 'test2', "310085690697187400")
  newx = await extractData(client, newx);
  // let newx = await getDocs(client, 'test2')
  console.log({...newx[0].ref})
})().catch(e => {
  console.error(e)
  process.exit(-1)
})