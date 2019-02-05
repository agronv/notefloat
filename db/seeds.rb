# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all
Comment.destroy_all


# Users

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


#tracks

t1 = Track.new({title: "Reptilia", user_id: u1.id, genre: 'alternative_rock', length: 214})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/reptilia.jpg')
t1.photo.attach(io: file, filename: 'reptilia.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/reptilia.mp3')
t1.mp3_file.attach(io: track, filename: 'reptilia.mp3')
t1.save!

t2 = Track.new({title: "Fur Elise", user_id: u1.id, genre: 'classical', length: 175})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/beethoven.jpg')
t2.photo.attach(io: file, filename: 'beethoven.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/fur_elise.mp3')
t2.mp3_file.attach(io: track, filename: 'fur_elise.mp3')
t2.save!

t3 = Track.new({title: "Sorry", user_id: u1.id, genre: 'pop', length: 199})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/sorry.jpg')
t3.photo.attach(io: file, filename: 'sorry.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/sorry.mp3')
t3.mp3_file.attach(io: track, filename: 'sorry.mp3')
t3.save!

t4 = Track.new({title: "Otis", user_id: u1.id, genre: 'rap', length: 195})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/watch_the_throne.jpg')
t4.photo.attach(io: file, filename: 'watch_the_throne.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/otis.mp3')
t4.mp3_file.attach(io: track, filename: 'otis.mp3')
t4.save!

t5 = Track.new({title: "Black Dog", user_id: u1.id, genre: 'classic_rock', length: 295})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/mother_ship.jpg')
t5.photo.attach(io: file, filename: 'mother_ship.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/black_dog.mp3')
t5.mp3_file.attach(io: track, filename: 'black_dog.mp3')
t5.save!

t6 = Track.new({title: "One More Time", user_id: u1.id, genre: 'techno', length: 320})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/one_more_time.jpg')
t6.photo.attach(io: file, filename: 'one_more_time.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/one_more_time.mp3')
t6.mp3_file.attach(io: track, filename: 'one_more_time.mp3')
t6.save!

t7 = Track.new({title: "Smells Like Teen Spirit", user_id: u2.id, genre: 'alternative_rock', length: 277})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/smells_like_teen_spirit.jpg')
t7.photo.attach(io: file, filename: 'smells_like_teen_spirit.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/smells_like_teen_spirit.mp3')
t7.mp3_file.attach(io: track, filename: 'smells_like_teen_spirit.mp3')
t7.save!

t8 = Track.new({title: "Lacrimosa", user_id: u2.id, genre: 'classical', length: 200})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/mozart.jpg')
t8.photo.attach(io: file, filename: 'mozart.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/lacrimosa.mp3')
t8.mp3_file.attach(io: track, filename: 'lacrimosa.mp3')
t8.save!

t9 = Track.new({title: "Valse Sentimentale", user_id: u7.id, genre: 'classical', length: 285})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/tchaikovsky.jpg')
t9.photo.attach(io: file, filename: 'tchaikovsky.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/valse_sentimentale.mp3')
t9.mp3_file.attach(io: track, filename: 'valse_sentimentale.mp3')
t9.save!

t10 = Track.new({title: "Gold Digger", user_id: u2.id, genre: 'rap', length: 207})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/gold_digger.jpg')
t10.photo.attach(io: file, filename: 'gold_digger.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/gold_digger.mp3')
t10.mp3_file.attach(io: track, filename: 'gold_digger.mp3')
t10.save!

t11 = Track.new({title: "Bohemian Rhapsody", user_id: u2.id, genre: 'classic_rock', length: 354})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/bohemain.jpg')
t11.photo.attach(io: file, filename: 'bohemain.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/bohemian_rhapsody.mp3')
t11.mp3_file.attach(io: track, filename: 'bohemian_rhapsody.mp3')
t11.save!

t12 = Track.new({title: "Animals", user_id: u2.id, genre: 'techno', length: 183})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/animals.jpg')
t12.photo.attach(io: file, filename: 'animals.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/animals.mp3')
t12.mp3_file.attach(io: track, filename: 'animals.mp3')
t12.save!

t13 = Track.new({title: "Mr.Brightside", user_id: u3.id, genre: 'alternative_rock', length: 227})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/mr.brightside.jpeg')
t13.photo.attach(io: file, filename: 'mr.brightside.jpeg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/mr_brightside.mp3')
t13.mp3_file.attach(io: track, filename: 'mr_brightside.mp3')
t13.save!

t14 = Track.new({title: "One Kiss", user_id: u7.id, genre: 'pop', length: 212})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/one_kiss.jpg')
t14.photo.attach(io: file, filename: 'one_kiss.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/one_kiss.mp3')
t14.mp3_file.attach(io: track, filename: 'one_kiss.mp3')
t14.save!

t15 = Track.new({title: "Changes", user_id: u3.id, genre: 'rap', length: 270})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/changes.jpg')
t15.photo.attach(io: file, filename: 'changes.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/changes.mp3')
t15.mp3_file.attach(io: track, filename: 'changes.mp3')
t15.save!

t16 = Track.new({title: "Come Together", user_id: u3.id, genre: 'classic_rock', length: 259})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/come_together.jpg')
t16.photo.attach(io: file, filename: 'come_together.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/come_together.mp3')
t16.mp3_file.attach(io: track, filename: 'come_together.mp3')
t16.save!

t17 = Track.new({title: "Sandstorm", user_id: u3.id, genre: 'techno', length: 258})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/sandstorm.jpeg')
t17.photo.attach(io: file, filename: 'sandstorm.jpeg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/sandstorm.mp3')
t17.mp3_file.attach(io: track, filename: 'sandstorm.mp3')
t17.save!

t18 = Track.new({title: "Havana", user_id: u4.id, genre: 'pop', length: 218})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/havana.png')
t18.photo.attach(io: file, filename: 'havana.png')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/havana.mp3')
t18.mp3_file.attach(io: track, filename: 'havana.mp3')
t18.save!

t19 = Track.new({title: "Big Poppa", user_id: u4.id, genre: 'rap', length: 249})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/big_poppa.jpg')
t19.photo.attach(io: file, filename: 'big_poppa.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/big_poppa.mp3')
t19.mp3_file.attach(io: track, filename: 'big_poppa.mp3')
t19.save!

t20 = Track.new({title: "Gimme Shelter", user_id: u4.id, genre: 'classic_rock', length: 270})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/gimme_shelter.jpg')
t20.photo.attach(io: file, filename: 'gimme_shelter.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/gimme_shelter.mp3')
t20.mp3_file.attach(io: track, filename: 'gimme_shelter.mp3')
t20.save!

t21 = Track.new({title: "Wonderwall", user_id: u4.id, genre: 'alternative_rock', length: 261})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/wonderwall.jpg')
t21.photo.attach(io: file, filename: 'wonderwall.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/wonderwall.mp3')
t21.mp3_file.attach(io: track, filename: 'wonderwall.mp3')
t21.save!

t22 = Track.new({title: "Love Song", user_id: u5.id, genre: 'pop', length: 236})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/love_song.jpg')
t22.photo.attach(io: file, filename: 'love_song.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/love_song.mp3')
t22.mp3_file.attach(io: track, filename: 'love_song.mp3')
t22.save!

t23 = Track.new({title: "No Role Modelz", user_id: u5.id, genre: 'rap', length: 293})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/j.cole.jpg')
t23.photo.attach(io: file, filename: 'j.cole.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/no_role_modelz.mp3')
t23.mp3_file.attach(io: track, filename: 'no_role_modelz.mp3')
t23.save!

t24 = Track.new({title: "Girl Like You", user_id: u5.id, genre: 'pop', length: 233})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/girl_like_you.jpg')
t24.photo.attach(io: file, filename: 'girl_like_you.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/girl_like_you.mp3')
t24.mp3_file.attach(io: track, filename: 'girl_like_you.mp3')
t24.save!

t25 = Track.new({title: "Levels", user_id: u5.id, genre: 'techno', length: 333})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/wake_me_up.jpg')
t25.photo.attach(io: file, filename: 'wake_me_up.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/levels.mp3')
t25.mp3_file.attach(io: track, filename: 'levels.mp3')
t25.save!

t26 = Track.new({title: "Radioactive", user_id: u6.id, genre: 'alternative_rock', length: 187})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/radioactive.jpg')
t26.photo.attach(io: file, filename: 'radioactive.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/radioactive.mp3')
t26.mp3_file.attach(io: track, filename: 'radioactive.mp3')
t26.save!

t27 = Track.new({title: "Ride of the Valykries", user_id: u6.id, genre: 'classical', length: 300})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/valykries.jpg')
t27.photo.attach(io: file, filename: 'valykries.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/ride_of_the_valykries.mp3')
t27.mp3_file.attach(io: track, filename: 'ride_of_the_valykries.mp3')
t27.save!

t28 = Track.new({title: "Uptown Funk", user_id: u6.id, genre: 'pop', length: 271})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/uptown_funk.jpg')
t28.photo.attach(io: file, filename: 'uptown_funk.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/uptown_funk.mp3')
t28.mp3_file.attach(io: track, filename: 'uptown_funk.mp3')
t28.save!

t29 = Track.new({title: "Too Good", user_id: u6.id, genre: 'rap', length: 265})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/views.jpg')
t29.photo.attach(io: file, filename: 'views.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/too_good.mp3')
t29.mp3_file.attach(io: track, filename: 'too_good.mp3')
t29.save!

t30 = Track.new({title: "Clair De Lune", user_id: u7.id, genre: 'classical', length: 302})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/debussy.jpg')
t30.photo.attach(io: file, filename: 'debussy.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/clair_de_lune.mp3')
t30.mp3_file.attach(io: track, filename: 'clair_de_lune.mp3')
t30.save!

t31 = Track.new({title: "Runaway", user_id: u6.id, genre: 'techno', length: 227})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/runaway.jpg')
t31.photo.attach(io: file, filename: 'runaway.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/Runaway.mp3')
t31.mp3_file.attach(io: track, filename: 'Runaway.mp3')
t31.save!

t32 = Track.new({title: "Sound and Color", user_id: u7.id, genre: 'alternative_rock', length: 180})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/sound_and_color.jpg')
t32.photo.attach(io: file, filename: 'sound_and_color.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/sound_and_color.mp3')
t32.mp3_file.attach(io: track, filename: 'sound_and_color.mp3')
t32.save!

t33 = Track.new({title: "The Blue Danube Waltz", user_id: u7.id, genre: 'classical', length: 235})
file = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/blue_waltz.jpg')
t33.photo.attach(io: file, filename: 'blue_waltz.jpg')
track = EzDownload.open('https://s3.amazonaws.com/notefloat-dev/blue_danube_waltz.mp3')
t33.mp3_file.attach(io: track, filename: 'blue_danube_waltz.mp3')
t33.save!

#Comments 

c1 = Comment.new({body: "absolute fire", track_id: t1.id, user_id: u1.id})
c2 = Comment.new({body: "amazing", track_id: t1.id, user_id: u2.id})
c3 = Comment.new({body: "better than music of today", track_id: t1.id, user_id: u3.id})
c4 = Comment.new({body: "I remember seeing them live", track_id: t1.id, user_id: u4.id})
c5 = Comment.new({body: "WOOOOOW", track_id: t1.id, user_id: u5.id})

c6 = Comment.new({body: "absolute fire", track_id: t2.id, user_id: u6.id})
c7 = Comment.new({body: "amazing", track_id: t2.id, user_id: u7.id})
c8 = Comment.new({body: "better than music of today", track_id: t2.id, user_id: u8.id})
c9 = Comment.new({body: "I remember seeing them live", track_id: t2.id, user_id: u9.id})
c10 = Comment.new({body: "WOOOOOW", track_id: t2.id, user_id: u10.id}) 