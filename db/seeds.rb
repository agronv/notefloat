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


c1 = Comment.create({body: "absolute fire", track_id: t1.id, user_id: u1.id})
c2 = Comment.create({body: "amazing", track_id: t1.id, user_id: u2.id})
c3 = Comment.create({body: "better than music of today", track_id: t1.id, user_id: u3.id})
c4 = Comment.create({body: "I remember seeing them live", track_id: t1.id, user_id: u4.id, parent_comment_id: c3.id})
c5 = Comment.create({body: "WOOOOOW", track_id: t1.id, user_id: u5.id})
c6 = Comment.create({body: "my grandma loves this song", track_id: t1.id, user_id: u6.id})
c7 = Comment.create({body: "same", track_id: t1.id, user_id: u7.id, parent_comment_id: c6.id})
c8 = Comment.create({body: "nevermind that was my grandpa", track_id: t1.id, user_id: u7.id, parent_comment_id: c7.id})
c9 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t1.id, user_id: u8.id, parent_comment_id: c3.id})
c10 = Comment.create({body: "who else is listen to this at 3 am", track_id: t1.id, user_id: u9.id})

c11 = Comment.create({body: "absolute fire", track_id: t2.id, user_id: u1.id})
c12 = Comment.create({body: "amazing", track_id: t2.id, user_id: u2.id})
c13 = Comment.create({body: "better than music of today", track_id: t2.id, user_id: u3.id})
c14 = Comment.create({body: "I remember seeing them live", track_id: t2.id, user_id: u4.id, parent_comment_id: c13.id})
c15 = Comment.create({body: "WOOOOOW", track_id: t2.id, user_id: u5.id})
c16 = Comment.create({body: "my grandma loves this song", track_id: t2.id, user_id: u6.id})
c17 = Comment.create({body: "same", track_id: t2.id, user_id: u7.id, parent_comment_id: c16.id})
c18 = Comment.create({body: "nevermind that was my grandpa", track_id: t2.id, user_id: u8.id, parent_comment_id: c17.id})
c19 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t2.id, user_id: u9.id, parent_comment_id: c13.id})
c20 = Comment.create({body: "who else is listen to this at 3 am", track_id: t2.id, user_id: u10.id})

c21 = Comment.create({body: "absolute fire", track_id: t3.id, user_id: u1.id})
c22 = Comment.create({body: "amazing", track_id: t3.id, user_id: u2.id})
c23 = Comment.create({body: "better than music of today", track_id: t3.id, user_id: u3.id})
c24 = Comment.create({body: "I remember seeing them live", track_id: t3.id, user_id: u4.id, parent_comment_id: c23.id})
c25 = Comment.create({body: "WOOOOOW", track_id: t3.id, user_id: u5.id})
c26 = Comment.create({body: "my grandma loves this song", track_id: t3.id, user_id: u6.id})
c27 = Comment.create({body: "same", track_id: t3.id, user_id: u7.id, parent_comment_id: c26.id})
c28 = Comment.create({body: "nevermind that was my grandpa", track_id: t3.id, user_id: u8.id, parent_comment_id: c27.id})
c29 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t3.id, user_id: u9.id, parent_comment_id: c23.id})
c30 = Comment.create({body: "who else is listen to this at 3 am", track_id: t3.id, user_id: u10.id})

c31 = Comment.create({body: "absolute fire", track_id: t4.id, user_id: u1.id})
c32 = Comment.create({body: "amazing", track_id: t4.id, user_id: u2.id})
c33 = Comment.create({body: "better than music of today", track_id: t4.id, user_id: u3.id})
c34 = Comment.create({body: "I remember seeing them live", track_id: t4.id, user_id: u4.id, parent_comment_id: c33.id})
c35 = Comment.create({body: "WOOOOOW", track_id: t4.id, user_id: u5.id})
c36 = Comment.create({body: "my grandma loves this song", track_id: t4.id, user_id: u6.id})
c37 = Comment.create({body: "same", track_id: t4.id, user_id: u7.id, parent_comment_id: c36.id})
c38 = Comment.create({body: "nevermind that was my grandpa", track_id: t4.id, user_id: u8.id, parent_comment_id: c37.id})
c39 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t4.id, user_id: u9.id, parent_comment_id: c33.id})
c40 = Comment.create({body: "who else is listen to this at 3 am", track_id: t4.id, user_id: u10.id})

c41 = Comment.create({body: "absolute fire", track_id: t5.id, user_id: u1.id})
c42 = Comment.create({body: "amazing", track_id: t5.id, user_id: u2.id})
c43 = Comment.create({body: "better than music of today", track_id: t5.id, user_id: u3.id})
c44 = Comment.create({body: "I remember seeing them live", track_id: t5.id, user_id: u4.id, parent_comment_id: c43.id})
c45 = Comment.create({body: "WOOOOOW", track_id: t5.id, user_id: u5.id})
c46 = Comment.create({body: "my grandma loves this song", track_id: t5.id, user_id: u6.id})
c47 = Comment.create({body: "same", track_id: t5.id, user_id: u7.id, parent_comment_id: c46.id})
c48 = Comment.create({body: "nevermind that was my grandpa", track_id: t5.id, user_id: u8.id, parent_comment_id: c47.id})
c49 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t5.id, user_id: u9.id, parent_comment_id: c43.id})
c50 = Comment.create({body: "who else is listen to this at 3 am", track_id: t5.id, user_id: u10.id})

c51 = Comment.create({body: "absolute fire", track_id: t6.id, user_id: u1.id})
c52 = Comment.create({body: "amazing", track_id: t6.id, user_id: u2.id})
c53 = Comment.create({body: "better than music of today", track_id: t6.id, user_id: u3.id})
c54 = Comment.create({body: "I remember seeing them live", track_id: t6.id, user_id: u4.id, parent_comment_id: c53.id})
c55 = Comment.create({body: "WOOOOOW", track_id: t6.id, user_id: u5.id})
c56 = Comment.create({body: "my grandma loves this song", track_id: t6.id, user_id: u6.id})
c57 = Comment.create({body: "same", track_id: t6.id, user_id: u7.id, parent_comment_id: c56.id})
c58 = Comment.create({body: "nevermind that was my grandpa", track_id: t6.id, user_id: u8.id, parent_comment_id: c57.id})
c59 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t6.id, user_id: u9.id, parent_comment_id: c53.id})
c60 = Comment.create({body: "who else is listen to this at 3 am", track_id: t6.id, user_id: u10.id})

c61 = Comment.create({body: "absolute fire", track_id: t7.id, user_id: u1.id})
c62 = Comment.create({body: "amazing", track_id: t7.id, user_id: u2.id})
c63 = Comment.create({body: "better than music of today", track_id: t7.id, user_id: u3.id})
c64 = Comment.create({body: "I remember seeing them live", track_id: t7.id, user_id: u4.id, parent_comment_id: c63.id})
c65 = Comment.create({body: "WOOOOOW", track_id: t7.id, user_id: u5.id})
c66 = Comment.create({body: "my grandma loves this song", track_id: t7.id, user_id: u6.id})
c67 = Comment.create({body: "same", track_id: t7.id, user_id: u7.id, parent_comment_id: c66.id})
c68 = Comment.create({body: "nevermind that was my grandpa", track_id: t7.id, user_id: u8.id, parent_comment_id: c67.id})
c69 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t7.id, user_id: u9.id, parent_comment_id: c63.id})
c70 = Comment.create({body: "who else is listen to this at 3 am", track_id: t7.id, user_id: u10.id})

c71 = Comment.create({body: "absolute fire", track_id: t8.id, user_id: u1.id})
c72 = Comment.create({body: "amazing", track_id: t8.id, user_id: u2.id})
c73 = Comment.create({body: "better than music of today", track_id: t8.id, user_id: u3.id})
c74 = Comment.create({body: "I remember seeing them live", track_id: t8.id, user_id: u4.id, parent_comment_id: c73.id})
c75 = Comment.create({body: "WOOOOOW", track_id: t8.id, user_id: u5.id})
c76 = Comment.create({body: "my grandma loves this song", track_id: t8.id, user_id: u6.id})
c77 = Comment.create({body: "same", track_id: t8.id, user_id: u7.id, parent_comment_id: c76.id})
c78 = Comment.create({body: "nevermind that was my grandpa", track_id: t8.id, user_id: u8.id, parent_comment_id: c77.id})
c79 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t8.id, user_id: u9.id, parent_comment_id: c73.id})
c80 = Comment.create({body: "who else is listen to this at 3 am", track_id: t8.id, user_id: u10.id})

# c81 = Comment.create({body: "absolute fire", track_id: t8.id, user_id: u1.id})
# c82 = Comment.create({body: "amazing", track_id: t8.id, user_id: u2.id})
# c83 = Comment.create({body: "better than music of today", track_id: t8.id, user_id: u3.id})
# c84 = Comment.create({body: "I remember seeing them live", track_id: t8.id, user_id: u4.id, parent_comment_id: c83.id})
# c85 = Comment.create({body: "WOOOOOW", track_id: t8.id, user_id: u5.id})
# c86 = Comment.create({body: "my grandma loves this song", track_id: t8.id, user_id: u6.id})
# c87 = Comment.create({body: "same", track_id: t8.id, user_id: u7.id, parent_comment_id: c86.id})
# c88 = Comment.create({body: "nevermind that was my grandpa", track_id: t8.id, user_id: u8.id, parent_comment_id: c87.id})
# c89 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t8.id, user_id: u9.id, parent_comment_id: c83.id})
# c90 = Comment.create({body: "who else is listen to this at 3 am", track_id: t8.id, user_id: u10.id})

c91 = Comment.create({body: "absolute fire", track_id: t9.id, user_id: u1.id})
c92 = Comment.create({body: "amazing", track_id: t9.id, user_id: u2.id})
c93 = Comment.create({body: "better than music of today", track_id: t9.id, user_id: u3.id})
c94 = Comment.create({body: "I remember seeing them live", track_id: t9.id, user_id: u4.id, parent_comment_id: c93.id})
c95 = Comment.create({body: "WOOOOOW", track_id: t9.id, user_id: u5.id})
c96 = Comment.create({body: "my grandma loves this song", track_id: t9.id, user_id: u6.id})
c97 = Comment.create({body: "same", track_id: t9.id, user_id: u7.id, parent_comment_id: c96.id})
c98 = Comment.create({body: "nevermind that was my grandpa", track_id: t9.id, user_id: u8.id, parent_comment_id: c97.id})
c99 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t9.id, user_id: u9.id, parent_comment_id: c93.id})
c100 = Comment.create({body: "who else is listen to this at 3 am", track_id: t9.id, user_id: u10.id})

c101 = Comment.create({body: "absolute fire", track_id: t10.id, user_id: u1.id})
c102 = Comment.create({body: "amazing", track_id: t10.id, user_id: u2.id})
c103 = Comment.create({body: "better than music of today", track_id: t10.id, user_id: u3.id})
c104 = Comment.create({body: "I remember seeing them live", track_id: t10.id, user_id: u4.id, parent_comment_id: c103.id})
c105 = Comment.create({body: "WOOOOOW", track_id: t10.id, user_id: u5.id})
c106 = Comment.create({body: "my grandma loves this song", track_id: t10.id, user_id: u6.id})
c107 = Comment.create({body: "same", track_id: t10.id, user_id: u7.id, parent_comment_id: c106.id})
c108 = Comment.create({body: "nevermind that was my grandpa", track_id: t10.id, user_id: u8.id, parent_comment_id: c107.id})
c109 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t10.id, user_id: u9.id, parent_comment_id: c103.id})
c110 = Comment.create({body: "who else is listen to this at 3 am", track_id: t10.id, user_id: u10.id})

c111 = Comment.create({body: "absolute fire", track_id: t11.id, user_id: u1.id})
c112 = Comment.create({body: "amazing", track_id: t11.id, user_id: u2.id})
c113 = Comment.create({body: "better than music of today", track_id: t11.id, user_id: u3.id})
c114 = Comment.create({body: "I remember seeing them live", track_id: t11.id, user_id: u4.id, parent_comment_id: c113.id})
c115 = Comment.create({body: "WOOOOOW", track_id: t11.id, user_id: u5.id})
c116 = Comment.create({body: "my grandma loves this song", track_id: t11.id, user_id: u6.id})
c117 = Comment.create({body: "same", track_id: t11.id, user_id: u7.id, parent_comment_id: c116.id})
c118 = Comment.create({body: "nevermind that was my grandpa", track_id: t11.id, user_id: u8.id, parent_comment_id: c117.id})
c119 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t11.id, user_id: u9.id, parent_comment_id: c113.id})
c120 = Comment.create({body: "who else is listen to this at 3 am", track_id: t11.id, user_id: u10.id})

c121 = Comment.create({body: "absolute fire", track_id: t12.id, user_id: u1.id})
c122 = Comment.create({body: "amazing", track_id: t12.id, user_id: u2.id})
c123 = Comment.create({body: "better than music of today", track_id: t12.id, user_id: u3.id})
c124 = Comment.create({body: "I remember seeing them live", track_id: t12.id, user_id: u4.id, parent_comment_id: c123.id})
c125 = Comment.create({body: "WOOOOOW", track_id: t12.id, user_id: u5.id})
c126 = Comment.create({body: "my grandma loves this song", track_id: t12.id, user_id: u6.id})
c127 = Comment.create({body: "same", track_id: t12.id, user_id: u7.id, parent_comment_id: c126.id})
c128 = Comment.create({body: "nevermind that was my grandpa", track_id: t12.id, user_id: u8.id, parent_comment_id: c127.id})
c129 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t12.id, user_id: u9.id, parent_comment_id: c123.id})
c130 = Comment.create({body: "who else is listen to this at 3 am", track_id: t12.id, user_id: u10.id})

c131 = Comment.create({body: "absolute fire", track_id: t13.id, user_id: u1.id})
c132 = Comment.create({body: "amazing", track_id: t13.id, user_id: u2.id})
c133 = Comment.create({body: "better than music of today", track_id: t13.id, user_id: u3.id})
c134 = Comment.create({body: "I remember seeing them live", track_id: t13.id, user_id: u4.id, parent_comment_id: c133.id})
c135 = Comment.create({body: "WOOOOOW", track_id: t13.id, user_id: u5.id})
c136 = Comment.create({body: "my grandma loves this song", track_id: t13.id, user_id: u6.id})
c137 = Comment.create({body: "same", track_id: t13.id, user_id: u7.id, parent_comment_id: c136.id})
c138 = Comment.create({body: "nevermind that was my grandpa", track_id: t13.id, user_id: u8.id, parent_comment_id: c137.id})
c139 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t13.id, user_id: u9.id, parent_comment_id: c133.id})
c140 = Comment.create({body: "who else is listen to this at 3 am", track_id: t13.id, user_id: u10.id})

c141 = Comment.create({body: "absolute fire", track_id: t14.id, user_id: u1.id})
c142 = Comment.create({body: "amazing", track_id: t14.id, user_id: u2.id})
c143 = Comment.create({body: "better than music of today", track_id: t14.id, user_id: u3.id})
c144 = Comment.create({body: "I remember seeing them live", track_id: t14.id, user_id: u4.id, parent_comment_id: c143.id})
c145 = Comment.create({body: "WOOOOOW", track_id: t14.id, user_id: u5.id})
c146 = Comment.create({body: "my grandma loves this song", track_id: t14.id, user_id: u6.id})
c147 = Comment.create({body: "same", track_id: t14.id, user_id: u7.id, parent_comment_id: c146.id})
c148 = Comment.create({body: "nevermind that was my grandpa", track_id: t14.id, user_id: u8.id, parent_comment_id: c147.id})
c149 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t14.id, user_id: u9.id, parent_comment_id: c143.id})
c150 = Comment.create({body: "who else is listen to this at 3 am", track_id: t14.id, user_id: u10.id})

c151 = Comment.create({body: "absolute fire", track_id: t15.id, user_id: u1.id})
c152 = Comment.create({body: "amazing", track_id: t15.id, user_id: u2.id})
c153 = Comment.create({body: "better than music of today", track_id: t15.id, user_id: u3.id})
c154 = Comment.create({body: "I remember seeing them live", track_id: t15.id, user_id: u4.id, parent_comment_id: c153.id})
c155 = Comment.create({body: "WOOOOOW", track_id: t15.id, user_id: u5.id})
c156 = Comment.create({body: "my grandma loves this song", track_id: t15.id, user_id: u6.id})
c157 = Comment.create({body: "same", track_id: t15.id, user_id: u7.id, parent_comment_id: c156.id})
c158 = Comment.create({body: "nevermind that was my grandpa", track_id: t15.id, user_id: u8.id, parent_comment_id: c157.id})
c159 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t15.id, user_id: u9.id, parent_comment_id: c153.id})
c160 = Comment.create({body: "who else is listen to this at 3 am", track_id: t15.id, user_id: u10.id})

c161 = Comment.create({body: "absolute fire", track_id: t16.id, user_id: u1.id})
c162 = Comment.create({body: "amazing", track_id: t16.id, user_id: u2.id})
c163 = Comment.create({body: "better than music of today", track_id: t16.id, user_id: u3.id})
c164 = Comment.create({body: "I remember seeing them live", track_id: t16.id, user_id: u4.id, parent_comment_id: c163.id})
c165 = Comment.create({body: "WOOOOOW", track_id: t16.id, user_id: u5.id})
c166 = Comment.create({body: "my grandma loves this song", track_id: t16.id, user_id: u6.id})
c167 = Comment.create({body: "same", track_id: t16.id, user_id: u7.id, parent_comment_id: c166.id})
c168 = Comment.create({body: "nevermind that was my grandpa", track_id: t16.id, user_id: u8.id, parent_comment_id: c167.id})
c169 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t16.id, user_id: u9.id, parent_comment_id: c163.id})
c170 = Comment.create({body: "who else is listen to this at 3 am", track_id: t16.id, user_id: u10.id})

c171 = Comment.create({body: "absolute fire", track_id: t17.id, user_id: u1.id})
c172 = Comment.create({body: "amazing", track_id: t17.id, user_id: u2.id})
c173 = Comment.create({body: "better than music of today", track_id: t17.id, user_id: u3.id})
c174 = Comment.create({body: "I remember seeing them live", track_id: t17.id, user_id: u4.id, parent_comment_id: c173.id})
c175 = Comment.create({body: "WOOOOOW", track_id: t17.id, user_id: u5.id})
c176 = Comment.create({body: "my grandma loves this song", track_id: t17.id, user_id: u6.id})
c177 = Comment.create({body: "same", track_id: t17.id, user_id: u7.id, parent_comment_id: c176.id})
c178 = Comment.create({body: "nevermind that was my grandpa", track_id: t17.id, user_id: u8.id, parent_comment_id: c177.id})
c179 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t17.id, user_id: u9.id, parent_comment_id: c173.id})
c180 = Comment.create({body: "who else is listen to this at 3 am", track_id: t17.id, user_id: u10.id})

c181 = Comment.create({body: "absolute fire", track_id: t18.id, user_id: u1.id})
c182 = Comment.create({body: "amazing", track_id: t18.id, user_id: u2.id})
c183 = Comment.create({body: "better than music of today", track_id: t18.id, user_id: u3.id})
c184 = Comment.create({body: "I remember seeing them live", track_id: t18.id, user_id: u4.id, parent_comment_id: c183.id})
c185 = Comment.create({body: "WOOOOOW", track_id: t18.id, user_id: u5.id})
c186 = Comment.create({body: "my grandma loves this song", track_id: t18.id, user_id: u6.id})
c187 = Comment.create({body: "same", track_id: t18.id, user_id: u7.id, parent_comment_id: c186.id})
c188 = Comment.create({body: "nevermind that was my grandpa", track_id: t18.id, user_id: u8.id, parent_comment_id: c187.id})
c189 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t18.id, user_id: u9.id, parent_comment_id: c183.id})
c190 = Comment.create({body: "who else is listen to this at 3 am", track_id: t18.id, user_id: u10.id})

c191 = Comment.create({body: "absolute fire", track_id: t19.id, user_id: u1.id})
c192 = Comment.create({body: "amazing", track_id: t19.id, user_id: u2.id})
c193 = Comment.create({body: "better than music of today", track_id: t19.id, user_id: u3.id})
c194 = Comment.create({body: "I remember seeing them live", track_id: t19.id, user_id: u4.id, parent_comment_id: c193.id})
c195 = Comment.create({body: "WOOOOOW", track_id: t19.id, user_id: u5.id})
c196 = Comment.create({body: "my grandma loves this song", track_id: t19.id, user_id: u6.id})
c197 = Comment.create({body: "same", track_id: t19.id, user_id: u7.id, parent_comment_id: c196.id})
c198 = Comment.create({body: "nevermind that was my grandpa", track_id: t19.id, user_id: u8.id, parent_comment_id: c197.id})
c199 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t19.id, user_id: u9.id, parent_comment_id: c193.id})
c200 = Comment.create({body: "who else is listen to this at 3 am", track_id: t19.id, user_id: u10.id})

c201 = Comment.create({body: "absolute fire", track_id: t20.id, user_id: u1.id})
c202 = Comment.create({body: "amazing", track_id: t20.id, user_id: u2.id})
c203 = Comment.create({body: "better than music of today", track_id: t20.id, user_id: u3.id})
c204 = Comment.create({body: "I remember seeing them live", track_id: t20.id, user_id: u4.id, parent_comment_id: c203.id})
c205 = Comment.create({body: "WOOOOOW", track_id: t20.id, user_id: u5.id})
c206 = Comment.create({body: "my grandma loves this song", track_id: t20.id, user_id: u6.id})
c207 = Comment.create({body: "same", track_id: t20.id, user_id: u7.id, parent_comment_id: c206.id})
c208 = Comment.create({body: "nevermind that was my grandpa", track_id: t20.id, user_id: u8.id, parent_comment_id: c207.id})
c209 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t20.id, user_id: u9.id, parent_comment_id: c203.id})
c210 = Comment.create({body: "who else is listen to this at 3 am", track_id: t20.id, user_id: u10.id})

c211 = Comment.create({body: "absolute fire", track_id: t21.id, user_id: u1.id})
c212 = Comment.create({body: "amazing", track_id: t21.id, user_id: u2.id})
c213 = Comment.create({body: "better than music of today", track_id: t21.id, user_id: u3.id})
c214 = Comment.create({body: "I remember seeing them live", track_id: t21.id, user_id: u4.id, parent_comment_id: c213.id})
c215 = Comment.create({body: "WOOOOOW", track_id: t21.id, user_id: u5.id})
c216 = Comment.create({body: "my grandma loves this song", track_id: t21.id, user_id: u6.id})
c217 = Comment.create({body: "same", track_id: t21.id, user_id: u7.id, parent_comment_id: c216.id})
c218 = Comment.create({body: "nevermind that was my grandpa", track_id: t21.id, user_id: u8.id, parent_comment_id: c217.id})
c219 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t21.id, user_id: u9.id, parent_comment_id: c213.id})
c220 = Comment.create({body: "who else is listen to this at 3 am", track_id: t21.id, user_id: u10.id})

c221 = Comment.create({body: "absolute fire", track_id: t22.id, user_id: u1.id})
c222 = Comment.create({body: "amazing", track_id: t22.id, user_id: u2.id})
c223 = Comment.create({body: "better than music of today", track_id: t22.id, user_id: u3.id})
c224 = Comment.create({body: "I remember seeing them live", track_id: t22.id, user_id: u4.id, parent_comment_id: c223.id})
c225 = Comment.create({body: "WOOOOOW", track_id: t22.id, user_id: u5.id})
c226 = Comment.create({body: "my grandma loves this song", track_id: t22.id, user_id: u6.id})
c227 = Comment.create({body: "same", track_id: t22.id, user_id: u7.id, parent_comment_id: c226.id})
c228 = Comment.create({body: "nevermind that was my grandpa", track_id: t22.id, user_id: u8.id, parent_comment_id: c227.id})
c229 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t22.id, user_id: u9.id, parent_comment_id: c223.id})
c230 = Comment.create({body: "who else is listen to this at 3 am", track_id: t22.id, user_id: u10.id})

c231 = Comment.create({body: "absolute fire", track_id: t23.id, user_id: u1.id})
c232 = Comment.create({body: "amazing", track_id: t23.id, user_id: u2.id})
c233 = Comment.create({body: "better than music of today", track_id: t23.id, user_id: u3.id})
c234 = Comment.create({body: "I remember seeing them live", track_id: t23.id, user_id: u4.id, parent_comment_id: c233.id})
c235 = Comment.create({body: "WOOOOOW", track_id: t23.id, user_id: u5.id})
c236 = Comment.create({body: "my grandma loves this song", track_id: t23.id, user_id: u6.id})
c237 = Comment.create({body: "same", track_id: t23.id, user_id: u7.id, parent_comment_id: c236.id})
c238 = Comment.create({body: "nevermind that was my grandpa", track_id: t23.id, user_id: u8.id, parent_comment_id: c237.id})
c239 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t23.id, user_id: u9.id, parent_comment_id: c233.id})
c240 = Comment.create({body: "who else is listen to this at 3 am", track_id: t23.id, user_id: u10.id})

c241 = Comment.create({body: "absolute fire", track_id: t24.id, user_id: u1.id})
c242 = Comment.create({body: "amazing", track_id: t24.id, user_id: u2.id})
c243 = Comment.create({body: "better than music of today", track_id: t24.id, user_id: u3.id})
c244 = Comment.create({body: "I remember seeing them live", track_id: t24.id, user_id: u4.id, parent_comment_id: c243.id})
c245 = Comment.create({body: "WOOOOOW", track_id: t24.id, user_id: u5.id})
c246 = Comment.create({body: "my grandma loves this song", track_id: t24.id, user_id: u6.id})
c247 = Comment.create({body: "same", track_id: t24.id, user_id: u7.id, parent_comment_id: c246.id})
c248 = Comment.create({body: "nevermind that was my grandpa", track_id: t24.id, user_id: u8.id, parent_comment_id: c247.id})
c249 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t24.id, user_id: u9.id, parent_comment_id: c243.id})
c250 = Comment.create({body: "who else is listen to this at 3 am", track_id: t24.id, user_id: u10.id})

c251 = Comment.create({body: "absolute fire", track_id: t25.id, user_id: u1.id})
c252 = Comment.create({body: "amazing", track_id: t25.id, user_id: u2.id})
c253 = Comment.create({body: "better than music of today", track_id: t25.id, user_id: u3.id})
c254 = Comment.create({body: "I remember seeing them live", track_id: t25.id, user_id: u4.id, parent_comment_id: c253.id})
c255 = Comment.create({body: "WOOOOOW", track_id: t25.id, user_id: u5.id})
c256 = Comment.create({body: "my grandma loves this song", track_id: t25.id, user_id: u6.id})
c257 = Comment.create({body: "same", track_id: t25.id, user_id: u7.id, parent_comment_id: c256.id})
c258 = Comment.create({body: "nevermind that was my grandpa", track_id: t25.id, user_id: u8.id, parent_comment_id: c257.id})
c259 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t25.id, user_id: u9.id, parent_comment_id: c253.id})
c260 = Comment.create({body: "who else is listen to this at 3 am", track_id: t25.id, user_id: u10.id})

c261 = Comment.create({body: "absolute fire", track_id: t26.id, user_id: u1.id})
c262 = Comment.create({body: "amazing", track_id: t26.id, user_id: u2.id})
c263 = Comment.create({body: "better than music of today", track_id: t26.id, user_id: u3.id})
c264 = Comment.create({body: "I remember seeing them live", track_id: t26.id, user_id: u4.id, parent_comment_id: c263.id})
c265 = Comment.create({body: "WOOOOOW", track_id: t26.id, user_id: u5.id})
c266 = Comment.create({body: "my grandma loves this song", track_id: t26.id, user_id: u6.id})
c267 = Comment.create({body: "same", track_id: t26.id, user_id: u7.id, parent_comment_id: c266.id})
c268 = Comment.create({body: "nevermind that was my grandpa", track_id: t26.id, user_id: u8.id, parent_comment_id: c267.id})
c269 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t26.id, user_id: u9.id, parent_comment_id: c263.id})
c270 = Comment.create({body: "who else is listen to this at 3 am", track_id: t26.id, user_id: u10.id})

c271 = Comment.create({body: "absolute fire", track_id: t27.id, user_id: u1.id})
c272 = Comment.create({body: "amazing", track_id: t27.id, user_id: u2.id})
c273 = Comment.create({body: "better than music of today", track_id: t27.id, user_id: u3.id})
c274 = Comment.create({body: "I remember seeing them live", track_id: t27.id, user_id: u4.id, parent_comment_id: c273.id})
c275 = Comment.create({body: "WOOOOOW", track_id: t27.id, user_id: u5.id})
c276 = Comment.create({body: "my grandma loves this song", track_id: t27.id, user_id: u6.id})
c277 = Comment.create({body: "same", track_id: t27.id, user_id: u7.id, parent_comment_id: c276.id})
c278 = Comment.create({body: "nevermind that was my grandpa", track_id: t27.id, user_id: u8.id, parent_comment_id: c277.id})
c279 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t27.id, user_id: u9.id, parent_comment_id: c273.id})
c280 = Comment.create({body: "who else is listen to this at 3 am", track_id: t27.id, user_id: u10.id})

c281 = Comment.create({body: "absolute fire", track_id: t28.id, user_id: u1.id})
c282 = Comment.create({body: "amazing", track_id: t28.id, user_id: u2.id})
c283 = Comment.create({body: "better than music of today", track_id: t28.id, user_id: u3.id})
c284 = Comment.create({body: "I remember seeing them live", track_id: t28.id, user_id: u4.id, parent_comment_id: c283.id})
c285 = Comment.create({body: "WOOOOOW", track_id: t28.id, user_id: u5.id})
c286 = Comment.create({body: "my grandma loves this song", track_id: t28.id, user_id: u6.id})
c287 = Comment.create({body: "same", track_id: t28.id, user_id: u7.id, parent_comment_id: c286.id})
c288 = Comment.create({body: "nevermind that was my grandpa", track_id: t28.id, user_id: u8.id, parent_comment_id: c287.id})
c289 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t28.id, user_id: u9.id, parent_comment_id: c283.id})
c290 = Comment.create({body: "who else is listen to this at 3 am", track_id: t28.id, user_id: u10.id})

c291 = Comment.create({body: "absolute fire", track_id: t29.id, user_id: u1.id})
c292 = Comment.create({body: "amazing", track_id: t29.id, user_id: u2.id})
c293 = Comment.create({body: "better than music of today", track_id: t29.id, user_id: u3.id})
c294 = Comment.create({body: "I remember seeing them live", track_id: t29.id, user_id: u4.id, parent_comment_id: c293.id})
c295 = Comment.create({body: "WOOOOOW", track_id: t29.id, user_id: u5.id})
c296 = Comment.create({body: "my grandma loves this song", track_id: t29.id, user_id: u6.id})
c297 = Comment.create({body: "same", track_id: t29.id, user_id: u7.id, parent_comment_id: c296.id})
c298 = Comment.create({body: "nevermind that was my grandpa", track_id: t29.id, user_id: u8.id, parent_comment_id: c297.id})
c299 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t29.id, user_id: u9.id, parent_comment_id: c293.id})
c300 = Comment.create({body: "who else is listen to this at 3 am", track_id: t29.id, user_id: u10.id})

c301 = Comment.create({body: "absolute fire", track_id: t30.id, user_id: u1.id})
c302 = Comment.create({body: "amazing", track_id: t30.id, user_id: u2.id})
c303 = Comment.create({body: "better than music of today", track_id: t30.id, user_id: u3.id})
c304 = Comment.create({body: "I remember seeing them live", track_id: t30.id, user_id: u4.id, parent_comment_id: c303.id})
c305 = Comment.create({body: "WOOOOOW", track_id: t30.id, user_id: u5.id})
c306 = Comment.create({body: "my grandma loves this song", track_id: t30.id, user_id: u6.id})
c307 = Comment.create({body: "same", track_id: t30.id, user_id: u7.id, parent_comment_id: c306.id})
c308 = Comment.create({body: "nevermind that was my grandpa", track_id: t30.id, user_id: u8.id, parent_comment_id: c307.id})
c309 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t30.id, user_id: u9.id, parent_comment_id: c303.id})
c310 = Comment.create({body: "who else is listen to this at 3 am", track_id: t30.id, user_id: u10.id})

c311 = Comment.create({body: "absolute fire", track_id: t31.id, user_id: u1.id})
c312 = Comment.create({body: "amazing", track_id: t31.id, user_id: u2.id})
c313 = Comment.create({body: "better than music of today", track_id: t31.id, user_id: u3.id})
c314 = Comment.create({body: "I remember seeing them live", track_id: t31.id, user_id: u4.id, parent_comment_id: c313.id})
c315 = Comment.create({body: "WOOOOOW", track_id: t31.id, user_id: u5.id})
c316 = Comment.create({body: "my grandma loves this song", track_id: t31.id, user_id: u6.id})
c317 = Comment.create({body: "same", track_id: t31.id, user_id: u7.id, parent_comment_id: c316.id})
c318 = Comment.create({body: "nevermind that was my grandpa", track_id: t31.id, user_id: u8.id, parent_comment_id: c317.id})
c319 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t31.id, user_id: u9.id, parent_comment_id: c313.id})
c320 = Comment.create({body: "who else is listen to this at 3 am", track_id: t31.id, user_id: u10.id})

c321 = Comment.create({body: "absolute fire", track_id: t32.id, user_id: u1.id})
c322 = Comment.create({body: "amazing", track_id: t32.id, user_id: u2.id})
c323 = Comment.create({body: "better than music of today", track_id: t32.id, user_id: u3.id})
c324 = Comment.create({body: "I remember seeing them live", track_id: t32.id, user_id: u4.id, parent_comment_id: c323.id})
c325 = Comment.create({body: "WOOOOOW", track_id: t32.id, user_id: u5.id})
c326 = Comment.create({body: "my grandma loves this song", track_id: t32.id, user_id: u6.id})
c327 = Comment.create({body: "same", track_id: t32.id, user_id: u7.id, parent_comment_id: c326.id})
c328 = Comment.create({body: "nevermind that was my grandpa", track_id: t32.id, user_id: u8.id, parent_comment_id: c327.id})
c329 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t32.id, user_id: u9.id, parent_comment_id: c323.id})
c330 = Comment.create({body: "who else is listen to this at 3 am", track_id: t32.id, user_id: u10.id})

c331 = Comment.create({body: "absolute fire", track_id: t33.id, user_id: u1.id})
c332 = Comment.create({body: "amazing", track_id: t33.id, user_id: u2.id})
c333 = Comment.create({body: "better than music of today", track_id: t33.id, user_id: u3.id})
c334 = Comment.create({body: "I remember seeing them live", track_id: t33.id, user_id: u4.id, parent_comment_id: c333.id})
c335 = Comment.create({body: "WOOOOOW", track_id: t33.id, user_id: u5.id})
c336 = Comment.create({body: "my grandma loves this song", track_id: t33.id, user_id: u6.id})
c337 = Comment.create({body: "same", track_id: t33.id, user_id: u7.id, parent_comment_id: c336.id})
c338 = Comment.create({body: "nevermind that was my grandpa", track_id: t33.id, user_id: u8.id, parent_comment_id: c337.id})
c339 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t33.id, user_id: u9.id, parent_comment_id: c333.id})
c340 = Comment.create({body: "who else is listen to this at 3 am", track_id: t33.id, user_id: u10.id})

# c341 = Comment.create({body: "absolute fire", track_id: t34.id, user_id: u1.id})
# c342 = Comment.create({body: "amazing", track_id: t34.id, user_id: u2.id})
# c343 = Comment.create({body: "better than music of today", track_id: t34.id, user_id: u3.id})
# c344 = Comment.create({body: "I remember seeing them live", track_id: t34.id, user_id: u4.id, parent_comment_id: c343})
# c345 = Comment.create({body: "WOOOOOW", track_id: t34.id, user_id: u5.id})
# c346 = Comment.create({body: "my grandma loves this song", track_id: t34.id, user_id: u6.id})
# c347 = Comment.create({body: "same", track_id: t34.id, user_id: u7.id, parent_comment_id: c346})
# c348 = Comment.create({body: "nevermind that was my grandpa", track_id: t34.id, user_id: u8.id, parent_comment_id: c347})
# c349 = Comment.create({body: "please check out my music please, PLEASE!!!!", track_id: t34.id, user_id: u9.id, parent_comment_id: c343})
# c350 = Comment.create({body: "who else is listen to this at 3 am", track_id: t34.id, user_id: u10.id})