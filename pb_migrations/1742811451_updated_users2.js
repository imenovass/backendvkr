/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2232277661")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_pbc_2232277661` ON `users2` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_pbc_2232277661` ON `users2` (`email`) WHERE `email` != ''",
      "CREATE UNIQUE INDEX `idx_HvXhn0FZfK` ON `users2` (`username`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2232277661")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_pbc_2232277661` ON `users2` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_pbc_2232277661` ON `users2` (`email`) WHERE `email` != ''"
    ]
  }, collection)

  return app.save(collection)
})
