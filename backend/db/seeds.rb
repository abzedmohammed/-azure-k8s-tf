# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

movie = Movie.create(title: "The Lord of the Rings", poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.", starring: "[Sean Bean, Sean Astin, Orlando Bloom]", genre: "sci-fi", "runtime": "2:30:00", "rating": 3, "rated": "18+", release_date: "2001-04-22")

movie2 = Movie.create(title: "The Incredibles", poster: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AB48117EA822A2A545F91AA4DCA6B387B604B4FC592CFCB6760B9CF13377D30B/scale?width=1200&aspectRatio=1.78&format=jpeg", description: "Known to the world as Supers Mr. Incredible and Elastigirl, Bob Parr and his wife Helen were among the world's greatest crime fighters and saving lives", starring: "[Holly Hunter,  Samuel L. Jackson, Jason Lee]", genre: "animation", "runtime": "1:40:00", "rating": 3.5, "rated": "13+", release_date: "2004-10-24")

movie3 = Movie.create(title: "Curse of Chucky", poster: "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=612&h=306&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2013%2F10%2Fchucky.jpg", description: "Nica's sister, brother-in-law and their daughter Alice visit her after her mother's death. However, horror strikes when Nica realises that the doll Alice plays with is possessed.", starring: "[Fiona Dourif, Brad Dourif, Jennifer Tilly]", genre: "horror", "runtime": "1:50:00", "rating": 4, "rated": "16+", release_date: "2013-08-02")

