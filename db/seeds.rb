# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

User.create({username: 'not_agron', password: 'appacademy'})
User.create({username: 'not_harry', password: 'appacadasdfemy'})
User.create({username: 'not_harrison', password: 'appacasdfasdfademy'})
User.create({username: 'david_ro', password: 'appacademasfdy'})
User.create({username: 'username1', password: 'appacad234emy'})
User.create({username: 'asdf', password: 'asdf'})
User.create({username: 'demo', password: 'demo'})