# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Track.destroy_all

u1 = User.new({username: 'demo', password: 'demo'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/birdy.jpg')
u1.photo.attach(io: file, filename: 'birdy.jpg')
u1.save!

u2 = User.create({username: 'Jake', password: 'password'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/birdy.jpg')
u2.photo.attach(io: file, filename: 'birdy.jpg')
u2.save!

u3 = User.new({username: 'harry', password: 'password'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/harry.jpeg')
u3.photo.attach(io: file, filename: 'harry.jpeg')
u3.save!

u4 = User.create({username: 'sally', password: 'password'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/sally.jpg')
u4.photo.attach(io: file, filename: 'sally.jpg')
u4.save!

u5 = User.create({username: 'Eleanor', password: 'password'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/eleanor.jpg')
u5.photo.attach(io: file, filename: 'eleanor.jpg')
u5.save!

# u6 = User.create({username: 'tamar', password: 'password'})
# u7 = User.create({username: 'sweat_tea', password: 'password'})
# u8 = User.create({username: 'first_place', password: 'password'})
# u9 = User.create({username: 'bone', password: 'password'})
# u10 = User.create({username: 'angry_harrison', password: 'password'})
# u11 = User.create({username: 'JUUL_harrison', password: 'password'})

t1 = Track.new({title: "Song 1", user_id: u1.id, genre: 'alternative_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t1.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t1.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t1.save!
# t3 = Track.create({title: "kingfASDFSisher", user_id: u3.id})
# t4 = Track.create({title: "iSDFsdf", user_id: u4.id})