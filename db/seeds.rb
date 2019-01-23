# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Track.destroy_all

u1 = User.create({username: 'not_agron', password: 'appacademy'})
u2 = User.create({username: 'not_harry', password: 'appacadasdfemy'})
u3 = User.create({username: 'not_harrison', password: 'appacasdfasdfademy'})
u4 = User.create({username: 'david_ro', password: 'appacademasfdy'})
u5 = User.create({username: 'username1', password: 'appacad234emy'})
u6 = User.create({username: 'asdf', password: 'asdf'})
u7 = User.create({username: 'demo', password: 'demo'})

# t2 = Track.create({title: "faDFSSADADF", user_id: u2.id})
# t3 = Track.create({title: "kingfASDFSisher", user_id: u3.id})
# t4 = Track.create({title: "iSDFsdf", user_id: u4.id})