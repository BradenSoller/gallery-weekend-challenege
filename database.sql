CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
  ('images/ozzy.JPG', 'ozzy', 'Photo of my dog Ozzy enjoying the couch'),
    ('images/Matt.jpg', 'northern lights', 'beautiful picture I took when i went to my friends cabin a week after he passed away '),
      ('images/kevo.JPG', 'me & kevo', 'picture 2 years back with a ggood friend of mine'),
        ('images/timberwolves.jpg','timberwolves', 'the seats we had at the game a few days ago !'),
          ('images/more-friends.PNG', 'more friends', 'picture of me and my friends at my friends 20th birthday'),
          ('images/friends.PNG', 'even more friends', 'picture of me and friends at a timberwolves game');