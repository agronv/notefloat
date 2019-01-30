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

u6 = User.create({username: 'Olivia-Mae', password: 'password'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Olivia-Mae.jpg')
u6.photo.attach(io: file, filename: 'Olivia-Mae.jpg')
u6.save!

u7 = User.create({username: 'Cohan', password: 'password'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Cohan.jpg')
u7.photo.attach(io: file, filename: 'Cohan.jpg')
u7.save!

u8 = User.create({username: 'Zidane', password: 'password'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Zidane.jpg')
u8.photo.attach(io: file, filename: 'Zidane.jpg')
u8.save!

u9 = User.create({username: 'Mylah', password: 'password'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Mylah.jpg')
u9.photo.attach(io: file, filename: 'Mylah.jpg')
u9.save!

u10 = User.create({username: 'Brent', password: 'password'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Brent.jpg')
u10.photo.attach(io: file, filename: 'Brent.jpg')
u10.save!

t1 = Track.new({title: "Without My Bed", user_id: u1.id, genre: 'alternative_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t1.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t1.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t1.save!

t2 = Track.new({title: "Without My Bed", user_id: u1.id, genre: 'classical'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t2.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t2.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t2.save!

t3 = Track.new({title: "Without My Bed", user_id: u1.id, genre: 'pop'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t3.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t3.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t3.save!

t4 = Track.new({title: "Without My Bed", user_id: u1.id, genre: 'rap'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t4.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t4.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t4.save!

t5 = Track.new({title: "Without My Bed", user_id: u1.id, genre: 'classic_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t5.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t5.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t5.save!

t6 = Track.new({title: "Without My Bed", user_id: u1.id, genre: 'techno'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t6.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t6.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t6.save!

t7 = Track.new({title: "Without My Bed", user_id: u2.id, genre: 'alternative_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t7.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t7.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t7.save!

t8 = Track.new({title: "Without My Bed", user_id: u2.id, genre: 'classical'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t8.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t8.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t8.save!

t9 = Track.new({title: "Without My Bed", user_id: u2.id, genre: 'pop'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t9.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t9.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t9.save!

t10 = Track.new({title: "Without My Bed", user_id: u2.id, genre: 'rap'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t10.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t10.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t10.save!

t11 = Track.new({title: "Without My Bed", user_id: u2.id, genre: 'classic_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t11.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t11.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t11.save!

t12 = Track.new({title: "Without My Bed", user_id: u2.id, genre: 'techno'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t12.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t12.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t12.save!

t13 = Track.new({title: "Without My Bed", user_id: u3.id, genre: 'alternative_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t13.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t13.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t13.save!

t13 = Track.new({title: "Without My Bed", user_id: u3.id, genre: 'classical'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t13.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t13.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t13.save!

t14 = Track.new({title: "Without My Bed", user_id: u3.id, genre: 'pop'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t14.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t14.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t14.save!

t15 = Track.new({title: "Without My Bed", user_id: u3.id, genre: 'rap'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t15.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t15.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t15.save!

t16 = Track.new({title: "Without My Bed", user_id: u3.id, genre: 'classic_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t16.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t16.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t16.save!

t17 = Track.new({title: "Without My Bed", user_id: u3.id, genre: 'techno'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t17.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t17.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t17.save!

t18 = Track.new({title: "Without My Bed", user_id: u4.id, genre: 'pop'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t18.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t18.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t18.save!

t19 = Track.new({title: "Without My Bed", user_id: u4.id, genre: 'rap'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t19.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t19.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t19.save!

t20 = Track.new({title: "Without My Bed", user_id: u4.id, genre: 'classic_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t20.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t20.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t20.save!

t21 = Track.new({title: "Without My Bed", user_id: u4.id, genre: 'techno'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t21.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t21.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t21.save!

t22 = Track.new({title: "Without My Bed", user_id: u5.id, genre: 'pop'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t22.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t22.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t22.save!

t23 = Track.new({title: "Without My Bed", user_id: u5.id, genre: 'rap'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t23.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t23.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t23.save!

t24 = Track.new({title: "Without My Bed", user_id: u5.id, genre: 'classic_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t24.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t24.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t24.save!

t25 = Track.new({title: "Without My Bed", user_id: u5.id, genre: 'techno'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t25.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t25.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t25.save!

t26 = Track.new({title: "Without My Bed", user_id: u6.id, genre: 'alternative_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t26.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t26.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t26.save!

t27 = Track.new({title: "Without My Bed", user_id: u6.id, genre: 'classical'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t27.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t27.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t27.save!

t28 = Track.new({title: "Without My Bed", user_id: u6.id, genre: 'pop'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t28.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t28.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t28.save!

t29 = Track.new({title: "Without My Bed", user_id: u6.id, genre: 'rap'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t29.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t29.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t29.save!

t30 = Track.new({title: "Without My Bed", user_id: u6.id, genre: 'classic_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t30.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t30.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t30.save!

t31 = Track.new({title: "Without My Bed", user_id: u6.id, genre: 'techno'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t31.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t31.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t31.save!

t32 = Track.new({title: "Without My Bed", user_id: u7.id, genre: 'alternative_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t32.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t32.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t32.save!

t33 = Track.new({title: "Without My Bed", user_id: u7.id, genre: 'classical'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t33.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t33.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t33.save!

t34 = Track.new({title: "Without My Bed", user_id: u7.id, genre: 'pop'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t34.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t34.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t34.save!

t35 = Track.new({title: "Without My Bed", user_id: u7.id, genre: 'rap'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t35.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t35.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t35.save!

t36 = Track.new({title: "Without My Bed", user_id: u7.id, genre: 'classic_rock'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t36.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t36.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t36.save!

t37 = Track.new({title: "Without My Bed", user_id: u7.id, genre: 'techno'})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/art_vs_science.jpg')
t37.photo.attach(io: file, filename: 'art_vs_science.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Baby_Steps.mp3')
t37.mp3_file.attach(io: track, filename: 'Baby_Steps.mp3')
t37.save!
# t3 = Track.create({title: "kingfASDFSisher", user_id: u3.id})
# t4 = Track.create({title: "iSDFsdf", user_id: u4.id})