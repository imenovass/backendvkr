/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2232277661")

  // update collection data
  unmarshal({
    "passwordAuth": {
      "identityFields": [
        "username"
      ]
    }
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2232277661")

  // update collection data
  unmarshal({
    "passwordAuth": {
      "identityFields": [
        "email"
      ]
    }
  }, collection)

  return app.save(collection)
})
